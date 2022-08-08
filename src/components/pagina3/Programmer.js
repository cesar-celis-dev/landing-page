import React from 'react';
import { imagenes } from '../../helpers/Imagenes';

export const Programmer = () => {
  
  return (
    <div className='programmerdiv'>
        <img 
          className='imgp'
          src={imagenes[4]} alt="programmer" width="300" height="300" 
        />
        <br/>
        <div className='diver'>
            <h2 className='text-center negrita' >Marco Villanueva</h2>
            <p className='pdescription3'>
              Web designer with over 2 years experience.
              Currently works in a multinational company
              doing home-office.
            </p>
        </div>
    </div>
  )
}
