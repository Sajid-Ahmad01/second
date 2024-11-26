// App.js
import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import ProtectedRoute from "./Component2/ProtectedRoute";
import Home from "./Components/Home";
import Apply from "./Components/Apply";
import Entry from "./Components/Entry";
import Signup from "./Component2/Signup";
import Login from "./Component2/Login";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="apply" element={<Apply />} />
          <Route path="entry" element={<Entry />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
