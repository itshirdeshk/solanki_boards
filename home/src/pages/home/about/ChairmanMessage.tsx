import chairman from "../../../assets/images/chairman2.jpeg"

const ChairmanMessage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-primary text-white py-8 px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Chairman's Message</h1>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Column */}
          <div className="md:w-1/5">
            <div className="sticky top-28">
              <img
                src={chairman}
                alt="Chairman"
                className="h-[20vw] rounded-lg shadow-lg mb-4"
              />
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800">Dr. Arvind Singh</h2>
                <p className="text-gray-600 text-sm">Chairman</p>
              </div>
            </div>
          </div>

          {/* Message Column */}
          <div className="md:w-2/3 text-black">
            <div className="prose max-w-none">
              <h3 className="font-bold mb-4">Solanki Brothers Council for Open and Distance Learning (SBCODL)</h3>
              <p className="mb-6">Dear Students, Partners, and Stakeholders,</p>
              <p className="mb-6">Warm greetings from the Solanki Brothers Council for Open and Distance Learning (SBCODL).</p>
              <p className="mb-6">It is with great pride and purpose that I welcome you to SBCODL—a forward-thinking, globally engaged educational council dedicated to enhancing the quality of education across borders.</p>
              <p className="mb-6">Our vision is rooted in a simple yet powerful idea: <b>Bridging Today's Classroom to Tomorrow's Dynamic Workplace.</b> In a world shaped by innovation, technology, and shifting career landscapes, we believe education must evolve. It must become more inclusive, more skill-driven, and more relevant to the real needs of society and industry. At SBCODL, we are committed to making this transformation possible.</p>
              <p className="mb-6">Established with the blessings of the Government of India and incorporated under the Companies Act as a Section 8 non-profit organization, SBCODL is more than a council—it is a movement to democratize and elevate education through quality assurance, accreditation, and innovation. We support institutions in delivering value-driven, future-ready education through Institutional Accreditation, Program Accreditation, and Institutional Membership.</p>
              <p className="mb-6">Our global collaborations with accreditation bodies, academic councils, and quality assurance agencies across Latin America, Europe, Africa, and Asia affirm our commitment to global standards. We focus on higher education, vocational and professional development, and life skills through both traditional and non-traditional programs—reaching learners wherever they are.</p>
              <p className="mb-6">What distinguishes SBCODL is our dedication to:</p>
              <ul className="list-disc list-inside mb-6">
                <li>Technology-enabled, hybrid and open learning models</li>
                <li>Industry-relevant curriculum and faculty</li>
                <li>Experiential learning through internships and practical simulations</li>
                <li>International benchmarking and continuous quality improvement</li>
              </ul>
              <p className="mb-6">From our base in Eastern Uttar Pradesh, we are helping students, institutions, and communities acquire the competencies needed to thrive in the digital age.</p>
              <p className="mb-6">I invite you to join us on this journey—to build educational ecosystems that are inclusive, accountable, and impactful. Together, let us shape futures that matter.</p>
              <p className="mb-2">Sd/-</p>
              <p className="font-semibold">The Chairman</p>
              <p className="font-semibold">Solanki Brothers Council for Open and Distance Learning (SBCODL)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChairmanMessage;