import "./App.css";
import Navbar from "./component/Navbar.js";
import React from "react";
import News from "./component/News";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

export default function App() {
  // const [pageSize, setpage] = useState(6);
  const pageSize = 6;
  const [progress, setprogress] = useState(0);
  const [darkMode, setDarkMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const toggle = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#08071c";
      document.body.style.color = "white";
      setText("Enable Light Mode");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "#d8eef5";
      document.body.style.color = "black";
      setText("Enable Dark Mode");
    }
  }

  return (
    <Router>
      <div>
        <Navbar mode={darkMode} toggle={toggle} text={text}/>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                pageSize={pageSize}
                country="in"
                key="general"
                category="general"
                setProgress={setprogress}
                mode={darkMode}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                pageSize={pageSize}
                country="in"
                key="business"
                category="business"
                setProgress={setprogress}
                mode={darkMode}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                pageSize={pageSize}
                country="in"
                key="science"
                category="science"
                setProgress={setprogress}
                mode={darkMode}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                pageSize={pageSize}
                country="in"
                key="entertainment"
                category="entertainment"
                setProgress={setprogress}
                mode={darkMode}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                pageSize={pageSize}
                country="in"
                key="health"
                category="health"
                setProgress={setprogress}
                mode={darkMode}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                pageSize={pageSize}
                country="in"
                key="sports"
                category="sports"
                setProgress={setprogress}
                mode={darkMode}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                pageSize={pageSize}
                country="in"
                key="technology"
                category="technology"
                setProgress={setprogress}
                mode={darkMode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
