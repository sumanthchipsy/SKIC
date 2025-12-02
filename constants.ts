import { Slide, Feature, PortfolioItem, ProcessStep } from './types';

export const APP_NAME = "Sharadha Residency";

export const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "You Can Trust Every Detail From Materials to Finish",
    subtitle: "We turn empty spaces into warm, stylish homes. Complete interior solutions tailored around your lifestyle."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Luxury Living Redefined For Your Family",
    subtitle: "Experience the perfect blend of comfort and sophistication in every corner of your home."
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Stress-Free Interior Experience",
    description: "From the first consultation to final handover, we take complete ownership of your project. You won't have to chase contractors or worry about timelines.",
    iconName: "Armchair"
  },
  {
    id: 2,
    title: "Tailored to Your Lifestyle",
    description: "No two homes or homeowners are the same. That's why we take time to understand your daily routines, personal style, and functional needs.",
    iconName: "UserCheck"
  },
  {
    id: 3,
    title: "High-Quality Finishes & Materials",
    description: "We never compromise on quality. From modular units and laminates to lighting and soft furnishings, every material is carefully selected.",
    iconName: "Award"
  },
  {
    id: 4,
    title: "Visual Clarity Before We Build",
    description: "We believe you should see what you're getting. With detailed 3D renders, layouts, and material previews, you'll have a clear picture.",
    iconName: "FileText"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: "Subtle & Sophisticated",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    size: 'large'
  },
  {
    id: 'p2',
    title: "Minimal with Warmth",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    size: 'small'
  },
  {
    id: 'p3',
    title: "Kerala-Inspired Grace",
    category: "Traditional",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    size: 'wide'
  },
  {
    id: 'p4',
    title: "Elegant Everyday Living",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    size: 'small'
  },
  {
    id: 'p5',
    title: "Designed for Growing Families",
    category: "Kids Room",
    image: "https://images.unsplash.com/photo-1616486029423-aaa478965c97?q=80&w=800&auto=format&fit=crop", 
    size: 'large'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "We meet to discuss your vision and requirements.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Site Visit & Measurements",
    description: "We visit your home, take accurate measurements, and assess site conditions to plan realistically and avoid surprises later.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isHighlighted: true
  },
  {
    id: 3,
    title: "Quotation & Scope Finalization",
    description: "Finalizing the budget and timeline for your dream project.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const GEMINI_SYSTEM_INSTRUCTION = `
You are "Sharadha Bot", a helpful and sophisticated AI sales assistant for "Sharadha Residency", a premium interior and construction project.
Your goal is to provide information about the project to potential buyers.

Project Details:
- Name: Sharadha Residency
- Location: Prime Tech District, Golden Mile Road.
- Services: Full home interiors, Construction, Renovation.
- Experience: 7+ Years, 100+ Homes transformed.
- Pricing: Free consultation available.
- Contact: +91 81233 59279 or contact@skicprojects.com

Tone: Professional, warm, inviting, and luxurious. 
Keep answers concise (under 100 words).
`;