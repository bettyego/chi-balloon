import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./component/page/Layout";
import ErrorBoundary from "./component/ErrorBoundary";
import LoadingSpinner from "./component/ui/LoadingSpinner";

// Lazy load components for code splitting
const Home = React.lazy(() => import("./component/Home"));
const AboutUs = React.lazy(() => import("./component/page/AboutUs"));
const Services = React.lazy(() => import("./component/page/Services"));
const InquiryForm = React.lazy(() => import("./component/page/InquiryForm"));
const ClientReview = React.lazy(() => import("./component/page/ClientReview"));
const Gallery = React.lazy(() => import("./component/page/Gallery"));
const ContactUs = React.lazy(() => import("./component/page/ContactUs"));
const NotFound = React.lazy(() => import("./component/page/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="inquiryform" element={<InquiryForm />} />
            <Route path="review" element={<ClientReview />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
