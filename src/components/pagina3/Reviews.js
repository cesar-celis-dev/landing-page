import React from 'react';
import { Review } from './Review';

export const Reviews = () => {
  return (
    <div>
        <div className='divreview container'>
            <h1 className='text-center titulop'>Reviews</h1>
            <br/>
            <div className='review'>
                <button className='btnview pb'> {"<<"} </button>
                <Review />
                <button className='btnview pb'> {">>"} </button>
                <br/>
            </div>
        </div>
    </div>
  )
}
