import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TV1 from "./pages/TV1";
import Desktop from "./pages/Desktop";
import Tablet from "./pages/Tablet";
import Mobile from "./pages/Mobile";
import { useEffect } from "react";

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
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop":
        title = "";
        metaDescription = "";
        break;
      case "/tablet":
        title = "";
        metaDescription = "";
        break;
      case "/mobile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TV1 />} />
      <Route path="/desktop" element={<Desktop />} />
      <Route path="/tablet" element={<Tablet />} />
      <Route path="/mobile" element={<Mobile />} />
    </Routes>
  );
}
export default App;
