import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

function App() {
  return (
    <><h1 className='title'>
      WORKSHOPS
    </h1>
    <div className='glassmorphic1'></div>
    <div className='text1'> As a part of Shaastra, we conduct several workshops every year, ranging over multiple topics. Some of the workshops that were conducted last year were Introduction to Data Science and Machine Learning, Cryptocurrency, and blockchain, How to Design a Mars Rover, Parallel Programming with Python, Make a chat app using Socket.io, Node.js, and MongoDB, and many more.</div><div><button onclick="explore()">Explore Workshops </button> </div>
    <div className='glassmorphic2'>
      <div className='searchbox'>
      <input type="text" placeholder="Search..."></input>
      </div>
      <div className="wrapper">
      <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="web development"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="app development"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="python"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="machine learning"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />

      <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="data science"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />

      <Card
        title="elecfest"
        img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        description="Baked Cod with Vegetables. 30 minute meal!"
      />
    </div>

     </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;

