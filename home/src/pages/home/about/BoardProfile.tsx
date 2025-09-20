import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

const BoardProfile = () => {
  return (
    <div className="mx-auto p-6 space-y-8 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Solanki Brothers Council for Open and Distance Learning (SBCODL)
        </h1>
        <p className="text-xl text-primary">“Connecting Minds, Ensuring Quality, Transforming Education”</p>
      </div>
      <Separator />

      {/* 1. Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>I. Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
            Established in 2022, the Solanki Brothers Council for Open and Distance Learning (SBCODL) is a non-governmental, non-profit educational council, recognized under the Government of India. Headquartered in Farrukhabad, Uttar Pradesh, SBCODL operates as an independent body for accreditation, membership, evaluation, and quality assurance at both national and international levels.

Our mission is to advance accessible, equitable, and high-quality education across open, distance, hybrid, vocational, tertiary, professional, and on-campus learning systems. Through its work, SBCODL actively addresses educational barriers by delivering flexible, inclusive, and digitally empowered learning opportunities.
          </p>
          <p className="text-md mb-2">
            Beyond academic initiatives, SBCODL offers a comprehensive suite of services including:
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
          <li>Institutional Accreditation – assuring standards of quality and excellence.</li>
          <li>Program Accreditation – evaluating the academic rigor of specific courses and degrees.</li>
          <li>Evaluation Services & Institutional Audits – promoting transparency and accountability.</li>
          <li>Capacity-Building Initiatives – strengthening leadership, governance, and academic practices.</li>
          </ul>
          <p className="text-md">
            With a strong commitment to international collaboration, SBCODL positions itself as a hub of accreditation and membership services that connect institutions worldwide under a shared vision of quality, innovation, and lifelong learning.
          </p>
        </CardContent>
      </Card>
      <Separator />

      {/* 2. Legal Standing and Recognition */}
      <Card>
        <CardHeader>
          <CardTitle>II. Legal Standing and Recognition</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Legal Structure: non-governmental, non-profit educational council under the Government of India</li>
            <li>NITI Aayog Registered: UP/2024/0414971</li>
            <li>MSME Registered: UDYAM-UP-25-0003415</li>
            <li>Registered under Sections 12A & 80G of the Income Tax Act for charitable and educational purposes.</li>
            <li>Governance: Functions as an independent accreditation, evaluation, and quality assurance body, nationally and internationally.</li>
            
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* 3. Vision and Mission */}
      <Card>
        <CardHeader>
          <CardTitle>III. Vision and Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Vision</h3>
          <p className="text-md mb-4">
            To be a globally recognized leader in advancing equitable, inclusive, and innovative education by fostering excellence in Open and Distance Learning (ODL), hybrid, and campus-based systems—empowering every learner, regardless of background, to realize their full potential from school through higher education.
          </p>
          <h3 className="font-semibold mb-2">Mission</h3>
          <p className="text-md mb-2">
            SBCODL is dedicated to transforming education by:
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Promoting Access – Expanding high-quality learning opportunities for diverse communities through flexible, technology-enabled modes of delivery.</li>
            <li>Establishing Accreditation Systems – Building robust accreditation and quality assurance frameworks to uphold academic standards across ODL, hybrid, and campus-based institutions.</li>
            <li>Capacity-Building – Supporting educators, institutions, and administrators to foster continuous improvement, innovation, and professional development.</li>
            <li>Global Recognition – Enhancing the credibility and competitiveness of Indian and international educational programs through recognition, membership, and quality benchmarking.</li>
            <li>Learner-Centric Outcomes – Equipping students with the knowledge, skills, and values required to succeed in a dynamic and interconnected world.</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* 4. Academic and Capacity-Building Programs */}
      <Card>
        <CardHeader>
          <CardTitle>IV. Academic and Capacity-Building Programs</CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold mb-1">Higher Education Programs</h4>
          <ul className="list-disc list-inside text-md mb-2 space-y-1">
            <li>Undergraduate and postgraduate degrees & Ph.D</li>
            <li>Professional diplomas and continuing education programs</li>
          </ul>
          <h4 className="font-semibold mb-1">Certificate and Vocational Programs</h4>
          <ul className="list-disc list-inside text-md mb-2 space-y-1">
            <li>Distance-mode short-term and industry-specific courses</li>
          </ul>
          <h4 className="font-semibold mb-1">Skill Development and Lifelong Learning</h4>
          <ul className="list-disc list-inside text-md space-y-1">
            <li>Micro-credentials, e-courses, teacher training, and executive learning</li>
            <li>Support for digital transformation and employability</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* 5. Technology, Learning Infrastructure, and Support */}
      <Card>
        <CardHeader>
          <CardTitle>V. Technology, Learning Infrastructure, and Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-4">
            The Solanki Brothers Council for Open and Distance Learning (SBCODL) leverages advanced digital technologies and modern infrastructure to ensure seamless delivery of education, accreditation, and evaluation services. Our systems are designed to meet the demands of open, distance, hybrid, and campus-based education in a rapidly evolving digital age.
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Digital Platforms & LMS: A robust Learning Management System (LMS) supporting virtual classrooms, e-learning modules, assessments, and interactive learning tools.</li>
            <li>Technology Integration: Use of AI-enabled tools, data analytics, and secure cloud solutions to monitor quality, enhance learning, and track outcomes.</li>
            <li>Global Accessibility: Online portals for academic programs, accreditation services, membership applications, and quality assurance audits, ensuring worldwide access.</li>
            <li>Learning Resources: Digital libraries, e-repositories, research databases, and open-access content to support academic excellence.</li>
            <li>Student & Institutional Support: 24/7 helpdesk, counseling services, training workshops, and faculty development programs to strengthen both learners and institutions.</li>
            <li>Infrastructure: Adequate facilities including conference rooms, lecture halls, computer labs, and reliable internet access to support blended and in-person activities.</li>
          </ul>
           <p className="text-md mb-4">
            This strong technological and infrastructural foundation allows SBCODL to promote equitable, scalable, and sustainable education worldwide.
          </p>
        </CardContent>
      </Card>
      <Separator />

      {/* 6. Program Accreditation */}
      <Card>
        <CardHeader>
          <CardTitle>VI. SBCODL evaluates and accredits programs of study offered by higher education institutions (HEIs), focusing on innovation, internationalization, and entrepreneurship.</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
           Key Standards for Program Accreditation:
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Institutional Overview.</li>
            <li>Ethics & Diversity</li>
            <li>Strategic Program Design</li>
            <li>Quality Assurance & Continuous Improvement</li>
            <li>Faculty & Staff Qualifications</li>
            <li>Stakeholder Involvement</li>
            <li>Teaching & Learning Outcomes</li>
            <li>Program Handbook & Transparency</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* 6. Institutional Accreditation */}
      <Card>
        <CardHeader>
          <CardTitle>VI. SBCODL grants institutional accreditation, membership, and quality labels to HEIs that demonstrate compliance with national and international standards.</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
           Key Standards for Institutional Accreditation:
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Mission & Objectives</li>
            <li>Governance & Administration</li>
            <li>Quality Assurance Management</li>
            <li>Teaching & Learning Systems</li>
            <li>Student Support Services</li>
            <li>Resources & Facilities</li>
            <li>Financial Planning & Transparency</li>
            <li>Employment Processes & HR Policies</li>
            <li>Research & Knowledge Contribution</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* 6. Internal Quality Assurance (IQA) */}
      <Card>
        <CardHeader>
          <CardTitle>VI. SBCODL emphasizes that every institution must operate its own Internal Quality Assurance (IQA) mechanisms to ensure sustainability of academic and administrative quality.</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
           Key IQA Elements:
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Policy-based QA framework</li>
            <li>Regular self-assessment of programs</li>
            <li>Continuous monitoring & evaluation</li>
            <li>Internal Quality Assurance Cell (IQAC)</li>
            <li>Stakeholder feedback integration</li>
            <li>Peer reviews & internal audits</li>
            <li>Capacity building for faculty and staff</li>
            <li>Transparent documentation and reporting</li>
            <li>Corrective actions and structured follow-up</li>
            <li>Alignment with external QA and global standards</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* 7. We are Global Recognized by: */}
      <Card>
        <CardHeader>
          <CardTitle>VII. We are Recognized by:</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
            SBCODL partners with quality bodies and accrediting agencies across continents. Highlights include:
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Union of Universities of Latin America and the Caribbean (UDUALC)</li>
            <li>Association for Accreditation of Dental Education Programs (DEPAD)</li>
            <li>The Evaluation and Accreditation Association for Programs in the Faculties of Pharmacy (ECZAKDER)</li>
            <li>Mercosul Accreditation Agency (MACCA)</li>
            <li>Independent Institute of Accreditation, Rating and Certification (IARC)</li>
            <li>International Conference on Evaluating and Enhancing Quality Assurance System in Higher Education (RIQASHE)</li>
            <li>Independent Accreditation Agency Bilim-Standard</li>
            <li>The Accreditation and Rating International Agency (ARIA)</li>
            <li>The Agency for Higher Education Quality Assurance and Career Development (AKKORK)</li>
            <li>Board of Quality Standards (BQS)</li>
            <li>European Association for Higher Education Advancement (EAHEA)</li>
            <li>QAHE - International Association for Quality Assurance in Pre-Tertiary and Higher Education</li>
            <li>International Federation of Private Universities (IFPU)</li>
            <li>Jami University (Afghanistan)</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* 8. Community Impact and Sustainability */}
      <Card>
        <CardHeader>
          <CardTitle>IX. Community Impact and Sustainability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
            The Solanki Brothers Council for Open and Distance Learning (SBCODL) is deeply committed to creating lasting social value by bridging educational gaps and fostering inclusive growth. Our initiatives are designed not only to deliver high-quality education but also to empower individuals, families, and communities through knowledge, skills, and opportunities.
          </p>
           <p className="text-md mb-2">
            We emphasize sustainability by aligning our programs with the United Nations Sustainable Development Goals (SDGs), particularly in promoting quality education (SDG 4), reducing inequalities (SDG 10), and fostering partnerships for development (SDG 17).
          </p>
          <p className="text-md mb-2">
            Key dimensions of our community impact include:
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Inclusive Access: Extending education to underserved populations, rural learners, and marginalized groups.</li>
            <li>Skill Development: Equipping learners with employable skills that directly contribute to local and global economies.</li>
            <li>Social Empowerment: Supporting women, differently-abled learners, and first-generation students to achieve academic and professional success.</li>
            <li>Sustainable Practices: Utilizing digital platforms and environmentally conscious practices to minimize carbon footprint in education delivery.</li>
            <li>Global Engagement: Building collaborations with international partners to promote cross-cultural learning and knowledge exchange.</li>
          </ul>
           <p className="text-md mb-2">
            Through these initiatives, SBCODL ensures that education serves as a transformative tool—uplifting individuals while contributing to the long-term sustainability of societies.
          </p>
        </CardContent>
      </Card>
      <Separator />

      {/* 9. Strategic Vision and Future Goals */}
      <Card>
        <CardHeader>
          <CardTitle>X. Strategic Vision and Future Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
            The Solanki Brothers Council for Open and Distance Learning (SBCODL) envisions becoming a global leader in advancing inclusive, accessible, and innovative education. Rooted in our mission of empowering learners through open, distance, hybrid, and campus-based education, we are committed to shaping a future where quality education transcends geographical, cultural, and socio-economic barriers.
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Global Expansion of Quality Assurance Frameworks:- Establish Quality Assurance Councils across Asia, Africa, and Latin America to harmonize standards and foster mutual recognition of academic excellence</li>
            <li>Introduction of Digital Accreditation Portals:- Develop integrated, technology-driven platforms for accreditation, membership, and evaluation, enabling transparency, efficiency, and accessibility worldwide.</li>
            <li>Joint and Dual Accreditation Initiatives:- Launch Joint/Dual Accreditation and Membership Programs with international councils and associations, creating pathways for dual degrees, joint diplomas, and transnational recognition.</li>
            <li>Development of Transnational Qualification Frameworks (TQF):- Collaborate with global partners to build Transnational Qualification Frameworks that align with international benchmarks while respecting regional contexts.</li>
            <li>Promotion of International Exchange and Collaboration:- Strengthen student, faculty, and institutional exchange programs, nurturing cross-cultural understanding and collaborative research opportunities.</li>
            <li>Sustainability and Inclusivity in Education:-Integrate Sustainable Development Goals (SDGs) into our programs while ensuring that open, distance, hybrid, and campus-based education remains inclusive for marginalized and underserved communities.</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* 10. Why Accreditation/Membership with SBCODL? */}
      <Card>
        <CardHeader>
          <CardTitle>X. Why Accreditation/Membership with SBCODL?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
            Accreditation or membership with the Solanki Brothers Council for Open and Distance Learning (SBCODL) provides institutions with independent international recognition, credibility, and a gateway to a global community of educational excellence. As a non-governmental, non-profit educational council, SBCODL is dedicated to advancing innovation, inclusivity, and quality assurance across open, distance, hybrid, and campus-based learning systems.
          </p>
          <li>Key Benefits</li>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Independent International Recognition:- SBCODL accreditation strengthens institutional reputation by certifying adherence to globally benchmarked standards of education and evaluation.</li>
            <li>Global Networking & Partnerships:- Join a prestigious network of universities, colleges, and schools worldwide, creating opportunities for collaborations, joint programs, and academic exchanges.</li>
            <li>Excellence in Quality Assurance:- Through independent evaluation and continuous monitoring, SBCODL ensures high standards in teaching, governance, student services, and institutional performance.</li>
            <li>Joint & Dual Accreditation Programs:- Open pathways for dual degrees, joint diplomas, and cross-border recognition through collaborative accreditation with international councils and associations.</li>
            <li>Flexible Learning Models Support:-Accreditation recognizes and validates institutions offering open, distance, hybrid, or campus-based education, encouraging innovation in learning delivery.</li>
            <li>Global Qualification Framework Alignment:- Programs are aligned with Transnational Qualification Frameworks (TQF), enhancing international recognition and student mobility.</li>
            <li>Institutional Growth & Capacity Building:-Accredited members benefit from leadership training, professional development programs, and academic capacity-building workshops.</li>
            <li>Research, Exchange & Collaboration:-Enhance academic excellence through student/faculty exchanges, collaborative research, and international conferences hosted by SBCODL.</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* 11. Conclusion */}
      <Card>
        <CardHeader>
          <CardTitle>XIII. Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
            The Solanki Brothers Council for Open and Distance Learning (SBCODL) is more than a council—it is a global platform of trust, credibility, and innovation in education. Through internationally recognized accreditation and memberships, SBCODL ensures that institutions and learners gain access to quality benchmarks, global networks, and future-ready opportunities. Our strategic vision focuses on building excellence in teaching, research, governance, and student outcomes, while fostering partnerships across continents.

By becoming accredited or a member with SBCODL, stakeholders not only achieve international recognition but also join a dynamic community committed to advancing education through collaboration, inclusivity, and continuous improvement. Together, we are shaping a sustainable, globally connected, and quality-driven future for education.
          </p>
          <p className="text-md font-semibold">SBCODL: Transforming Education, Transforming Lives.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardProfile;