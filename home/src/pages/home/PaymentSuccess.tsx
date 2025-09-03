import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Clock, AlertCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paymentType = searchParams.get("type");
  const paymentStatus = searchParams.get("status") || "success"; // Default to success for backward compatibility
  // const eventRegistrationId = searchParams.get("id");

  const getSuccessMessage = () => {
    if (paymentType === 'EVENT_REGISTRATION') {
      if (paymentStatus === 'success') {
        return {
          title: 'Event Registration Successful!',
          message: 'Your event registration has been confirmed and payment processed successfully.',
          description: 'You will receive program details and schedule via email within 2-3 business days.',
          type: 'success'
        };
      } else if (paymentStatus === 'pending') {
        return {
          title: 'Event Registration Payment Pending',
          message: 'Your event registration payment is being processed.',
          description: 'Please wait for payment confirmation. You will receive an email once the payment is processed.',
          type: 'pending'
        };
      } else if (paymentStatus === 'failed') {
        return {
          title: 'Event Registration Payment Failed',
          message: 'Your event registration payment could not be processed.',
          description: 'Please try again or contact our support team for assistance with your registration.',
          type: 'failed'
        };
      }
    } else if (paymentType === 'STUDENT') {
      return {
        title: 'Student Payment Successful!',
        message: 'Your student admission fee has been paid successfully.',
        description: 'Your enrollment is now confirmed. Check your email for further instructions.',
        type: 'success'
      };
    } else if (paymentType === 'INSTITUTE') {
      return {
        title: 'Institute Registration Successful!',
        message: 'Your institute registration fee has been paid successfully.',
        description: 'Your institution is now registered. You will receive your center code shortly.',
        type: 'success'
      };
    }
    
    // Default return
    return {
      title: 'Payment Processed',
      message: 'Your payment has been processed.',
      description: 'Thank you for your payment.',
      type: paymentStatus
    };
  };

  const { title, message, description, type } = getSuccessMessage();

  const getStatusIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-8 h-8 text-green-600" />;
      case 'pending':
        return <Clock className="w-8 h-8 text-yellow-600" />;
      case 'failed':
        return <XCircle className="w-8 h-8 text-red-600" />;
      default:
        return <AlertCircle className="w-8 h-8 text-gray-600" />;
    }
  };

  const getStatusColor = () => {
    switch (type) {
      case 'success':
        return 'from-green-50 to-emerald-50';
      case 'pending':
        return 'from-yellow-50 to-orange-50';
      case 'failed':
        return 'from-red-50 to-pink-50';
      default:
        return 'from-gray-50 to-slate-50';
    }
  };

  const getCardIconBg = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100';
      case 'pending':
        return 'bg-yellow-100';
      case 'failed':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };

  const getAlertColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'pending':
        return 'bg-yellow-50 border-yellow-200';
      case 'failed':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getAlertTextColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-800';
      case 'pending':
        return 'text-yellow-800';
      case 'failed':
        return 'text-red-800';
      default:
        return 'text-gray-800';
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${getStatusColor()} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className={`mx-auto w-16 h-16 ${getCardIconBg()} rounded-full flex items-center justify-center mb-4`}>
              {getStatusIcon()}
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {message}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className={`${getAlertColor()} border rounded-lg p-4`}>
              <p className={`${getAlertTextColor()} text-center font-medium`}>
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <Home className="w-4 h-4" />
                Go to Home
              </button>
              
              {paymentType === 'EVENT_REGISTRATION' && type === 'success' && (
                <button
                  onClick={() => navigate('/institutes/news')}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  View All Events
                </button>
              )}

              {paymentType === 'EVENT_REGISTRATION' && type === 'failed' && (
                <button
                  onClick={() => navigate('/institutes/event-registration')}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  Try Again
                </button>
              )}

              {/* {paymentType === 'EVENT_REGISTRATION' && eventRegistrationId && (type === 'success' || type === 'pending') && (
                <button
                  onClick={() => navigate(`/payment-details?type=${paymentType}&id=${eventRegistrationId}`)}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-blue-300 hover:border-blue-400 text-blue-700 rounded-lg font-medium transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  View Receipt
                </button>
              )} */}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-gray-900">What's Next?</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  {paymentType === 'EVENT_REGISTRATION' && type === 'success' && (
                    <>
                      <p>• Check your email for registration confirmation</p>
                      <p>• You'll receive program schedule within 2-3 business days</p>
                      <p>• Our team will contact you before program start date</p>
                      <p>• Keep your registration number for future reference</p>
                    </>
                  )}
                  {paymentType === 'EVENT_REGISTRATION' && type === 'pending' && (
                    <>
                      <p>• Your payment is being processed</p>
                      <p>• You will receive confirmation email once payment is successful</p>
                      <p>• This may take a few minutes to complete</p>
                      <p>• Contact support if payment doesn't reflect within 24 hours</p>
                    </>
                  )}
                  {paymentType === 'EVENT_REGISTRATION' && type === 'failed' && (
                    <>
                      <p>• Your payment could not be processed</p>
                      <p>• Please check your payment details and try again</p>
                      <p>• Contact your bank if the issue persists</p>
                      <p>• Our support team is available for assistance</p>
                    </>
                  )}
                  {paymentType !== 'EVENT_REGISTRATION' && (
                    <>
                      <p>• Check your email for payment confirmation</p>
                      <p>• Keep your transaction details for records</p>
                      <p>• Contact support if you need assistance</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className={`${getAlertColor()} border rounded-lg p-4`}>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-yellow-600 mt-0.5">
                  {type === 'success' ? 'ℹ️' : type === 'pending' ? '⏳' : '❌'}
                </div>
                <div className={`text-sm ${getAlertTextColor()}`}>
                  <p className="font-medium mb-1">
                    {type === 'success' ? 'Important:' : type === 'pending' ? 'Please Note:' : 'Action Required:'}
                  </p>
                  <p>
                    {type === 'success' && 'Save your payment confirmation email. You may need it for future reference or support queries.'}
                    {type === 'pending' && 'Your payment is being processed. Please do not attempt to pay again until this transaction is complete.'}
                    {type === 'failed' && 'If money was debited from your account, it will be refunded within 5-7 business days. Contact support for immediate assistance.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>Having issues? Contact our support team:</p>
              <p className="font-medium">📧 info@sbiea.co.in | 📞 +91 9997874343</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;
