/**
 * Google Analytics 4 integration utilities
 */

/**
 * Initialize Google Analytics
 */
export const initializeAnalytics = () => {
  const trackingId = import.meta.env.VITE_GA_TRACKING_ID;

  if (!trackingId || import.meta.env.MODE !== 'production') {
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
export const trackPageView = (path, title) => {
  if (typeof window.gtag !== 'function') {
    console.log('Analytics not available for page view:', path);
    return;
  }

  const pageViewData = {
    page_title: title || document.title,
    page_location: window.location.href,
    page_path: path,
  };

  window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, pageViewData);
  console.log('Page view tracked:', path);
};

/**
 * Track custom events
 */
export const trackEvent = ({ action, category, label, value }) => {
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
export const trackFormSubmission = (formName, success = true) => {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'engagement',
    label: formName,
  });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName, location) => {
  trackEvent({
    action: 'button_click',
    category: 'engagement',
    label: `${buttonName}${location ? ` - ${location}` : ''}`,
  });
};

/**
 * Track gallery interactions
 */
export const trackGalleryInteraction = (action, category) => {
  trackEvent({
    action: `gallery_${action}`,
    category: 'engagement',
    label: category,
  });
};

/**
 * Track service inquiries
 */
export const trackServiceInquiry = (serviceType, eventType) => {
  trackEvent({
    action: 'service_inquiry',
    category: 'conversion',
    label: `${serviceType}${eventType ? ` - ${eventType}` : ''}`,
  });
};

/**
 * Track contact attempts
 */
export const trackContactAttempt = (method) => {
  trackEvent({
    action: 'contact_attempt',
    category: 'conversion',
    label: method,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage) => {
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
export const trackFileDownload = (fileName, fileType) => {
  trackEvent({
    action: 'file_download',
    category: 'engagement',
    label: `${fileName} (${fileType})`,
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url, linkText) => {
  trackEvent({
    action: 'external_link_click',
    category: 'engagement',
    label: linkText || url,
  });
};

/**
 * Track search queries (if search functionality is added)
 */
export const trackSearch = (query, results) => {
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
export const trackTiming = (name, value, category = 'performance') => {
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
export const trackException = (description, fatal = false) => {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'exception', {
    description: description,
    fatal: fatal,
  });
};

/**
 * Set user properties
 */
export const setUserProperty = (property, value) => {
  if (typeof window.gtag !== 'function') return;

  window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
    custom_map: { [property]: value },
  });
};
