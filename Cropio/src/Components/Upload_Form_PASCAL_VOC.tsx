import { useState } from 'react'
import Image_Upload from './Image_Upload';
import XML_Upload from './XML_Upload';


function Upload_Form_PASCAL_VOC()
{
   return (
    <div>
        <Image_Upload/>
    
        <br />
        <br />
        <XML_Upload/>        
   </div> 
   );
}

export default Upload_Form_PASCAL_VOC;