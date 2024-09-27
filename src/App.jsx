import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesMain from "./router/routes";
import { SEOProvider } from "./contexts/SEOcontext";
import SEOManager from "./contexts/SEPmanager";
import Header from "./components/main/header";
import Footer from "./components/main/footer";
import ScrollToTop from "./hooks/scrollTop";

function App() {
  const [routes] = useState(RoutesMain());

  return (
    <>
      <SEOProvider>
        <SEOManager />
        <Router>
          <ScrollToTop />    
          <Header />
          <Routes>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                element={<route.component />}
                key={index}
              ></Route>
            ))}
          </Routes>
          <Footer />
        </Router>
      </SEOProvider>
    </>
  );
}

export default App;
