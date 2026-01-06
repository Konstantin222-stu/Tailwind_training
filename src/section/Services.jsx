import React from 'react'

const Services = () => {
  return (
    <div className='border-y border-brand pt-20.25 '>
        <div className="wrap relative">
            <h2 className='text-5xl block relative mb-21'>ОСНОВНЫЕ УСЛУГИ<div className='h-2.5 xl:w-[25%] w-40 bg-brand absolute left-[-13%] -bottom-6'></div></h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 relative w-full -top-53 ">
                <div className="border-x border-brand md:pt-54 pt-66 sm:-mb-53">
                    <img className='h-125 object-cover' src="./image1.jpg" alt="" />
                    <div className="w-42.25 h-5 bg-stone-50 mb-12.5 ml-8.5"></div>
                    <h3 className='text-brand font-medium xl:text-4xl 2xl:text-5xl relative pl-1 mb-5.5 text-3xl'><div className="w-5 h-5 bg-stone-950 absolute -top-5 left-[-3%]"></div>3D-дизайн</h3>
                    <p className='text-stone-50 text-lt pl-1 mb-10'>Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений. </p>
                </div>
                <div className="border-x border-brand md:pt-54 sm:pt-66 sm:-mb-53">
                    <img className='h-125 object-cover' src="./image2.jpg" alt="" />
                    <div className="w-42.25 h-5 bg-stone-50 mb-12.5 ml-8.5"></div>
                    <h3 className='text-brand font-medium xl:text-4xl 2xl:text-5xl relative pl-1 mb-5.5 text-3xl'><div className="w-5 h-5 bg-stone-950 absolute -top-5 left-[-3%]"></div>Ремонт</h3>
                    <p className='text-stone-50 text-lt pl-1 mb-10'>Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.</p>
                </div>
                <div className="border-x border-brand md:pt-54  sm:-mb-53">
                    <img className='h-125 object-cover' src="./image3.jpg" alt="" />
                    <div className="w-42.25 h-5 bg-stone-50 mb-12.5 ml-8.5"></div>
                    <h3 className='text-brand font-medium xl:text-4xl 2xl:text-5xl relative pl-1 mb-5.5 text-3xl'><div className="w-5 h-5 bg-stone-950 absolute -top-5 left-[-3%]"></div>Строительство</h3>
                    <p className='text-stone-50 text-lt pl-1 mb-10'>Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.</p>
                </div>
                <div className="border-x border-brand md:pt-54  -mb-53">
                    <img className='h-125 object-cover' src="./image4.jpg" alt="" />
                    <div className="w-42.25 h-5 bg-stone-50 mb-12.5 ml-8.5"></div>
                    <h3 className='text-brand font-medium xl:text-4xl 2xl:text-5xl relative pl-1 mb-5.5 text-3xl'><div className="w-5 h-5 bg-stone-950 absolute -top-5 left-[-3%]"></div>Ландшафтный дизайн</h3>
                    <p className='text-stone-50 text-lt pl-1 mb-10'>Идейные соображения высшего порядка обеспечивает актуальность глубокомысленных рассуждений. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
