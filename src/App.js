import React, { useState, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./UI/Layout/Layout";
import ThemeContext from "./Components/Dashboard_nav/ThemeContext";

// Lazy load the pages
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));
const FormComponent = React.lazy(() =>
  import("./Components/Form/FormComponent")
);

const App = () => {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<FormComponent />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;
