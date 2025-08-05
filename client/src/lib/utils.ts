import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// New function for tracking Google Ads conversions
export function trackConversion() {
  // Check if the gtag function is available on the window object
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17430539599/U6DXCPLaioAbEM_aw_dA'
    });
    console.log("Conversion event sent to Google Ads.");
  } else {
    console.error("Google Tag (gtag.js) not found. Make sure the tracking script is installed correctly.");
  }
}
