import { ExternalLink } from "lucide-react";

export const ActivitiesSection = () => (
  <section id="activities" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Activities</span>
      </h2>
      <article className="bg-card border rounded-lg p-6 md:p-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-primary mb-2">National competitive technology event · Bangladesh</p>
          <h3 className="text-xl md:text-2xl font-semibold">Finalist, The Infinity AI Buildfest</h3>
        </div>
        <a
          href="https://cloudcampbd.com/verify/4111729b5282737cc45ef8bc"
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Verify result <ExternalLink size={16} />
        </a>
      </article>
    </div>
  </section>
);
