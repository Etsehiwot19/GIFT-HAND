"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface User {
  id: string
  email: string
  name: string
  company?: string
  role?: string
  createdAt: Date
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (
    email: string,
    password: string,
    name: string,
    company?: string,
  ) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateProfile: (updates: Partial<User>) => Promise<{ success: boolean; error?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  })

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("meddevices-user")
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        setState({
          user,
          isLoading: false,
          isAuthenticated: true,
        })
      } catch (error) {
        console.error("Error loading user from localStorage:", error)
        localStorage.removeItem("meddevices-user")
        setState((prev) => ({ ...prev, isLoading: false }))
      }
    } else {
      setState((prev) => ({ ...prev, isLoading: false }))
    }
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simple validation for demo purposes
    if (email === "demo@meddevices.com" && password === "demo123") {
      const user: User = {
        id: "1",
        email: "demo@meddevices.com",
        name: "Dr. Sarah Johnson",
        company: "Metropolitan General Hospital",
        role: "Chief Medical Officer",
        createdAt: new Date(),
      }

      localStorage.setItem("meddevices-user", JSON.stringify(user))
      setState({
        user,
        isLoading: false,
        isAuthenticated: true,
      })

      return { success: true }
    }

    return { success: false, error: "Invalid email or password" }
  }

  const signup = async (
    email: string,
    password: string,
    name: string,
    company?: string,
  ): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simple validation for demo purposes
    if (email && password && name) {
      const user: User = {
        id: Date.now().toString(),
        email,
        name,
        company,
        role: "Healthcare Professional",
        createdAt: new Date(),
      }

      localStorage.setItem("meddevices-user", JSON.stringify(user))
      setState({
        user,
        isLoading: false,
        isAuthenticated: true,
      })

      return { success: true }
    }

    return { success: false, error: "Please fill in all required fields" }
  }

  const logout = () => {
    localStorage.removeItem("meddevices-user")
    setState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    })
  }

  const updateProfile = async (updates: Partial<User>): Promise<{ success: boolean; error?: string }> => {
    if (!state.user) {
      return { success: false, error: "No user logged in" }
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const updatedUser = { ...state.user, ...updates }
    localStorage.setItem("meddevices-user", JSON.stringify(updatedUser))

    setState((prev) => ({
      ...prev,
      user: updatedUser,
    }))

    return { success: true }
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
