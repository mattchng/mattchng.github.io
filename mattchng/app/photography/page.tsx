import React from "react";
import Navbar from "@/components/Navbar";

export default function PhotographyPage() {
  const photos = [
    { src: "website_img1.jpeg", caption: "central park" },
    { src: "website_img2.jpeg", caption: "east river" },
    { src: "website_img3.jpeg", caption: "pier 25" },
    { src: "website_img4.jpeg", caption: "chinatown" },
    { src: "website_img5.jpeg", caption: "union square" },
    { src: "website_img6.jpeg", caption: "santa monica beach" },
    { src: "website_img7.jpeg", caption: "central park" },
    { src: "website_img8.jpeg", caption: "brooklyn bridge" },
    { src: "website_img9.jpeg", caption: "danube river" },
  ];

  return (
    <div className="max-w-2xl w-full">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 px-6 fade-in">
          <h1 className="heading-primary">Photography</h1>

          <div className="gallery-grid mt-8">
            {photos.map((photo, idx) => (
              <div key={photo.src} className="polaroid">
                <img src={`/images/${photo.src}`} alt={`photo ${idx + 1}`} />
                <div className="caption marker">{photo.caption}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
