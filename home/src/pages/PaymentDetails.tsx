import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Button } from '../components/ui/button';
import { Download, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import jsPDF from 'jspdf';
import axios from 'axios';
import html2canvas from 'html2canvas';
import { getPaymentDetailsUrl } from '../data/config';
import { Alert, AlertDescription } from '../components/ui/alert';

interface EventRegistrationPaymentDetails {
    registrationNumber?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    paymentAmount?: number;
    paymentStatus?: string;
    phonePeTransactionId?: string;
    merchantTransactionId?: string;
    paymentInstrumentType?: string;
    cardType?: string;
    pgTransactionId?: string;
    pgAuthorizationCode?: string;
    arn?: string;
    brn?: string;
    bankTransactionId?: string;
    bankId?: string;
    utr?: string;
    createdAt: string;
    updatedAt: string;
}

export const PaymentDetails: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [paymentDetails, setPaymentDetails] = useState<EventRegistrationPaymentDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<'success' | 'error' | 'pending' | 'not_found'>('pending');

    useEffect(() => {
        const fetchPaymentDetails = async () => {
            const type = searchParams.get('type');
            const id = searchParams.get('id');

            if (!type || !id) {
                setError('Missing required parameters');
                setStatus('error');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await axios.get(`${getPaymentDetailsUrl}?type=${type}&id=${id}`);

                if (response.status !== 200) {
                    throw new Error('Failed to fetch payment details');
                }

                const data = response.data;

                if (!data || Object.keys(data).length === 0) {
                    setStatus('not_found');
                    setPaymentDetails(null);
                    setLoading(false);
                    return;
                }

                setPaymentDetails(data);

                // Update status based on payment status from API
                if (data.paymentStatus) {
                    if (data.paymentStatus === 'SUCCESS') {
                        setStatus('success');
                    } else if (data.paymentStatus === 'PENDING') {
                        setStatus('pending');
                    } else if (data.paymentStatus === 'FAILED') {
                        setStatus('error');
                    } else {
                        setStatus('error');
                    }
                } else {
                    setStatus('error');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                setStatus('error');
            } finally {
                setLoading(false);
            }
        };

        fetchPaymentDetails();
    }, [searchParams]);

    const downloadAsPdf = () => {
        const element = document.getElementById('event-payment-receipt');
        if (!element) return;

        // Create a clone of the element to avoid modifying the original
        const clone = element.cloneNode(true) as HTMLElement;

        // Add specific styles to ensure proper rendering
        clone.style.backgroundColor = 'white';
        clone.style.color = 'black';
        clone.style.width = '210mm'; // A4 width
        clone.style.padding = '20px';

        // Temporarily append the clone to the document
        document.body.appendChild(clone);

        html2canvas(clone, {
            scale: 2, // Higher scale for better quality
            logging: false,
            useCORS: true,
            backgroundColor: '#ffffff',
            onclone: (clonedDoc) => {
                // Ensure all text is black for better PDF readability
                const elements = clonedDoc.querySelectorAll('*');
                elements.forEach((el) => {
                    const element = el as HTMLElement;
                    element.style.color = 'black';
                    element.style.borderColor = 'black';
                });
            }
        }).then(canvas => {
            // Remove the clone from the document
            document.body.removeChild(clone);

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 295;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(`event-registration-receipt-${paymentDetails?.registrationNumber || 'receipt'}.pdf`);
        });
    };

    const getStatusIcon = () => {
        switch (status) {
            case 'success':
                return <CheckCircle className="h-6 w-6 text-green-600" />;
            case 'pending':
                return <Clock className="h-6 w-6 text-yellow-600" />;
            default:
                return <AlertCircle className="h-6 w-6 text-red-600" />;
        }
    };

    const getStatusColor = () => {
        switch (status) {
            case 'success':
                return 'text-green-600 bg-green-50 border-green-200';
            case 'pending':
                return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            default:
                return 'text-red-600 bg-red-50 border-red-200';
        }
    };

    const renderPaymentDetailsTable = () => {
        if (!paymentDetails) return null;

        return (
            <div id="event-payment-receipt" className="mt-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-800 mb-2">SOLANKI BROTHERS COUNCIL FOR OPEN AND DISTANCE LEARNING</h1>
                    <p className="text-lg text-gray-600 mb-4">Event Registration Payment Receipt</p>
                    <div className="border-t-2 border-b-2 border-blue-200 my-4 py-3">
                        <p className="text-base text-gray-700 font-medium">Receipt No: {paymentDetails.merchantTransactionId || 'N/A'}</p>
                        <p className="text-base text-gray-700 font-medium">Registration No: {paymentDetails.registrationNumber || 'N/A'}</p>
                        <p className="text-sm text-gray-600">Date: {new Date(paymentDetails.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">Participant Information</h2>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Full Name</p>
                                <p className="text-lg text-gray-900">{`${paymentDetails.firstName || ''} ${paymentDetails.lastName || ''}`.trim() || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Email Address</p>
                                <p className="text-gray-900">{paymentDetails.email || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Phone Number</p>
                                <p className="text-gray-900">{paymentDetails.phone || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Registration Number</p>
                                <p className="text-gray-900 font-semibold">{paymentDetails.registrationNumber || 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">Payment Information</h2>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Amount Paid</p>
                                <p className="text-2xl font-bold text-green-600">₹{paymentDetails.paymentAmount?.toLocaleString() || '0'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Payment Status</p>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
                                    {getStatusIcon()}
                                    {paymentDetails.paymentStatus}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Payment Method</p>
                                <p className="text-gray-900">{paymentDetails.paymentInstrumentType || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Transaction ID</p>
                                <p className="text-gray-900 font-mono text-sm">{paymentDetails.phonePeTransactionId || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transaction Details Table */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">Transaction Details</h2>
                    <Table className="border rounded-lg">
                        <TableHeader>
                            <TableRow className="bg-blue-50">
                                <TableHead className="font-semibold text-blue-800">Detail</TableHead>
                                <TableHead className="font-semibold text-blue-800">Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paymentDetails.merchantTransactionId && (
                                <TableRow>
                                    <TableCell className="font-medium">Merchant Transaction ID</TableCell>
                                    <TableCell className="font-mono text-sm">{paymentDetails.merchantTransactionId}</TableCell>
                                </TableRow>
                            )}
                            {paymentDetails.phonePeTransactionId && (
                                <TableRow>
                                    <TableCell className="font-medium">PhonePe Transaction ID</TableCell>
                                    <TableCell className="font-mono text-sm">{paymentDetails.phonePeTransactionId}</TableCell>
                                </TableRow>
                            )}
                            {paymentDetails.utr && (
                                <TableRow>
                                    <TableCell className="font-medium">UTR Number</TableCell>
                                    <TableCell className="font-mono text-sm">{paymentDetails.utr}</TableCell>
                                </TableRow>
                            )}
                            {paymentDetails.cardType && (
                                <TableRow>
                                    <TableCell className="font-medium">Card Type</TableCell>
                                    <TableCell>{paymentDetails.cardType}</TableCell>
                                </TableRow>
                            )}
                            {paymentDetails.bankId && (
                                <TableRow>
                                    <TableCell className="font-medium">Bank ID</TableCell>
                                    <TableCell>{paymentDetails.bankId}</TableCell>
                                </TableRow>
                            )}
                            {paymentDetails.pgAuthorizationCode && (
                                <TableRow>
                                    <TableCell className="font-medium">Authorization Code</TableCell>
                                    <TableCell className="font-mono text-sm">{paymentDetails.pgAuthorizationCode}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                <div className="mt-8 pt-6 border-t-2 border-gray-200 text-center">
                    <p className="text-sm text-gray-600 mb-2">This is a computer-generated receipt and does not require a signature.</p>
                    <p className="text-sm text-gray-600">For any queries regarding your event registration, please contact our support team.</p>
                    <div className="mt-4">
                        <p className="text-sm text-blue-600 font-medium">Email: info@sbiea.co.in | Phone: +91 9997874343</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <Card className="shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <CardTitle className="flex justify-between items-center text-2xl">
                            <div className="flex items-center gap-3">
                                {getStatusIcon()}
                                <span>
                                    {status === 'success'
                                        ? 'Payment Successful'
                                        : status === 'pending'
                                            ? 'Payment Pending'
                                            : status === 'not_found'
                                                ? 'Payment Not Found'
                                                : 'Payment Failed'}
                                </span>
                            </div>
                            {paymentDetails && status !== 'not_found' && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={downloadAsPdf}
                                    className="bg-white text-blue-600 hover:bg-blue-50 border-white"
                                >
                                    <Download size={16} className="mr-2" />
                                    Download Receipt
                                </Button>
                            )}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <Alert className={`mb-6 ${getStatusColor()}`}>
                            <AlertDescription className="flex items-center gap-2 text-base">
                                {getStatusIcon()}
                                {status === 'success'
                                    ? 'Your event registration payment has been processed successfully. You will receive a confirmation email shortly.'
                                    : status === 'pending'
                                        ? 'Your payment is being processed. Please check back later or contact support if this persists.'
                                        : status === 'not_found'
                                            ? 'No payment details found for the provided transaction ID.'
                                            : 'There was an error processing your payment. Please contact support for assistance.'}
                            </AlertDescription>
                        </Alert>

                        {loading && (
                            <div className="text-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                <p className="text-gray-600">Loading payment details...</p>
                            </div>
                        )}

                        {error && (
                            <Alert className="mt-4 border-red-200 bg-red-50">
                                <AlertCircle className="h-4 w-4 text-red-600" />
                                <AlertDescription className="text-red-700">{error}</AlertDescription>
                            </Alert>
                        )}

                        {status === 'not_found' && !loading && (
                            <div className="text-center py-12">
                                <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-xl text-gray-600 mb-2">Payment Details Not Found</p>
                                <p className="text-gray-500">The payment details you are looking for could not be found.</p>
                                <p className="text-sm text-gray-400 mt-2">Please verify the transaction ID and try again.</p>
                            </div>
                        )}

                        {paymentDetails && status !== 'not_found' && !loading && renderPaymentDetailsTable()}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
