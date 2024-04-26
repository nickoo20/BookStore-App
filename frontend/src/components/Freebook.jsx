import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const Freebook = () => {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-4 md:px-20">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses </h1>
          <p>
            Reiciendis dolorem maxime impedit ad dignissimos itaque ea optio
            quos recusandae minima eos aut possimus aperiam qui libero
            voluptate, fuga facilis et fugiat cum numquam dolor.
          </p>
        </div>
        <div>
          <Slider {...settings}>
           {
            filterData.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
           }
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;