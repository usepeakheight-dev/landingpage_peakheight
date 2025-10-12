import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="container px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 PeakHeight. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link 
              to="/privacy" 
              className="transition-colors hover:text-primary font-medium"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="transition-colors hover:text-primary font-medium"
            >
              Terms of Service
            </Link>
            <a 
              href="mailto:usepeakheight@gmail.com"
              className="transition-colors hover:text-primary font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
