import Slider from "react-slick";
import ava01 from '@/assets/images/ava-1.jpg'
import ava02 from '@/assets/images/ava-2.jpg'
import ava03 from '@/assets/images/ava-3.jpg'
import '@/styles/slider.scss'

const TestimonialSlider = () => {
    
    const settings = {
        dots: true,
        autoplay: true,
        inifinite: true,
        speed: 2000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Slider {...settings}>
            <div className="slider-review_profile">
                <div className="slider-content d-flex align-item-center gap-3">
                    <img src={ava01} alt="reviewer #1" className="rounded" loading="lazy" />
                    <h6>Tom Cruz</h6>
                </div>
                <p className="slider-review_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis qui in quis! Sapiente quibusdam odio asperiores eos ipsum minus quod, optio repellat non, praesentium eius deserunt ea neque libero est!
                </p>
            </div>
            <div className="slider-review_profile">
                <div className="slider-content d-flex align-item-center gap-3">
                    <img src={ava02} alt="reviewer #2" className="rounded" loading="lazy" />
                    <h6>Jennifer Lopez</h6>
                </div>
                <p className="slider-review_text">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus a libero dolorem eius fuga magni quibusdam similique quidem aut quia. Consectetur unde laboriosam assumenda natus, possimus corporis voluptatem cupiditate deserunt!
                </p>
            </div>
            <div className="slider-review_profile">
                <div className="slider-content d-flex align-item-center gap-3">
                    <img src={ava03} alt="reviewer #3" className="rounded" loading="lazy" />
                    <h6>Brad Feet</h6>
                </div>
                <p className="slider-review_text">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quis amet reprehenderit. Adipisci fugit distinctio eum officia dolores, quo esse qui tempore itaque minus, libero nulla.
                </p>
            </div>
        </Slider>
    )
}
export default TestimonialSlider