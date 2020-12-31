import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="info">
          <span className="line_one">HELLO </span>
          <span className="line_two">
            I'm
            <div class="wrapper">
              <h1 class="glitch">Pratiyush Ray</h1>
            </div>
          </span>
          <br></br>
          <span className="line_three">
            Cyber Security Analyst, Android App Developer
          </span>
        </div>
        <img src="/img.jpg" />
      </div>
    </div>
  );
}

export default Home;
