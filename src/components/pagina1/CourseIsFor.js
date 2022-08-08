import React from 'react';
import { imagenes } from '../../helpers/Imagenes';

export const CourseIsFor = () => {
  return (
    <div>

        <h1 className='titulop'>This course is for</h1>

        <div className='isfor'>

            <div>
                <div className='top2'>
                    <img src={imagenes[1]} alt="mancha" width="100" height="100" />
                    <p className='pcourse'>Beginners</p>    
                </div>
                <p className='pdescription3'>
                  You will receive all the necesary
                  tools for a quick start in the field 
                  of web design, learn how to solve 
                  creative problems with brilliance and
                  build a portfolio that will impress employers
                </p>
            </div>

            <div>
                <div className='top2'>
                    <img src={imagenes[2]} alt="mancha" width="100" height="100" />
                    <p className='pcourse'>Students</p>                  
                </div>
                <p className='pdescription3'>
                  In an educational institution, you are given little
                  information that will be useful after graduation. On
                  course you will learn not only about tools, web design,
                  website development, but also about self-presentation,
                  working with customers.
                </p>
            </div>

            <div>
                <div className='top2'>
                    <img src={imagenes[3]} alt="mancha" width="100" height="100" />
                    <p className='pcourse'>Designers</p>                 
                </div>
                <p className='pdescription3'>
                    you are engaged in design and have already mastered
                    the basic tools, design theory, and are already
                    to master new directions
                </p>
            </div>
        </div>

    </div>
  )
}
