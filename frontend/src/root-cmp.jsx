import React from "react";
import { Routes, Route } from "react-router";
import { TaskIndex } from "./pages/task-index";


export function RootCmp() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<TaskIndex />} />
        </Routes>
      </main>
      {/* <AppFooter /> */}
    </>
  );
}
