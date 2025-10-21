import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format view count with k/M notation
 * < 1000: Show exact number ("523 views")
 * >= 1000 and < 1M: Show with "k" ("1.2k views")
 * >= 1M: Show with "M" ("1.2M views")
 */
export function formatViewCount(count: number): string {
  if (count < 0) return "0 views"
  if (count < 1000) return `${count} views`
  if (count < 1000000) {
    const formatted = (count / 1000).toFixed(1)
    return `${formatted}k views`
  }
  if (count >= 999000000) return "999M+ views"
  const formatted = (count / 1000000).toFixed(1)
  return `${formatted}M views`
}

/**
 * Shuffle array using Fisher-Yates algorithm
 * Returns a new shuffled array without mutating the original
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}