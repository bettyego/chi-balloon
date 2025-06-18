/**
 * Touch and mobile optimization utilities
 */

import type { TouchGestureOptions, ViewportSize, SwipeDirection, SwipeDetails } from '../types';

/**
 * Debounce function to prevent excessive function calls
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit function calls
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Check if device is mobile
 */
export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Check if device supports touch
 */
export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Get viewport dimensions
 */
export const getViewportSize = (): ViewportSize => {
  return {
    width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  };
};

/**
 * Smooth scroll to element
 */
export const smoothScrollTo = (target: string | Element, offset: number = 0): void => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Prevent zoom on double tap for iOS
 */
export const preventZoomOnDoubleTap = (element: Element): void => {
  let lastTouchEnd = 0;
  
  element.addEventListener('touchend', (event: TouchEvent) => {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
};

/**
 * Enhanced touch gesture handler
 */
export class TouchGestureHandler {
  private element: Element;
  private options: Required<TouchGestureOptions>;
  private startX: number = 0;
  private startY: number = 0;
  private startTime: number = 0;
  public onSwipe?: (direction: SwipeDirection, details: SwipeDetails) => void;

  constructor(element: Element, options: TouchGestureOptions = {}) {
    this.element = element;
    this.options = {
      threshold: 50, // Minimum distance for swipe
      restraint: 100, // Maximum distance perpendicular to swipe direction
      allowedTime: 300, // Maximum time for swipe
      ...options
    };
    
    this.init();
  }

  private init(): void {
    this.element.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    this.element.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
  }

  private handleTouchStart(e: TouchEvent): void {
    const touch = e.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
    this.startTime = new Date().getTime();
  }

  private handleTouchEnd(e: TouchEvent): void {
    const touch = e.changedTouches[0];
    const endX = touch.clientX;
    const endY = touch.clientY;
    const endTime = new Date().getTime();
    
    const distX = endX - this.startX;
    const distY = endY - this.startY;
    const elapsedTime = endTime - this.startTime;
    
    if (elapsedTime <= this.options.allowedTime) {
      if (Math.abs(distX) >= this.options.threshold && Math.abs(distY) <= this.options.restraint) {
        // Horizontal swipe
        const direction: SwipeDirection = distX < 0 ? 'left' : 'right';
        this.onSwipe?.(direction, { distX, distY, elapsedTime });
      } else if (Math.abs(distY) >= this.options.threshold && Math.abs(distX) <= this.options.restraint) {
        // Vertical swipe
        const direction: SwipeDirection = distY < 0 ? 'up' : 'down';
        this.onSwipe?.(direction, { distX, distY, elapsedTime });
      }
    }
  }

  public destroy(): void {
    this.element.removeEventListener('touchstart', this.handleTouchStart);
    this.element.removeEventListener('touchend', this.handleTouchEnd);
  }
}

/**
 * Add touch-friendly button styles
 */
export const makeTouchFriendly = (button: HTMLElement): void => {
  if (!button) return;
  
  // Add minimum touch target size
  const style = button.style;
  const computedStyle = window.getComputedStyle(button);
  
  if (parseInt(computedStyle.minHeight) < 44) {
    style.minHeight = '44px';
  }
  if (parseInt(computedStyle.minWidth) < 44) {
    style.minWidth = '44px';
  }
  
  // Add touch feedback
  button.addEventListener('touchstart', () => {
    button.style.opacity = '0.7';
  }, { passive: true });
  
  button.addEventListener('touchend', () => {
    setTimeout(() => {
      button.style.opacity = '';
    }, 150);
  }, { passive: true });
};

/**
 * Optimize form inputs for mobile
 */
export const optimizeFormForMobile = (form: HTMLFormElement): void => {
  if (!form) return;
  
  const inputs = form.querySelectorAll('input, textarea, select') as NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  
  inputs.forEach(input => {
    // Add appropriate input modes
    if (input instanceof HTMLInputElement) {
      if (input.type === 'email') {
        input.setAttribute('inputmode', 'email');
      } else if (input.type === 'tel') {
        input.setAttribute('inputmode', 'tel');
      } else if (input.type === 'number') {
        input.setAttribute('inputmode', 'numeric');
      }
    }
    
    // Prevent zoom on focus for iOS
    if (isMobile() && parseFloat(window.getComputedStyle(input).fontSize) < 16) {
      input.style.fontSize = '16px';
    }
  });
};
