"use client";

import React, { useEffect, useState } from "react";

interface ImageType {
  _id: string;
  url: string;
  title?: string;
}

export default function Instagram() {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/admin/insta-images");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Failed to fetch images:", err);
      }
    };
    fetchImages();
  }, []);

  return (
    <section id="insta" className="insta-bg py-20">
      <div className="container-custom">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[3rem] md:text-[4rem] font-semibold text-white">Instagram</h2>
          <a href="#footer" className="text-[2.4rem] text-white">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {images.length > 0 ? (
            images.map((img) => (
              <div key={img._id} className="h-[400px] overflow-hidden">
                <img
                  src={img.url}
                  alt={img.title || "Portfolio image"}
                  className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))
          ) : (
            <p className="text-white col-span-full text-center">No images available</p>
          )}
        </div>
      </div>
    </section>
  );
}
