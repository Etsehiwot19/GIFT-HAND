"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Star, Shield, Award, Users, ChevronRight, Heart, MessageSquare, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { CartSidebar } from "@/components/cart-sidebar"
import { UserMenu } from "@/components/auth/user-menu"

export default function HomePage() {
  const { addItem } = useCart()
  const { isAuthenticated } = useAuth()

  const featuredProducts = [
    {
      id: 1,
      title: "CardioMonitor Pro",
      description: "Advanced cardiac monitoring system with real-time analytics and AI-powered insights.",
      image: "/cardiac-monitoring-device-medical-equipment.png",
      badge: "Best Seller",
      price: 45000,
      category: "Cardiac Monitoring",
      features: ["Real-time monitoring"],
    },
    {
      id: 2,
      title: "SurgicalAssist X1",
      description: "Precision surgical assistance robot with haptic feedback and 4K visualization.",
      image: "/surgical-robot-medical-device-operating-room.png",
      badge: "New Arrival",
      price: 125000,
      category: "Surgical Equipment",
      features: ["4K Visualization", "Haptic Feedback", "Precision Control"],
    },
    {
      id: 3,
      title: "VitalSense Monitor",
      description: "Comprehensive vital signs monitoring with wireless connectivity and alerts.",
      image: "/vital-signs-monitor-medical-device-hospital.png",
      badge: "Limited Offer",
      price: 18000,
      category: "Patient Monitoring",
      features: ["Wireless connectivity", "Smart alerts", "Multi-parameter"],
    },
  ]

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">GIFTED-HANDS</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/inquiry" className="text-foreground hover:text-primary transition-colors">
                Bulk Inquiry
              </Link>
              <a href="/about#certifications" className="text-foreground hover:text-primary transition-colors">
                Certifications
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search products..." className="pl-10 w-64" />
              </div>
              <CartSidebar />
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Trusted by 50+ Hospitals Worldwide
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  Empowering Care with
                  <span className="text-primary"> Trusted Devices</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                  Advanced medical devices designed for precision, reliability, and patient safety. Supporting
                  healthcare professionals with cutting-edge technology since 2007.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/products">
                    Explore Products
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/inquiry">
                    Bulk Equipment Inquiry
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Hospitals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                <Image
                  src="/modern-medical-devices-in-hospital-setting-with-he.png"
                  alt="Medical devices in hospital setting"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span className="font-semibold">EFDA Approved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Featured Products
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Innovative Medical Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our range of cutting-edge medical devices designed to enhance patient care and clinical outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge
                      variant={
                        product.badge === "Best Seller"
                          ? "default"
                          : product.badge === "New Arrival"
                            ? "secondary"
                            : "destructive"
                      }
                      className="absolute top-4 left-4"
                    >
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
                  </div>

                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-lg font-semibold text-primary">${product.price.toLocaleString()}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                    <Button className="flex-1 bg-transparent" variant="outline">
                      View Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Certifications */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Certifications & Trust
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Certified Excellence in Healthcare
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { name: "EFDA Approved", icon: Shield },
              { name: "ISO 13485", icon: Award },
              { name: "CE Marking", icon: Badge },
              { name: "HIPAA Compliant", icon: Users },
            ].map((cert, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
              >
                <cert.icon className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">{cert.name}</h3>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The CardioMonitor Pro has revolutionized our cardiac care unit. The real-time analytics have helped us catch critical conditions 30% faster.",
                author: "Dr. Sarah Abebe",
                role: "Chief Cardiologist",
                hospital: "Zewditu Memorial Hospita",
                rating: 5,
              },
              {
                quote:
                  "Outstanding reliability and precision. The SurgicalAssist X1 has improved our surgical outcomes significantly with its advanced visualization.",
                author: "Dr. alemu kebede",
                role: "Head of Surgery",
                hospital: "City Medical Center",
                rating: 5,
              },
              {
                quote:
                  "Excellent support team and innovative technology. The VitalSense Monitor has streamlined our patient monitoring processes.",
                author: "Nurse Manager helen gebru",
                role: "ICU Manager",
                hospital: "Regional Healthcare System",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-muted-foreground italic">"{testimonial.quote}"</blockquote>

                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.hospital}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Quick Contact
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Get Instant Support via WhatsApp & Telegram
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Need immediate assistance? Our sales team is available 24/7 through your preferred messaging platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-800">WhatsApp Support</CardTitle>
                <p className="text-green-700">
                  Get instant responses to your questions about bulk orders, pricing, and product specifications.
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/+251911234567?text=Hello! I need help with medical equipment.', '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-800">Telegram Support</CardTitle>
                <p className="text-blue-700">
                  Connect with our team for detailed discussions about high-end equipment and bulk pricing.
                </p>
                <Button 
                  onClick={() => window.open('https://t.me/giftedhands_medical?text=Hello! I need help with medical equipment.', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Chat on Telegram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Transform Your Healthcare Facility?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
            Join hundreds of hospitals nationwide who trust our medical devices for superior patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/inquiry">
                Get Bulk Quote
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        <Button
          onClick={() => window.open('https://wa.me/+251911234567?text=Hello! I\'m interested in medical equipment. Please contact me.', '_blank')}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
        <Button
          onClick={() => window.open('https://t.me/giftedhands_medical?text=Hello! I\'m interested in medical equipment. Please contact me.', '_blank')}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Gifted-hands</span>
              </div>
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
                <div>About Us</div>
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
            © 2024 Gifted-hands. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  )
}
