import useLanguage from "../hooks/useLanguage"

export const LangSwitch = () => {

  const { changeLanguage, language } = useLanguage()

  return (
    <div className='w-full h-full'>

      <button className="h-full w-full " onClick={changeLanguage}>

        <h1 className="text-white text-4xl md:text-7xl">{language}</h1>

        <div className="flex w-full justify-center gap-3">
          <div className= { language === 'EN' ? 'text-[#c288fc]' : 'text-white'  } >
            <h4 className='text-sm md:text-2xl'>EN</h4>
          </div>

          <div className={ language === 'ES' ? 'text-[#c288fc]' : 'text-white'  } >
            <h4 className="text-sm md:text-2xl" >ES</h4>
          </div>
        </div>

      </button>

    </div>
  )
}
