import Link from 'next/link'
import { Twitter, Send, Wallet2 } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 bg-primary">
      {/* Social Icons */}
      <div className="fixed top-4 right-4 flex gap-6">
        <Link href="#" className="hover:scale-110 transition-transform">
          <img src="/X.svg" alt="X" className="w-6 h-6" />
        </Link>
        <Link href="#" className="hover:scale-110 transition-transform">
          <img src="/Telegram.svg" alt="Telegram" className="w-6 h-6" />
        </Link>
        <Link href="#" className="hover:scale-110 transition-transform">
          <img src="/Meta.png" alt="Meta" className="w-6 h-6" />
        </Link>
        <Link href="#" className="hover:scale-110 transition-transform">
          <img src="/Solana.png" alt="Solana" className="w-6 h-6" />
        </Link>
      </div>

      {/* Logo dan Title */}
      <div className="text-center mb-12 mt-8">
        <h1 className="text-7xl font-pixel font-bold text-gray-800 mb-2" 
            style={{ letterSpacing: '0.25em' }}>
          DOLOS
        </h1>
        <p className="text-gray-800 font-pixel text-sm">
          Ancient villain reborn
        </p>
      </div>

      {/* Main Content Box */}
      <div className="w-full max-w-3xl aspect-video bg-sage-200 rounded-[40px] border-4 border-gray-800 mb-16">
        <div className="w-full h-full flex items-center justify-center p-8">
          <img 
            src="/placeholder.svg?height=200&width=200" 
            alt="Retro style illustration"
            className="max-w-[200px]"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center gap-16 font-pixel text-gray-800 text-xl">
        <Link href="#" className="relative hover:opacity-75 hover:scale-110 transition-all group">
          BIRTH
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="#" className="relative hover:opacity-75 hover:scale-110 transition-all group">
          FUTURE
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="#" className="relative hover:opacity-75 hover:scale-110 transition-all group">
          DOCS
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="#" className="relative hover:opacity-75 hover:scale-110 transition-all group">
          WALLET
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </nav>
    </div>
  )
}

