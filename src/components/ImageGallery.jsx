import React, { useEffect, useState } from 'react';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const ImageGallery = ({ onSelectImage }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'images/');
      try {
        const result = await listAll(storageRef);
        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
        const urls = await Promise.all(urlPromises);
        setImages(urls);
      } catch (error) {
        console.error("Error fetching images: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Loading images...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-900 rounded-lg">
      {images.map((url) => (
        <div key={url} className="relative group" onClick={() => onSelectImage(url)}>
          <img src={url} alt="Uploaded" className="w-full h-32 object-cover rounded-lg cursor-pointer" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-center">Select Image</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
