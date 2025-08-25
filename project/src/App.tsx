import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

// ✅ Scroll to hash when navigating
function ScrollToHashElement() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [window.location.hash]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Wrap everything in BrowserRouter */}
      <BrowserRouter>
        {/* ✅ Header always visible */}
        <Header />

        {/* ✅ Scroll Fix for hash links */}
        <ScrollToHashElement />

        <Routes>
          {/* ✅ Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Benefits />
                <Team />
                <Registration />
                <Footer />
              </>
            }
          />

          {/* ✅ Blog Page */}
          <Route path="/blog" element={<Blog />} />
        </Routes>

        {/* ✅ Footer always visible */}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
