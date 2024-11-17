import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "./img/BlogSpecific/2024/WirSuchenDich/img1.jpeg",
    thumbnail: "./img/BlogSpecific/2024/WirSuchenDich/img1.jpeg",
  },
  {
    original: "img/BlogSpecific/2024/WirSuchenDich/img2.jpeg",
    thumbnail: "img/BlogSpecific/2024/WirSuchenDich/img2.jpeg",
  },
  {
    original: "img/BlogSpecific/2024/WirSuchenDich/img3.jpeg",
    thumbnail: "img/BlogSpecific/2024/WirSuchenDich/img3.jpeg",
  },
];

export const WirSuchenDichFromInternet = () => {
  return <ImageGallery items={images} height="50%" />;
};
