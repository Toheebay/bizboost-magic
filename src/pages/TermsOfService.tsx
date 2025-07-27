import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mt-2">Last updated: January 2024</p>
          </div>

          <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using BizBoost Marketing services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BizBoost Marketing provides social media marketing services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Business listing and promotion across social media platforms</li>
                <li>Content creation and posting services</li>
                <li>Marketing campaign management</li>
                <li>Referral system participation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our pricing structure is as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Basic promotion: ₦1,200</li>
                <li>Premium promotion: ₦5,000</li>
                <li>Payment must be made before service delivery</li>
                <li>All payments are processed securely through Flutterwave</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Users agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete business information</li>
                <li>Not submit false, misleading, or inappropriate content</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Service Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide excellent service, BizBoost Marketing does not guarantee specific results or outcomes from marketing campaigns. Results may vary based on multiple factors including market conditions, competition, and content quality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Refunds may be considered on a case-by-case basis within 7 days of service purchase, provided that the service has not been delivered or initiated. All refund requests must be submitted in writing to our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using our services, you consent to our data practices as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate this agreement at any time with written notice. Upon termination, all outstanding obligations must be fulfilled, and access to services may be immediately revoked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                BizBoost Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-card p-4 rounded-lg mt-4">
                <p className="text-sm">Email: adebayoajani23@gmail.com</p>
                <p className="text-sm">Phone: +2347067412852</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;