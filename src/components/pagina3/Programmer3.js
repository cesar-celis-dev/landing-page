import React from 'react';
import { imagenes } from '../../helpers/Imagenes';

export const Programmer3 = () => {
  
  return (
    <div className='programmerdiv'>
        <img 
          className='imgp3'
          src={imagenes[6]} alt="programmer" width="300" height="300" 
        />
        <br/>
        <div className='diver'>
            <h2 className='text-center negrita'>Josias Aparicio</h2>     
            <p className='pdescription3'>
              Is a developer that has experience working in diferent
              countries, and specialy in France.
            </p>
        </div>
    </div>
  )
}
