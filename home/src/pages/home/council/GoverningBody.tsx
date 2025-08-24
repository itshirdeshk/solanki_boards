import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Separator } from "../../../components/ui/separator"
import { governingBodyMembers } from "../../../data/governingBody"

const GoverningBody = () => {
  
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8">
          Governing Body of SBCODL
        </h1>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-white text-lg">
              The Governing Body of SBCODL constitutes dedicated professionals toward strategic leadership and ethical governance through fostering excellence in open and distance education. Roles and responsibilities constituting the governed body are reflected in the layout below.
            </p>
          </CardContent>
        </Card>

        <Separator className="my-2" />

        

        <Table className="text-primary">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black">Position</TableHead>
              <TableHead className="font-bold text-black">Name</TableHead>
              <TableHead className="font-bold text-black">Key Responsibilities</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {governingBodyMembers.map((member, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{member.position}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>
                  <ul className="list-disc pl-4">
                    {member.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Separator className="my-2" />

        <Card className="text-white mt-8">
          <CardHeader>
            <CardTitle className="text-2xl ">Core Responsibilities of the Governing Body</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white text-lg">
              The Governing Body of the Solanki Brothers Council for Open and Distance Learning (SBCODL) holds the ultimate responsibility for ensuring the integrity, sustainability, and effectiveness of the Council’s mission. Its primary role is to provide strategic direction, uphold accountability, and safeguard the Council’s values while fostering innovation and growth.
            </p>
             <p className="text-white text-lg">
              Key Responsibilities:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Strategic Leadership – Define the vision, mission, and long-term goals of SBCODL.</li>
              <li>Policy Formulation – Approve and oversee governance, academic, and operational policies.</li>
              <li>Financial Oversight – Ensure accountability, transparency, and sustainability in financial management.</li>
              <li>University, College & School Accreditation – Guide and approve processes for institutional accreditation, quality audits, and compliance with national and international standards.</li>
              <li>Membership Development – Facilitate and secure memberships in global educational associations, councils, and agencies across schools, colleges, and universities.</li>
              <li>Ethical Governance – Uphold integrity, fairness, and compliance with laws and statutory requirements.</li>
              <li>Academic Quality Assurance – Oversee academic frameworks, curriculum standards, and evaluation systems.</li>
              <li>Infrastructure & Technology – Ensure adequacy of physical facilities, digital platforms, and learning resources.</li>
              <li>Monitoring & Evaluation – Regularly review institutional performance, outcomes, and global benchmarks.</li>
              <li>Stakeholder Engagement – Foster collaboration with students, faculty, institutions, partners, and communities.</li>
              <li>Capacity Building – Support professional development, research, and innovation initiatives.</li>
              <li>SRisk Management – Identify and mitigate risks related to governance, academics, finances, and operations.</li>
              <li>Sustainability & Social Responsibility – Ensure programs contribute to community development and global good.</li>
              <li>Global Collaboration – Strengthen ties with international accreditation bodies, universities, and education councils for mutual recognition and exchange.</li>
            </ol>

            <p className="mt-6">
              This governance structure ensures accountability, innovation, and a student-centered approach, enabling SBCODL to remain a leader in open and distance learning globally.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default GoverningBody;