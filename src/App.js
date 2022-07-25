import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import cardData from "./cardData";
import CardComponent from "./components/Card";

function App() {
  let cardElements = cardData.map((data) => {
    return <CardComponent data={data} key={data.id} />;
  });

  return (
    <>
      <h1 className="title">WORKSHOPS</h1>
      <div className="glassmorphic1"></div>
      <div className="text1">
        {" "}
        As a part of Shaastra, we conduct several workshops every year, ranging
        over multiple topics. Some of the workshops that were conducted last
        year were Introduction to Data Science and Machine Learning,
        Cryptocurrency, and blockchain, How to Design a Mars Rover, Parallel
        Programming with Python, Make a chat app using Socket.io, Node.js, and
        MongoDB, and many more.
      </div>
      <div>
        <button onclick="explore()">Explore Workshops </button>{" "}
      </div>
      <div className="glassmorphic2">
        <div className="searchbox">
          <input type="text" placeholder="Search..."></input>
        </div>
        <div className="wrapper">
        {cardElements}
        </div>
      </div>
    </>
  );
}

export default App;
