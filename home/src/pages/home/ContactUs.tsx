import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { createEnquiryUrl } from "../../data/config";
import axios from "axios";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    title: '', // Using course name as title
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await axios.post(createEnquiryUrl, {
        ...formData,
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        title: '',
        description: '',
      });
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      setError('Failed to submit your enquiry. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Get in touch with SBCODL for admissions, inquiries, and support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className=" mx-auto px-8 py-12 -mt-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-100">Our Contact Details</CardTitle>
                <h1 className="font-semibold  text-blue-100 text-sm"> Solanki Brothers Council for Open and Distance Learning</h1>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-300">
                      Amethi Kohna, Nearby Neha Filling Station,<br />
                      Farrukhabad, Uttar Pradesh, India - 209625
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-300">+91 9997874343</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-300">admission@sbiea.co.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Globe className="h-6 w-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Website</h3>
                    <p className="text-gray-300">www.sbiea.co.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}

          </div>

          {/* Contact Form */}
          <div>
            <Card className='bg-primary text-foreground border-none shadow-lg'>
              <CardHeader>
                <CardTitle className='text-2xl'>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                {success && (
                  <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
                    Your enquiry has been submitted successfully! We'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md">
                    {error}
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full border-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full border-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      className="w-full border-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Title"
                      className="w-full border-gray-300"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full border-gray-300"
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    variant="destructive"
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;