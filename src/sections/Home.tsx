import React from "react";
import Particles from "react-tsparticles";

const Home: React.FC = () => {
  return (
    <section id="home" style={{ height: "100vh", position: "relative" }}>
      <Particles
        options={{
          fullScreen: { enable: true },
          background: { color: "#0d0d0d" },
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            move: { enable: true },
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Welcome to My Portfolio</h1>
      </div>
    </section>
  );
};

export default Home;
