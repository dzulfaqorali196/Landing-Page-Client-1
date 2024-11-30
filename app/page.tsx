import Link from 'next/link'
import { Twitter, Send, Wallet2 } from 'lucide-react'
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 bg-primary">
      {/* Social Icons */}
      <div className="fixed top-4 right-4 flex gap-3 sm:gap-6">
        <Link href="#" className="hover:scale-110 transition-transform">
          <img src="/X.svg" alt="X" className="w-4 h-4 sm:w-6 sm:h-6" />
        </Link>
        <Link href="#" className="hover:scale-110 transition-transform">
          <img src="/Telegram.svg" alt="Telegram" className="w-4 h-4 sm:w-6 sm:h-6" />
        </Link>
        <Link href="#" className="hover:scale-110 transition-transform">
          <img src="/Meta.png" alt="Meta" className="w-4 h-4 sm:w-6 sm:h-6" />
        </Link>
        <Link href="#" className="hover:scale-110 transition-transform">
          <img src="/Solana.png" alt="Solana" className="w-4 h-4 sm:w-6 sm:h-6" />
        </Link>
      </div>

      {/* Logo dan Title */}
      <div className="text-center mb-8 sm:mb-12 mt-4 sm:mt-8">
        <h1 className="text-4xl sm:text-7xl font-pixel font-bold text-gray-800 mb-2 flex justify-center" 
            style={{ letterSpacing: '0.25em' }}>
          SOLOD
        </h1>
        <p className="text-xs sm:text-sm text-gray-800 font-pixel">
          Modern hero renewed
        </p>
      </div>

      {/* Main Content Box */}
      <div className="w-full max-w-3xl aspect-video bg-sage-200 rounded-[32px] border-[3px] border-gray-800 mb-8 sm:mb-16 overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="w-full h-full flex items-center justify-center">
          <Image 
            src="/subheading.gif"
            alt="Retro style illustration"
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation Links - Vertikal di mobile, horizontal di desktop */}
      <nav className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 font-pixel text-gray-800 text-sm sm:text-xl">
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

