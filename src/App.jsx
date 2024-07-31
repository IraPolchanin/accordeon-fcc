import Accordion from "./components/accordion/accordion"
import ImageSlider from "./components/image-slider/ImageSlider"
import RandomColorGen from "./components/random-color/RandomColorGen"
import StarRating from "./components/star-rating/StarRating"

function App() {

  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColorGen /> */}
      {/* <StarRating noOfStars={10}/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/>
    </>
  )
}

export default App
