import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 pt-8 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xs font-medium text-foreground mb-3">contact</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:sarahkim1001@gmail.com" 
                className="text-xs text-zinc-600 hover:text-foreground transition-colors"
              >
                sarahkim1001@gmail.com
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-zinc-600 hover:text-foreground transition-colors"
              >
                linkedin
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-medium text-foreground mb-3">location</h3>
            <p className="text-xs text-zinc-600">
              palo alto, ca
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-medium text-foreground mb-3">documents</h3>
            <Link 
              href="#" 
              className="text-xs text-zinc-600 hover:text-foreground transition-colors"
            >
              resume/cv
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
