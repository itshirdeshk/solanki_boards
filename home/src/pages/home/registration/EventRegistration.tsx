import { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../../components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "../../../components/ui/alert";
import {
  Upload,
  Camera,
  CheckCircle,
  AlertCircle,
  CreditCard
} from "lucide-react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { eventRegistrationUrl } from '../../../data/config';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;

  // Address Information
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;

  // Educational Information (Optional)
  qualification: string;
  instituteName: string;

  // Professional Information (Optional)
  occupation: string;
  organizationName: string;
  designation: string;

  // Guardian Information (for students under 18)
  guardianName: string;
  guardianPhone: string;
  guardianRelation: string;

  // Emergency Contact
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;

  // Additional Information
  howDidYouHear: string;
  specialRequirements: string;
  previousExperience: string;

  // Food Option
  optForFood: boolean;
}

const EventRegistration = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    qualification: "",
    instituteName: "",
    occupation: "",
    organizationName: "",
    designation: "",
    guardianName: "",
    guardianPhone: "",
    guardianRelation: "Parent",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",
    howDidYouHear: "",
    specialRequirements: "",
    previousExperience: "",
    optForFood: false
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    profilePicture: null as File | null,
    aadharCard: null as File | null,
    panCard: null as File | null,
    educationCertificate: null as File | null,
    experienceLetter: null as File | null,
    passport: null as File | null,
    photograph: null as File | null,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value) || 0
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileUpload = (fileType: keyof typeof uploadedFiles, file: File) => {
    setUploadedFiles(prev => ({
      ...prev,
      [fileType]: file
    }));
  };

  const nextStep = () => {
    if (!validateCurrentStep()) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Information',
        text: 'Please fill in all required fields before proceeding to the next step.',
        confirmButtonColor: '#f59e0b'
      });
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const validateCurrentStep = (): boolean => {
    switch (currentStep) {
      case 1: // Personal Information
        const requiredPersonalFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'gender'];
        return requiredPersonalFields.every(field => formData[field as keyof FormData].toString().trim() !== '');

      case 2: // Address Information
        const requiredAddressFields = ['address', 'city', 'state', 'pincode'];
        return requiredAddressFields.every(field => formData[field as keyof FormData].toString().trim() !== '');

      case 3: // Educational Information - Now optional
        return true; // All fields are optional now

      case 4: // Professional Information - Now optional
        return true; // All fields are optional now

      case 5: // Documents - Optional step, allow to proceed
        return true;

      case 6: // Additional Information
        const requiredFinalFields = ['emergencyContactName', 'emergencyContactPhone', 'emergencyContactRelation'];
        return requiredFinalFields.every(field => formData[field as keyof FormData].toString().trim() !== '');

      default:
        return true;
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Show loading popup
      Swal.fire({
        title: 'Submitting Registration',
        text: 'Please wait while we process your application...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Prepare form data for API
      // const basePaymentAmount = 5000; // Fixed registration fee
      // const foodCost = formData.optForFood ? 2000 : 0; // Fixed food cost if opted
      const totalPaymentAmount = 1;

      const registrationData = {
        ...formData,
        paymentAmount: totalPaymentAmount,
        dateOfBirth: new Date(formData.dateOfBirth).toISOString()
      };

      // Submit registration
      const response = await axios.post(`${eventRegistrationUrl}/register`, registrationData);

      if (response.data.success) {
        const { id, registrationNumber, paymentAmount } = response.data.data;

        // Upload documents if any files are selected
        let documentsUploaded = true;
        let failedDocument = '';
        try {
          const hasFiles = Object.values(uploadedFiles).some(file => file !== null);
          if (hasFiles) {
            // Update loading message
            Swal.update({
              title: 'Uploading Documents',
              text: 'Please wait while we upload your documents...'
            });
            
            await uploadDocuments(id);
          }
        } catch (uploadError: any) {
          console.error("Document upload failed:", uploadError);
          documentsUploaded = false;
          failedDocument = uploadError.message || 'Unknown document';
          
          // Show a warning but don't stop the registration process
          await Swal.fire({
            icon: 'warning',
            title: 'Document Upload Issue',
            html: `
              <div class="text-left">
                <p>Your registration was successful, but some documents could not be uploaded.</p>
                <p><strong>Registration Number:</strong> ${registrationNumber}</p>
                <p><strong>Failed Document:</strong> ${failedDocument}</p>
                <br>
                <p>You can upload your documents later or contact support for assistance.</p>
              </div>
            `,
            confirmButtonText: 'Continue to Payment',
            confirmButtonColor: '#f59e0b'
          });
        }

        // Show success message only if documents were uploaded successfully or no documents were selected
        if (documentsUploaded) {
          await Swal.fire({
            icon: 'success',
            title: 'Registration Submitted Successfully!',
            html: `
              <div class="text-left">
                <p><strong>Registration Number:</strong> ${registrationNumber}</p>
                <p><strong>Registration Fee:</strong> ₹${paymentAmount}</p>
                <br>
                <p>You will now be redirected to the payment page to complete your registration.</p>
              </div>
            `,
            confirmButtonText: 'Proceed to Payment',
            confirmButtonColor: '#3B82F6'
          });
        }

        // Navigate to payment page
        const paymentParams = new URLSearchParams({
          eventRegistrationId: id,
          name: `${formData.firstName} ${formData.lastName}`,
          number: formData.phone,
          amount: paymentAmount.toString(),
          paymentType: 'EVENT_REGISTRATION'
        });

        navigate(`/payment?${paymentParams.toString()}`);

      } else {
        throw new Error(response.data.message || 'Registration failed');
      }

    } catch (error: any) {
      console.error('Registration failed:', error);

      let errorMessage = 'Unable to submit registration. Please try again.';

      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: errorMessage,
        confirmButtonColor: '#EF4444'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const uploadDocuments = async (regId: string) => {
    let uploadedCount = 0;
    let totalFiles = 0;

    // Count total files first
    for (const [, file] of Object.entries(uploadedFiles)) {
      if (file) {
        totalFiles++;
      }
    }

    if (totalFiles === 0) {
      return; // No files to upload
    }

    // Upload documents one by one to avoid SFTP timeout
    for (const [documentType, file] of Object.entries(uploadedFiles)) {
      if (file) {
        try {
          uploadedCount++;
          
          // Update loading message with progress
          Swal.update({
            title: 'Uploading Documents',
            text: `Uploading ${documentType.replace(/([A-Z])/g, ' $1').toLowerCase()} (${uploadedCount} of ${totalFiles})...`
          });

          const formData = new FormData();
          formData.append('document', file);
          formData.append('documentType', getDocumentType(documentType));

          await axios.post(`${eventRegistrationUrl}/${regId}/upload-document`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            timeout: 30000 // 30 second timeout per file
          });

          // Small delay between uploads to prevent server overload
          if (uploadedCount < totalFiles) {
            await new Promise(resolve => setTimeout(resolve, 500));
          }

        } catch (error) {
          console.error(`Failed to upload ${documentType}:`, error);
          throw new Error(`Failed to upload ${documentType.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        }
      }
    }
  };

  const getDocumentType = (fileType: string): string => {
    const mapping: Record<string, string> = {
      'profilePicture': 'PROFILE_PICTURE',
      'photograph': 'PHOTOGRAPH',
      'aadharCard': 'AADHAR_CARD',
      'panCard': 'PAN_CARD',
      'educationCertificate': 'EDUCATION_CERTIFICATE',
      'experienceLetter': 'EXPERIENCE_LETTER',
      'passport': 'PASSPORT'
    };
    return mapping[fileType] || 'OTHER';
  };

  const FileUploadComponent = ({
    label,
    fileType,
    icon: Icon,
    accept,
    required = false
  }: {
    label: string;
    fileType: keyof typeof uploadedFiles;
    icon: any;
    accept: string;
    required?: boolean;
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-blue-800 flex items-center gap-2">
        <Icon className="h-4 w-4" />
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 transition-colors">
        <input
          type="file"
          accept={accept}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFileUpload(fileType, e.target.files[0]);
            }
          }}
          className="hidden"
          id={fileType}
        />
        <label
          htmlFor={fileType}
          className="cursor-pointer flex flex-col items-center justify-center space-y-2"
        >
          {uploadedFiles[fileType] ? (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">
                {uploadedFiles[fileType]!.name}
              </span>
            </div>
          ) : (
            <>
              <Upload className="h-8 w-8 text-gray-400" />
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700">Click to upload</p>
                <p className="text-xs text-gray-500">Max size: 5MB</p>
              </div>
            </>
          )}
        </label>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Personal Information</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Address Information</h3>

            <div className="grid md:grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Complete Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  PIN Code *
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                >
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Educational Information</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Highest Qualification
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                >
                  <option value="">Select Qualification</option>
                  <option value="10th">10th Standard</option>
                  <option value="12th">12th Standard</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Institute/University Name
                </label>
                <input
                  type="text"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Professional Information</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Current Occupation *
                </label>
                <select
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                >
                  <option value="">Select Occupation</option>
                  <option value="Student">Student</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Homemaker">Homemaker</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Retired">Retired</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
              </div>
            </div>

            <Separator />

            {/* Food Option Section */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">Food Option</h4>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="optForFood"
                    name="optForFood"
                    checked={formData.optForFood}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="optForFood" className="text-sm font-medium text-blue-800">
                    Opt for Food
                  </label>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-start space-x-2">
                    <div className="text-yellow-600">ℹ️</div>
                    <div className="text-sm text-yellow-800">
                      <p className="font-semibold mb-1">Food Option:</p>
                      <ul className="space-y-1">
                        <li>• First day: <span className="font-semibold text-green-600">FREE</span></li>
                        <li>• Additional days: ₹2,000 per day</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Document Uploads</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <FileUploadComponent
                label="Profile Picture"
                fileType="profilePicture"
                icon={Camera}
                accept="image/*"
                required
              />

              <FileUploadComponent
                label="Aadhar Card"
                fileType="aadharCard"
                icon={CreditCard}
                accept="image/*,application/pdf"
                required
              />

              <FileUploadComponent
                label="PAN Card"
                fileType="panCard"
                icon={CreditCard}
                accept="image/*,application/pdf"
              />
            </div>

            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="text-blue-800">Document Guidelines</AlertTitle>
              <AlertDescription className="text-blue-700">
                • Upload clear, high-quality images or PDFs
                • File size should not exceed 5MB per document
                • Ensure all text is clearly readable
                • Accepted formats: JPG, PNG, PDF
              </AlertDescription>
            </Alert>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Additional Information & Emergency Contact</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Guardian Name (if under 18)
                </label>
                <input
                  type="text"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Guardian Phone
                </label>
                <input
                  type="tel"
                  name="guardianPhone"
                  value={formData.guardianPhone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Emergency Contact Name *
                </label>
                <input
                  type="text"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Emergency Contact Phone *
                </label>
                <input
                  type="tel"
                  name="emergencyContactPhone"
                  value={formData.emergencyContactPhone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Emergency Contact Relation *
                </label>
                <select
                  name="emergencyContactRelation"
                  value={formData.emergencyContactRelation}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                >
                  <option value="">Select Relation</option>
                  <option value="Parent">Parent</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Relative">Relative</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  How did you hear about us?
                </label>
                <select
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                >
                  <option value="">Select Option</option>
                  <option value="Website">Website</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friends/Family">Friends/Family</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Educational Fair">Educational Fair</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-800 mb-2">
                Special Requirements or Disabilities
              </label>
              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Please mention any special requirements or accommodations needed..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-800 mb-2">
                Previous Experience in Similar Programs
              </label>
              <textarea
                name="previousExperience"
                value={formData.previousExperience}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Describe any relevant experience..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-gray-100 text-primary hover:bg-blue-500/30">
              SBCODL
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Event Registration
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Register for our educational programs and events. Please fill out all required information
              to complete your registration process.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-blue-800">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${i + 1 === currentStep
                      ? "bg-blue-600"
                      : i + 1 < currentStep
                        ? "bg-green-500"
                        : "bg-gray-300"
                      }`}
                  />
                ))}
              </div>

              {currentStep === totalSteps ? (
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-2 ${isLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white rounded-lg transition-colors flex items-center gap-2`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    'Submit Registration'
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <Alert className="bg-yellow-50 border-yellow-200 max-w-2xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className="text-yellow-800">Need Help?</AlertTitle>
            <AlertDescription className="text-yellow-700">
              If you face any issues while filling out this form, please contact our support team at
              <a href="mailto:info@sbiea.co.in" className="font-medium underline ml-1">
                info@sbiea.co.in
              </a> or call us at +91 9997874343
            </AlertDescription>
          </Alert>
        </div>
      </main>
    </div>
  );
};

export default EventRegistration;
