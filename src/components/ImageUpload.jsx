import React, { useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setUrl('');
      setProgress(0);
      setError('');
    }
  };

  const handleUpload = () => {
    if (!image) {
      setError('Please select an image first.');
      return;
    }

    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          setPreview('');
        });
      }
    );
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-800 text-white">
      <h3 className="text-xl font-bold mb-4">Upload Image</h3>
      <div className="flex flex-col items-center space-y-4">
        <input type="file" onChange={handleChange} className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        {preview && <img src={preview} alt="Preview" className="w-48 h-48 object-cover rounded-lg" />}
        <button onClick={handleUpload} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50" disabled={!image}>
          Upload Image
        </button>
        {progress > 0 && <progress value={progress} max="100" className="w-full" />}
        {error && <p className="text-red-500">{error}</p>}
        {url && (
          <div className="w-full">
            <p className="text-green-500">Image uploaded successfully!</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all">
              {url}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
