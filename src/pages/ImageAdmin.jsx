import React from 'react';
import ImageUpload from '../components/ImageUpload';

const ImageAdmin = () => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">Image Management</h1>
      <p className="mb-6">
        Use this page to upload new images to be used across the website. Once an image is uploaded, you will get a URL that you can use in blog posts, product descriptions, or any other page.
      </p>
      <ImageUpload />
    </div>
  );
};

export default ImageAdmin;
