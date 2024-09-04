import React from "react";
import Background from "../components/Background";
import Foreground from "../components/Foreground";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-zinc-800">
      <Background />
      <Foreground />
    </div>
  );
};

export default Home;
