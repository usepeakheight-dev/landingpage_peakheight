import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/peakheight-logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2 transition-colors hover:opacity-80">
          <img src={logo} alt="PeakHeight" className="h-8 w-8" />
          <span className="text-xl font-bold font-playfair">PeakHeight</span>
        </Link>
        <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
          Download App
        </Button>
      </div>
    </header>
  );
};
