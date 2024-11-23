import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

//import Landing from "./Landing.jsx";
//import Dashboard from "./Dashboard.jsx";

//React.lazy is an essential tool for optimizing React applications by enabling on-demand loading of components, ensuring faster initial load times and better user experiences BUT  Must be wrapped in a Suspense component.

const Landing = React.lazy(() => import("./Landing"));
const Dashboard = React.lazy(() => import("./Dashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Suspense fallback={"loading..."}>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/landing")}>Landing</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
};

export default App;
