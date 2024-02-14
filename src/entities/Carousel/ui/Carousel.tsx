import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
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
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 flex">
              <div className="carousel__inner__inside">IMG</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
