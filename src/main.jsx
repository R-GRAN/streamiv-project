import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesProvider from "@/assets/utils/MoviesContext.jsx";
import Header from "@/components/Header.jsx";
import Layout from "@/components/Layout.jsx";
import App from "@/App.jsx";
import MoviePage from "@/pages/MoviePage.jsx";
import HomeList from "./components/HomeList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviesProvider>
      <Router>
        <App>
          <Header />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/:id" element={<HomeList />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="*" element={<Header />} />
          </Routes>
        </App>
      </Router>
    </MoviesProvider>
  </React.StrictMode>
);
