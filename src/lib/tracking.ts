export const UTM_STORAGE_KEY = "skf_utm_params";
export const UTM_EXPIRY_DAYS = 30;

export const captureUTMParams = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const utmParams = {
    utm_source: urlParams.get("utm_source") || null,
    utm_medium: urlParams.get("utm_medium") || null,
    utm_campaign: urlParams.get("utm_campaign") || null,
    utm_content: urlParams.get("utm_content") || null,
    utm_term: urlParams.get("utm_term") || null,
    partner_id: urlParams.get("partner_id") || null,
    source: urlParams.get("source") || null, // For backwards compatibility
    captured_at: new Date().toISOString(),
    landing_page: window.location.pathname,
  };

  // Only store if at least one UTM parameter exists
  const hasUTMParams = Object.values(utmParams).some(
    (value) =>
      value !== null && value !== "captured_at" && value !== "landing_page"
  );

  if (hasUTMParams) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + UTM_EXPIRY_DAYS);

    const trackingData = {
      ...utmParams,
      expires_at: expiryDate.toISOString(),
    };

    // Store in memory (not localStorage due to Claude restrictions)
    if (!window.skfTracking) {
      window.skfTracking = {};
    }
    window.skfTracking.utmParams = trackingData;

    console.log("UTM Parameters Captured:", trackingData);
    return trackingData;
  }

  return null;
};

export const getStoredUTMParams = () => {
  if (!window.skfTracking?.utmParams) {
    return null;
  }

  const stored = window.skfTracking.utmParams;

  // Check if expired
  const expiryDate = new Date(stored.expires_at);
  if (new Date() > expiryDate) {
    window.skfTracking.utmParams = null;
    return null;
  }

  return stored;
};

export const buildTrackingURL = (baseUrl, additionalParams = {}) => {
  const storedParams = getStoredUTMParams();

  if (!storedParams) {
    return baseUrl;
  }

  const url = new URL(baseUrl);

  // Add stored UTM parameters
  Object.entries(storedParams).forEach(([key, value]) => {
    if (
      value &&
      key !== "captured_at" &&
      key !== "expires_at" &&
      key !== "landing_page"
    ) {
      url.searchParams.set(key, value);
    }
  });

  // Add any additional parameters
  Object.entries(additionalParams).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
};

export const logRegistrationClick = (destination) => {
  const utmParams = getStoredUTMParams();

  const logData = {
    event: "registration_click",
    destination,
    timestamp: new Date().toISOString(),
    ...utmParams,
  };

  console.log("Registration Click Tracked:", logData);

  // Here you would send this to your analytics service
  // Example: sendToAnalytics(logData);

  return logData;
};
