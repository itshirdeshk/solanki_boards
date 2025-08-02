import { Separator } from "../../../components/ui/separator";

// Import certificate images
import IntegrityPledge from "../../../assets/images/certificates/Integrity_pledge.jpg";
import ManavAdhikar from "../../../assets/images/certificates/Manav_Adhikar.jpg";
import MahilaAdhikar from "../../../assets/images/certificates/Mahila_Adhikar.jpg";
import QualityStd from "../../../assets/images/certificates/Quality_Std.jpg";

// Define Certificate interface
interface Certificate {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Certification = () => {
  // Certificate data - easily add more certificates here
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Integrity Pledge Certificate",
      image: IntegrityPledge,
      description: "Integrity Pledge Certificate for commitment to ethical standards and integrity in education."
    },
    {
      id: 2,
      title: "Manav Adhikar Shapath Certificate",
      image: ManavAdhikar,
      description: "Manav Adhikar Shapath Certificate for upholding human rights and dignity in education."
    },
    {
      id: 3,
      title: "Mahila Adhikar Shapath Certificate",
      image: MahilaAdhikar,
      description: "Mahila Adhikar Shapath Certificate for promoting women's rights and empowerment in education."
    },
    {
      id: 4,
      title: "Quality Standard Certificate",
      image: QualityStd,
      description: "Quality Standard Certificate for admitted as an Accredited Member of the Board of Quality Standards."
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
                <div 
                  className="w-full h-80 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => {
                    // Optional: Open image in modal or new window
                    window.open(certificate.image, '_blank');
                  }}
                  onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      window.open(certificate.image, '_blank');
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${certificate.title} in full size`}
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} - Certificate`}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6' stroke='%23d1d5db' stroke-width='2'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial, sans-serif' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3ECertificate%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial, sans-serif' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3EImage Not Available%3C/text%3E%3C/svg%3E";
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
