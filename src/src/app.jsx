import React from "react";
import About from "./pages/About";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <About />
      <Chatbot />
    </div>
  );
}
