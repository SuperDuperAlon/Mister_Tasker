import React from "react";
import { Routes, Route } from "react-router";
import { AppHeader } from "./cmps/app-header";
import { TaskIndex } from "./pages/task-index";

export function RootCmp() {
  return (
    <>
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<TaskIndex />} />
        </Routes>
      </main>
      {/* <AppFooter /> */}
    </>
  );
}
