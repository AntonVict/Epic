import React, { useState, ChangeEvent } from 'react';

const XML_Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isValidXml, setIsValidXml] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      if (selectedFile.type === 'text/xml') {
        setFile(selectedFile);
        setIsValidXml(true);
      } else {
        setFile(null);
        setIsValidXml(false);
        alert('Please select a valid XML file.');
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {isValidXml && <p>File is a valid XML file!</p>}
    </div>
  );
};

export default XML_Upload;