import { Separator } from "../../../components/ui/separator";

// Import certificate images (you can add more here as needed)
// import CertificateImage1 from "../../../assets/images/certificates/certificate1.jpg";
// import CertificateImage2 from "../../../assets/images/certificates/certificate2.jpg";

const Certification = () => {
  // Certificate data - easily add more certificates here
  const certificates = [
    {
      id: 1,
      title: "Integrity Pledge Certificate",
      image: "/src/assets/images/certificates/Integrity_pledge.jpg", // Replace with actual image path
      description: "Integrity Pledge Certificate for commitment to ethical standards and integrity in education."
    },
    {
      id: 2,
      title: "Manav Adhikar Shapath Certificate",
      image: "/src/assets/images/certificates/Manav_Adhikar.jpg", // Replace with actual image path
      description: "Manav Adhikar Shapath Certificate for upholding human rights and dignity in education."
    },
    {
      id: 3,
      title: "Mahila Adhikar Shapath Certificate",
      image: "/src/assets/images/certificates/Mahila_Adhikar.jpg", // Replace with actual image path
      description: "Mahila Adhikar Shapath Certificate for promoting women's rights and empowerment in education."
    },
    // Add more certificates here as needed
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              CERTIFICATIONS & RECOGNITION
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Our commitment to educational excellence is recognized through various certifications and accreditations 
              from prestigious national and international bodies, ensuring the highest standards of quality education.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Certifications</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            These certifications validate our commitment to providing world-class education and maintaining 
            the highest standards of academic excellence.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Certificate Title */}
              <div className="p-6 pb-4">
                <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">
                  {certificate.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {certificate.description}
                </p>
              </div>

              {/* Certificate Image */}
              <div className="px-6 pb-6">
                <div className="w-full h-80 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => {
                      // Optional: Open image in modal or new window
                      window.open(certificate.image, '_blank');
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Additional Information */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">Commitment to Excellence</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            SBCODL continues to pursue additional certifications and accreditations to ensure we maintain 
            our position as a leading educational institution. Our certifications reflect our dedication 
            to providing quality education that meets international standards and serves our global community.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Certification;
