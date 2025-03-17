import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import Navbar from "./components/Navbar.tsx";
import { ThemeProvider } from "@/components/theme-provider";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
