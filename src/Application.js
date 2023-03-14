import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Character from "./components/Character";

export const Application = () => {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/:id" element={<Character />} />
    </Routes>
  );
};
