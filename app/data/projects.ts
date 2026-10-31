// Only real, public work goes here. Every link must resolve.
export interface Project {
  id: string
  title: string
  summary: string
  details: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'neurotravel',
    title: 'NeuroTravel',
    summary: 'Trip planning web app for neurodivergent travelers, built around sensory, accessibility and safety needs. Early prototype.',
    details: [
      'Six-step planner: lodging, transport, accessibility, day-by-day itinerary with sensory breaks, and an emergency plan',
      'Supabase for sign-up, login and saved trips; light, dark and high-contrast themes',
      'Offline page and service worker so it works like an installable app',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase'],
    githubUrl: 'https://github.com/ptxxdxxd/neurotravel-app',
  },
  {
    id: 'packable-pits',
    title: 'Packable Pits storefront',
    summary: 'Storefront for a flat-pack steel fire pit company I co-founded as the technical lead.',
    details: [
      'Static site with a CSS 3D pit configurator synced to the cart',
      'Stripe checkout through a Supabase Edge Function for mixed carts',
      'Supabase-backed waitlist for early access',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Stripe', 'Supabase Edge Functions'],
    liveUrl: 'https://packablepits.com',
  },
  {
    id: 'ascii-telescope',
    title: 'ascii_telescope',
    summary: 'Watch the Sun from your terminal: pulls the latest NASA SDO images and renders them as ASCII art.',
    details: [
      'Falls back across NASA SDO and NOAA image feeds if one is down',
      'Crops to the solar disk and maps brightness to a character ramp with OpenCV and NumPy',
    ],
    technologies: ['Python', 'OpenCV', 'NumPy', 'Pillow'],
    githubUrl: 'https://github.com/ptxxdxxd/ascii_telescope',
  },
  {
    id: 'stereogram',
    title: 'Stereogram Generator',
    summary: 'Desktop app that turns a depth map and a texture into a Magic Eye style stereogram.',
    details: [
      'Pixel-shifting algorithm written from scratch in NumPy',
      'Tkinter GUI with live preview and adjustable depth and pattern width',
    ],
    technologies: ['Python', 'NumPy', 'Pillow', 'Tkinter'],
    githubUrl: 'https://github.com/ptxxdxxd/stereogram-generator-gui',
  },
  {
    id: 'impossible-colors',
    title: 'Impossible Colors',
    summary: 'Browser toy that uses animated gradients and opponent-process tricks to suggest colors your eyes cannot normally see.',
    details: [
      'Single HTML file, no dependencies',
      'Fullscreen mode and favorites saved in localStorage',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/ptxxdxxd/impossible-colors',
  },
]
