import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { placements } from '../../../Sheets/placements.json';
import ImageCard from '../../ImageCard';
import { useMemo } from 'react';

const currentViewWidth = window.innerWidth;
const settings = {
  dots: false,
  slidesToShow: currentViewWidth > 991 ? 3 : currentViewWidth > 750 ? 2 : 1,
  centerPadding: '20px',
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2500,
  speed: 600,
  slidesToScroll: 1,
  arrows: currentViewWidth > 991,
};

function PlacementView() {
  const placementsList = useMemo(() => {
    const results = placements.filter((item: any) => item.isActive);
    return results;
  }, []);
  return (
    <section id="services" className="services section-bg inner-page">
      <div className="container py-3" data-aos="fade-up">
        <div className="section-title">
          <h1>Meet our Aspirants</h1>
          <p>Have a glance at their amazing profiles.</p>
        </div>

        <Slider {...settings}>
          {placementsList.map((item, index) => (
            <ImageCard key={index} props={item} />
          ))}
        </Slider>
      </div>

      <div className="container text-center " />
    </section>
  );
}

export default PlacementView;
