import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Target, Camera, Users, CheckCircle2, Smartphone, TrendingUp, Award, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-4xl text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-playfair mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight pb-2">
                Reach your Peak Height
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Height isn't just inherited, it's earned
              </p>
              <div className="flex flex-col items-center gap-3 mb-8">
                <Button asChild size="lg" className="text-lg h-14 px-8 bg-foreground text-background hover:bg-foreground/90 shadow-lg">
                  <a href="https://apps.apple.com/us/app/peak-height/id6752793377" target="_blank" rel="noopener noreferrer">
                    Download Peak Height
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground/80 text-center max-w-xs">
                  📱 Coming from TikTok? Hold the button ↑ and select "Open in Browser"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                Everything You Need to Maximize Your Height
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A complete growth system designed by experts
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <div className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Daily Growth Routines</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Personalized daily tasks: exercises, stretching, nutrition, sleep tracking with streak motivation
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Expert Exercise Library</h3>
                <p className="text-muted-foreground leading-relaxed">
                  100+ scientifically-proven exercises targeting posture, spine decompression, and growth stimulation
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                  <Camera className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Smart Nutrition Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI-powered food recognition, growth-optimized meal plans, and protein/calcium-rich recipes
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Community Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join the Tribe: share progress, get motivated, and celebrate wins with fellow height-growers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-32 border-b border-border bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Start your growth journey in 3 simple steps
              </p>
            </div>
            
            <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Set Your Goal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enter your current height and growth target to personalize your journey
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Follow Your Routine</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete daily tasks: exercises, nutrition, sleep - build your streak!
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Track Progress</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Watch your height increase with weekly measurements and progress photos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                Trusted by Thousands Growing Taller
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-foreground" />
                ))}
              </div>
              <p className="text-xl text-muted-foreground">
                4.8/5 stars from real users
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "I've gained 2 inches in 4 months! The daily routines are easy to follow and the app keeps me motivated with streaks."
                </p>
                <p className="font-semibold">— Mark T.</p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "The nutrition tracker and meal plans are game-changers. My posture improved and I feel taller already!"
                </p>
                <p className="font-semibold">— Mo S.</p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Science-backed and actually works. The community support kept me going when I wanted to quit."
                </p>
                <p className="font-semibold">— Seva K.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Users report 1-3 inches growth in 6 months</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Science-Backed Section */}
        <section className="py-20 md:py-32 border-b border-border bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
                Built on Real Science, Not False Promises
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Evidence-based approach combining orthopedic research and growth optimization
              </p>
              
              <div className="grid gap-6 md:grid-cols-4 mb-12">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <TrendingUp className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Exercise</h3>
                  <p className="text-sm text-muted-foreground">Targeted movements</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Camera className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Nutrition</h3>
                  <p className="text-sm text-muted-foreground">Growth-optimized</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Zap className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Sleep</h3>
                  <p className="text-sm text-muted-foreground">Recovery tracking</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Target className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Posture</h3>
                  <p className="text-sm text-muted-foreground">Alignment focus</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="py-20 md:py-32 border-b border-border bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-12 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <details className="group p-6 rounded-xl border border-border bg-card">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    How long until I see results?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Most users notice posture improvements within 2-3 weeks. Measurable height gains typically appear after 2-3 months of consistent daily routines. Results vary based on age, genetics, and commitment.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-border bg-card">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    Is this scientifically proven?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Yes! Our methods are based on peer-reviewed research in orthopedics, sports science, and nutrition. We focus on maximizing natural growth through proven factors: exercise, nutrition, sleep, and posture.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-border bg-card">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    What age does this work for?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Best results are for ages 14-25 during active growth phases. However, adults of any age can benefit from improved posture, spine decompression, and better habits that maximize their natural height potential.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-border bg-card">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    Can I really grow taller?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    While genetics play a role, most people have 1-3 inches of untapped potential through posture correction, spine decompression, and optimized growth factors. We help you reach YOUR maximum natural height.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-border bg-card">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    What makes Peak Height different?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We're the only app combining all 4 growth factors in one place: exercises, nutrition, sleep, and posture. Plus, our AI tracking, community support, and streak-based motivation keep you consistent—the key to results.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
