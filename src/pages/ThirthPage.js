import React from 'react'
import { Form } from '../components/pagina3/Form'
import { Price } from '../components/pagina3/Price'
import { Programmer } from '../components/pagina3/Programmer'
import { Programmer2 } from '../components/pagina3/Programmer2'
import { Programmer3 } from '../components/pagina3/Programmer3'
import { Reviews } from '../components/pagina3/Reviews'
import { YouWillGain } from '../components/pagina3/YouWillGain'

export const ThirthPage = () => {
  return (
    <div>

        <div>
          <h1 className='titulop container'>Course curators</h1>
        </div>

        <div className='programmers container'>
            <Programmer />
            <Programmer2 />
            <Programmer3 />        
        </div>

        <div>
          <Reviews />
        </div>

        <div>
          <YouWillGain />
        </div>

        <div>
          <Price />
        </div>

        <div>
          <Form />
        </div>
        
    </div>
  )
}
