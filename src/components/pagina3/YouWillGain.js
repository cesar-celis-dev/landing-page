import React from 'react';
import { imagenes } from '../../helpers/Imagenes';

export const YouWillGain = () => {
  return (
    <div>
        <div className='yougaindiv container'>
            <h1 className='text-center titulop'>What you will gain</h1>
             <br/>
            <div className='yougain'>             
                <ul>
                    <li className='pb'>Landing</li>
                    <li className='pb'>Multipager</li>
                    <li className='pb'>Online store</li>
                    <li className='pb'>Certificate</li>
                </ul>              
                <img src={imagenes[8]} alt="certificate" width="300" height="300" />
            </div>
            
        </div>
    </div>
  )
}
