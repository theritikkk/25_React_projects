import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import LoadMoreData from "./components/load-more-data"
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabsTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-model-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagsGlobalState from "./components/feature-flag/context";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndToBottom from "./components/scroll-to-top-and-bottom/index";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

function App() {

  return (

    <div className="App">

      {/* <Accordian /> */}

      {/* <RandomColor/> */}

      {/* <StarRating noOfStar={10}/> */}

      {/* <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={"1"}
        limit={"5"}
      /> */}
      
      
      {/* <LoadMoreData /> */}


      {/* <TreeView menus={menus} /> */}


      {/* <QRCodeGenerator /> */}


      {/* <LightDarkMode /> */}

      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

      {/* < TabsTest /> */}

      {/* <ModalTest /> */}

      {/* <GithubProfileFinder /> */}

      {/* <SearchAutoComplete /> */}
      
      {/* <FeatureFlagsGlobalState>
        <FeatureFlags />
      </FeatureFlagsGlobalState> */}

      {/* <UseFetchHookTest /> */}

      {/* <UseOnClickOutsideTest /> */}

      {/* <UseWindowResizeTest /> */}

      {/* <ScrollToTopAndToBottom /> */}

      {/* <ScrollToSection /> */}

      
      

    </div>

  );
  
}

export default App;
