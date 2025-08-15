import Image from 'next/image'
import React from 'react'

const WorkshopDomain = () => {
  return (
    <div className='w-full h-full flex flex-row gap-[3rem] items-center justify-center'>
      <div className='w-[250px] h-[250px] rounded-[10px] flex flex-col gap-[1rem] cursor-pointer items-center justify-center bg-[#4a4a4a] hover:bg-[#626161]'>
        <Image src="/assets/images/autokriti/cv.webp" alt="cv" width={100} height={100}/>
        <h1 className="text-[1.2rem]">Combustion Vehicle</h1>
        <h1>INR 1999/-</h1>
      </div>
      <div className='w-[250px] h-[250px] rounded-[10px] flex flex-col gap-[1rem] cursor-pointer items-center justify-center bg-[#4a4a4a] hover:bg-[#626161]'>
        <Image src="/assets/images/autokriti/ev.webp" alt="ev" width={100} height={100} />
        <h1 className="text-[1.2rem]">Electric Vehicle</h1>
        <h1>INR 1999/-</h1>
      </div>
      <div className='w-[250px] h-[250px] rounded-[10px] flex flex-col gap-[1rem] cursor-pointer items-center justify-center bg-[#4a4a4a] hover:bg-[#626161]'>
        <Image src="/assets/images/autokriti/iot.webp" alt="iot" width={100} height={100} />
        <h1 className="text-[1.2rem]">IOT</h1>
        <h1>INR 2499/-</h1>
      </div>
      <div className='w-[250px] h-[250px] rounded-[10px] flex flex-col gap-[1rem] cursor-pointer items-center justify-center bg-[#4a4a4a] hover:bg-[#626161]'>
        <Image src="/assets/images/autokriti/sw.webp" alt="sw" width={100} height={100}/>
        <h1 className="text-[1.2rem]">Software</h1>
        <h1>INR 1999/-</h1>
      </div>
    </div>
  )
}

export default WorkshopDomain
