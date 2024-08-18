import Accordion from "./components/accordion/accordion"
import ImageSlider from "./components/image-slider/ImageSlider"
import LoadMoreData from "./components/load-more-data"
import RandomColorGen from "./components/random-color/RandomColorGen"
import StarRating from "./components/star-rating/StarRating"
import TreeView from "./components/tree-view/TreeView"
import QrCodeGenerator from "./components/QR Code Generator/QrCodeGenerator"

function App() {

  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColorGen /> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView /> */}
      <QrCodeGenerator />
    </>
  )
}

export default App
