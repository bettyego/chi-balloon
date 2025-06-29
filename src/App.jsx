import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./component/page/Layout";
import Home from "./component/Home";
import AboutUs from "./component/page/AboutUs";
import Services from "./component/page/Services";
import InquiryForm from "./component/page/InquiryForm";
import ClientReview from "./component/page/ClientReview";
import Gallery from "./component/page/Gallery";
import ContactUs from "./component/page/ContactUs";
import Admin from "./component/page/Admin";
import NotFound from "./component/page/NotFound";

function App() {
  return (
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
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
