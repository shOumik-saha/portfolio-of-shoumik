import { Bot, Code2, Database, FlaskConical, Server } from "lucide-react";

const skillGroups = [
    {
        title: "Frontend",
        icon: Code2,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        evidence: "Applied across full-stack web projects.",
    },
    {
        title: "Backend",
        icon: Server,
        skills: ["Node.js", "Express", "Laravel", "REST APIs"],
        evidence: "Applied in BrandSync AI and Selenite Care.",
    },
    {
        title: "Data & Identity",
        icon: Database,
        skills: ["PostgreSQL", "MongoDB", "Prisma", "Authentication & OAuth"],
        evidence: "Used for application data, access, and account flows.",
    },
    {
        title: "AI & Delivery",
        icon: Bot,
        skills: ["LangChain", "Gemini / LLM APIs", "Docker", "GitHub & CI/CD"],
        evidence: "Applied in AI agents and deployment workflows.",
    },
    {
        title: "Research Methods",
        icon: FlaskConical,
        skills: ["System Benchmarking", "SHAP Explainability", "Audit Logging", "Role-Based Access Control"],
        evidence: "Applied in published database and responsible-AI research.",
    },
];

export const SkillsSection = () => (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Technologies applied across personal and professional projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {skillGroups.map((group) => {
                    const Icon = group.icon;

                    return (
                    <article key={group.title} className="bg-card border border-t-2 border-t-primary/60 rounded-lg p-5 text-left flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-2 rounded-md bg-primary/10 text-primary" aria-hidden="true">
                                <Icon size={18} />
                            </span>
                            <h3 className="font-semibold text-lg">{group.title}</h3>
                        </div>
                        <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                            {group.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="px-2.5 py-1 text-sm border rounded-full bg-secondary/50 text-muted-foreground"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 pt-4 border-t text-xs leading-relaxed text-muted-foreground">
                            {group.evidence}
                        </p>
                    </article>
                    );
                })}
            </div>
        </div>
    </section>
);
