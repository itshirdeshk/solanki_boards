import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Separator } from "../../../components/ui/separator";
import { BookOpen, GraduationCap, Globe, Users, Award, Building2, Shield, Target, Heart, Lightbulb } from 'lucide-react';

const InstitutionalProfile = () => {
  return (
    <div className="mx-auto p-6 space-y-6 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Solanki Brothers Council for Open and Distance Learning (SBCODL)
        </h1>
        <p className="text-xl text-primary">
          Empowering Learners, Enriching Lives
        </p>
      </div>

      {/* Main Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Introduction Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md mb-4">
              Founded in 2022, the Solanki Brothers Council for Open and Distance Learning (SBCODL) is an autonomous and pioneering educational council established as a Section 8 Non-Profit Entity under the Companies Act of India. Officially registered with the NITI Aayog, Government of India (Unique ID: UP/2024/0414971), SBCODL also holds MSME registration (UDYAM-UP-25-0003415) and is approved for tax exemptions under Sections 12A and 80G of the Income Tax Act, supporting its philanthropic mission.
            </p>
            <p className="text-md">
              Headquartered in Farrukhabad, Uttar Pradesh, SBCODL is dedicated to democratizing education by offering accessible, inclusive, and technology-enabled learning through flexible open and distance education programs. It addresses educational barriers and provides quality learning opportunities to students regardless of geographic, social, or economic limitations.
            </p>
          </CardContent>
        </Card>

        {/* Vision and Mission Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Vision and Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Vision</h3>
              <p className="text-md">
                To become a globally recognized institution in open and distance education, empowering learners through innovative, affordable, and inclusive learning and contributing to a more just and educated world.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">Mission</h3>
              <ul className="list-disc list-inside text-md space-y-2">
                <li>To ensure access to quality education for all, irrespective of location or socio-economic status.</li>
                <li>To deliver globally benchmarked programs emphasizing knowledge, skills, and ethical values.</li>
                <li>To integrate digital and interactive pedagogy for greater engagement and retention.</li>
                <li>To build international partnerships that elevate academic standards.</li>
                <li>To promote lifelong learning aligned with the global workforce and 21st-century skills.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Legal Status and Governance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Legal Status and Governance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-48">
            <ul className="space-y-2 text-md">
              <li>Registered as a Section 8 Company (Non-Profit)</li>
              <li>NITI Aayog Registered (UP/2024/0414971)</li>
              <li>MSME Registered (UDYAM-UP-25-0003415)</li>
              <li>12A & 80G Certified for donor tax benefits</li>
              <li>Compliant with all Indian statutory educational norms</li>
              <li>Operates as an independent educational council, not a traditional school or college</li>
            </ul>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Academic Programs and Services */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Academic Programs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Higher Education</h3>
                <ul className="list-disc list-inside text-md space-y-2">
                  <li>Undergraduate & Postgraduate Programs in Commerce, Management, IT, and Humanities</li>
                  <li>Skill-based Diploma & Advanced Diploma Programs</li>
                  <li>Structured for working professionals and distance learners</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Certificate Programs (Distance Mode)</h3>
                <ul className="list-disc list-inside text-md space-y-2">
                  <li>Short-term and vocational certificate courses</li>
                  <li>Industry-relevant skills for employability</li>
                  <li>Open to 10th/12th pass candidates and beyond</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Learner-Centric Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-md">
              <li>Flexible Learning Schedules</li>
              <li>24/7 Learning Portals with recorded lectures, eBooks, assessments</li>
              <li>Personal Academic Mentorship</li>
              <li>Career Guidance & Job Preparation</li>
              <li>International Student Exchange opportunities</li>
              <li>Tech Tools: LMS, AI Analytics, Virtual Labs</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Global Partnerships */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Global MoU Partners
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-48">
            <ul className="space-y-2 text-md">
              <li>Union de Universidades de América Latina y el Caribe (UDUALC)</li>
              <li>International Federation of Private Universities (IFPU)</li>
              <li>European Association for Higher Education Advancement (EAHEA)</li>
              <li>International Association for Quality Assurance in Pre-Tertiary and Higher Education (QAHE)</li>
              <li>Mercosul Accreditation Agency (MACCA)</li>
              <li>International Education Quality Accreditation Body (IEQAB)</li>
              <li>Nigeria Council for Theological Studies and Christian Education (NICTSCE)</li>
              <li>Distance Open Learning Programmes of Africa – Kenya (DOLPAK)</li>
              <li>Distance Open Learning Programmes of Africa – East Africa (DOLPA-EA)</li>
            </ul>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Quality and Technology */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Quality Assurance and Academic Excellence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-md">
              <li>Highly Qualified Faculty with domain expertise</li>
              <li>Updated Curricula aligned with industry and global standards</li>
              <li>Transparent Assessment Frameworks</li>
              <li>Continuous Professional Development for educators</li>
              <li>Data-Driven Student Performance Monitoring</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Technology & Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-md">
              <li>Smart Classrooms & E-Learning Studios</li>
              <li>Learning Management System (LMS) with centralized access</li>
              <li>AI-Powered Virtual Labs & Analytics</li>
              <li>Digital Libraries with global research access</li>
              <li>Mobile Learning App for students on the go</li>
              <li>Data Privacy & Security Compliance (IT Act, GDPR aligned)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Community Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Community Engagement and Social Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-md">
            <li>Education Programs for disadvantaged groups</li>
            <li>Scholarships & Financial Aid</li>
            <li>Digital Literacy Missions in Rural India</li>
            <li>Women's Empowerment through Vocational Training</li>
            <li>Workshops aligned with UN Sustainable Development Goals (SDGs)</li>
          </ul>
        </CardContent>
      </Card>

      {/* Study Center Partnership */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Partner with SBCODL: Become a Study Center
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Benefits Include:</h3>
              <ul className="list-disc list-inside text-md space-y-2">
                <li>Use of SBCODL Brand and Curriculum</li>
                <li>LMS and e-learning support</li>
                <li>Faculty training and onboarding</li>
                <li>Shared revenue model</li>
                <li>Promotion and enrollment assistance</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">Process:</h3>
              <ol className="list-decimal list-inside text-md space-y-2">
                <li>Submit Expression of Interest (EOI)</li>
                <li>Center evaluation by SBCODL</li>
                <li>Affiliation/ Accreditation / MoU Agreement and onboarding</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md">
            The Solanki Brothers Council for Open and Distance Learning (SBCODL) stands as a beacon of accessible, high-quality education in the 21st century. As a globally inclined, digitally empowered, and ethically governed non-profit educational council, SBCODL is shaping the future of learning—where every learner, regardless of background, has the right to succeed.
          </p>
          <p className="text-md mt-4 font-semibold">
            SBCODL: Transforming Education, Transforming Lives.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstitutionalProfile;