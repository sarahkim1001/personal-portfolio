import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-5xl font-medium tracking-tight text-foreground mb-4">
        About
      </h1>
      <h2 className="text-lg text-zinc-500 max-w-2xl mb-16">
        Creative Technologist & Product Designer
      </h2>
      
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Biographical Details */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Education</h3>
              <p className="text-zinc-600 leading-relaxed">
                B.S. Integrated Design and Media, NYU (2025)
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Minor</h3>
              <p className="text-zinc-600 leading-relaxed">
                Media, Culture, and Communication
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Background</h3>
              <p className="text-zinc-600 leading-relaxed">
                Liberal Studies Core & Florence, Italy (Global Research)
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Origin</h3>
              <p className="text-zinc-600 leading-relaxed">
                Palo Alto, CA
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Connect</h3>
              <div className="space-y-1">
                <a 
                  href="mailto:sarahkim1001@gmail.com" 
                  className="text-xs text-zinc-600 hover:text-foreground transition-colors leading-relaxed block"
                >
                  sarahkim1001@gmail.com
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-600 hover:text-foreground transition-colors leading-relaxed block"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Documentation</h3>
              <div className="space-y-1">
                <Link 
                  href="/cv" 
                  className="text-xs text-zinc-600 hover:text-foreground transition-colors leading-relaxed block"
                >
                  CV
                </Link>
                <a 
                  href="/Sarah-Kim-Resume-2026.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-600 hover:text-foreground transition-colors leading-relaxed block"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Narrative and Methodology */}
        <div className="lg:col-span-2 space-y-8">
          {/* The Narrative */}
          <div className="space-y-4 leading-relaxed">
            <p className="text-foreground">
              Sarah Kim is a Creative Technologist and Product Designer practicing at the intersection of cognitive psychology and digital systems. Her work investigates the behavioral impact of emerging media, mapping how modern interfaces influence human attention, memory, and the construction of identity.
            </p>
            <p className="text-foreground">
              Born and raised in Palo Alto, Sarah developed an early fascination with the rapid evolution of the technology industry and its profound effect on the global landscape. She formalized this interest at NYU, graduating with a Bachelor of Science in Integrated Design and Media. Her academic foundation—grounded in a Liberal Studies core and a formative year in Florence, Italy—informs her analysis of the historical relationship between cultural environments, narrative frameworks, and human behavior.
            </p>
          </div>

          {/* Methodology Section */}
          <div className="space-y-6">
            <h3 className="font-medium text-foreground text-lg">
              Methodology: Research-Led Design & Systems Thinking
            </h3>
            <p className="text-foreground leading-relaxed">
              Sarah functions as a Digital Systems Researcher and Developer, bridging the gap between technical execution and human-centered theory. Her multidisciplinary approach focuses on:
            </p>
            
            <ul className="space-y-4">
              <li>
                <span className="font-medium text-foreground">Cognitive Auditing:</span>
                <span className="text-zinc-600"> Analyzing how interface patterns—such as automated curation and infinite consumption models—impact cognitive load and user autonomy.</span>
              </li>
              <li>
                <span className="font-medium text-foreground">Somatic Information Flow:</span>
                <span className="text-zinc-600"> Designing intuitive systems that prioritize the biological experience of space and movement, using visual principles to create grounded environments for absorbing complex data.</span>
              </li>
              <li>
                <span className="font-medium text-foreground">Mixed-Media Inquiry:</span>
                <span className="text-zinc-600"> Utilizing art-led prototyping to investigate the evolving relationship between users and technology, grounded in art history and sociology.</span>
              </li>
              <li>
                <span className="font-medium text-foreground">Systemic Integrity:</span>
                <span className="text-zinc-600"> Developing digital architectures that prioritize human presence and somatic awareness, ensuring technology respects biological boundaries rather than overwhelming them.</span>
              </li>
            </ul>
          </div>

          {/* The Vision */}
          <div className="space-y-4 leading-relaxed py-24">
            <h3 className="font-medium text-foreground text-lg">The Vision</h3>
            <p className="text-foreground">
              Sarah's mission is to foster a more intentional relationship with our digital environments. By auditing the hidden psychological infrastructures of everyday tools, she seeks to move design toward a state of Digital Sovereignty—where technology empowers the individual to reclaim their attention and navigate the world with greater clarity and presence.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Appendix */}
      <div className="mt-24 pt-12 border-t border-zinc-100">
        <h3 className="font-medium text-sm text-foreground mb-8">Technical Appendix</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-medium text-foreground mb-3 text-sm">Production & Systems</h4>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>Figma</li>
              <li>Adobe Creative Cloud</li>
              <li>Component Library Architecture</li>
              <li>Prototyping</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-3 text-sm">Development & Logic</h4>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>React</li>
              <li>Cursor (AI-assisted development)</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-3 text-sm">Experimental & Inquiry</h4>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>Soundscape Design (Lo-fi filters)</li>
              <li>Digital Zine Publishing (Continuous Scroll)</li>
              <li>Mixed-Media Prototyping</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-3 text-sm">Frameworks</h4>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>Human-Centered Design</li>
              <li>Speculative Futurecasting</li>
              <li>Cognitive Auditing</li>
              <li>Digital Sovereignty Research</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
