import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "img/img2.jpeg",
    thumbnail: "img/img2.jpeg",
  },
  {
    original: "img/img1.jpeg",
    thumbnail: "img/img1.jpeg",
  },
  {
    original: "img/img.jpeg",
    thumbnail: "img/img.jpeg",
  },
];

export const WirSuchenDichFromInternet2 = () => {
  return <ImageGallery items={images} height="50%" />;
};
