// src/App.jsx
import "./App.css";
import image from "./assets/discord-background.png";
import image2 from "./assets/discord-logo-white.png";
import image3 from "./assets/menu-icon.png";

function App() {
  return (
    <div style={{ backgroundColor: "#404FED", minHeight: "100vh" }}>
      <img class="logo" src={image2} alt="logo" />

      <img class="menu" src={image3} alt="menu" />
      <br></br>
      <div>
        <h1 style={{ fontFamily: "'Poppins', sans-serif" }}>
          Imagine a place...
        </h1>
        <p style={{ fontFamily: "'Roboto', sans-serif", width: "50%" }}>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button type="button">Download for Mac</button>
        <br></br>
        <br></br>
        <button type="button">Open discord in your browser</button>
      </div>
      <div>
        <img src={image} alt="backgroundimage" />
      </div>
    </div>
  );
}

export default App;
