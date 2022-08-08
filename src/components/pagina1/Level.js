import React from 'react';
import { imagenes } from '../../helpers/Imagenes';


export const Level = () => {
  return (
    <div className="top1">
        <img src={imagenes[0]} alt="levelweb" width="30" height="35"/>
        <h2>Level.web</h2>
    </div>
  )
}
