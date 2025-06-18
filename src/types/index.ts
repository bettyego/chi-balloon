// Common types for the Chi-Ballon application

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface InquiryFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  eventType: string;
  services: string[];
  venue: string;
  eventDate: string;
  guestCount: string;
  vision: string;
  budget: string;
  planner: string;
  consultation: string;
  pricingGuide: boolean;
  referral: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface SlideData {
  image: string;
  title: string;
  text: string;
  align: 'left' | 'center' | 'right';
}

export interface FeatureData {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GalleryData {
  [category: string]: string[];
}

export interface CountryOption {
  value: string;
  label: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

// Component Props Types
export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'green' | 'white' | 'gray';
  className?: string;
}

export interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
  variant?: 'text' | 'title' | 'image' | 'avatar' | 'button' | 'card';
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  placeholder?: boolean;
  sizes?: string;
  quality?: number;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

// Utility Types
export interface TouchGestureOptions {
  threshold?: number;
  restraint?: number;
  allowedTime?: number;
}

export interface ViewportSize {
  width: number;
  height: number;
}

export interface SwipeDetails {
  distX: number;
  distY: number;
  elapsedTime: number;
}

export type SwipeDirection = 'left' | 'right' | 'up' | 'down';

// API Response Types
export interface EmailJSResponse {
  status: number;
  text: string;
}

// Environment Variables
export interface EnvironmentVariables {
  REACT_APP_EMAILJS_SERVICE_ID: string;
  REACT_APP_EMAILJS_INQUIRY_TEMPLATE_ID: string;
  REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID: string;
  REACT_APP_EMAILJS_PUBLIC_KEY: string;
  REACT_APP_GA_TRACKING_ID?: string;
}

// Event Types
export interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {}
export interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {}
export interface ButtonClickEvent extends React.MouseEvent<HTMLButtonElement> {}

// Navigation Types
export interface NavigationItem {
  name: string;
  href: string;
  label?: string;
}

// Animation Types
export interface MotionVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      delay?: number;
      duration?: number;
      ease?: string;
    };
  };
}

// Rate Limiter Types
export interface RateLimiterConfig {
  maxAttempts: number;
  windowMs: number;
}

// Service Worker Types
export interface ServiceWorkerConfig {
  cacheName: string;
  staticAssets: string[];
  dynamicCache: string;
}
