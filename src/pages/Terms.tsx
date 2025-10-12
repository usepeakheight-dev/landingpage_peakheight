import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/TableOfContents";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const tocItems = [
  { id: "agreement", title: "Agreement to Terms" },
  { id: "intellectual", title: "Intellectual Property Rights" },
  { id: "representations", title: "User Representations" },
  { id: "prohibited", title: "Prohibited Activities" },
  { id: "contributions", title: "User-Generated Contributions" },
  { id: "license", title: "Contribution License" },
  { id: "mobile", title: "Mobile Application License" },
  { id: "third-party", title: "Third-Party Websites & Content" },
  { id: "advertisers", title: "Advertisers" },
  { id: "management", title: "App Management" },
  { id: "privacy", title: "Privacy Policy" },
  { id: "termination", title: "Term & Termination" },
  { id: "modifications", title: "Modifications & Interruptions" },
  { id: "governing", title: "Governing Law" },
  { id: "disputes", title: "Dispute Resolution" },
  { id: "corrections", title: "Corrections" },
  { id: "purchases", title: "Purchases & Payment" },
  { id: "cancellation", title: "Cancellation Policy" },
  { id: "reviews", title: "Guidelines for Reviews" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "disclaimer", title: "Disclaimer" },
];

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-playfair mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: September 17, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents - Hidden on mobile */}
              <aside className="hidden lg:block">
                <TableOfContents items={tocItems} />
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="agreement" id="agreement" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Agreement to Terms
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>These Terms of Service ("Terms") are a legally binding agreement between you and Roman Co Ltd., a company incorporated under the laws of Canada and registered in Alberta, doing business as Peak Height ("Peak Height," "we," "us," or "our"), governing your access to and use of the Peak Height mobile application and any related websites, services, and features (collectively, the "App"). By downloading, installing, accessing, or using the App, you acknowledge that you have read, understand, and agree to be bound by these Terms. If you do not agree, do not access or use the App.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="intellectual" id="intellectual" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Intellectual Property Rights
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>All content within the App including code, text, graphics, logos, designs, audio, video, and trademarks is owned by or licensed to Peak Height. Content is protected by copyright, trademark, and international intellectual property laws. Unauthorized use is prohibited.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="representations" id="representations" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      User Representations
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>By using the App, you represent that:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>You have the legal capacity to agree to these Terms.</li>
                        <li>You are at least 13 years old (or have parental consent if required by your jurisdiction).</li>
                        <li>You will not use the App for illegal or unauthorized purposes.</li>
                        <li>You will not attempt to access the App through automated means (bots, scripts, etc.).</li>
                        <li>Your use of the App complies with all applicable laws.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="prohibited" id="prohibited" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Prohibited Activities
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>You agree not to misuse the App. This includes, but is not limited to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Using the App for commercial purposes without authorization.</li>
                        <li>Attempting to reverse engineer, copy, or resell the App.</li>
                        <li>Uploading harmful code, spam, or abusive content.</li>
                        <li>Harassing other users or interfering with App operations.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="contributions" id="contributions" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      User-Generated Contributions
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>The App may allow you to post or share content (e.g., text, images, feedback). You understand that such contributions may be visible to others and will be treated as non-confidential.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="license" id="license" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Contribution License
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>By submitting content, you grant Peak Height a worldwide, royalty-free license to use, reproduce, modify, and distribute your contributions for purposes including improvement, marketing, and community engagement.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="mobile" id="mobile" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Mobile Application License
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We grant you a limited, non-transferable license to install and use the App on devices you own or control. You must not: reverse engineer or modify the App, use the App for unauthorized commercial purposes, or share the App in ways that bypass intended restrictions. For Apple iOS users, these Terms incorporate Apple App Store rules. Apple is not responsible for maintenance, support, or warranty claims.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="third-party" id="third-party" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Third-Party Websites & Content
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>The App may include links or content from third parties. We do not control or endorse such content and are not responsible for its accuracy, safety, or reliability.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="advertisers" id="advertisers" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Advertisers
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>Currently, Peak Height does not display third-party ads. If this changes, updates will be made to these Terms.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="management" id="management" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      App Management
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We reserve the right to monitor and remove inappropriate content, restrict or suspend access to users who violate these Terms, and manage the App to maintain proper functionality.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="privacy" id="privacy" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Privacy Policy
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>Your use of the App is also governed by our Privacy Policy, which outlines how we collect and handle your data. By using the App, you consent to data processing as described in that policy.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="termination" id="termination" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Term & Termination
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>These Terms remain in effect while you use the App. We may suspend or terminate access at any time, without notice, if you violate these Terms or applicable laws.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="modifications" id="modifications" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Modifications & Interruptions
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We may update, suspend, or discontinue the App at any time. While we aim for smooth operation, interruptions may occur. We are not liable for service disruptions or modifications.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="governing" id="governing" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Governing Law
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>If unresolved, disputes shall be resolved exclusively in the courts of the Province of Alberta, Canada.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="disputes" id="disputes" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Dispute Resolution
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>If a dispute arises, you agree to first contact our project manager at <a href="mailto:usepeakheight@gmail.com" className="text-primary hover:underline">usepeakheight@gmail.com</a> for resolution. If unresolved, disputes will be handled under the jurisdiction outlined in the Governing Law section.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="corrections" id="corrections" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Corrections
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>The App may contain errors or outdated information. We reserve the right to correct or update content at any time.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="purchases" id="purchases" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Purchases & Payment
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>Payments for subscriptions or in-app purchases are processed through app store providers (e.g., Apple App Store). You agree to provide accurate billing details and authorize recurring charges if applicable. Prices may change, and taxes may apply.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cancellation" id="cancellation" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Cancellation Policy
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>All purchases are non-refundable. You may cancel subscriptions via your app store account. Cancellation takes effect at the end of your current billing cycle.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="reviews" id="reviews" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Guidelines for Reviews
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>If you leave reviews or feedback:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>be honest and respectful</li>
                        <li>do not use profanity, hate speech, or discriminatory language</li>
                        <li>do not post false or misleading claims</li>
                      </ul>
                      <p>We may remove or decline reviews at our discretion.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="liability" id="liability" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Limitation of Liability & Disclaimer of Warranties
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>Peak Height provides general lifestyle, fitness, and health guidance. We do not guarantee results such as increased height. Individual outcomes vary, and the App is not a substitute for medical advice. Except where liability cannot be excluded by law, Peak Height is not responsible for indirect or consequential damages, including lost profits, data, or goodwill.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="disclaimer" id="disclaimer" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Disclaimer
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>The App is provided "as is" and "as available" without warranties of any kind. We do not guarantee uninterrupted service, accuracy, or specific outcomes. Use of the App is at your own risk.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
