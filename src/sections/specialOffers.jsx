import React from 'react'
import { offer } from "../assets/images";
import  Button  from "../Components/Button";

function SpecialOffers() {
  return (
 <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ' >
<div className='flex-1'>
  <img src={offer} width={773} height={687}  className='w-full object-contain'/>

</div>

<div className='flex flex-1 flex-col'>
<h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
  
          <span className='text-coral-red'> Special </span>
          <span className='text-coral-red'> </span> offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
          providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='View details' />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>


 </section>
  )
}

export default SpecialOffers