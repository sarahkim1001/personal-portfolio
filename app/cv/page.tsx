import Link from "next/link";

export default function CV() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      {/* Download PDF Button */}
      <div className="mb-12">
        <a
          href="/resume.pdf"
          download
          className="inline-block text-sm font-medium text-zinc-600 hover:text-foreground transition-colors border-b border-zinc-300 hover:border-foreground"
        >
          Download PDF
        </a>
      </div>

      <h1 className="text-5xl font-medium tracking-tight text-foreground mb-4">
        Curriculum Vitae
      </h1>
      <h2 className="text-lg text-zinc-500 max-w-2xl mb-16">
        Sarah Kim — Creative Technologist & Product Designer
      </h2>

      <div className="space-y-16">
        {/* Education */}
        <section>
          <h3 className="text-sm font-medium text-foreground mb-6 uppercase tracking-wide">
            Education
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-foreground leading-relaxed">
                <span className="font-medium">NYU, B.S. in Integrated Design and Media</span> (2025)
              </p>
            </div>
            <div>
              <p className="text-zinc-600 leading-relaxed">
                Minor in Media, Culture, and Communication
              </p>
            </div>
            <div>
              <p className="text-zinc-600 leading-relaxed">
                Liberal Studies Core & Global Research in Florence, Italy
              </p>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section>
          <h3 className="text-sm font-medium text-foreground mb-6 uppercase tracking-wide">
            Experience Highlights
          </h3>
          <div className="space-y-4 leading-relaxed">
            <p className="text-foreground">
              Focus on work in <span className="font-medium">Cognitive Auditing</span> and <span className="font-medium">Digital Systems Research</span>. Korean American designer from Palo Alto, CA, whose observations of the technology industry's rapid evolution have fundamentally shaped design ethics and approach to human-centered systems.
            </p>
            <p className="text-zinc-600">
              Background grounded in examining how digital interfaces influence attention, memory, and identity. Work bridges professional product design with rigorous contemporary art practice to explore the behavioral impact of emerging media.
            </p>
          </div>
        </section>

        {/* Methodologies */}
        <section>
          <h3 className="text-sm font-medium text-foreground mb-6 uppercase tracking-wide">
            Methodologies
          </h3>
          <ul className="space-y-3">
            <li className="text-foreground leading-relaxed">
              <span className="font-medium">Speculative Futurecasting:</span>
              <span className="text-zinc-600"> Research-led design approach that anticipates and prototypes future digital environments</span>
            </li>
            <li className="text-foreground leading-relaxed">
              <span className="font-medium">Mixed-Media Inquiry:</span>
              <span className="text-zinc-600"> Art-led research using multidisciplinary approaches to explore complex relationships between users and technology</span>
            </li>
            <li className="text-foreground leading-relaxed">
              <span className="font-medium">Digital Integrity:</span>
              <span className="text-zinc-600"> Designing systems that prioritize human presence and somatic awareness, ensuring technology respects biological boundaries</span>
            </li>
          </ul>
        </section>

        {/* Selected Works */}
        <section>
          <h3 className="text-sm font-medium text-foreground mb-6 uppercase tracking-wide">
            Selected Works
          </h3>
          <div className="space-y-4">
            <div>
              <Link 
                href="/products" 
                className="text-foreground hover:text-zinc-600 transition-colors leading-relaxed block"
              >
                <span className="font-medium">Products</span>
                <span className="text-zinc-600"> — Design systems and digital tools focused on clarity and user autonomy</span>
              </Link>
            </div>
            <div>
              <Link 
                href="/art" 
                className="text-foreground hover:text-zinc-600 transition-colors leading-relaxed block"
              >
                <span className="font-medium">Art</span>
                <span className="text-zinc-600"> — Investigations into digital media, memory, and the human experience</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Download PDF Button at Bottom */}
      <div className="mt-16 pt-8 border-t border-zinc-100">
        <a
          href="/resume.pdf"
          download
          className="inline-block text-sm font-medium text-zinc-600 hover:text-foreground transition-colors border-b border-zinc-300 hover:border-foreground"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
