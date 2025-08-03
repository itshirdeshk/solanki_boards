import { Target } from 'lucide-react';

const MissionVision = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-10 px-4 shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Mission and Vision</h1>
        <p className="text-center max-w-4xl mx-auto text-lg opacity-90">
          Shaping the future of education through accessibility, innovation, and excellence
        </p>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary border-b border-primary pb-2 mb-4">Vision</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            To be a globally recognized leader in advancing equitable, inclusive, and innovative education by fostering excellence in Open and Distance Learning (ODL), hybrid, and campus-based systems — empowering every learner, regardless of background, to realize their full potential from school through higher education.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary border-b border-primary pb-2 mb-4">Mission</h2>
          <p className="text-gray-700 mb-6">
            SBCODL is dedicated to transforming education by:
          </p>
          <ul className="space-y-6 mb-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-4 mt-1">
                <Target className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-semibold text-primary">Promoting access to high-quality learning opportunities</span> for diverse communities through flexible, technology-enabled modes of delivery.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-4 mt-1">
                <Target className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-semibold text-primary">Establishing robust accreditation and quality assurance systems</span> to uphold academic standards across ODL, hybrid, and campus-based institutions.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-4 mt-1">
                <Target className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-semibold text-primary">Supporting capacity-building for educators, institutions, and administrators</span> to foster continuous improvement and innovation.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-4 mt-1">
                <Target className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-semibold text-primary">Facilitating global collaborations and recognition</span> to enhance the credibility and competitiveness of Indian and international educational programs.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-4 mt-1">
                <Target className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-semibold text-primary">Ensuring that learners are equipped with the knowledge, skills, and values</span> required for success in a dynamic and interconnected world.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
