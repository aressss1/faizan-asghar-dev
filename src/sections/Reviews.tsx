import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight , faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {  FaMinus, FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { DotProps } from 'react-multi-carousel/lib/types';



const Reviews = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const revInfo = [
        {
            imageSrc: "/client-1.png",
            description: "Had a perfect time working with Faizan . He completely understood my requirements and the impact it will create on my business . I will love to work with him again !",
            name: "Thomas Hunt",
        },
        {
            imageSrc: "/client-1.png",
            description: "Faizan is perfect . He is very communicative and his understanding of what's necessary in order to get maximum value out of it is amazing . JOB WELL DONE",
            name: "Gordan Fisher"
        },
        {
            imageSrc: "/client-1.png",
            description: "Good work ! Faizan is quite passionate and experienced . He's my go-to person if I ever need web developer in future",
            name: "Helen Moore",
        },
    ]

    const CustomDot = ({ index, onClick, active }: DotProps) => {
        return (
          <li
            className={active ? "active" : "inactive"}
            onClick={onClick}
          >
            <FaMinus />
          </li>
        );
      };

    return (
        <div className="main-rev" id="reviews">

            <div className="main-title">
                <h2 className="main-title-h2" >Client&apos;s Review</h2>
            </div>

            <div className="rev-card" >

                <Carousel
                    arrows
                    containerClass="container"
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    customLeftArrow={
                        <FontAwesomeIcon
                            icon={faChevronLeft  as IconProp}
                            size="2xl"
                            className="car-icon-1"
                        />
                    }
                    customRightArrow={
                        <FontAwesomeIcon
                            icon={faChevronRight as IconProp}
                            size="2xl"
                            className="car-icon-2"
                        />
                    }
                    autoPlay={responsive.tablet || responsive.tablet ? true : false}
                    autoPlaySpeed={2000}
                    pauseOnHover
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    customDot={<CustomDot />}
                    // deviceType={responsive.mobile}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="carousal"
                >
                    {revInfo.map((rev) => (

                        <div key={rev.name} className="review">

                            <div className="rev-inner">
                                <div className="rev-inner-1" >
                                    <div className="rev-img-div">
                                        <Image
                                            className="rev-img"
                                            src={rev.imageSrc}
                                            alt="client"
                                        />
                                    </div>

                                    <div className="rev-star-div">
                                        <FaStar className="rev-star-icon" />
                                        <FaStar className="rev-star-icon" />
                                        <FaStar className="rev-star-icon" />
                                        <FaStar className="rev-star-icon" />
                                        <FaStar className="rev-star-icon" />
                                    </div>

                                    <div className="rev-desc">
                                        {rev.description}
                                    </div>

                                    <div className="rev-footer-div">

                                        <div className="rev-footer-name">
                                            {rev.name}
                                        </div>

                                        <div className="rev-footer-from">
                                            On Fiverr
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    ))}
                </Carousel>

            </div>

        </div >
    );
}

export default Reviews;



