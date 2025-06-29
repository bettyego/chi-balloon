
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Initialize application systems
const initializeApp = async () => {
  // Initialize storage
  try {
    const { initializeStorage } = await import("./utils/storage");
    initializeStorage();
  } catch (error) {
    console.warn('Storage initialization failed:', error);
  }

  // Initialize analytics - DISABLED FOR NOW
  // try {
  //   const { initializeAnalytics } = await import("./utils/analytics");
  //   initializeAnalytics();
  // } catch (error) {
  //   console.warn('Analytics initialization failed:', error);
  // }

  // Initialize performance monitoring
  try {
    const { initPerformanceMonitoring } = await import("./utils/performance");
    initPerformanceMonitoring();
  } catch (error) {
    console.warn('Performance monitoring initialization failed:', error);
  }
};

// Initialize systems
initializeApp();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
