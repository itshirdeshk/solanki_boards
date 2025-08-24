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
        <p className="text-xl text-primary">Empowering Learners, Enriching Lives</p>
      </div>
      <Separator />

      {/* I. Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>I. Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
            Established in 2022, the Solanki Brothers Council for Open and Distance Learning (SBCODL) is a non-governmental, non-profit educational council under the Government of India. We function as an independent accreditation, evaluation, and quality assurance body at both national and international levels, dedicated to advancing accessible, equitable, and quality learning across open, distance, hybrid, and campus-based education systems. from its headquarters in Farrukhabad, Uttar Pradesh.
          </p>
          <p className="text-md mb-2">
            SBCODL is committed to enhancing quality in open, distance, hybrid, and on-campus education, spanning Vocational Program, Higher Education, tertiary, and professional programs. The council addresses educational barriers by delivering flexible, inclusive, and digitally empowered academic programs.
          </p>
          <p className="text-md">
            In addition to academic operations, offering evaluation services, institutional audits, Institutional Accreditation, Institutional Membership, Program Accreditation and capacity-building initiatives nationally and internationally.
          </p>
        </CardContent>
      </Card>
      <Separator />

      {/* II. Legal Standing and Recognition */}
      <Card>
        <CardHeader>
          <CardTitle>II. Legal Standing and Recognition</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Ministry of Corporate Affairs: non-governmental, non-profit educational council under the Government of India</li>
            <li>NITI Aayog Registered: UP/2024/0414971</li>
            <li>MSME Registered: UDYAM-UP-25-0003415</li>
            <li>Tax Exemption Certified: 12A & 80G (Income Tax Act)</li>
            <li>Governed; independent accreditation, evaluation, and quality assurance body</li>
            
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* III. Vision and Mission */}
      <Card>
        <CardHeader>
          <CardTitle>III. Vision and Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Vision</h3>
          <p className="text-md mb-4">
            To be a global leader in flexible learning and educational quality assurance, fostering access, innovation, and ethical excellence in lifelong learning.
          </p>
          <h3 className="font-semibold mb-2">Mission</h3>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Expand access to quality education regardless of background</li>
            <li>Build resilient digital learning ecosystems</li>
            <li>Align educational outcomes with global standards and labour market demands</li>
            <li>Support institutions through evaluation, benchmarking, and capacity-building</li>
            <li>Foster global partnerships for continuous academic and quality enhancement</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* IV. Academic and Capacity-Building Programs */}
      <Card>
        <CardHeader>
          <CardTitle>IV. Academic and Capacity-Building Programs</CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold mb-1">Higher Education Programs</h4>
          <ul className="list-disc list-inside text-md mb-2 space-y-1">
            <li>Undergraduate and postgraduate degrees &amp; Ph.D</li>
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

      {/* V. Technology, Learning Infrastructure, and Support */}
      <Card>
        <CardHeader>
          <CardTitle>V. Technology, Learning Infrastructure, and Support</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>AI-powered Learning Management System (LMS)</li>
            <li>Virtual classrooms and mobile learning tools</li>
            <li>24/7 access to digital libraries and recorded lectures</li>
            <li>Virtual labs and simulation-based assessments</li>
            <li>Academic mentoring, career guidance, and e-counselling</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* VI. Quality Assurance, Evaluation, and Accreditation Services */}
      <Card>
        <CardHeader>
          <CardTitle>VI. Quality Assurance, Evaluation, and Accreditation Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
            SBCODL serves as an emerging national and international quality assurance body. Key offerings include:
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Institutional Accreditation: School, college, and training centre.</li>
            <li>Program Evaluation: Course-level quality benchmarking</li>
            <li>Capacity-Building: QA workshops, evaluator training, and leadership seminars</li>
            <li>Academic Audits: Self-study reviews, peer evaluations, and reporting</li>
            <li>Compliance Audits: Alignment with NEP 2020, SDGs, and global standards</li>
            <li>Full-Site Visits: On-site or virtual inspections of learning centres, school, college and University, infrastructure, and QA mechanisms</li>
            <li>Quality Assurance Reports: Detailed institutional and program-level findings, strengths, gaps, and actionable recommendations</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* VII. We are Global Recognized by: */}
      <Card>
        <CardHeader>
          <CardTitle>VII. We are Globally Recognized by:</CardTitle>
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

      {/* VIII. Community Impact and Sustainability */}
      <Card>
        <CardHeader>
          <CardTitle>IX. Community Impact and Sustainability</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Rural digital literacy missions</li>
            <li>Scholarships and need-based aid</li>
            <li>Women's vocational empowerment</li>
            <li>SDG-aligned workshops (education, inclusion, and economic empowerment)</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* IX. Strategic Vision and Future Goals */}
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

      {/* X. Why Accreditation/Membership with SBCODL? */}
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

      {/* XI. Conclusion */}
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