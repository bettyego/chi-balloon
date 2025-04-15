import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/page/About";
import Services from "./component/page/Services";
import InquiryForm from "./component/page/InquiryForm";
import ClientReview from "./component/page/ClientReview";
import Gallery from "./component/page/Gallery";
import ContactUs from "./component/page/ContactUs";
import Header from "./component/page/Header";
import Footer from "./component/page/Footer";


function App() {
  return (
    <> 
        <Header />
      <Routes>
        
        <Route path="/"  element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/inquiryform" element={<InquiryForm />} />
          <Route path="/review" element={<ClientReview />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
