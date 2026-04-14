import { ExternalLink } from "lucide-react"

const certificates = [
    {
        id: 1,
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "August 2025",
        image: "/projects/cert1.jpg", // optional: screenshot of your cert
        credentialUrl: "https://freecodecamp.org/certification/fcc-1c6251c0-42fa-4557-8605-726903672c98/responsive-web-design",
    },
    {
        id: 2,
        title: "Frontend Developer (React)",
        issuer: "HackerRank",
        date: "November 2025",
        image: "/projects/cert2.jpg",
        credentialUrl: "https://www.hackerrank.com/certificates/a0ce7792d813",
    },
    {
        id: 3,
        title: "ReactJS Foundation Course",
        issuer: "ScholarHat",
        date: "January 2026",
        image: "/projects/cert3.png",
        credentialUrl: "https://www.scholarhat.com/certificate/verify",
    },
]

export const CertificatesSection = () => {
    return (
        <section id="certificates" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    My <span className="text-primary">Certificates</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some certifications I've earned. Each represents dedication to continuous learning and skill development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-x5 card-hover"
                        >
                            {cert.image && (
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {cert.issuer}
                                    </span>
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {cert.date}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{cert.title}</h3>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}