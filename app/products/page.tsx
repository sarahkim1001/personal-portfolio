import ProjectFrame from "../components/ProjectFrame";

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground mb-3 md:mb-4">
        Products
      </h1>
      <h2 className="text-base md:text-lg text-zinc-500 max-w-2xl mb-8 md:mb-16">
        Design systems and digital tools focused on clarity and user autonomy.
      </h2>
      <p className="max-w-xl text-sm md:text-base text-zinc-600 leading-relaxed">
        This section presents a series of projects exploring how digital interfaces can be structured to support intentional use. The work focuses on balancing technical functionality with straightforward, human-centered design.
      </p>
      <div className="mt-16 md:mt-32 space-y-16 md:space-y-24">
        <ProjectFrame
          title="seventhsense.space"
          role="Creative Technologist & Digital Systems Researcher"
          narrative="Launched in January 2026, seventhsense.space is a research-led platform investigating the intersection of cognitive psychology and digital systems. The project functions as a diagnostic layer for contemporary culture, performing audits on how modern interfaces influence human attention and the formation of identity.

Drawing from technics theory and cultural history, the platform examines the evolving relationship between biological faculties and technical environments. By mapping the ways digital tools store, transmit, and transmute information, the project seeks to develop design frameworks with greater systemic integrity and a deeper respect for human presence."
          metadata="Launched January 2026"
          url="https://seventhsense.space"
          graphPaper={true}
          coordinates="37.4419° N, 122.1430° W"
        />
      </div>
    </div>
  );
}
