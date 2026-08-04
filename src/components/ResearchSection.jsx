import { ExternalLink } from "lucide-react";

const publications = [
  {
    title:
      "SENTRY-AI: A Privacy-Preserving, Human-in-the-Loop Framework for Educational Resilience and Multimodal Detection of AI-Enabled Cyberbullying in U.S. Schools",
    venue: "Springer Lecture Notes in Networks and Systems · IJCACI 2026",
    status: "Accepted and presented",
    contribution:
      "Co-designed the privacy-preserving governance architecture, including SHAP-based explainability, audit logging, and role-based access control.",
  },
  {
    title:
      "NoSQL Database Selection Process: An Integrated Proof of Concept and Comparison for Targeted Document Store Databases",
    venue: "IEEE Xplore · 2025",
    status: "Published",
    contribution:
      "Designed and executed the multi-dimensional benchmarking study comparing MongoDB, Couchbase, and CouchDB.",
    url: "https://ieeexplore.ieee.org/document/10914487",
  },
];

export const ResearchSection = () => (
  <section id="research" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Researches</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Peer-reviewed work in responsible AI, privacy-aware systems, and empirical database evaluation.
        </p>
      </div>

      <div className="space-y-6">
        {publications.map((publication) => (
          <article key={publication.title} className="bg-card border rounded-lg p-6 md:p-8 text-left">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-primary">{publication.venue}</span>
                  <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wide border rounded-full">
                    {publication.status}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold leading-snug">{publication.title}</h3>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Contribution:</span>{" "}
                  {publication.contribution}
                </p>
              </div>
              {publication.url && (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${publication.title} on IEEE Xplore`}
                  className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  IEEE Xplore <ExternalLink size={16} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
