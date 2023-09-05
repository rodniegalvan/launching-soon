import React from "react";

//clock
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./styles.css";
import VideoBg from "../src/assets/video.mp4";
const App = () => {
  return (
    <section className="page">
      {/* overlar */}
      <div className="overlay"></div>
      {/* video */}
      <video src={VideoBg} autoPlay Loop muted></video>
      <div className="page__content">
        <h1>Launching Soon</h1>
        <h3>
          Leave your email and we'll let you know once the site goes live.
        </h3>
        {/* clock */}
        <FlipClockCountdown
          to={new Date().getTime() + 72 * 3600 * 1000 + 5000}
          className="flip-clock"
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="btn">Notify Me</button>
      </div>
    </section>
  );
};

export default App;
