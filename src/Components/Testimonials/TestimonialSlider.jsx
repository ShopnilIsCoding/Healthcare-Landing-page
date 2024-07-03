
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialCards from "./TestimonialCards";
import img1 from "../../assets/Ellipse 10.png";
import img2 from "../../assets/Ellipse 2.png";
import img3 from "../../assets/Ellipse 5.png";

const testimonials = [
  {
    quote: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
    name: "Sarah D",
    position: "IT Professional",
    image:img1,
    title:"Expertise and Compassion Combined"
  },
  {
    quote: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
    name: "Michael R",
    position: "Business Executive",
    image: img2,
    title:"Life-Saving Care, Life-Changing Experience"
  },
  {
    quote: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and wellness.",
    name: "David S",
    position: "Lawyer",
    image:img3,
    title:"A Partner in Health and Wellness"
  },
 
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <div className="container mx-auto  lg:my-40 my-16"data-aos="fade-up" data-aos-duration="1000">
      <div className=" mb-8">
      <p className="text-sub font-inter rounded-2xl px-2 py-1 border border-[#343268]  w-[130px] text-center">Testimonial</p>
      <h1 className="text-core text-3xl lg:text-4xl lg:max-w-md font-inter font-semibold mt-2 lg:mt-5">What they say about us</h1>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCards key={index} image={testimonial.image} description={testimonial.quote} title={testimonial.title} position={testimonial.position} name={testimonial.name}></TestimonialCards>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
