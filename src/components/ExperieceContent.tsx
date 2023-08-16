import { useTranslation } from "react-i18next"

export const ExperieceContent = () => {
    
    const {t } = useTranslation(["global"])
    
    const expFirstText = t("experience.firstText")
    const expSecondText = t("experience.secondText")

    return (
        <div className="flex justify-center bg-[#33a687]/75 h-full w-full">
            <div className="flex flex-col justify-center items-center">
                <p className="text-white text-center text-xs md:text-xl">{expFirstText}<br />{expSecondText}</p>
                <p className="text-white text-4xl md:text-8xl"> <b>{new Date().getFullYear() - 2021}</b></p>

            </div>
        </div>
    )
}
