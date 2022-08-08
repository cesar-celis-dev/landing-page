import React from 'react';
import { imagenes } from '../../helpers/Imagenes';

export const Programmer2 = () => {
  
  return (
    <div className='programmerdiv'>
        <img 
          className='imgp2'
          src={imagenes[5]} alt="programmer" width="300" height="300" 
        />
        <br/>
        <div className='diver'>
            <h2 className='text-center negrita'>André Curiel</h2>
            <p className='pdescription3'>
              Is a Backend developer with over 10 years
              experience. Currentrly works as a programming 
              teacher as a private tutor.
            </p>
        </div>
    </div>
  )
}
