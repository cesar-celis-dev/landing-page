import React from 'react';
import { imagenes } from '../../helpers/Imagenes';

export const Review = () => {
  return (
    <div>
        <div className='viewers container'>
            <div className='viewerdiv'>
                <img src={imagenes[7]} alt="imgview" className='imgviewer' />
            </div>
            
            <h2 className='text-center negrita'>Cesar Celis</h2>
            <p className='pdescription3'>
                I am very glad that i got here, and trusted their
                speakers at the intensive.<br/>Large homework reviews,
                help in any incomprehensible situation, and multiple
                webinars on various topics.
            </p>
        </div>
    </div>
  )
}
