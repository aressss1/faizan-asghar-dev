import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    return (
        <div id="reviews" className="review">
    
            <div className="rev-inner">
                <div className="rev-img-div">
                    <Image  
                     className="rev-img"
                     src="https://via.placeholder.com/68x68"
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
                        From Fiverr
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;