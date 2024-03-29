import CarouselSpacing  from "@/entities/Carousel/ui/Carousel";
import './Gallery.scss';
// h
export default function Gallery() {
  return (
    <>
    <div className="gallery__inner">
      <section className="container pt-[40px]">
        <div className="flex gallery mb-[37px]">
          <h2>Галерея</h2>
          <div className="gallery__swiper"></div>
        </div>
      </section>
      <div className="pb-[122px]">
        <CarouselSpacing />
      </div>
    </div>
    </>
  )
}