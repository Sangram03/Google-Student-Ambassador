import { useState } from "react";
import * as Images from "../assets/asset";

interface BlogItem {
  img: string;
  desc: string;
}

const Blog = () => {
  const blogs: BlogItem[] = [
    {
      img: Images.MailImage,
      desc: "A Selection Mail is an official confirmation sent to candidates who have successfully cleared the recruitment or admission process. It usually includes details about next steps, joining instructions, and important guidelines.",
    },
    {
      img: Images.TeamImage,
      desc: "The Google Student Ambassador Team.",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Blog Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Latest Blogs
      </h1>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.img}
              alt={`Blog ${index + 1}`}
              className="w-full h-40 sm:h-52 md:h-60 lg:h-72 object-cover cursor-pointer"
              onClick={() => setSelectedImage(blog.img)} // ✅ click to zoom
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm sm:text-base">{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal for Zoomed Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl font-bold hover:text-red-400 transition"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-full sm:max-w-2xl md:max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Blog;
