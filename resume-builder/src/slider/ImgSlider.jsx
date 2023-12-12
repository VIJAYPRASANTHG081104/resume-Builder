import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'; // Import the slick carousel styles
import 'slick-carousel/slick/slick-theme.css';
import t1 from '../images/template/t1.png'
import t2 from '../images/template/t2.png'
import t3 from '../images/template/t3.png'
import t4 from '../images/template/t4.png'
import t5 from '../images/template/t5.png'
import t6 from '../images/template/t6.png'
import t7 from '../images/template/t7.png'
import t8 from '../images/template/t8.png'
import { useNavigate } from 'react-router-dom'
import '../resources/maintemplate.css'

const ImgSlider = () => {
    const navigate = useNavigate()
    const templating = [
      {
        title: "Resume Template 1",
        image: t1
      },
      {
        title: "Resume Template 2",
        image: t2
      },
      {
        title: "Resume Template 3",
        image: t3
      },
      {
        title: "Resume Template 4",
        image: t4
      },{
        title: "Resume Template 5",
        image: t5
      },{
        title: "Resume Template 6",
        image: t6
      },{
        title: "Resume Template 7",
        image: t7
      },
      {
        title: "Resume Template 8",
        image: t8
      },
      
    ]
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlider: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: { // Corrected 'settings' key here
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <Slider {...settings}>
      {templating.map((item, index) => (
        <div className='testimonial py-4 px-3' key={index}>
          <div className='d-flex align-items-center gap-4 mt-3'>
            <div className='template1' style={{ width: 500 }}>
              <img src={item.image} height={400} alt={item.title} className='slid__img'/>
              <div id='text'>
               
                <button className='slid-btn'
                  id='temBtn'
                  onClick={() => {
                    // Implement your navigation logic here, e.g., using React Router
                    navigate(`/template/${index + 1}`);
                  }}
                >
                  Try
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

  

export default ImgSlider