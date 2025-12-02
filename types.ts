export interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  size?: 'small' | 'large' | 'wide';
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
  isHighlighted?: boolean;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
}
