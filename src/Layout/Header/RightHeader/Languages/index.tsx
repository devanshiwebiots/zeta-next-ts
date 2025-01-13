import { Href } from "@/Constant";
import { LanguagesData, languageDataType } from "@/Data/Header";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Languages = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const [selectedLang, setSelectedLang] = useState<any>({});
  const Language = Cookies.get("i18next");
  const [lang, setLang] = useState("EN");
  const [flag, setFlag] = useState("us");
  const pathname = usePathname();
  const router = useRouter();

  const changeLng = (lng: languageDataType) => {
    setLang(lng.data);
    setFlag(lng.logo);
    i18n.changeLanguage(lng.data);
  };

  useEffect(() => {
    const defaultLanguage = LanguagesData.find((data) => data.data == currentLanguage);
    setSelectedLang(defaultLanguage);
    router.refresh();
  }, []);

  useEffect(() => {
    if (lang === "ae") {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
      document.body.classList.remove("box-layout");
      document.documentElement.dir = "rtl";
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
      document.body.classList.remove("box-layout");
      document.documentElement.dir = "ltr";
    }
  }, [lang])
  
  return (
    <li className='onhover-dropdown list-group-item'>
      <h6 className='txt-dark mb-0 mt-1'>EN</h6>
      <div className='language-dropdown onhover-show-div'>
        <ul className='simple-list p-3 list-group'>
          {LanguagesData.map((item, i) => (
            <li key={i} className='list-group-item' onClick={() => changeLng(item)}>
              <a href={Href} className='text-decoration-none' data-lng={item.data}>
                <i className={item.logo} /> {item.language}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Languages;
