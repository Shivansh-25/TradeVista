"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import First from "./Pages/First";

export default function Home() {
  return (
    <Provider store={store}>
      <>
        <div className="">
          <First />
        </div>
      </>
    </Provider>
  );
}
