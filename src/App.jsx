import Accordion from "./components/accordion/accordion"
import ImageSlider from "./components/image-slider/ImageSlider"
import LoadMoreData from "./components/load-more-data"
import RandomColorGen from "./components/random-color/RandomColorGen"
import StarRating from "./components/star-rating/StarRating"
import TreeView from "./components/tree-view/TreeView"
import QrCodeGenerator from "./components/QR Code Generator/QrCodeGenerator"
import LightDarkMode from "./components/light-dark-mode/LightDarkMode"
import ScrollIndicator from "./components/scroll-Indicator/ScrollIndicator"
import CustomTabs from "./components/custom-tabs/CustomTabs"
import CustomModalPopup from "./components/custom-modal-popup/CustomModalPopup"
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder"
import SearchAutocomplete from "./components/search-autocomplete-with-api/SearchAutocomplete"
import TicTacToe from "./components/tic-tact-toe/TicTacToe"
import { FeatureFlagGlobalState } from "./components/feature-flag/FeatureFlagsContext"
import FeatureFlag from "./components/feature-flag/FeatureFlag"
import UseFetchHookTest from "./components/useFetch/UseFetchHookTest"
import UseOnclickOutsideTest from "./components/use-outside-click/UseOnclickOutsideTest"
import UseWindowResizeTest from "./components/use-window-resize/UseWindowResizeTest"
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom/ScrollToTopAndBottom"
import ScrollToSection from "./components/scroll-to-section/ScrollToSection"
import Weather from "./components/weather/Weather"
import FoodRecipeApp from "./components/food-recipe-app/FoodRecipeApp"

function App() {

  return (
    <>
      {/* <Accordion />
      <RandomColorGen /> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> */}
      {/* <LoadMoreData />
      <TreeView /> */}
      {/* <QrCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator /> */}
      {/* <CustomTabs /> */}
      {/* <CustomModalPopup /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOnclickOutsideTest /> */}
      {/* <UseWindowResizeTest/> */}
      {/* <ScrollToTopAndBottom /> */}
      {/* <ScrollToSection /> */}
      {/* <Weather /> */}
      <FoodRecipeApp />

    </>
  )
}

export default App
