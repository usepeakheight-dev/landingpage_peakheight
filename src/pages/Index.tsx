import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, FileText } from "lucide-react";
import logo from "@/assets/peakheight-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/5 to-background" />
          <div className="container px-4 md:px-6 relative">
            <div className="mx-auto max-w-3xl text-center animate-fade-in">
              <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                <img src={logo} alt="PeakHeight" className="w-16 h-16" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-playfair mb-6">
                PeakHeight
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Your journey to reach new heights starts here. Explore our privacy policy and terms of service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/privacy">
                    <Shield className="mr-2 h-5 w-5" />
                    Privacy Policy
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/terms">
                    <FileText className="mr-2 h-5 w-5" />
                    Terms of Service
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 border-t border-border/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Privacy First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We take your privacy seriously. Learn how we protect and handle your personal information.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 h-auto text-primary">
                  <Link to="/privacy">Read Privacy Policy →</Link>
                </Button>
              </div>

              <div className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Clear Terms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transparent and fair terms of service that outline your rights and responsibilities.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 h-auto text-primary">
                  <Link to="/terms">Read Terms of Service →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 border-t border-border/40 bg-card/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
                Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're here to help. Contact us anytime at{" "}
                <a 
                  href="mailto:usepeakheight@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  usepeakheight@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
