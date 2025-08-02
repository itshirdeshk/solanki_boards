import { useState, useEffect, useRef } from "react";
import { Separator } from "../../../components/ui/separator";
import { X } from "lucide-react";

// Import professor images
import ProfEzeChidi from "../../../assets/images/professors/Prof_Eze_Chidi.jpg";
import ProfChristopher from "../../../assets/images/professors/Prof_Christopher.jpg";
import ProfDSandi from "../../../assets/images/professors/Prof_D_Sandi.jpg";
import ProfShubham from "../../../assets/images/professors/Prof_Shubham.jpg";

// Define Professor interface
interface Professor {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Professors = () => {
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal with Escape key and manage focus
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedProfessor) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Focus the modal for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProfessor]);

  // Professors data - easily add more professors here
  const professors: Professor[] = [
    {
      id: 1,
      name: "Chief (Amb.) Prof. Eze Chidi Nwauba, Ph.D.",
      image: ProfEzeChidi,
      description: "Prof. Eze C. Nwauba is the Vice Chancellor of I-FATOSS University, Benin Republic; a Professor of Intrapreneurship, and Adjunct Faculty at Prowess University, USA; he is a Professor of Entrepreneurship at Edexcel University, Republic of Benin; an Adjunct Professor of Public Administration at IBLT University, Togo; African Representative of Prowess University, Delaware-USA; and the Registrar/Director General, Institute of Arts Management & Professional Studies, Nigeria. Nwauba was the Director, School of Part-time Studies Legacy University Okija, Nigeria. He holds a Ph.D. in Public Administration from Ambrose Alli University (AAU-Nigeria). Over the last 18 years, Nwauba has taught on a wide range of open and tailored programmes at Madonna University, Okija, Nigeria; ESTG University, Republic of Benin; Courage University, Benin Republic; ISTAG Benin University; Edexcel University; IBLT University, Togo; and other academic institutions including Tansian University (School of Economics) Umunya, Nigeria; Imo State University, Owerri (SC), Nigeria; Gregory University, Uturu,(SC) Nigeria; Anambra State University (Peaceland COE), Nigeria; Crystal Galaxy University of Aviation, Ghana (DL); Enugu State University (Imo SC); and The Nobel International Business School (ODL), Accra-Ghana. He was also an Adjunct Faculty at Lorma Colleges, San Fernando City, la union Philippines (ODL), and Pangasinan State University Philippines."
    },
    {
      id: 2,
      name: "Professor Sir, Dr. Christopher Oyat",
      image: ProfChristopher,
      description: "Professor Sir, Dr. Christopher Oyat (Management and Training) is a Ugandan academic and professional who has climbed the ladder systematically and commendably well. He holds a Bachelor degree in Social Sciences from Makerere University (Kampala); a Master of Arts degree in Development Studies from Uganda Martyrs University; a Doctor of Letters Degree (Business Organization with a specialization in Community Organizations) from St Clements University; a PhD in Management from The Business University of Costa Rica; a Doctor of Science degree in Management and Business Research (Ad Eundem) from Ballsbridge University; a PhD in Development Studies from Prowess University- Ad Eundem Doctorate (USA); a Doctorate Degree in Entrepreneurship (Entrepreneurship and Enterprise Management, 2021). He has successfully supervised researches of over 140 undergraduate students to completion at Gulu University; successfully supervised 48 Master Degree students' postgraduate researches to completion in Uganda; has successfully supervised / reviewed / examined 5 (five) thesis of PhD students to completion; and successfully evaluated two candidates for promotion to full Professorships. Distinguished Professor Sir, Dr. Christopher Oyat is a renowned Consultant in Uganda who has executed over 15 Consultancies, with the main focus on Civil Society Organizations. He is the Editor-in-Chief of International Journal of Arts Management and Professional Studies in Nigeria; a Fellow of Chartered Institute of Educational Assessors (FCIEA –UK) which operates under a Royal Charter approved by Her Majesty the Queen of UK (2023); a Fellow Chartered Educator (FCE –India) and Co-opted Member with Education Board for Accreditation."
    },
    {
      id: 3,
      name: "Prof. Ntsokolo Daniel Sandi",
      image: ProfDSandi,
      description: "Prof. Ntsokolo Daniel Sandi was born and bred in Grahamstown renamed Makhanda, but buttered in Port Elizabeth, South Africa. He is an accomplished writer who has authored and co-authored many publications including 'Hayi uNongqawuse', 'Iqebengwana', 'Umbengwana', 'Unhappy Voices', 'Xhosa - English Dictionary', 'Qond uqiqe Qocwa', 'Rhabul ungafinci', and 'Towards 2024' - a co-authored Development Studies publication published overseas in English, German, Spanish, Italian, French, Portuguese and other international languages. With decades of active involvement in civil society and political society, Dan Sandi has been sharpened as a human rights campaigner and defender, educator and educationist, development worker and developmentalist, Paralegal and General Consultant. After spending time in prison for liberation struggle activities with hundreds of freedom fighters and surviving many assassination attempts, Dan Sandi worked within Cici and Associates of Ballsbridge University accredited by Board of Quality Standards of International Network of Quality Assurance Agencies for Higher Education. He has managed to assist hundreds of leaders and community members from different countries with advice on Diploma, Bachelor, Masters and Doctoral Studies, working with institutions such as Rudolph Kwanue University of Liberia, Kesmonds International University, All Nations University, Ballsbridge University, Eaton Business School of Dubai, Texila American University, Gideon Robert University of Zambia, and Logos University International."
    },
    {
      id: 4,
      name: "Prof. Shubham Sharma",
      image: ProfShubham,
      description: "Prof. Shubham Sharma is a distinguished academic with extensive educational qualifications and professional experience. He has completed his Matriculation and Senior Secondary Examination from HBSE, followed by B.Com from Kurukshetra University and M.Com from Igonu University. His specialized qualifications include ITI Computer Operator and Programming Assistant (COPA) from B P R College in Kurukshetra, Post Graduate Diploma in International Business Operations (PGDIBO), PG Diploma Course in Co-Operative Management (2022) from Solanki Brothers Council for Open and Distance Learning, Diploma in HIV and Family Education from Igonu University, Diploma in Early Childhood Education (2024) from Solanki Brothers Council for Open and Distance Learning, and Bachelor of Education (B.Ed.) from Swami Devi Dyal College of Education, Kurukshetra University. He possesses expertise in Tally ERP 9, Tally Prime Gold, and has knowledge of various ERP software including BUSY SOFTWARE and MARG SOFTWARE. He also has comprehensive knowledge of GST/TDS/TCS and completed a 4-month internship training at Government Senior Secondary School Rattewali District-Panchkula. His career objective is to utilize his skills in the best favor of an organization and grow in his personal and professional life through his career."
    }
    // Add more professors here as needed
  ];

  const openModal = (professor: Professor) => {
    setSelectedProfessor(professor);
  };

  const closeModal = () => {
    setSelectedProfessor(null);
  };

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              OUR DISTINGUISHED PROFESSORS
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Meet our world-class faculty members who bring decades of experience, expertise, and passion 
              to deliver exceptional education and research across diverse academic disciplines.
            </p>
          </div>
        </div>
      </div>

      {/* Professors Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Faculty Members</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our faculty consists of renowned academics, industry experts, and thought leaders who are 
            committed to advancing knowledge and shaping the next generation of leaders.
          </p>
        </div>

        {/* Professors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {professors.map((professor) => (
            <div
              key={professor.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => openModal(professor)}
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(professor);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${professor.name}`}
            >
              {/* Professor Image */}
              <div className="w-full h-64 bg-gray-50 overflow-hidden">
                <img
                  src={professor.image}
                  alt={`Professor ${professor.name}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3EProfessor Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Professor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">
                  {professor.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {professor.description.substring(0, 150)}...
                </p>
                <div className="mt-4">
                  <span className="text-blue-600 text-sm font-medium hover:underline">
                    Click to read full description →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Additional Information */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">Excellence in Education</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our professors are not just educators but mentors, researchers, and innovators who are dedicated 
            to fostering academic excellence and personal growth. They bring real-world experience and 
            cutting-edge research to the classroom, ensuring our students receive the highest quality education.
          </p>
        </div>
      </main>

      {/* Modal Dialog */}
      {selectedProfessor && (
        <div 
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
        >
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative z-[10000]">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 id="modal-title" className="text-2xl font-bold text-blue-800">Professor Details</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                {/* Professor Image */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedProfessor.image}
                    alt={`Professor ${selectedProfessor.name}`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3EProfessor Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                {/* Professor Name */}
                <h3 className="text-3xl font-bold text-blue-800 mb-6">
                  {selectedProfessor.name}
                </h3>
              </div>

              {/* Full Description */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">About</h4>
                <p className="text-gray-600 leading-relaxed text-justify">
                  {selectedProfessor.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Professors;
