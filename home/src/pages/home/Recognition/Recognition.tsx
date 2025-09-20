import { Card, CardContent } from "../../../components/ui/card"
import { Separator } from "../../../components/ui/separator"

const RecognitionLegitimacy = () => {
  return (
    <div className=" px-4 py-12 bg-white ">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl w-fit p-4 mx-auto rounded-md bg-primary text-white font-bold mb-2 border-4 border-b-primary">Recognitions & Legitimacy</h1>
          <Separator className="w-24 h-1 bg-primary mx-auto my-4" />
          <p className="text-primary">Establishment of Quality Assurance and Accreditation Frameworks for Higher Education</p>
        </div>
        
        <Card className="mb-8 shadow-lg border-t-4 border-t-primary">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed mb-4">
              <span className="font-semibold text-white">The Solanki Brothers Council for Open and Distance Learning (SBCODL) is a non-governmental, non-profit, and independent educational quality assurance and accreditation agency, established in 2022 under the Government of India. SBCODL serves both as a national and international body committed to advancing academic quality, access, and innovation across open, distance, hybrid, campus-based, vocational, and lifelong learning systems.</span>
            </p>
            
            <p className="mb-4">
              We work closely with schools, universities, training institutions, accreditation agencies, and quality networks to promote inclusive education, institutional development, and quality benchmarking. As an independent accreditation, evaluation, and quality assurance body, SBCODL is dedicated to fostering accessible, equitable, and high-quality learning for all learners.
            </p>
            
            <p className="mb-4 bg-green-100 text-primary p-2 rounded-md border-l-4 border-blue-500">
             Legal and Constitutional Basis 
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8 shadow-lg">
          <CardContent className="pt-6">
            <p className="mb-4">
              SBCODL is a registered educational council under the Ministry of Home Affairs, Section 8 non profit company.
            </p>
            
            <p className="mb-4 font-medium">
              It does not receive grants-in-aid from the Government or the UGC; therefore, the UGC Act is not applicable to SBCODL.
            </p>
            
            <div className="bg-green-200 text-primary p-4 rounded-lg mb-4">
              <p>
                As per the Ministry of Home Affairs, Government of India, Notification No. 26/4/52 CC dated 20.09.1952, degrees/diplomas granted by boards or universities incorporated by an Act of the Central or State Legislature are automatically recognized for employment purposes.
              </p>
               <p>
                Independent educational councils like SBCODL enjoy constitutional validity under Articles 14, 19(1)(g), 21, 29, 30, 45, 46, 344, and 351 of the Constitution of India (1950).
                </p>
                <p>
                SBCODL is also accorded protection under the Human Rights Protection Act, 1993 (AIR 1993 SC 2178), ensuring transparency, inclusivity, and legitimacy.
                </p>
            </div>
            
            <div className="flex items-center text-primary gap-4 mb-4 p-3 bg-green-50 rounded-md">
              <div className="min-w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3>
                Quality Assurance and Global Standards
              </h3>
              <p>
               SBCODL is recognized as an international quality board and is aligned with The International Network for Quality Assurance Agencies in Higher Education (INQAAHE) and other oversight bodies.
              </p>
              <p>
                Accredited under BQS Accreditation and ISO 17021 for agency and oversight board functions.
              </p>
              <p>
                Fully licensed and approved by the Chairman of the International Accreditation Council (IAC).
              </p>
              <p>
                This guarantees that SBCODL’s educational services and accreditations meet global standards of credibility, reliability, and quality assurance.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-2">Educational Philosophy and Legacy</h2>
          
          <Card className="mb-6 shadow-md">
            <CardContent className="pt-6">
              <p className="mb-4">
                The concept of open and distance education originated in Berlin in 1856 and was later adopted by Russia and the United Kingdom. Inspired by the vision of British Prime Minister Harold Wilson in the 1960s, the UK established the Open University in 1969, which became a model for global ODL.
              </p>
              
              <p className="mb-4">
                In India, the National Education Policy (1986) placed emphasis on open universities and distance education, a mission that SBCODL continues to advance.
              </p>
              
              <p className="mb-4 font-medium bg-green-100 p-2 rounded-md text-primary">
                We remain committed to: 
              </p>
              <p className="mb-4 font-medium bg-green-100 p-2 rounded-md text-primary">
                Promoting inclusive education for disadvantaged, marginalized, and differently-abled learners. 
              </p>
              <p className="mb-4 font-medium bg-green-100 p-2 rounded-md text-primary">
                Strengthening non-formal and flexible learning opportunities.
              </p>
              <p className="mb-4 font-medium bg-green-100 p-2 rounded-md text-primary">
                Serving as a platform that bridges traditional, hybrid,  campus based and innovative learning systems.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-6 shadow-md">
            <CardContent className="pt-6">
              <p className="mb-4">
                Independent Accreditation & Evaluation Framework
              </p>
              <ul className="list-disc list-inside text-md space-y-2">
              <li>Preparation of the Self-Assessment Report (SAR) by the institution.</li> 
              <li>External Evaluation conducted by a panel of independent experts.</li> 
              <li>Review and Analysis of the expert report by the SBCODL Accreditation Council.</li> 
              <li>Post-Accreditation Monitoring to ensure sustained compliance and quality enhancement.</li> 
              </ul>
              <p className="mb-4 bg-green-100 p-2 rounded-md text-primary">
               Through this framework, SBCODL provides institutional accreditation, program accreditation, and membership opportunities, reinforcing accountability, credibility, and continuous improvement.
              </p>
            </CardContent>
          </Card>
          <Separator />
          
          <p className="mb-4 bg-green-100 p-2 rounded-md text-primary">
            Conclusion
          </p>
          
          <p className="mb-4">
            As previously mentioned, the origins of distance education trace back to Berlin in 1856 and its subsequent global adoption, including the establishment of the UK Open University in 1969. These milestones continue to inspire SBCODL’s commitment to accessible and transformative education for all.
          </p>
          
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <p className="mb-4">
               The Solanki Brothers Council for Open and Distance Learning (SBCODL) has established itself as a legitimate, constitutional, and globally recognized accreditation body, advancing quality assurance, access, and innovation in education.
              </p>
              
              <p className="mb-4">
               By combining national constitutional legitimacy with international standards and recognition, SBCODL ensures that every learner, regardless of their background, has the opportunity to receive quality education that is credible, recognized, and transformative.
              </p>
              
              {/* Removed empty div to clean up markup */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default RecognitionLegitimacy;
