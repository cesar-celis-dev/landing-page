import React from 'react';

export const SecondPage = () => {
  return (
    <div>
        <div className='cuadroprogram container'>

            <div className='imgprogram'>
                <h1 className='titulop'>Program</h1>
            </div>

            <div>
                <ol>
                    <li className='titulop pb'>Figma</li><hr/>
                    <li className='pb'>Introduction to web design</li><hr/>
                    <li className='pb'>UI Basics</li><hr/>
                    <li className='pb'>UX. Research phase</li><hr/>
                    <li className='pb'>Landing prototyping</li><hr/>
                    <li className='pb'>Stages</li><hr/>
                </ol>
            </div>

        </div>
        <br/>
        <div>
            <button className='brigth mx-auto d-block'>See more</button>
        </div>

        <hr className='hr1 titulop container' />
    </div>
  )
}
