import { Carousel } from "flowbite-react";

interface Image {
  path: string;
  alt: string;
}

interface CarouselWrapperProps {
  imageArray: Image[];
}

export const CarouselWrapper = ({ imageArray }: CarouselWrapperProps) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {imageArray.map(({ path, alt }) => {
          return (
            <img
              src={path}
              alt={alt}
              id={alt}
              className="w-full h-full object-cover"
            />
          );
        })}
      </Carousel>
    </div>
  );
};
