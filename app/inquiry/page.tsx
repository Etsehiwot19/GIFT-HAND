"use client"

import { InquiryForm } from "@/components/inquiry-form"
import { Heart, Package, Users, DollarSign, MessageCircle, Shield, Award } from "lucide-react"
import Link from "next/link"

export default function InquiryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">GIFTED-HANDS</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <Package className="h-12 w-12 text-primary" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Bulk Equipment Inquiry
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get personalized quotes for bulk orders and high-end medical equipment. 
              Our expert sales team provides competitive pricing and detailed specifications 
              tailored to your healthcare facility's needs.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center space-y-3 p-6 bg-background/50 rounded-lg border border-border/50">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">Volume Discounts</h3>
                <p className="text-sm text-muted-foreground">
                  Special pricing for bulk orders and long-term partnerships
                </p>
              </div>
              <div className="text-center space-y-3 p-6 bg-background/50 rounded-lg border border-border/50">
                <DollarSign className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">Competitive Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Best-in-class pricing with flexible payment options
                </p>
              </div>
              <div className="text-center space-y-3 p-6 bg-background/50 rounded-lg border border-border/50">
                <MessageCircle className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated support team via WhatsApp, Telegram, and phone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-foreground">Why Choose GIFTED-HANDS?</h2>
            <p className="text-muted-foreground">Trusted by healthcare facilities worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "EFDA Approved", icon: Shield, description: "All equipment meets EFDA standards" },
              { name: "ISO 13485", icon: Award, description: "Quality management certified" },
              { name: "10+ Years", icon: Users, description: "Industry experience" },
              { name: "50+ Hospitals", icon: Heart, description: "Trusted worldwide" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3 p-4">
                <item.icon className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our sales team is ready to help you find the perfect medical equipment solution for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">
                Browse Products
              </button>
            </Link>
            <Link href="/about">
              <button className="px-6 py-3 border border-primary-foreground text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">GIFTED-HANDS</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Empowering healthcare with trusted medical devices since 2010.
          </p>
        </div>
      </footer>
    </div>
  )
}
