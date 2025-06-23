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
            Established in 2022, the Solanki Brothers Council for Open and Distance Learning (SBCODL) is a non-governmental, non-profit, and independent educational council. It is registered as a Section 8 Company under the Ministry of Corporate Affairs, Government of India and operates from its headquarters in Farrukhabad, Uttar Pradesh.
          </p>
          <p className="text-md mb-2">
            SBCODL is committed to enhancing quality in open, distance, hybrid, and on-campus education, spanning Vocational Program, Higher Education, tertiary, and professional programs. The council addresses educational barriers by delivering flexible, inclusive, and digitally empowered academic programs.
          </p>
          <p className="text-md">
            In addition to academic operations, SBCODL also functions as an independent quality assurance and accreditation agency, offering evaluation services, institutional audits, Institutional Accreditation, Institutional Membership, Program Accreditation and capacity-building initiatives nationally and internationally.
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
            <li>Ministry of Corporate Affairs: Section 8 Non-Profit</li>
            <li>NITI Aayog Registered: UP/2024/0414971</li>
            <li>MSME Registered: UDYAM-UP-25-0003415</li>
            <li>Tax Exemption Certified: 12A & 80G (Income Tax Act)</li>
            <li>Governed independently; not affiliated with any university or school system</li>
            <li>Compliant with Indian and global educational norms</li>
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
            <li>Mercosul Accreditation Agency (MACCA)</li>
            <li>Independent Institute of Accreditation, Rating and Certification (IARC)</li>
            <li>International Conference on Evaluating and Enhancing Quality Assurance System in Higher Education (RIQASHE)</li>
            <li>European Association for Higher Education Advancement (EAHEA)</li>
            <li>QAHE – International Association for Quality Assurance in Pre-Tertiary and Higher Education</li>
            <li>International Federation of Private Universities (IFPU)</li>
            <li>International Education Quality Accreditation Body (IEQAB)</li>
            <li>Nigeria Council for Theological Studies and Christian Education (NICTSCE)</li>
            <li>Distance Open Learning Programmes of Africa – Kenya (DOLPAK)</li>
            <li>Distance Open Learning Programmes of Africa – East Africa (DOLPA-EA)</li>
            <li>Association of Business Administrators of Christian Colleges (ABACC)</li>
            <li>International Association of University Presidents (IAUP)</li>
            <li>The Institute of Arts Management and Professional Studies (IAMPS)</li>
            <li>The Chartered Institute of Arts Management & Professionals (CIAP)</li>
            <li>Jami University (Afghanistan)</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* VIII. Areas of Collaboration (MoU / Partnership Proposals) */}
      <Card>
        <CardHeader>
          <CardTitle>VIII. Areas of Collaboration (MoU / Partnership Proposals)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">We propose collaboration in the following domains:</p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Joint Membership Models: Cross-recognition between SBCODL and partner institutions for mutual visibility</li>
            <li>Joint Accreditation Frameworks: Co-development and delivery of evaluation standards for specific sectors (TVET, HEI, teacher education, etc.)</li>
            <li>Development of Joint QA Policies and tools for distance, hybrid, and open learning</li>
            <li>Cooperation in Institutional and Program-level Evaluations</li>
            <li>Observer Participation in accreditation and audit visits</li>
            <li>Exchange of Best Practices in QA, standards setting, and regulation</li>
            <li>Capacity-Building for Faculty, Assessors, and QA Officers</li>
            <li>Co-hosting of International Conferences, QA workshops, webinars, and policy panels</li>
            <li>Research on QA Trends, regulatory harmonization, and global benchmarking</li>
            <li>Mutual Sharing of Assessment Tools, KPIs, self-study formats, and scoring rubrics</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* IX. Community Impact and Sustainability */}
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

      {/* X. Strategic Vision and Future Goals */}
      <Card>
        <CardHeader>
          <CardTitle>X. Strategic Vision and Future Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Establishment of QA Councils across Asia, Africa, and Latin America</li>
            <li>Introduction of accreditation portals</li>
            <li>Expansion into Dual Degrees and Joint Diplomas</li>
            <li>Development of Transnational Qualification Frameworks (TQF)</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* XI. Partnership Process */}
      <Card>
        <CardHeader>
          <CardTitle>XI. Partnership Process</CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold mb-1">Eligibility</h4>
          <ul className="list-disc list-inside text-md mb-2 space-y-1">
            <li>Legally recognized educational or QA institution</li>
            <li>Operating with qualified academic/administrative staff and basic infrastructure</li>
          </ul>
          <h4 className="font-semibold mb-1">Partnership/ Accreditation/ Membership Steps</h4>
          <ol className="list-decimal list-inside text-md space-y-1 mb-2">
            <li>Submit Expression of Interest (EOI)</li>
            <li>Institutional Review / QA Evaluation or Full-Site Visit</li>
            <li>Signing of MoU Agreement / Membership / Accreditation</li>
            <li>Launch of Joint Activities / Listing on SBCODL Portal</li>
          </ol>
        </CardContent>
      </Card>
      <Separator />

      {/* XII. Why Partner with SBCODL? */}
      <Card>
        <CardHeader>
          <CardTitle>XII. Why Partner with SBCODL?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Access to an expanding international QA and accreditation network</li>
            <li>Opportunities for joint branding, audits, recognitions, and co-accreditation models</li>
            <li>Availability of customized QA frameworks, evaluation tools, and policy resources</li>
            <li>Strategic promotion through SBCODL’s global and regional affiliations</li>
            <li>Recognition and visibility via joint reports, co-hosted events, and institutional listings</li>
          </ul>
        </CardContent>
      </Card>
      <Separator />

      {/* XIII. Conclusion */}
      <Card>
        <CardHeader>
          <CardTitle>XIII. Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md mb-2">
            The Solanki Brothers Council for Open and Distance Learning (SBCODL) is an ambitious and trusted organization for advancing education quality, global academic collaboration, and transformational learning models. With a firm commitment to ethics, inclusion, and global relevance, SBCODL welcomes institutions and agencies to join its journey as partners in excellence.
          </p>
          <p className="text-md font-semibold">SBCODL: Transforming Education, Transforming Lives.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardProfile;