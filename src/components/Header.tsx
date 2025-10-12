import { Link } from "react-router-dom";
import { Mountain } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2 transition-colors hover:text-primary">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-playfair">PeakHeight</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm">
          <Link 
            to="/privacy" 
            className="transition-colors hover:text-primary font-medium"
          >
            Privacy
          </Link>
          <Link 
            to="/terms" 
            className="transition-colors hover:text-primary font-medium"
          >
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
};
