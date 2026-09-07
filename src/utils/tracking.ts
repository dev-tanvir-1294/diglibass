// Google Tag Manager / GA4 tracking utilities
// Uses the dataLayer pushed by the GTM container in index.html

interface GTagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number | string | object;
}

declare global {
  interface Window {
    dataLayer: GTagEvent[];
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

/**
 * Push an event to the GTM dataLayer for GA4 tracking.
 * Falls back silently if GTM/gtag is not available.
 */
export function trackEvent(event: GTagEvent): void {
  if (typeof window === 'undefined') return;

  // Push to GTM dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: event.action,
      ...event,
    });
  }

  // Fire directly via gtag if available (backup path)
  if (typeof window.gtag === 'function') {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }

  // Console log for verification in dev
  if (import.meta.env.DEV) {
    console.log('[GA4 Event]', event);
  }
}

/**
 * Track form submission success
 */
export function trackFormSubmission(formType: string, productId?: string): void {
  trackEvent({
    action: 'form_submission',
    category: 'engagement',
    label: formType,
    value: { productId, timestamp: Date.now() },
  });
}

/**
 * Track form submission error
 */
export function trackFormError(formType: string, error: string): void {
  trackEvent({
    action: 'form_error',
    category: 'engagement',
    label: formType,
    value: { error, timestamp: Date.now() },
  });
}

/**
 * Track page view (useful for SPA navigation)
 */
export function trackPageView(page: string): void {
  if (typeof window === 'undefined') return;

  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_location: window.location.href,
      page_title: document.title,
      page_path: page,
    });
  }

  if (import.meta.env.DEV) {
    console.log('[GA4 PageView]', { page });
  }
}
