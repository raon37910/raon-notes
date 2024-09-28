'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@repo/ui/components/ui/button'
//@ts-ignore
import { useTheme } from 'next-themes'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(scrollPercentage)
    }
    //TODO 여기 passive 옵션은 무엇인가
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, scrollProgress])

  return (
    <div className="bg-green-background">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
           ${
             scrolled
               ? 'bg-green-background/80 backdrop-blur-sm h-16'
               : 'bg-green-background h-20'
           }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/">
            <BlogTitle scrolled title="Raon Notes 🍀" />
          </Link>
          <RightNavigation />
        </div>
        <ProgressBar scrollProgress={scrollProgress} />
      </header>
    </div>
  )
}

interface BlogTitleProps {
  title: string
  scrolled: boolean
}

function BlogTitle({ title, scrolled }: BlogTitleProps) {
  return (
    <h1
      className={`font-bold transition-all duration-300 ease-in-out 
              ${scrolled ? 'text-xl' : 'text-2xl'}`}
    >
      {title}
    </h1>
  )
}

function RightNavigation() {
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    if (!resolvedTheme) {
      setTheme('light')
    }
  }, [resolvedTheme])

  return (
    <nav className="space-x-4">
      {resolvedTheme === 'dark' ? (
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground"
          onClick={() => setTheme('light')}
        >
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      ) : (
        <Button variant="ghost" size="icon" onClick={() => setTheme('dark')}>
          <Sun className="h-[1.2rem] w-[1.2rem] text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
      )}
    </nav>
  )
}

interface ProgressBarProps {
  scrollProgress: number
}

function ProgressBar({ scrollProgress }: ProgressBarProps) {
  return (
    <div
      className="absolute bottom-0 left-0 h-1 bg-green-400"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}
