"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Loader2, MessageCircle, Phone, Mail, Building, Package, Users, DollarSign, MessageSquare } from "lucide-react"

interface InquiryFormProps {
  onSuccess?: () => void
}

export function InquiryForm({ onSuccess }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    equipmentType: "",
    quantity: "",
    budget: "",
    timeline: "",
    requirements: "",
    preferredContact: "email",
    agreeToTerms: false,
  })

  // Pre-fill form with URL parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const product = urlParams.get('product')
      const category = urlParams.get('category')
      
      if (product || category) {
        setFormData(prev => ({
          ...prev,
          equipmentType: product || prev.equipmentType,
          requirements: category ? `Category: ${category}${product ? `\nProduct: ${product}` : ''}` : prev.requirements
        }))
      }
    }
  }, [])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const equipmentTypes = [
    "Cardiac Monitoring Systems",
    "Surgical Robots & Equipment",
    "Imaging & Diagnostic Devices",
    "Patient Monitoring Systems",
    "Laboratory Equipment",
    "Emergency & ICU Equipment",
    "Rehabilitation Devices",
    "Other (Please specify)"
  ]

  const budgetRanges = [
    "Under $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000 - $1,000,000",
    "Over $1,000,000"
  ]

  const timelineOptions = [
    "Immediate (1-2 months)",
    "Short term (3-6 months)",
    "Medium term (6-12 months)",
    "Long term (1+ years)"
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: checked,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions")
      setIsLoading(false)
      return
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSuccess(true)
    setIsLoading(false)
    onSuccess?.()
  }

  const openWhatsApp = () => {
    const message = `Hello! I'm interested in medical equipment. Here are my details:
    
Name: ${formData.name || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Equipment Type: ${formData.equipmentType || 'Not provided'}
Quantity: ${formData.quantity || 'Not provided'}
Budget: ${formData.budget || 'Not provided'}

Please contact me for more details.`
    
    const whatsappUrl = `https://wa.me/+251911234567?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const openTelegram = () => {
    const message = `Hello! I'm interested in medical equipment. Here are my details:
    
Name: ${formData.name || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Equipment Type: ${formData.equipmentType || 'Not provided'}
Quantity: ${formData.quantity || 'Not provided'}
Budget: ${formData.budget || 'Not provided'}

Please contact me for more details.`
    
    const telegramUrl = `https://t.me/giftedhands_medical?text=${encodeURIComponent(message)}`
    window.open(telegramUrl, '_blank')
  }

  if (success) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <MessageCircle className="h-8 w-8 text-green-600" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Inquiry Submitted Successfully!</h3>
            <p className="text-muted-foreground">
              Thank you for your interest in our medical equipment. Our sales team will contact you within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700">
              <MessageSquare className="mr-2 h-4 w-4" />
              Continue on WhatsApp
            </Button>
            <Button onClick={openTelegram} variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              Continue on Telegram
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Package className="h-8 w-8 text-primary" />
          <CardTitle className="text-3xl font-bold">Bulk Equipment Inquiry</CardTitle>
        </div>
        <CardDescription className="text-lg max-w-2xl mx-auto">
          Get personalized quotes for bulk orders and high-end medical equipment. Our sales team will provide 
          competitive pricing and detailed specifications tailored to your needs.
        </CardDescription>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="flex items-center space-x-1">
            <Users className="h-3 w-3" />
            <span>Bulk Orders</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center space-x-1">
            <DollarSign className="h-3 w-3" />
            <span>Volume Discounts</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center space-x-1">
            <MessageCircle className="h-3 w-3" />
            <span>24/7 Support</span>
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company/Hospital *</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Enter your organization name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position/Title</Label>
                <Input
                  id="position"
                  name="position"
                  placeholder="e.g., Procurement Manager, Chief Medical Officer"
                  value={formData.position}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>

          {/* Equipment Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Equipment Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="equipmentType">Equipment Type *</Label>
                <select
                  id="equipmentType"
                  name="equipmentType"
                  value={formData.equipmentType}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select equipment type</option>
                  {equipmentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Required *</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  placeholder="e.g., 10 units, 5 systems"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range *</Label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline *</Label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Specific Requirements & Specifications</Label>
              <Textarea
                id="requirements"
                name="requirements"
                placeholder="Please describe any specific requirements, features, or specifications you need..."
                value={formData.requirements}
                onChange={handleChange}
                rows={4}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Communication Preferences</h3>
            <div className="space-y-3">
              <Label>Preferred Contact Method</Label>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: "email", label: "Email", icon: Mail },
                  { value: "phone", label: "Phone", icon: Phone },
                  { value: "whatsapp", label: "WhatsApp", icon: MessageSquare },
                  { value: "telegram", label: "Telegram", icon: MessageCircle }
                ].map((method) => (
                  <label key={method.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={method.value}
                      checked={formData.preferredContact === method.value}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="text-primary"
                    />
                    <method.icon className="h-4 w-4" />
                    <span>{method.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={handleCheckboxChange}
                disabled={isLoading}
              />
              <Label htmlFor="agreeToTerms" className="text-sm">
                I agree to the terms and conditions and consent to being contacted regarding this inquiry
              </Label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Inquiry...
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </Button>
              
              <Button type="button" onClick={openWhatsApp} variant="outline" className="flex-1 bg-green-50 border-green-200 text-green-700 hover:bg-green-100">
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp Chat
              </Button>
              
              <Button type="button" onClick={openTelegram} variant="outline" className="flex-1 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                <MessageCircle className="mr-2 h-4 w-4" />
                Telegram Chat
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
