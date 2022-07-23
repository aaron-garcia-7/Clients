import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import WhyUsPage from "./pages/WhyUsPage";
import ResourcesPage from "./pages/ResourcesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// SubPages
import NewToGuitarPage from "./pages/subPages/NewToGuitarPage";
import BlogPage from "./pages/subPages/BlogPage";
import TestimonialsPage from "./pages/subPages/TestimonialsPage";
import MarkPage from "./pages/subPages/MarkPage";
import LocationsPage from "./pages/subPages/LocationsPage";
import PoliciesPage from "./pages/subPages/PoliciesPage";
import CalendarPage from "./pages/subPages/CalendarPage";
import MaterialsPage from "./pages/subPages/MaterialsPage";
import LinksPage from "./pages/subPages/LinksPage";
import FaqPage from "./pages/subPages/FaqPage";

// Components
import DiscountBanner from "./components/DiscountBanner";
import DiscountCard from "./components/DiscountCard";
import DiscountSlider from "./components/DiscountSlider";
import Burger from "./components/Burger";
import Nav from "./components/Nav";
import Nav2 from "./components/Nav2";
import Nav3 from "./components/Nav3";
import MobileNav from "./components/MobileNav";
import CallToAction from "./components/CallToAction";
import IllnessNotice from "./components/IllnessNotice";
import SecFooter from "./components/Footer";

// Styles
import GlobalStyle from "./GlobalStyle";

function App() {
  const { ctaToggle } = useSelector((store) => store.cta);
  const { noticeToggle } = useSelector((store) => store.illNote);

  return (
    <div>
      <GlobalStyle />
      {/* <DiscountBanner /> */}
      <DiscountCard />
      {/* <DiscountSlider /> */}
      <Burger />
      <Nav />
      {/* <Nav2 /> */}
      {/* <Nav3 /> */}
      <MobileNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/WhyUs" element={<WhyUsPage />} />
        <Route path="/WhyUs/NewToGuitar" element={<NewToGuitarPage />} />
        <Route path="/WhyUs/Blog" element={<BlogPage />} />
        <Route path="/WhyUs/Testimonials" element={<TestimonialsPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/About/Mark" element={<MarkPage />} />
        <Route path="/About/Locations" element={<LocationsPage />} />
        <Route path="/About/Policies" element={<PoliciesPage />} />
        <Route path="/Resources" element={<ResourcesPage />} />
        <Route path="/Resources/Calendar" element={<CalendarPage />} />
        <Route path="/Resources/Materials" element={<MaterialsPage />} />
        <Route path="/Resources/Links" element={<LinksPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Contact/FAQ" element={<FaqPage />} />
      </Routes>
      {ctaToggle && <CallToAction />}
      {noticeToggle && <IllnessNotice />}
      <SecFooter />
    </div>
  );
}

export default App;
