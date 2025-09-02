import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CheckCircle, Download, ArrowRight, Home } from 'lucide-react';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  const paymentType = searchParams.get("type");
  const id = searchParams.get("id");

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const getSuccessMessage = () => {
    switch (paymentType) {
      case 'EVENT_REGISTRATION':
        return {
          title: 'Event Registration Successful!',
          message: 'Your event registration has been confirmed and payment processed successfully.',
          description: 'You will receive program details and schedule via email within 2-3 business days.'
        };
      case 'STUDENT':
        return {
          title: 'Student Payment Successful!',
          message: 'Your student admission fee has been paid successfully.',
          description: 'Your enrollment is now confirmed. Check your email for further instructions.'
        };
      case 'INSTITUTE':
        return {
          title: 'Institute Registration Successful!',
          message: 'Your institute registration fee has been paid successfully.',
          description: 'Your institution is now registered. You will receive your center code shortly.'
        };
      default:
        return {
          title: 'Payment Successful!',
          message: 'Your payment has been processed successfully.',
          description: 'Thank you for your payment.'
        };
    }
  };

  const { title, message, description } = getSuccessMessage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {message}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-center font-medium">
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
              
              {paymentType === 'EVENT_REGISTRATION' && (
                <button
                  onClick={() => navigate('/events')}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  View All Events
                </button>
              )}
            </div>

            <div className="text-center">
              <Badge variant="outline" className="text-sm">
                Redirecting to home in {countdown} seconds...
              </Badge>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-gray-900">What's Next?</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  {paymentType === 'EVENT_REGISTRATION' ? (
                    <>
                      <p>• Check your email for registration confirmation</p>
                      <p>• You'll receive program schedule within 2-3 business days</p>
                      <p>• Our team will contact you before program start date</p>
                      <p>• Keep your registration number for future reference</p>
                    </>
                  ) : (
                    <>
                      <p>• Check your email for payment confirmation</p>
                      <p>• Keep your transaction details for records</p>
                      <p>• Contact support if you need assistance</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-yellow-600 mt-0.5">ℹ️</div>
                <div className="text-sm text-yellow-800">
                  <p className="font-medium mb-1">Important:</p>
                  <p>Save your payment confirmation email. You may need it for future reference or support queries.</p>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>Having issues? Contact our support team:</p>
              <p className="font-medium">📧 support@sbcodl.com | 📞 +91 9997874343</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;
