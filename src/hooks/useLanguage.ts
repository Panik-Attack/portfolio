import { useState } from "react"
import { useTranslation } from "react-i18next"



const useLanguage = () =>{

const {i18n} = useTranslation(["global"])
const [language, setLanguage] = useState('ES')

const changeLanguage = () => {
  
  if (language === 'ES') {
    i18n.changeLanguage('en')
    setLanguage('EN')
  }else{
    i18n.changeLanguage('es')
    setLanguage('ES')
  }
}

return {
        changeLanguage,
        language
}
}
export default useLanguage