import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Character from "./components/Character";

export const Application = () => {
  return (
    <Routes>
      <Route path="/rick-n-morty" element={<MainPage />} />
      <Route path="/rick-n-morty/:id" element={<Character />} />
    </Routes>
  );
};
