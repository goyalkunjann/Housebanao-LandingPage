import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import TermsCondition from "./pages/TermsCondition/TermsCondition";
import Connect from "./pages/Connect/Connect";
import About from "./pages/About/About";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    updatePageMetadata(pathname);
  }, [pathname]);

  function updatePageMetadata(path) {
    const titles = {
      "/": "Home Page - Your Website Name",
      "/termscondition": "Terms and Conditions - Your Website Name",
      "/connect": "Connect with Us - Your Website Name",
      "/about": "About Us - Your Website Name",
    };

    const descriptions = {
      "/": "Welcome to our homepage where we offer...",
      "/termscondition": "Read our terms and conditions on how we operate...",
      "/connect": "Connect with our team to get personalized service...",
      "/about": "Learn more about our company's history and culture...",
    };

    document.title = titles[path] || "Default Title - Your Website Name";
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.content = descriptions[path] || "Default meta description for your website.";
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/termscondition" element={<TermsCondition />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;
