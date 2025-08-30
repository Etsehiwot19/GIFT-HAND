"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Heart, Filter, Star, ChevronRight, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"

const products = [
  {
    id: 1,
    name: "CardioMonitor Pro",
    category: "Cardiac Monitoring",
    price: 45000,
    image: "/cardiac-monitoring-device-medical-equipment.png",
    badge: "Best Seller",
    badgeVariant: "default" as const,
    rating: 4.9,
    reviews: 127,
    description:
      "Advanced cardiac monitoring system with real-time analytics and AI-powered insights for comprehensive patient care.",
    features: [
      "Real-time ECG monitoring",
      "AI-powered arrhythmia detection",
      "Cloud connectivity",
      "24/7 remote monitoring",
      "EFDA approved",
    ],
    specifications: {
      Display: "15-inch touchscreen",
      Channels: "12-lead ECG",
      "Battery Life": "8 hours continuous",
      Connectivity: "Wi-Fi, Bluetooth, Ethernet",
      Certifications: "EFDA, CE, ISO 13485",
    },
    benefits: [
      "Reduces false alarms by 60%",
      "Improves patient outcomes",
      "Streamlines workflow",
      "24/7 technical support",
    ],
  },
  {
    id: 2,
    name: "SurgicalAssist X1",
    category: "Surgical Equipment",
    price: 125000,
    image: "/surgical-robot-medical-device-operating-room.png",
    badge: "New Arrival",
    badgeVariant: "secondary" as const,
    rating: 4.8,
    reviews: 89,
    description:
      "Precision surgical assistance robot with haptic feedback and 4K visualization for minimally invasive procedures.",
    features: [
      "4K ultra-HD visualization",
      "Haptic feedback system",
      "Precision control arms",
      "AI-assisted guidance",
      "Sterile design",
    ],
    specifications: {
      Resolution: "4K Ultra HD",
      Arms: "4 precision robotic arms",
      Feedback: "Force feedback haptic",
      Sterilization: "Autoclave compatible",
      Integration: "OR system compatible",
    },
    benefits: [
      "Reduces surgery time by 30%",
      "Minimally invasive procedures",
      "Enhanced precision",
      "Faster patient recovery",
    ],
  },
  {
    id: 3,
    name: "VitalSense Monitor",
    category: "Patient Monitoring",
    price: 18000,
    image: "/vital-signs-monitor-medical-device-hospital.png",
    badge: "Limited Offer",
    badgeVariant: "destructive" as const,
    rating: 4.7,
    reviews: 203,
    description: "Comprehensive vital signs monitoring with wireless connectivity and intelligent alert system.",
    features: [
      "Multi-parameter monitoring",
      "Wireless connectivity",
      "Smart alert system",
      "Trend analysis",
      "Mobile app integration",
    ],
    specifications: {
      Parameters: "ECG, SpO2, NIBP, Temp, Resp",
      Display: "12-inch color LCD",
      Connectivity: "Wi-Fi, Bluetooth",
      Battery: "6 hours backup",
      Alarms: "Visual and audible",
    },
    benefits: [
      "Continuous patient monitoring",
      "Early warning system",
      "Reduced nursing workload",
      "Improved patient safety",
    ],
  },
  {
    id: 4,
    name: "DiagnosticPro Scanner",
    category: "Diagnostic Equipment",
    price: 85000,
    image: "/diagnostic-ultrasound-scanner-medical-device.png",
    badge: "Popular",
    badgeVariant: "secondary" as const,
    rating: 4.6,
    reviews: 156,
    description:
      "High-resolution diagnostic ultrasound scanner with advanced imaging capabilities and AI-enhanced diagnostics.",
    features: [
      "High-resolution imaging",
      "AI diagnostic assistance",
      "Multiple probe compatibility",
      "DICOM integration",
      "Portable design",
    ],
    specifications: {
      Frequency: "2-15 MHz",
      Display: "21-inch LED monitor",
      Probes: "Linear, Convex, Phased Array",
      Storage: "1TB internal storage",
      Connectivity: "DICOM, USB, Ethernet",
    },
    benefits: [
      "Enhanced diagnostic accuracy",
      "Faster scan times",
      "Improved image quality",
      "Comprehensive reporting",
    ],
  },
  {
    id: 5,
    name: "InfusionSmart Pump",
    category: "Infusion Systems",
    price: 12000,
    image: "/smart-infusion-pump-medical-device.png",
    badge: "Certified",
    badgeVariant: "default" as const,
    rating: 4.8,
    reviews: 94,
    description: "Smart infusion pump with dose error reduction system and wireless monitoring capabilities.",
    features: ["Dose error reduction", "Wireless monitoring", "Drug library", "Barcode scanning", "Battery backup"],
    specifications: {
      "Flow Rate": "0.1-999 mL/hr",
      Accuracy: "±2%",
      Battery: "4 hours backup",
      Display: "Color touchscreen",
      Safety: "Multiple safety checks",
    },
    benefits: ["Reduces medication errors", "Improves patient safety", "Streamlines workflow", "Real-time monitoring"],
  },
  {
    id: 6,
    name: "RespiCare Ventilator",
    category: "Respiratory Care",
    price: 35000,
    image: "/mechanical-ventilator-respiratory-care-device.png",
    badge: "Advanced",
    badgeVariant: "secondary" as const,
    rating: 4.9,
    reviews: 78,
    description: "Advanced mechanical ventilator with intelligent ventilation modes and comprehensive monitoring.",
    features: [
      "Intelligent ventilation modes",
      "Lung protective strategies",
      "Advanced monitoring",
      "Touch screen interface",
      "Remote connectivity",
    ],
    specifications: {
      Modes: "Volume, Pressure, SIMV, CPAP",
      "Tidal Volume": "50-2000 mL",
      PEEP: "0-50 cmH2O",
      Display: "15-inch touchscreen",
      Connectivity: "Hospital network",
    },
    benefits: [
      "Improved patient outcomes",
      "Reduced ventilator days",
      "Enhanced monitoring",
      "User-friendly interface",
    ],
  },
]

const categories = [
  "All Products",
  "Cardiac Monitoring",
  "Surgical Equipment",
  "Patient Monitoring",
  "Diagnostic Equipment",
  "Infusion Systems",
  "Respiratory Care",
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Products")
  const [sortBy, setSortBy] = useState("name")
  const { addItem } = useCart()

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
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
              <span className="text-xl font-bold text-foreground">MedDevices Pro</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-primary font-medium">
                Products
              </Link>
              <a href="/about#certifications" className="text-foreground hover:text-primary transition-colors">
                Certifications
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <CartSidebar />
              <Button variant="outline" size="sm">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Products
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Advanced Medical Devices for
              <span className="text-primary"> Every Healthcare Need</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Explore our comprehensive range of EFDA-approved medical devices designed to enhance patient care and
              support healthcare professionals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{filteredProducts.length} products found</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="rating">Sort by Rating</SelectItem>
                  <SelectItem value="reviews">Sort by Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge variant={product.badgeVariant} className="absolute top-4 left-4">
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
                  </div>

                  <div className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-lg font-semibold text-primary">${product.price.toLocaleString()}</div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          View Details
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                          <DialogDescription className="text-base">{product.description}</DialogDescription>
                        </DialogHeader>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div className="space-y-6">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={500}
                              height={400}
                              className="w-full rounded-lg"
                            />

                            <div className="flex items-center space-x-4">
                              <Badge variant={product.badgeVariant}>{product.badge}</Badge>
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span className="font-medium">{product.rating}</span>
                                <span className="text-muted-foreground">({product.reviews} reviews)</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <Tabs defaultValue="features" className="w-full">
                              <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="features">Features</TabsTrigger>
                                <TabsTrigger value="specs">Specifications</TabsTrigger>
                                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                              </TabsList>

                              <TabsContent value="features" className="space-y-4 mt-4">
                                <h4 className="font-semibold text-foreground">Key Features</h4>
                                <div className="space-y-3">
                                  {product.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                      <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </TabsContent>

                              <TabsContent value="specs" className="space-y-4 mt-4">
                                <h4 className="font-semibold text-foreground">Technical Specifications</h4>
                                <div className="space-y-3">
                                  {Object.entries(product.specifications).map(([key, value]) => (
                                    <div
                                      key={key}
                                      className="flex justify-between items-center py-2 border-b border-border/50"
                                    >
                                      <span className="font-medium text-foreground">{key}</span>
                                      <span className="text-muted-foreground">{value}</span>
                                    </div>
                                  ))}
                                </div>
                              </TabsContent>

                              <TabsContent value="benefits" className="space-y-4 mt-4">
                                <h4 className="font-semibold text-foreground">Clinical Benefits</h4>
                                <div className="space-y-3">
                                  {product.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                      <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground">{benefit}</span>
                                    </div>
                                  ))}
                                </div>
                              </TabsContent>
                            </Tabs>

                            <div className="space-y-4 pt-4 border-t border-border">
                              <div className="text-xl font-semibold text-primary">
                                ${product.price.toLocaleString()}
                              </div>
                              <div className="flex flex-col sm:flex-row gap-3">
                                <Button className="flex-1" onClick={() => handleAddToCart(product)}>
                                  Add to Cart
                                </Button>
                                <Button variant="outline" className="flex-1 bg-transparent">
                                  Request Quote
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={`/inquiry?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`}>
                        Quick Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All Products")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Need Help Choosing the Right Device?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
            Our medical device specialists are here to help you find the perfect solution for your healthcare facility.
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
              Schedule a Demo
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
                <span className="text-lg font-bold">MedDevices Pro</span>
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
            © 2024 MedDevices Pro. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  )
}
