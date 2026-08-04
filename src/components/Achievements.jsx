import { ExternalLink } from "lucide-react";

const achievements = [
    {
        title: "BrandSync AI (Sync AI OS)",
        status: "Live",
        description: "A unified AI marketing platform. My work included authentication and OAuth flows, database schema design, and backend modules.",
        url: "https://sync-ai-os.lovable.app",
    },
    {
        title: "Selenite Care",
        status: "Live",
        description: "A full-stack healthcare e-commerce platform I built independently, including authentication, payments, administrative dashboards, and CI/CD workflows.",
        url: "https://selenitecare.com",
    },
    {
        title: "AI Developer Assistant Agent",
        status: "In progress",
        description: "Currently retrieves GitHub repository metadata through the REST API and generates LLM-based architectural summaries using LangChain and Gemini.",
    },
];

export const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        My <span className="text-primary">Achievements</span>
                    </h2>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                        Selected systems and ongoing technical work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {achievements.map((achievement) => (
                        <article key={achievement.title} className="bg-card border rounded-lg p-6 flex flex-col">
                            <span className={`self-start px-2.5 py-1 text-xs font-semibold uppercase tracking-wide border rounded-full mb-5 ${achievement.status === "In progress" ? "text-amber-700 dark:text-amber-300 border-amber-500/40 bg-amber-500/10" : "text-primary"}`}>
                                {achievement.status}
                            </span>
                            <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                {achievement.description}
                            </p>
                            {achievement.url && (
                                <a
                                    href={achievement.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:underline"
                                >
                                    View live platform <ExternalLink size={16} />
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
