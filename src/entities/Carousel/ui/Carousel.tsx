import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

import './Carousel.scss';

export default function CarouselSpacing() {

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-2xl carousel__inner"
    >
      <div className="carousel__btn-desktop">
        <CarouselPrevious className="carousel__slide" />
        <CarouselNext className="carousel__slide next" />
      </div>
      <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img className="h-[240px] object-cover" src="https://i.ytimg.com/vi/-1tgphdZSmo/maxresdefault.jpg"/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img className="h-[240px] object-cover" src="https://tytan-professional.ru/wp-content/uploads/41612-TP_Banner-for-Internet_FMS-mob.jpg"/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img className="h-[240px] object-cover" src="https://rupec.ru/upload/resize_cache/iblock/929/807_414_2/92964cfa805262c6bf4b57e47d877d5c.jpg"/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img className="h-[240px] object-cover" src="https://tytan-professional.ru/wp-content/uploads/34795V01_TP_Ultrafast70_700x500_RU.jpg"/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img className="h-[240px] object-cover" src="https://tytan-professional.ru/wp-content/uploads/34797V01_TP_60seconds_700x500_RU_ver_2.jpg"/>
          </CarouselItem>

      </CarouselContent>
      <div className="carousel__btn-mobile">
        <CarouselPrevious className="carousel__slide" />
        <CarouselNext className="carousel__slide next" />
      </div>
    </Carousel>
  )
}
