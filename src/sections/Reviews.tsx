import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className="main-rev" id="reviews">

            <div className="main-title">
                <h2>What my clients say about me</h2>
            </div>

            <div className="rev-card" >

            <div className="review">

                <div className="rev-inner">
                    <div className="rev-inner-1" >
                        <div className="rev-img-div">
                            <Image
                                className="rev-img"
                                src="/client-1.png"
                                alt="client-1"
                            />
                        </div>

                        <div className="rev-star-div">
                            <FaStar className="rev-star-icon" />
                            <FaStar className="rev-star-icon" />
                            <FaStar className="rev-star-icon" />
                            <FaStar className="rev-star-icon" />
                            <FaStar className="rev-star-icon" />
                        </div>

                        <div className="rev-desc">Everyone&apos;s on the same page. Many of our people are not very organized naturally, so Pharps is a godsend!</div>

                        <div className="rev-footer-div">

                            <div className="rev-footer-name">Ms. Tony Rutherford</div>

                            <div className="rev-footer-from">
                                On Fiverr
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>

        </div>
    );
}

export default Reviews;