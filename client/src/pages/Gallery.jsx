import Image from "../assets/IMG_001.JPG";
import Image1 from "../assets/IMG_002.JPG";
import Image2 from "../assets/IMG_003.JPG";
import Image3 from "../assets/IMG_029.JPG";
import Image4 from "../assets/IMG_005.JPG";
import Image5 from "../assets/IMG_006.JPG";
import Image6 from "../assets/IMG_007.JPG";
import Image7 from "../assets/IMG_008.JPG";
import Image8 from "../assets/IMG_031.JPG";
import Image9 from "../assets/IMG_021.JPG";
import Image10 from "../assets/IMG_018.JPG";
import Image11 from "../assets/IMG_012.JPG";
import Image12 from "../assets/IMG_013.JPG";
import Image13 from "../assets/IMG_014.JPG";
import Image14 from "../assets/IMG_034.JPG";
import Image15 from "../assets/IMG_025.JPG";

function Gallery() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Image8})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-cover bg-center bg-fixed h-[90vh] relative"
      >
        <span className="absolute bottom-10 left-20 text-white text-3xl font-semibold">
          Gallery
        </span>
      </div>
      <div className="my-20 max-w-screen-lg m-auto">
        <div className="gallery_grid place-content-center">
          <div
            style={{
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="gallery_grid_1 aspect-w-1 aspect-h-1"
          ></div>
          <div className="gallery_grid_2">
            <div
              style={{
                backgroundImage: `url(${Image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_1 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_2 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_3 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_4 aspect-w-1 aspect-h-1"
            ></div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Image5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="gallery_grid_3 aspect-w-1 aspect-h-1"
          ></div>
          <div className="gallery_grid_4">
            <div
              style={{
                backgroundImage: `url(${Image6})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_1 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image7})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_1 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image11})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_2 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image9})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_3 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image10})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_4 aspect-w-1 aspect-h-1"
            ></div>
          </div>
          <div className="gallery_grid_5">
            <div
              style={{
                backgroundImage: `url(${Image11})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_1 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image12})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_1 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image13})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_2 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image14})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_3 aspect-w-1 aspect-h-1"
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image15})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery_grid_child_4 aspect-w-1 aspect-h-1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
