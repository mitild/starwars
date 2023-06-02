import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Card from "./Card";
import { one, two, three, four, five, titleOne, subtitleOne, titleTwo,  subtitleTwo,titleThree, subtitleThree, titleFour, subtitleFour,titleFive, subtitleFive  } from "../Home/homeAssets";

// Home page Slider
const Slider = () => {

    const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
  }
}
  return (
    <Carousel 
      responsive={ responsive }
      autoPlay={ true }
      infinite={ true }
    >
      <Card 
        imageurl={one}
        title={ titleOne }
        subtitle={ subtitleOne }
        hasImg= { true }
      />
      <Card 
        imageurl={two}
        title={ titleTwo }
        subtitle={ subtitleTwo }
      />
      <Card 
        imageurl={three}
        title={ titleThree }
        subtitle={ subtitleThree }
      />
      <Card 
        imageurl={four}
        title={ titleFour }
        subtitle={ subtitleFour }
      />
      <Card 
        imageurl={five}
        title={ titleFive }
        subtitle={ subtitleFive }
      />
    </Carousel>
  )
}

export default Slider