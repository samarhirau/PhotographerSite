"use client";

import React, { useEffect, useState } from "react";

interface ImageType {
  _id: string;
  url: string;
  title?: string;
}

export default function Portfolio() {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/admin/work-images"); // change to your portfolio API if different
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Failed to fetch portfolio images:", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <section id="portfolio" className="py-20">
      <div className="container-custom">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[3rem] md:text-[4rem] font-semibold">my last works</h2>
          <a href="#contact" className="text-[2.4rem]">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px]">
          {images.length > 0 ? (
            images.map((img, index) => (
              <div key={img._id} className="overflow-hidden">
                <img
                  src={img.url}
                  alt={img.title || `Portfolio ${index + 1}`}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))
          ) : (
            
            <p className="text-center col-span-full">No portfolio images available.</p>
            
            
          )}
        </div>
      </div>
    </section>
  );
}
