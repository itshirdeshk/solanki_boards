import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "../../../components/ui/alert";
import { Badge } from "../../../components/ui/badge";
import {
  Calendar,
  TrendingUp,
  Award,
  Users,
  Bell,
  ExternalLink,
  Globe,
  FileText,
  Download
} from "lucide-react";

// Import news images
// import DistanceLearning from "../../../assets/images/certificates/CIAMP_Cert.jpg";
import CallPaper from "../../../assets/pdf/3rd_sbcodl_conf_call.pdf";

const latestNews = [
  {
    title: "3rd SBCODL Annual International Conference",
    date: "November 2-4, 2025",
    category: "Events",
    summary: "Transforming Education Through Innovation, Accreditation & Accessibility - Join universities, colleges, schools, accreditation agencies, and international partners.",
    content: '3rd SBCODL Annual International Conference
Theme: Transforming Education Through Innovation, Accreditation & Accessibility
 November 2–4, 2025
 Virtual & Onsite (Hosted from Farrukhabad, Uttar Pradesh, India)
 Website: www.sbiea.co.in Email :- info@sbiea.co.in

Day 1 – Sunday, 2nd November 2025
Theme: Transforming Education Through Innovation, Accreditation & Accessibility

Time (IST)	Session Description	Speakers / Participants
09:30 – 10:00 AM	Opening Ceremony & Welcome Address	Dr. Arvind Singh, President, SBCODL
Guest of Honor Address: “Pathways of International Accreditation in Higher Education”	Dr. Escalante (UDUALC / CEAI)
10:00 – 11:00 AM	Keynote Session: “Regional Collaboration and Pathways of International Accreditation in Higher Education”	Dr. Escalante (UDUALC / CEAI)
11:15 – 12:30 PM	Panel Session I – Strengthening Global Partnerships in Accreditation	Experts from SBCODL, QAHE, ARIA, BQS
12:30 – 01:30 PM	Lunch / Break	
01:30 – 03:00 PM	Roundtable Dialogue I – Innovation in Open & Distance Education: Quality Benchmarks & Regulatory Challenges	Conference Experts
03:15 – 04:30 PM	Networking Session & Bilateral Meetings with International Partners	Delegates and Partners
Day 2 – Monday, 3rd November 2025
Theme: Quality Assurance & Evaluation Frameworks

Time (IST)	Session Description	Speakers / Participants
09:30 – 10:30 AM	Special Plenary Session: “The Role of CEAI and UDUALC in Promoting Quality Assurance across Latin America and Beyond”	Dr. Escalante
10:45 – 12:30 PM	Panel Session II – Mutual Recognition of Accreditation Standards	Representatives from LAM-PTKes, AKKORK, EAHEA, QAHE
12:30 – 01:30 PM	Lunch / Break	
01:30 – 03:00 PM	Workshop I – International Mechanisms for Peer Evaluation & Accreditation Audits	Workshop Facilitators
03:15 – 04:30 PM	Collaborative Consultation on Draft Global Roadmap for Dual Accreditation Systems	Panel and Participants
Note: Dr. Escalante concludes his participation on this day.

Day 3 – Tuesday, 4th November 2025
Theme: Innovations & Future of Global Education

Time (IST)	Session Description	Speakers / Participants
09:30 – 10:30 AM	Keynote Session: “Artificial Intelligence and the Future of Accreditation”	Keynote Speaker
10:45 – 12:30 PM	Panel Session III – Digital Learning Ecosystems & Hybrid Accreditation Models	Panelists
12:30 – 01:30 PM	Lunch / Break	
01:30 – 03:00 PM	Workshop II – Capacity Building for Faculty Development in the Global South	Workshop Facilitators
03:15 – 04:00 PM	Closing Ceremony, Summary, and Release of Joint Resolutions	Conference Chair and Organizing Committee
    featured: true,
    icon: Globe,
    images: [],
    // Optional PDF attachments - only shows when provided
    pdfs: [
      {
        title: "Conference Call for Papers",
        url: CallPaper,
        description: "Complete conference program and details"
      },
    ],
    ctaLink: {
      url: "/institutes/event-registration",
      title: "Register for Conference",
      external: true
    }
  }
];

const NewsPage = ({
  pageTitle = "Latest News & Updates"
}) => {
  const featuredNews = latestNews.filter(news => news.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-gray-100 text-primary hover:text-white">
              SBCODL
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {pageTitle}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest developments, achievements, and announcements
              from Solanki Brothers Council for Open and Distance Learning.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 gap-4 bg-gray-400">
            <TabsTrigger value="overview" className="text-white">Featured News</TabsTrigger>
            <TabsTrigger value="all-news" className="text-white">All News</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-blue-800">Stay Informed</h2>
                <p className="text-gray-600 leading-relaxed">
                  Keep up with the latest news, updates, and announcements from SBCODL.
                  From academic achievements to new program launches, we keep our community
                  informed about all important developments.
                </p>
                <Alert className="bg-blue-50 border-blue-200">
                  <AlertTitle className="text-blue-800">News Updates</AlertTitle>
                  <AlertDescription className="text-blue-700">
                    Follow our news section for regular updates on admissions, events,
                    Dual Accreditation Systems, and student achievements.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100 flex flex-col items-center text-center">
                  <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-blue-800">Latest Updates</h3>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100 flex flex-col items-center text-center">
                  <Award className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-blue-800">Achievements</h3>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100 flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-blue-800">Community News</h3>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100 flex flex-col items-center text-center">
                  <Bell className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-blue-800">Announcements</h3>
                </div>
              </div>
            </div>

            {/* Featured News Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-800">Featured News</h3>
              <div className="grid gap-6">
                {featuredNews.map((news, index) => (
                  <div key={index} className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-200 shadow-sm">
                    <div className="flex flex-col gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-blue-100 text-blue-800">{news.category}</Badge>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {news.date}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">{news.title}</h4>
                        <p className="text-gray-600 mb-3">{news.summary}</p>
                        <p className="text-gray-700 text-sm mb-4">{news.content}</p>
                      </div>

                      {/* Multiple Images Section */}
                      {news.images && news.images.length > 0 && (
                        <div className="space-y-3">
                          <h5 className="text-sm font-medium text-blue-800">Related Images:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {news.images.map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative h-48 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
                                onClick={() => window.open(image, '_blank')}
                                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    window.open(image, '_blank');
                                  }
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label={`View image ${imgIndex + 1} for ${news.title} in full size`}
                              >
                                <img
                                  src={image}
                                  alt={`${news.title} - Image ${imgIndex + 1}`}
                                  className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
                                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23f3f4f6' stroke='%23d1d5db' stroke-width='2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3ENo Image Available%3C/text%3E%3C/svg%3E";
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* PDF Documents Section */}
                      {news.pdfs && news.pdfs.length > 0 && (
                        <div className="space-y-3">
                          <h5 className="text-sm font-medium text-blue-800">Related Documents:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {news.pdfs.map((pdf, pdfIndex) => (
                              <a
                                key={pdfIndex}
                                href={pdf.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-colors group"
                              >
                                <div className="flex-shrink-0">
                                  <FileText className="h-8 w-8 text-red-600 group-hover:text-red-700" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h6 className="text-sm font-medium text-gray-900 truncate">
                                    {pdf.title}
                                  </h6>
                                  <p className="text-xs text-gray-600 mt-1">
                                    {pdf.description}
                                  </p>
                                </div>
                                <div className="flex-shrink-0">
                                  <Download className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Call to Action Button */}
                      {news.ctaLink && (
                        <div className="pt-4 border-t border-blue-100">
                          {news.ctaLink.external ? (
                            <a
                              href={news.ctaLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                            >
                              {news.ctaLink.title}
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          ) : (
                            <a
                              href={news.ctaLink.url}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                            >
                              {news.ctaLink.title}
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="all-news" className="space-y-8">
            <div className="grid gap-6">
              {latestNews.map((news, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs text-blue-800 border-blue-200">{news.category}</Badge>
                          {news.featured && <Badge className="bg-orange-100 text-orange-800 text-xs">Featured</Badge>}
                        </div>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">{news.title}</h3>
                      <p className="text-gray-600 mb-2">{news.summary}</p>
                      <p className="text-gray-700 text-sm mb-4">{news.content}</p>
                    </div>

                    {/* Multiple Images Section */}
                    {news.images && news.images.length > 0 && (
                      <div className="space-y-3">
                        <h5 className="text-sm font-medium text-blue-800">Related Images:</h5>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                          {news.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="relative w-full h-24 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
                              onClick={() => window.open(image, '_blank')}
                              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  window.open(image, '_blank');
                                }
                              }}
                              tabIndex={0}
                              role="button"
                              aria-label={`View image ${imgIndex + 1} for ${news.title} in full size`}
                            >
                              <img
                                src={image}
                                alt={`${news.title} - Image ${imgIndex + 1}`}
                                className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23f3f4f6' stroke='%23d1d5db' stroke-width='1'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='10' fill='%236b7280' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* PDF Documents */}
                    {news.pdfs && news.pdfs.length > 0 && (
                      <div className="space-y-3">
                        <h5 className="text-sm font-medium text-blue-800">Related Documents:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {news.pdfs.map((pdf, pdfIndex) => (
                            <a
                              key={pdfIndex}
                              href={pdf.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group shadow-sm hover:shadow-md"
                            >
                              <div className="flex-shrink-0">
                                <FileText className="h-6 w-6 text-red-600 group-hover:text-red-700" />
                              </div>
                              <div className="flex-grow min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-900">
                                  {pdf.title}
                                </p>
                                {pdf.description && (
                                  <p className="text-xs text-gray-500">
                                    {pdf.description}
                                  </p>
                                )}
                              </div>
                              <div className="flex-shrink-0">
                                <Download className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Call to Action Button */}
                    {news.ctaLink && (
                      <div className="pt-3 mt-3 border-t border-gray-200">
                        {news.ctaLink.external ? (
                          <a
                            href={news.ctaLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 text-sm font-medium"
                          >
                            {news.ctaLink.title}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <a
                            href={news.ctaLink.url}
                            className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 text-sm font-medium"
                          >
                            {news.ctaLink.title}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default NewsPage;