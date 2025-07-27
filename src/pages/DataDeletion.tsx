import { ArrowLeft, Trash2, Mail, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataDeletion = () => {
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
              User Data Deletion Instructions
            </h1>
            <p className="text-muted-foreground mt-2">How to request deletion of your personal data</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Your Right to Data Deletion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Under data protection regulations, you have the right to request the deletion of your personal data. 
                  BizBoost Marketing respects this right and provides a straightforward process for data deletion requests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trash2 className="w-5 h-5 text-primary" />
                  What Data Can Be Deleted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    You can request deletion of the following types of data:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Personal contact information (name, email, phone number)</li>
                    <li>Business information and descriptions</li>
                    <li>Marketing preferences and communication history</li>
                    <li>Account data and profile information</li>
                    <li>Referral program participation data</li>
                  </ul>
                  <div className="bg-card p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                      <strong>Important Note:</strong> Some data may be retained for legal compliance, such as payment records for tax purposes, 
                      which we are required to keep for a specific period under Nigerian law.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  How to Request Data Deletion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Step 1: Send a Deletion Request</h3>
                    <p className="text-muted-foreground mb-4">
                      Send an email to our data protection team with your deletion request:
                    </p>
                    <div className="bg-card p-4 rounded-lg border">
                      <p className="font-medium">Email: adebayoajani23@gmail.com</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Subject: Data Deletion Request - [Your Name]
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Step 2: Include Required Information</h3>
                    <p className="text-muted-foreground mb-4">
                      To process your request efficiently, please include:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Your full name as registered with our service</li>
                      <li>Email address associated with your account</li>
                      <li>Phone number (if provided)</li>
                      <li>Business name (if applicable)</li>
                      <li>Specific data you want deleted (or "all personal data")</li>
                      <li>Reason for deletion (optional but helpful)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Step 3: Identity Verification</h3>
                    <p className="text-muted-foreground">
                      For security purposes, we may request additional verification to confirm your identity before 
                      processing the deletion request. This helps protect your data from unauthorized deletion requests.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Processing Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-card rounded-lg border">
                      <div className="text-2xl font-bold text-primary mb-2">24-48 hrs</div>
                      <p className="text-sm text-muted-foreground">Initial Response</p>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border">
                      <div className="text-2xl font-bold text-primary mb-2">7-14 days</div>
                      <p className="text-sm text-muted-foreground">Processing Time</p>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border">
                      <div className="text-2xl font-bold text-primary mb-2">30 days</div>
                      <p className="text-sm text-muted-foreground">Maximum Timeline</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    We will acknowledge your request within 24-48 hours and complete the deletion within 7-14 business days. 
                    In complex cases, we may take up to 30 days as permitted by law.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Happens After Deletion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>You will receive confirmation once your data has been deleted</li>
                    <li>Your business listings will be removed from our promotional materials</li>
                    <li>You will be unsubscribed from all marketing communications</li>
                    <li>Your referral program participation will be terminated</li>
                    <li>Any ongoing marketing campaigns will be stopped</li>
                  </ul>
                  <div className="bg-card p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      <strong>Note:</strong> Data deletion is irreversible. If you wish to use our services again in the future, 
                      you will need to provide your information again.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    For any questions about data deletion or our privacy practices:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <p className="font-medium mb-2">Data Protection Team</p>
                      <p className="text-sm text-muted-foreground">Email: adebayoajani23@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Phone: +2347067412852</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <p className="font-medium mb-2">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Link to="/privacy">
                <Button variant="outline">
                  View Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;