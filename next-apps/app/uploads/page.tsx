'use client';

import React, { useState } from 'react';
import { CldImage, CldUploadWidget } from 'next-cloudinary';

const UploadFiles = () => {
  const [publicId, setPublicId] = useState('');

  const handleSuccess = (result: any) => {
    const { info } = result;
    if (info?.secure_url) {
      // Use the secure URL for the uploaded image
      setPublicId(info.secure_url);
    }
  };

  return (
    <>
      {/* Conditionally render the image if publicId exists */}
      {publicId && (
        <CldImage
          src={publicId}
          width={300}
          height={300}
          alt="Uploaded image"
        />
      )}

      {/* Upload Widget */}
      <CldUploadWidget
        uploadPreset="rpsfsq41"
        onSuccess={handleSuccess} 
      >
        {({ open }) => (
          <button className="btn btn-outline" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadFiles;
