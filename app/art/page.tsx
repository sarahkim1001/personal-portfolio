import ArtCard from "../components/ArtCard";

export default function Art() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground mb-3 md:mb-4">
        Art
      </h1>
      <h2 className="text-base md:text-lg font-normal text-zinc-500 max-w-2xl mb-8 md:mb-16">
        Investigations into digital media, memory, and the human experience.
      </h2>
      <p className="max-w-xl text-sm md:text-base text-zinc-600 leading-relaxed">
        A collection of research-led works examining our relationship with technology. Through various formats—including infographic maps, live audioreactive projections, and textural soundscapes—these projects explore how modern media influences daily life and cultural narrative.
      </p>
      <p className="max-w-xl text-zinc-300 font-medium text-xs md:text-sm mt-4 md:mt-6">
        Materials are currently being added. Please check back soon.
      </p>
      <div className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-16 md:gap-y-24">
        <ArtCard
          title="The Unembodied Library"
          inquiry="A mixed-media installation that visualizes the Intelligence Mirage by presenting a high-speed stream of conflicting digital narratives that fade upon consumption. The work uses disappearing 'ghost text' to manifest the gap between information access and the biological 'storing' mechanism of the brain. It challenges the viewer to move beyond passive consumption and confront the Somatic Desync inherent in modern information overload."
          medium="Mixed-Media"
          year="2026"
          status="In-Progress"
        />
        <ArtCard
          title="Digital Memory Archive"
          inquiry="An exploration of how digital interfaces reshape our relationship with memory and personal history. This work examines the tension between preservation and loss in the Information Age, questioning what remains when data becomes the primary medium of recollection."
          medium="Mixed-Media"
          year="2026"
          status="In-Progress"
        />
      
        <ArtCard
          title="Breaking the Loop"
          inquiry="A digital zine investigating the psychological impact of infinite scroll interfaces. Through experimental typography and narrative structure, this project maps how automated curation influences attention and cultural consumption patterns."
          medium="Mixed-Media"
          year="2026"
          status="In-Progress"
        />
      </div>
    </div>
  );
}
