import ImageCard from './ImageCard'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

// Image imports remain the same as in the original file
// import primaryYearsImage from '../../assets/images/img2.jpeg'
// import middleYearsImage from '../../assets/images/img4.jpeg'
import upperYearsImage from '../../assets/images/img16.jpeg'
import diplomaProgrammeImage from '../../assets/images/img6.jpeg'
import certificateProgrammeImage from '../../assets/images/img1.jpeg'
import researchProgrammeImage from '../../assets/images/img11.jpeg'

const SCHOOL_SECTIONS = [
    // {
    //     title: 'Middle Years Programme',
    //     image: primaryYearsImage
    // },
    // {
    //     title: 'Upper Years Programme', 
    //     image: middleYearsImage
    // },
    {
        title: 'Under Graduate Programme',
        image: upperYearsImage
    },
    {
        title: 'Post Graduate Programme',
        image: diplomaProgrammeImage
    },
    {
        title: 'Diploma Programme',
        image: certificateProgrammeImage
    },
    {
        title: 'Research Programme',
        image: researchProgrammeImage
    }
]

const SchoolSection = () => {
    return (
        <div className='flex flex-col md:flex-row p-4 md:p-8 lg:p-12 w-full gap-8 md:gap-12 bg-primary/20'>
            {/* Left content column */}
            <div className='w-full flex flex-col justify-start md:sticky md:top-24 md:self-start mb-8 md:mb-0'>
                <div className='text-2xl md:text-3xl lg:text-4xl font-light tracking-wider text-gray-600 leading-tight'>
                    Welcome to the Solanki Brothers Council for Open and Distance Learning (SBCODL)
                    <p className='text-2xl md:text-3xl lg:text-4xl font-bold mt-3 text-gray-800'>
                        "Bridging Today's Classroom to Tomorrow's Dynamic Workplace"
                    </p>
                </div>

                <div className='text-sm 2xl:text-xl font-light tracking-wider text-gray-700 mt-6 leading-relaxed space-y-4'>
                    <p>
                        The Solanki Brothers Council for Open and Distance Learning (SBCODL) is a globally recognized, non-governmental, non-profit, and independent educational council established and incorporated under the Companies Act as a Section 8 entity by the Government of India. SBCODL is also supported by incorporation recognition from the Uttar Pradesh Legislature.
                    </p>
                    <p>
                        Rooted in the vision of a young, future-ready India, SBCODL is committed to improving the quality of open, distance, hybrid, and on-campus education across higher education, vocational training, professional development, and life skills education. We embrace the latest trends in technology-enabled, skill-led learning, with strong backing from the government, academia, and industry.
                    </p>
                    <hr className="my-2 border-gray-300" />
                    <h4 className="font-semibold text-base mt-4">Institutional Accreditation, Program Accreditation & Membership</h4>
                    <p>
                        SBCODL functions as an independent quality assurance and accreditation council, offering:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><b>Institutional Accreditation:</b> Supporting entire institutions in aligning with global standards for governance, academic excellence, and student outcomes.</li>
                        <li><b>Program Accreditation:</b> Evaluating specific academic, professional, and vocational programs to ensure curriculum relevance, outcomes-based assessment, and industry alignment.</li>
                        <li><b>Institutional Membership:</b> Providing educational institutions with access to a global network for benchmarking, quality development, and collaborative innovation.</li>
                    </ul>
                    <p>
                        We offer evaluation services, assessment frameworks, and institutional development support at both national and international levels. Through these mechanisms, SBCODL advances a culture of excellence and accountability across the education sector.
                    </p>
                    <hr className="my-2 border-gray-300" />
                    <h4 className="font-semibold text-base mt-4">Our Academic Philosophy and Focus</h4>
                    <p>
                        SBCODL promotes innovation through academic, vocational, professional, technical, and life skill programs—delivered in both traditional and non-traditional formats. Our mission is to foster societal enrichment and student empowerment through quality education rooted in real-world relevance.
                    </p>
                    <p>
                        We are committed to creating an environment where ideas, enthusiasm, and hard work come together to shape each learner's desired future.
                    </p>
                    <hr className="my-2 border-gray-300" />
                    <h4 className="font-semibold text-base mt-4">What Sets SBCODL Apart</h4>
                    <p>
                        Our technology-enabled learning ecosystem and experiential education model ensure learners are future-ready. Key differentiators include:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Industry-experienced faculty and mentors</li>
                        <li>Virtual simulation labs and practical modules</li>
                        <li>Transdisciplinary and choice-based curriculum structures</li>
                        <li>Observation-based learning, internships, and apprenticeships</li>
                        <li>Robust industry linkage for placement and career development</li>
                    </ul>
                    <hr className="my-2 border-gray-300" />
                    <h4 className="font-semibold text-base mt-4">Empowering the Future from Farrukhabad, Uttar Pradesh</h4>
                    <p>
                        Located in Farrukhabad, Uttar Pradesh, SBCODL serves not just students, but also alumni and the broader community—equipping them with essential skills for a digitally empowered world. Our focus remains clear: to empower learners to navigate and excel in today's dynamic professional landscape.
                    </p>
                    <p>
                        With international partnerships, accreditation initiatives, and institutional collaborations, SBCODL is a trusted name in driving global quality standards in education.
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 mt-8'>
                    <Link to="/chairman-message" className="w-full sm:w-auto">
                        <Button
                            variant='outline'
                            className='bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700 px-6 py-3 text-base font-medium transition-colors duration-200 w-full'
                        >
                            Chairman's Message
                        </Button>
                    </Link>

                    <Link to="/learn-more" className="w-full sm:w-auto">
                        <Button
                            variant='outline'
                            className='bg-gray-700 hover:bg-gray-800 text-white border-gray-700 hover:border-gray-800 px-6 py-3 text-base font-medium transition-colors duration-200 w-full'
                        >
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Right column with scrollable images */}
            <div className='w-full md:w-3/5 flex flex-col gap-4  justify-center items-center'>
                {SCHOOL_SECTIONS.map((section, index) => (
                    <div key={index} className='w-full transition-transform duration-300 hover:scale-105 bg-yellow-400 flex flex-col justify-center items-center'>
                        <ImageCard
                            item={{
                                image: section.image,
                                desc1: section.title,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SchoolSection