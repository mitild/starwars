import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Card from "./Card";
import { one, two, three, four, five, titleOne, subtitleOne, titleTwo,  subtitleTwo,titleThree, subtitleThree, titleFour, subtitleFour,titleFive, subtitleFive  } from "../Home/homeAssets";

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
        imageUrl={one}
        title={ titleOne }
        subtitle={ subtitleOne }
        hasImg= { true }
      />
      <Card 
        imageUrl={two}
        title={ titleTwo }
        subtitle={ subtitleTwo }
      />
      <Card 
        imageUrl={three}
        title={ titleThree }
        subtitle={ subtitleThree }
      />
      <Card 
        imageUrl={four}
        title={ titleFour }
        subtitle={ subtitleFour }
      />
      <Card 
        imageUrl={five}
        title={ titleFive }
        subtitle={ subtitleFive }
      />
    </Carousel>
  )
}

export default Slider