import Image from "next/image";
import { FaStar } from "react-icons/fa";

const revInfo = [
    {
        imageSrc: "/client-1.png",
        description: "Had a perfect time working with Faizan . He completely understood my requirements and the impact it will create on my business . I will love to work with him again !",
        name: "Thomas Hunt",
    },
    // {
    //     imageSrc: "/client-1.png",
    //     description: "Faizan is perfect . He is very communicative and his understanding of what's necessary in order to get maximum value out of it is amazing . JOB WELL DONE",
    //     name: "Gordan Fisher"
    // },
    // {
    //     imageSrc: "/client-1.png",
    //     description: "Good work ! Faizan is quite passionate and experienced . He's my go-to person if I ever need web developer in future",
    //     name: "Helen Moore",
    // },
]

const Reviews = () => {
    return (
        <div className="main-rev" id="reviews">

            <div className="main-title">
                <h2 className="main-title-h2" >Client&apos;s Review</h2>
            </div>

            <div className="rev-card" >

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

            </div>

        </div>
    );
}

export default Reviews;