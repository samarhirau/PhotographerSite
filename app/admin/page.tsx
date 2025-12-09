

// "use client";

// import { useEffect, useState } from "react";

// interface ImageType {
//   _id: string;
//   url: string;
//   title?: string;
// }

// export default function AdminPortfolio() {
//   const [workImages, setWorkImages] = useState<ImageType[]>([]);
//   const [instaImages, setInstaImages] = useState<ImageType[]>([]);

//   const [workFile, setWorkFile] = useState<File | null>(null);
//   const [workTitle, setWorkTitle] = useState("");
//   const [instaFile, setInstaFile] = useState<File | null>(null);
//   const [instaTitle, setInstaTitle] = useState("");

//   const [loadingWork, setLoadingWork] = useState(false);
//   const [loadingInsta, setLoadingInsta] = useState(false);

//   // --- Fetch Images ---
//   const fetchWorkImages = async () => {
//     const res = await fetch("/api/admin/work-images");
//     const data = await res.json();
//     setWorkImages(data);
//   };

//   const fetchInstaImages = async () => {
//     const res = await fetch("/api/admin/insta-images");
//     const data = await res.json();
//     setInstaImages(data);
//   };

//   useEffect(() => {
//     fetchWorkImages();
//     fetchInstaImages();
//   }, []);

//   // --- Upload ---
//   const handleAddWork = async () => {
//     if (!workFile) return;
//     setLoadingWork(true);

//     const formData = new FormData();
//     formData.append("image", workFile);
//     formData.append("title", workTitle);

//     await fetch("/api/admin/work-images", { method: "POST", body: formData });

//     setWorkFile(null);
//     setWorkTitle("");
//     fetchWorkImages();
//     setLoadingWork(false);
//   };

//   const handleAddInsta = async () => {
//     if (!instaFile) return;
//     setLoadingInsta(true);

//     const formData = new FormData();
//     formData.append("image", instaFile);
//     formData.append("title", instaTitle);

//     await fetch("/api/admin/insta-images", { method: "POST", body: formData });

//     setInstaFile(null);
//     setInstaTitle("");
//     fetchInstaImages();
//     setLoadingInsta(false);
//   };

//   // --- Delete ---
//   const handleDeleteWork = async (id: string) => {
//     await fetch(`/api/admin/work-images?id=${id}`, { method: "DELETE" });
//     fetchWorkImages();
//   };

//   const handleDeleteInsta = async (id: string) => {
//     await fetch(`/api/admin/insta-images?id=${id}`, { method: "DELETE" });
//     fetchInstaImages();
//   };

//   return (
//     <div className="min-h-screen p-10 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-6">Portfolio Admin</h1>

//       {/* Work Images Section */}
//       <section className="mb-16">
//         <h2 className="text-2xl font-semibold mb-4">Work Images</h2>
//         <div className="flex flex-col sm:flex-row gap-3 mb-6">
//           <input
//             type="file"
//             onChange={(e) => setWorkFile(e.target.files?.[0] || null)}
//             className="px-4 py-2 border rounded-md w-full"
//           />
//           <input
//             type="text"
//             placeholder="Title (optional)"
//             value={workTitle}
//             onChange={(e) => setWorkTitle(e.target.value)}
//             className="px-4 py-2 border rounded-md w-full"
//           />
//           <button
//             onClick={handleAddWork}
//             disabled={loadingWork}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
//           >
//             {loadingWork ? "Uploading..." : "Upload"}
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {workImages.map((img) => (
//             <div key={img._id} className="bg-white rounded-md shadow-md p-2 relative">
//               <img src={img.url} alt={img.title} className="w-full h-40 object-cover rounded-md mb-2" />
//               <p className="text-center text-sm mb-2">{img.title}</p>
//               <button
//                 onClick={() => handleDeleteWork(img._id)}
//                 className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Instagram Images Section */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Instagram Images</h2>
//         <div className="flex flex-col sm:flex-row gap-3 mb-6">
//           <input
//             type="file"
//             onChange={(e) => setInstaFile(e.target.files?.[0] || null)}
//             className="px-4 py-2 border rounded-md w-full"
//           />
//           <input
//             type="text"
//             placeholder="Title (optional)"
//             value={instaTitle}
//             onChange={(e) => setInstaTitle(e.target.value)}
//             className="px-4 py-2 border rounded-md w-full"
//           />
//           <button
//             onClick={handleAddInsta}
//             disabled={loadingInsta}
//             className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
//           >
//             {loadingInsta ? "Uploading..." : "Upload"}
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {instaImages.map((img) => (
//             <div key={img._id} className="bg-white rounded-md shadow-md p-2 relative">
//               <img src={img.url} alt={img.title} className="w-full h-40 object-cover rounded-md mb-2" />
//               <p className="text-center text-sm mb-2">{img.title}</p>
//               <button
//                 onClick={() => handleDeleteInsta(img._id)}
//                 className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

interface ImageType {
  _id: string;
  url: string;
  title?: string;
}

export default function AdminPortfolio() {
  const [workImages, setWorkImages] = useState<ImageType[]>([]);
  const [instaImages, setInstaImages] = useState<ImageType[]>([]);
  const [workFile, setWorkFile] = useState<File | null>(null);
  const [instaFile, setInstaFile] = useState<File | null>(null);
  const [workTitle, setWorkTitle] = useState("");
  const [instaTitle, setInstaTitle] = useState("");
  const [loading, setLoading] = useState({ work: false, insta: false });

  // Fetch images
  const fetchImages = async (type: "work" | "insta") => {
    try {
      const res = await fetch(`/api/admin/${type}-images`);
      const data = await res.json();
      if (type === "work") setWorkImages(data);
      else setInstaImages(data);
    } catch (err) {
      console.error(`Failed to fetch ${type} images:`, err);
    }
  };

  useEffect(() => {
    fetchImages("work");
    fetchImages("insta");
  }, []);

  // Upload function
  const handleUpload = async (type: "work" | "insta") => {
    const file = type === "work" ? workFile : instaFile;
    const title = type === "work" ? workTitle : instaTitle;
    if (!file) return;

    setLoading((prev) => ({ ...prev, [type]: true }));

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);

    await fetch(`/api/admin/${type}-images`, { method: "POST", body: formData });

    if (type === "work") {
      setWorkFile(null);
      setWorkTitle("");
      fetchImages("work");
    } else {
      setInstaFile(null);
      setInstaTitle("");
      fetchImages("insta");
    }

    setLoading((prev) => ({ ...prev, [type]: false }));
  };

  // Delete function
  const handleDelete = async (type: "work" | "insta", id: string) => {
    await fetch(`/api/admin/${type}-images?id=${id}`, { method: "DELETE" });
    fetchImages(type);
  };

  // Render image section
  const renderSection = (
    title: string,
    type: "work" | "insta",
    images: ImageType[],
    file: File | null,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    imgTitle: string,
    setImgTitle: React.Dispatch<React.SetStateAction<string>>,
  ) => (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="px-4 py-2 border rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Title (optional)"
          value={imgTitle}
          onChange={(e) => setImgTitle(e.target.value)}
          className="px-4 py-2 border rounded-md w-full"
        />
        <button
          onClick={() => handleUpload(type)}
          disabled={loading[type]}
          className={`px-4 py-2 rounded-md text-white ${type === "work" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"} disabled:opacity-50`}
        >
          {loading[type] ? "Uploading..." : "Upload"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div key={img._id} className="bg-white rounded-md shadow-md p-2 relative">
            <img src={img.url} alt={img.title} className="w-full h-40 object-cover rounded-md mb-2" />
            <p className="text-center text-sm mb-2">{img.title}</p>
            <button
              onClick={() => handleDelete(type, img._id)}
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Portfolio Admin</h1>
      {renderSection("Work Images", "work", workImages, workFile, setWorkFile, workTitle, setWorkTitle)}
      {renderSection("Instagram Images", "insta", instaImages, instaFile, setInstaFile, instaTitle, setInstaTitle)}
    </div>
  );
}
