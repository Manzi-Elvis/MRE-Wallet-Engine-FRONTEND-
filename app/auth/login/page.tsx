import { LoginForm } from "@/components/auth/login-form"
import { LockKeyholeIcon } from "lucide-react"

export const metadata = {
  title: "Login - MRE Wallet Engine",
  description: "Sign in to your secure wallet",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        {/* Logo & Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
            <LockKeyholeIcon className="w-6 h-6 text-accent" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">MRE Wallet Engine</h1>
          <p className="text-sm text-muted-foreground">Sign in to access your secure digital wallet</p>
        </div>

        {/* Login Form */}
        <LoginForm />

        {/* Security Notice */}
        <p className="text-xs text-center text-muted-foreground">
          Protected by bank-level encryption. Your data is always secure.
        </p>
      </div>
    </div>
  )
}
