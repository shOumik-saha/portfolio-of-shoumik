import { Code, Database, ShieldCheck } from "lucide-react";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
    <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary"> Me </span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Research and technical background</h3>
            <p className="text-muted-foreground">
                I work across responsible AI and software systems, with experience in
                privacy-preserving governance design, explainable AI, database benchmarking,
                and full-stack application development.
            </p>
            <p className="text-muted-foreground">
                My current research interests include trustworthy intelligent systems,
                human-in-the-loop methods, and empirical evaluation of software infrastructure.
                I'm Passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving Web landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">{" "}Get In Touch</a>
                <a
                 href="/Shoumik_Academic_CV.pdf"
                 download
                 className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                 >
                 Download Academic CV
                 </a>
                <a
                 href="/Shoumik_Professional_CV.pdf"
                 download
                 className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                 >
                 Download Professional CV
                 </a>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Software systems</h4>
                        <p className="text-muted-foreground">
                            Full-stack implementation, API integration, authentication, and deployment workflows.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Responsible AI</h4>
                        <p className="text-muted-foreground">
                            Privacy-aware governance, explainability, auditing, and access-control design.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Empirical evaluation</h4>
                        <p className="text-muted-foreground">
                            Reproducible, multi-dimensional comparison of database systems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>;
}
