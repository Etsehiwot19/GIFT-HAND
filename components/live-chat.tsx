"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  MessageCircle, 
  X, 
  Send, 
  Phone, 
  Mail, 
  MessageSquare,
  Loader2,
  User,
  Bot
} from "lucide-react"

interface Message {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
  isTyping?: boolean
}

interface LiveChatProps {
  isOpen: boolean
  onClose: () => void
}

export function LiveChat({ isOpen, onClose }: LiveChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to GIFTED-HANDS medical equipment support. How can I help you today?',
      sender: 'agent',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [chatStatus, setChatStatus] = useState<'connecting' | 'connected' | 'disconnected'>('connecting')
  const [agentInfo, setAgentInfo] = useState({
    name: 'Sarah',
    status: 'online',
    avatar: '/agent-avatar.png'
  })
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Simulate connection
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setChatStatus('connected'), 1000)
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || chatStatus !== 'connected') return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate agent response
    setTimeout(() => {
      const responses = [
        "Thank you for your message! I'm looking into that for you.",
        "That's a great question! Let me get you the information you need.",
        "I understand your requirements. Let me check our current inventory.",
        "For bulk orders, we offer special pricing. Would you like me to prepare a quote?",
        "I can help you with specifications and pricing. What equipment are you interested in?",
        "Our team is available 24/7. Would you prefer to continue on WhatsApp or Telegram for faster response?"
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'agent',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
    }, 1500 + Math.random() * 2000) // Random delay between 1.5-3.5 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const openWhatsApp = () => {
    const message = `Hello! I was chatting with ${agentInfo.name} about medical equipment. Can you continue helping me?`
    const whatsappUrl = `https://wa.me/+251911234567?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const openTelegram = () => {
    const message = `Hello! I was chatting with ${agentInfo.name} about medical equipment. Can you continue helping me?`
    const telegramUrl = `https://t.me/giftedhands_medical?text=${encodeURIComponent(message)}`
    window.open(telegramUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px]">
      <Card className="w-full h-full shadow-2xl border-2 border-primary/20">
        <CardHeader className="pb-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <CardTitle className="text-lg">Live Chat Support</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Agent Status */}
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>{agentInfo.name} is online</span>
            <Badge variant="secondary" className="text-xs">
              {chatStatus === 'connecting' ? 'Connecting...' : 
               chatStatus === 'connected' ? 'Live' : 'Disconnected'}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-0 h-[calc(100%-120px)] flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background border border-border'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    {message.sender === 'agent' ? (
                      <Bot className="h-3 w-3 text-primary" />
                    ) : (
                      <User className="h-3 w-3 text-primary-foreground" />
                    )}
                    <span className="text-xs opacity-70">
                      {message.sender === 'agent' ? agentInfo.name : 'You'}
                    </span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 block mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-background border border-border rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-3 w-3 text-primary" />
                    <span className="text-xs opacity-70">{agentInfo.name}</span>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {chatStatus === 'connected' && (
            <div className="p-3 border-t border-border bg-background">
              <div className="flex space-x-2 mb-3">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={openWhatsApp}
                  className="flex-1 text-xs bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                >
                  <MessageSquare className="h-3 w-3 mr-1" />
                  WhatsApp
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={openTelegram}
                  className="flex-1 text-xs bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Telegram
                </Button>
              </div>
              
              {/* Input Area */}
              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 text-sm"
                  disabled={chatStatus !== 'connected'}
                />
                <Button
                  size="sm"
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || chatStatus !== 'connected'}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}

          {/* Connection Status */}
          {chatStatus === 'connecting' && (
            <div className="p-3 border-t border-border bg-background">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Connecting to support team...</span>
              </div>
            </div>
          )}

          {chatStatus === 'disconnected' && (
            <div className="p-3 border-t border-border bg-background">
              <Alert variant="destructive">
                <AlertDescription className="text-xs">
                  Connection lost. Please refresh or try our WhatsApp/Telegram support.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
