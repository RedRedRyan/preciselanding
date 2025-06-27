import React from 'react'
import {goodLists,featureLists} from "../../constants/index.js";

const Art = () => {
  return (
    <div id='art'>
      <div className='container mx-auto h-full pt-20'>
        <h2 className='will-fade'>The Art</h2>
        <div className='content'>
          <ul className='spave-y-4 will-fade'>
            {goodLists.map((feature , index)=>(
                <li key={index} className='flex items-center gap-2'>
                  <img src = '/images/check.png' alt='check'/>
                  <p>{feature}</p>
                </li>
            ))}
          </ul>
          <div className= 'cocktail-img'>
            <img src = '/images/under-img.jpg'
                 alt='cocktail'
                 className={'abs-center masked-img size-full object-contain '}
             />

          </div>
          <ul className='spave-y-4 will-fade'>
            {featureLists.map((feature , index)=>(
                <li key={index} className='flex items-center gap-2'>
                  <img src = '/images/check.png' alt='check'/>
                  <p className={'md:w-fit w-60'}>{feature}</p>
                </li>
            ))}
          </ul>
        </div>
        <div className={'masked-container'}>
          <h2 className='will-fade'>Sip-Worthy Perfection</h2>
          <div id = 'masked-content'>
            <h3>Made with craft, Poured with passion</h3>
            <p>Not a drink, a perfect blend</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Art