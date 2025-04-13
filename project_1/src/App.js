import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import LoadMoreData from "./components/load-more-data"

function App() {
  return (
    <div className="App">
      {/* <Accordian />

      <RandomColor/>

      <StarRating noOfStar={10}/>

      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={"1"}
        limit={"5"}
      />
      */}

      <LoadMoreData />
    </div>
  );
}

export default App;
