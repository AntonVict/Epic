import { useState } from 'react'
import Image_Upload from './Image_Upload';
import { selectClasses } from '@mui/material';


function Upload_Form_PASCAL_VOC()
{
    const [selectedImage, setSelectedImage] = useState(null);

   return (

    <div>
        <Image_Upload/>
        <XML_Upload/>
        

   </div> 
   );
}

export default Upload_Form_PASCAL_VOC;