import React, { useContext } from 'react'
import me1 from '../../assets/me1.png'
import { Tilt } from 'react-tilt'
import { LanguageContext } from '../../Context/LanguageContext';
const AboutMe = () => {
    const { t, language, setLanguage } = useContext(LanguageContext);

  return (
    <div id='aboutMe' className='h-sreen pt-10 px-40 max-lg:px-10  max-md:px-2'>
    <div className='text-center pb-10'>
      <h1 className='text-slate-500 text-xl font-semibold font-mono'>Briefly</h1>
      <h1 className='text-violet-950 font-bold text-5xl max-lg:text-3xl max-md:text-2xl font-mono'>{t('aboutMeBtn')}</h1>
    </div>
    <div className='flex max-md:flex-col  w-full py-10 items-start justify-around'>
      <div className='w-1/2 max-md:w-full max-md:pb-10'>
        <Tilt        
          options={{
            max: 15,
            transition: 0.3,
            scale: 1,
            speed: 250,
          }}
        >
          <img className='w-80 rounded-lg h-80 max-md:w-2/3 max-[420px]:h-60 max-[420px]:w-11/12 max-md:mx-auto' src={me1} alt="" />

        </Tilt>
      </div>
      <div className='w-1/2 max-md:w-full'>
        <p className='text-xl font-sans max-md:break-all max-md:px-3'>
          {t('aboutMe')} 
        </p>
      </div>
    </div>
    </div>
  )
}

export default AboutMe
