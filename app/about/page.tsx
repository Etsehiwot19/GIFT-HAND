import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Heart, Target, Eye, Users, Award, Shield, Download, Building, Globe, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">GIFTED-HANDS </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-primary font-medium">
                About Us
              </Link>
              <a href="/#products" className="text-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#certifications" className="text-foreground hover:text-primary transition-colors">
                Certifications
              </a>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search products..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              About Gifted-hands 
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Pioneering Healthcare Innovation
              <span className="text-primary"> Since 2003</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We are dedicated to advancing healthcare through innovative medical devices that enhance patient outcomes
              and support healthcare professionals nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground text-pretty">
                  To empower healthcare professionals with cutting-edge medical devices that improve patient care,
                  enhance clinical outcomes, and advance the future of medicine through innovation and reliability.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground text-pretty">
                  To be the global leader in medical device innovation, creating a world where advanced technology
                  seamlessly integrates with compassionate care to transform lives and communities.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                <Image
                  src="/medical teams using advanced.png"
                  alt="Medical team using advanced devices"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Experience */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              15 Years of Healthcare Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From a small startup to a global leader, our journey has been marked by continuous innovation and
              unwavering commitment to healthcare excellence.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2003",
                  title: "Company Founded",
                  description: "Started with a vision to revolutionize medical device technology",
                  icon: Building,
                  side: "left",
                },
                {
                  year: "2006",
                          title: "First EFDA Approval",
        description: "Received EFDA approval for our flagship CardioMonitor device",
                  icon: Shield,
                  side: "right",
                },
                {
                  year: "2009",
                  title: "NATIONAL Expansion",
                  description: "Expanded operations , serving 100+ hospitals",
                  icon: Globe,
                  side: "left",
                },
                {
                  year: "2012",
                  title: "AI Integration",
                  description: "Launched AI-powered diagnostic capabilities across our product line",
                  icon: Award,
                  side: "right",
                },
                {
                  year: "2015",
                  title: "500th Hospital Partnership",
                  description: "Reached milestone of serving 500+ healthcare facilities worldwide",
                  icon: Users,
                  side: "left",
                },
                {
                  year: "2017",
                  title: "Next-Gen Devices",
                  description: "Introduced revolutionary surgical assistance and monitoring systems",
                  icon: CheckCircle,
                  side: "right",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${milestone.side === "right" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-1/2 ${milestone.side === "right" ? "pl-8" : "pr-8"}`}>
                    <Card className="border-border/50 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <milestone.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { number: "50+", label: "Hospitals Served" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Cities" },
              { number: "1M+", label: "Patients Helped" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section id="certifications" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Certifications & Compliance
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Certified Excellence & Regulatory Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our commitment to quality and safety is demonstrated through rigorous certifications and compliance with
              international healthcare standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: "EFDA Approved",
                description: "All devices approved by the Ethiopian Food and Drug Administration for medical use",
                icon: Shield,
                color: "text-primary",
              },
              {
                name: "ISO 13485",
                description: "Quality management systems for medical devices design and manufacturing",
                icon: Award,
                color: "text-secondary",
              },
              {
                name: "CE Marking",
                description: "European Conformity marking for medical device safety and performance",
                icon: CheckCircle,
                color: "text-primary",
              },
              {
                name: "HIPAA Compliant",
                description: "Full compliance with Health Insurance Portability and Accountability Act",
                icon: Users,
                color: "text-secondary",
              },
            ].map((cert, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-muted rounded-lg">
                      <cert.icon className={`h-12 w-12 ${cert.color}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Compliance Documents */}
          <div className="bg-muted/50 rounded-2xl p-8">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-foreground">Compliance Documentation</h3>
              <p className="text-muted-foreground">
                Download our comprehensive compliance documents and certifications
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "EFDA Clearances",
                  description: "Complete EFDA clearance documentation for all approved devices",
                  size: "2.4 MB",
                },
                {
                  title: "ISO 13485 Certificate",
                  description: "Current ISO 13485:2016 quality management system certificate",
                  size: "1.8 MB",
                },
                {
                  title: "CE Declaration of Conformity",
                  description: "European CE marking declarations and technical documentation",
                  size: "3.1 MB",
                },
              ].map((doc, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <h4 className="font-semibold text-foreground">{doc.title}</h4>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                        <div className="text-xs text-muted-foreground">PDF • {doc.size}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Partner with a Trusted Leader in Medical Innovation
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
            Join our mission to advance healthcare through innovative medical devices and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Our Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Our Products
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Gifted-hands</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Empowering healthcare with trusted medical devices since 2010.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Products</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Cardiac Monitors</div>
                <div>Surgical Equipment</div>
                <div>Vital Signs Monitors</div>
                <div>Diagnostic Tools</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/about" className="block hover:text-primary transition-colors">
                  About Us
                </Link>
                <div>Certifications</div>
                <div>Careers</div>
                <div>News</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Contact Us</div>
                <div>Technical Support</div>
                <div>Documentation</div>
                <div>Training</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2017 Gifted-hands. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  )
}
