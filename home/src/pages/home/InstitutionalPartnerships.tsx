import { Separator } from "../../components/ui/separator";

// Import university images
import GINUni from "../../assets/images/universities/GIN_Uni.jpg";
import IEQABUni from "../../assets/images/universities/IEQAB_Uni.jpg";
import NICTSCEUni from "../../assets/images/universities/NICTSCE_Uni.jpg";
import AssoOfEastAfricaUni from "../../assets/images/universities/Asso_Of_East_Africa_Uni.jpg";
import GEPEAUni from "../../assets/images/universities/GEPEA_Uni.jpg";
import IAMPSUni from "../../assets/images/universities/IAMPS_Uni.jpg";
import IFatossUni from "../../assets/images/universities/IFatoss_Uni.jpg";
import ProwessUni from "../../assets/images/universities/Prowess_Uni.jpg";
import JamiUni from "../../assets/images/universities/Jami_Uni.jpg";

const InstitutionalPartnerships = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              INSTITUTIONAL PARTNERSHIPS
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Institutional partnerships are instrumental in expanding our reach, promoting collaboration and elevating the quality and impact of 
              our educational and research endeavours. These institutional partnerships have fostered interconnectedness, created opportunities for shared learning, and also benefiting the global community that we seek to serve. Please find our Institutional Partners below.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Universities Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">

        {/* New Universities Section */}
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Global Partners</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Strengthening educational excellence through strategic partnerships with leading institutions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-40 h-40 mb-4 flex items-center justify-center">
              <img src={GINUni} alt="Global Interfaith University" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-center font-medium text-gray-800">Global Interfaith University (USA)</h3>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-40 h-40 mb-4 flex items-center justify-center">
              <img src={IEQABUni} alt="IEQAB" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-center font-medium text-gray-800">International Education Quality Accreditation Body (IEQAB)</h3>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-40 h-40 mb-4 flex items-center justify-center">
              <img src={NICTSCEUni} alt="NICTSCE" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-center font-medium text-gray-800">Nigeria Council for Theological Studies and Christian Education (NICTSCE)</h3>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-40 h-40 mb-4 flex items-center justify-center">
              <img src={AssoOfEastAfricaUni} alt="DOLPA-EA" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-center font-medium text-gray-800">Distance, Open and e‑Learning Practitioners' Association of East Africa (DOLPA‑EA)</h3>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-40 h-40 mb-4 flex items-center justify-center">
              <img src={GEPEAUni} alt="GEPEA University" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-center font-medium text-gray-800">GEPEA University</h3>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-40 h-40 mb-4 flex items-center justify-center">
              <img src={JamiUni} alt="Jami University" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-center font-medium text-gray-800">Jami University (Afghanistan)</h3>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-40 h-40 mb-4 flex items-center justify-center">
              <img src={IAMPSUni} alt="IAMPS" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-center font-medium text-gray-800">IAMPS – Institute of Arts Management and Professional Studies (Nigeria)</h3>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-40 h-40 mb-4 flex items-center justify-center">
              <img src={IFatossUni} alt="I-FATOSS University" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-center font-medium text-gray-800">I-FATOSS University (Benin Republic)</h3>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-40 h-40 mb-4 flex items-center justify-center">
              <img src={ProwessUni} alt="Prowess University" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-center font-medium text-gray-800">Prowess University (USA/Nigeria)</h3>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">Building Bridges Through Education</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Through these strategic partnerships, SBCODL continues to expand its global reach and enhance the quality of education 
            we provide to students worldwide. Together, we are creating a network of excellence that transcends geographical boundaries 
            and fosters international collaboration in higher education.
          </p>
        </div>
      </main>
    </div>
  );
};

export default InstitutionalPartnerships;