import { useTranslation } from "react-i18next";

export const MainContent = () => {
  const { t } = useTranslation(["global"]);

  const hello = t("hello");
  const about = t("about");

  return (
    <div className="p-3 md:p-5">
      <h1 className=" text-white text-3xl md:text-xl lg:text-5xl font-bold mb-2 md:mb-5">
        <b>{hello}</b>
      </h1>
      <p className="text-white text-md md:text-lg lg:text-2xl"> {about} </p>
    </div>
  );
};
