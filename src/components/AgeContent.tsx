import { useTranslation } from "react-i18next"

export const AgeContent = () => {
  
  const { t, i18n} = useTranslation(["global"])
  
  const firstText = t("age.firstText")
  const secondText = t("age.secondText")

  return (
    <div className="flex justify-center bg-[#cd3b3c]/75 h-full w-full">
      <div className="flex flex-col justify-center items-center">
        <p className="text-white text-xs md:text-xl">{firstText}</p>
        <p className="text-white text-4xl md:text-8xl"> <b>{new Date().getFullYear() - 2002}</b></p>
        <p className="text-white text-xs md:text-xl">{secondText}</p>
      </div>
    </div>
  )
}
