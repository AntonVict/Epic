import React, { useState, ChangeEvent } from 'react';

function Image_Upload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (event.target.files) {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }
        }}
      />
    </div>
  );
}

export default Image_Upload;
