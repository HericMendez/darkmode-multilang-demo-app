import Logo from "../assets/logo.svg";
import DarkmodeSwitch from "./DarkmodeSwitch";
import FlagSwitch from "./FlagSwitch";
import { useState } from "react";
import PTBR from "../locales/pt/pt-br.json";
import ENUS from "../locales/en/en-us.json";

const Home = (props) => {
  const [darkmode, setDarkmode] = useState(false);
  const [portuguese, setPortuguese] = useState(false);
  const darkmodeHandler = () => setDarkmode(!darkmode);
  const langHandler = () => setPortuguese(!portuguese)



  const translate = (section, content) => {
    if(portuguese){
      return ENUS[section][content];;
    }
    else{
      return PTBR[section][content];
    }

  };

  console.log(translate("home", "text1"));

  props.dark(darkmode);
  props.language(portuguese);

  return (
    <div className="w-full h-full min-h-[100vh] bg-bg_light dark:bg-[#121212]">
      <div className=" py-12">
        <div className=" max-w-[1000px]  dark:bg-[#121212] h-full text-center grid auto-rows-auto md:grid-cols-3 grid-cols-2 gap-4 py-12 px-6 mx-auto text-center text-xl align-middle">
          <div className="col-span-3 bg-detail_light dark:bg-box_dark py-3 m-2 rounded-md text-2xl font-bold text-gray-300 shadow-2xl">
            {translate("home", "title1")}
          </div>
          <div className="row-span-2 col-span-3 md:col-span-1 md: row-span-2 bg-box_light dark:bg-box_dark border-2   m-2 rounded-md shadow-2xl">
            <div>
              <p>&nbsp;</p>
              <img
                className="App-logo mx-auto align-middle"
                src={Logo}
                alt="React Logo"
              />
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="bg-box_light dark:bg-box_dark dark:text-title_dark  py-3 m-2 rounded-md align-middle shadow-2xl">
            <p>
              {darkmode
                ? translate("home", "button_dark")
                : translate("home", "button_light")}
              <DarkmodeSwitch onChange={darkmodeHandler} />
            </p>
          </div>
          <div className=" bg-box_light dark:bg-box_dark dark:text-title_dark   py-3 m-2 rounded-md shadow-2xl">
            <p>
              {portuguese ? "English (EN-US)" : "Português (PT-BR)"}{" "}
              <FlagSwitch onChange={langHandler} />
            </p>
          </div>
          <div className="col-span-2   py-4 m-2 rounded-md p-4 text-md bg-box_light dark:bg-box_dark dark:text-title_dark text-justify shadow-2xl">
            <h1 className="text-xl font-bold border-b-2 border-detail_light dark:border-text_light pb-3 text-title_light dark:text-title_dark">
              {translate("home", "title2")}
            </h1>
            <p className="p-1 text-title_light dark:text-text_dark ">
              {translate("home", "text1")}
              <br />
            </p>
            <p className="p-1 text-detail_light dark:text-[#54daff]">
              <a
                href="https://github.com/HericMendez"
                target="_blank"
                rel="noreferrer"
              >
                {translate("home", "link1")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
