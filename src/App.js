import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Data from "./Data";

function App() {
  const cards = Data.map((data) => <Card key={data.id} {...data} />);

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
