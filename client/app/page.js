"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Login from "./pages/Login"
export default function Home() {
  return (
    <Provider store={store}>
      <>
        <div className=""></div>
        <div className="bg-[#1b1b1b] min-h-[100vh]">
          <Login />
        </div>
      </>
    </Provider>
  );
}