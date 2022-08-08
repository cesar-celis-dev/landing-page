import React from 'react';
import { imagenes } from '../../helpers/Imagenes';
import { Level } from '../pagina1/Level';

export const Form = () => {
  return (
    <div>
        <div className='allinput container'>
            <h1 className='text-center titulop'>Fill out the form and<br/> we will contact you</h1>

            <div className='divinput'>
                <div>
                    <input 
                        type="text" 
                        className="inputform" 
                        placeholder='Name'
                    />
                </div>

                <div>
                    <input 
                        type="text" 
                        className="inputform" 
                        placeholder='E-mail'
                    />
                </div>

                <div>
                    <input 
                        type="text" 
                        className="inputform" 
                        placeholder='Phone number'
                    />
                </div>

            </div>
        </div>

        <div className='container'>
            <div className='formsign'>
                <img src={imagenes[9]} alt="arrow1" width="200" height="170" />
                <button className='btn btn-warning'><p className='pb'>Sign up</p></button>
                <img src={imagenes[10]} alt="arrow2" width="200" height="170" />
            </div>

            <div className='text-center'>
                <input type="checkbox" name="my-checkbox" id="opt-in"/>
                <label for="opt-in"><p className='negrita'>I agree with the terms and the privacy policy</p></label>
            </div>

            <hr className='hr1'/>
        </div>

        <div className='container'>
            <Level />
        </div>
    </div>
  )
}
