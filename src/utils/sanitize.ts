/**
 * Input sanitization utilities to prevent XSS attacks
 */

/**
 * Sanitize text input by removing potentially dangerous characters
 */
export const sanitizeText = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove script tags and their content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove javascript: protocol
    .replace(/javascript:/gi, '')
    // Remove on* event handlers
    .replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '')
    // Remove data: protocol (except data:image)
    .replace(/data:(?!image)/gi, '')
    // Limit length to prevent DoS
    .substring(0, 10000);
};

/**
 * Sanitize email input
 */
export const sanitizeEmail = (email: string): string => {
  if (typeof email !== 'string') return '';
  
  return email
    .trim()
    .toLowerCase()
    // Remove any characters that aren't valid in emails
    .replace(/[^a-z0-9@._-]/g, '')
    // Limit length
    .substring(0, 254);
};

/**
 * Sanitize phone number input
 */
export const sanitizePhone = (phone: string): string => {
  if (typeof phone !== 'string') return '';
  
  return phone
    .trim()
    // Keep only numbers, spaces, hyphens, parentheses, and plus sign
    .replace(/[^0-9\s\-\(\)\+]/g, '')
    // Limit length
    .substring(0, 20);
};

/**
 * Sanitize URL input
 */
export const sanitizeUrl = (url: string): string => {
  if (typeof url !== 'string') return '';
  
  const sanitized = url.trim();
  
  // Only allow http and https protocols
  if (!/^https?:\/\//i.test(sanitized)) {
    return '';
  }
  
  return sanitized
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .substring(0, 2048);
};

/**
 * Sanitize form data object
 */
export const sanitizeFormData = (formData: Record<string, any>): Record<string, any> => {
  const sanitized: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string') {
      switch (key) {
        case 'email':
          sanitized[key] = sanitizeEmail(value);
          break;
        case 'phone':
          sanitized[key] = sanitizePhone(value);
          break;
        case 'website':
        case 'url':
          sanitized[key] = sanitizeUrl(value);
          break;
        default:
          sanitized[key] = sanitizeText(value);
      }
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map(item => 
        typeof item === 'string' ? sanitizeText(item) : item
      );
    } else if (typeof value === 'boolean' || typeof value === 'number') {
      sanitized[key] = value;
    } else {
      sanitized[key] = sanitizeText(String(value));
    }
  }
  
  return sanitized;
};

/**
 * Rate limiting utility
 */
interface RateLimiterConfig {
  maxAttempts: number;
  windowMs: number;
}

class RateLimiter {
  private maxAttempts: number;
  private windowMs: number;
  private attempts: Map<string, number[]>;

  constructor(maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000) { // 5 attempts per 15 minutes
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.attempts = new Map();
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const validAttempts = userAttempts.filter(
      timestamp => now - timestamp < this.windowMs
    );
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Add current attempt
    validAttempts.push(now);
    this.attempts.set(identifier, validAttempts);
    
    return true;
  }

  getRemainingTime(identifier: string): number {
    const userAttempts = this.attempts.get(identifier) || [];
    if (userAttempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...userAttempts);
    const timeUntilReset = this.windowMs - (Date.now() - oldestAttempt);
    
    return Math.max(0, timeUntilReset);
  }
}

export const formSubmissionLimiter = new RateLimiter(3, 10 * 60 * 1000); // 3 submissions per 10 minutes
