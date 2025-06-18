/**
 * Google Analytics 4 integration utilities
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageViewEvent {
  page_title: string;
  page_location: string;
  page_path: string;
}

/**
 * Initialize Google Analytics
 */
export const initializeAnalytics = (): void => {
  const trackingId = process.env.REACT_APP_GA_TRACKING_ID;
  
  if (!trackingId || process.env.NODE_ENV !== 'production') {
    console.log('Analytics not initialized - missing tracking ID or not in production');
    return;
  }

  // Create gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', trackingId, {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
  });

  console.log('Google Analytics initialized with ID:', trackingId);
};

/**
 * Track page views
 */
export const trackPageView = (path: string, title?: string): void => {
  if (typeof window.gtag !== 'function') {
    console.log('Analytics not available for page view:', path);
    return;
  }

  const pageViewData: PageViewEvent = {
    page_title: title || document.title,
    page_location: window.location.href,
    page_path: path,
  };

  window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID, pageViewData);
  console.log('Page view tracked:', path);
};

/**
 * Track custom events
 */
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent): void => {
  if (typeof window.gtag !== 'function') {
    console.log('Analytics not available for event:', action);
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });

  console.log('Event tracked:', { action, category, label, value });
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName: string, success: boolean = true): void => {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'engagement',
    label: formName,
  });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location?: string): void => {
  trackEvent({
    action: 'button_click',
    category: 'engagement',
    label: `${buttonName}${location ? ` - ${location}` : ''}`,
  });
};

/**
 * Track gallery interactions
 */
export const trackGalleryInteraction = (action: string, category: string): void => {
  trackEvent({
    action: `gallery_${action}`,
    category: 'engagement',
    label: category,
  });
};

/**
 * Track service inquiries
 */
export const trackServiceInquiry = (serviceType: string, eventType?: string): void => {
  trackEvent({
    action: 'service_inquiry',
    category: 'conversion',
    label: `${serviceType}${eventType ? ` - ${eventType}` : ''}`,
  });
};

/**
 * Track contact attempts
 */
export const trackContactAttempt = (method: string): void => {
  trackEvent({
    action: 'contact_attempt',
    category: 'conversion',
    label: method,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number): void => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

/**
 * Track file downloads
 */
export const trackFileDownload = (fileName: string, fileType: string): void => {
  trackEvent({
    action: 'file_download',
    category: 'engagement',
    label: `${fileName} (${fileType})`,
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, linkText?: string): void => {
  trackEvent({
    action: 'external_link_click',
    category: 'engagement',
    label: linkText || url,
  });
};

/**
 * Track search queries (if search functionality is added)
 */
export const trackSearch = (query: string, results: number): void => {
  trackEvent({
    action: 'search',
    category: 'engagement',
    label: query,
    value: results,
  });
};

/**
 * Track user timing (performance metrics)
 */
export const trackTiming = (name: string, value: number, category: string = 'performance'): void => {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'timing_complete', {
    name: name,
    value: value,
    event_category: category,
  });
};

/**
 * Track exceptions/errors
 */
export const trackException = (description: string, fatal: boolean = false): void => {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'exception', {
    description: description,
    fatal: fatal,
  });
};

/**
 * Set user properties
 */
export const setUserProperty = (property: string, value: string): void => {
  if (typeof window.gtag !== 'function') return;

  window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID, {
    custom_map: { [property]: value },
  });
};
