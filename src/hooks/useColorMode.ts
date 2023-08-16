import { useEffect, useState } from "react";

const useColorMode = () => {

    const [theme, setTheme] = useState('dark')
    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
      }else{
        setTheme('light')
      }
    }, [])
    
    useEffect(() => {
      if (theme === 'dark'){
        document.documentElement.classList.add("dark")
      }else{
        document.documentElement.classList.remove("dark");
      }
    
    }, [theme])
    
    const handleThemeSwitch = () => {
        setTheme( theme==='dark' ? 'light' : 'dark' )
    }


    return {
        handleThemeSwitch,
        theme
      }
    
}
export default useColorMode