import Logo from "../assets/logo.svg";
import DarkmodeSwitch from "./DarkmodeSwitch";
import FlagSwitch from "./FlagSwitch";
import { useState } from "react";
import PTBR from '../locales/pt/pt-br.json'
import ENUS from '../locales/en/en-us.json'


const Home = (props) => {

  const [darkmode, setDarkmode] = useState(false);
  const [lang, setLang] = useState('en')
  const darkmodeHandler = () => setDarkmode(!darkmode);

  const langHandler = () => {
     if(lang==='en'){
       setLang('pt')

     }else{
      setLang('en')
     }
    }


  props.dark(darkmode)
  props.language(lang)

  console.log(ENUS.home.title1)
  console.log(ENUS.home.title2)
  
  console.log(PTBR.home.title1)
  console.log(PTBR.home.title2)

  return (
    <>
    <div className="w-full h-screen bg-bg_light dark:bg-[#121212]">
      <div className=" py-12">
        <div className=" max-w-[1000px]  text-center grid auto-rows-auto md:grid-cols-3 grid-cols-2 gap-4 py-12 px-6 mx-auto text-center text-xl align-middle">
          <div className="col-span-3 bg-detail_light dark:bg-box_dark py-3 m-2 rounded-md text-2xl font-bold text-gray-300 shadow-2xl">
           {lang==='en'? (PTBR.home.title1):(ENUS.home.title1)} 
          </div>
          <div className="row-span-2 col-span-3 md:col-span-1 md: row-span-2 bg-box_light dark:bg-box_dark border-2   m-2 rounded-md shadow-2xl">
            <div>
              <p>&nbsp;</p>
            <img className="App-logo mx-auto align-middle" src={Logo} alt="React Logo" />
            <p>&nbsp;</p>

            </div>
            
          </div>
          <div className="bg-box_light dark:bg-box_dark dark:text-title_dark  py-3 m-2 rounded-md align-middle shadow-2xl">
            
            <p>
            {darkmode ? (lang==='en'?'Modo Escuro':'Dark Mode') : (lang==='en'?'Modo Claro':'Light Mode')}<DarkmodeSwitch onChange={darkmodeHandler}/>
            </p>
           
          </div>
          <div className=" bg-box_light dark:bg-box_dark dark:text-title_dark   py-3 m-2 rounded-md shadow-2xl">
          <p>
          {lang==='pt' ? ('English (EN-US)') : ('Português (PT-BR)')} <FlagSwitch onChange={langHandler}/>
            </p>
          </div>
          <div className="col-span-2   py-4 m-2 rounded-md p-4 text-md bg-box_light dark:bg-box_dark dark:text-title_dark text-justify shadow-2xl">
            <h1 className="text-xl font-bold border-b-2 border-detail_light dark:border-text_light pb-3 text-title_light dark:text-title_dark">
            {lang==='en'? (PTBR.home.title2):(ENUS.home.title2)} 
            </h1>
            <p className="p-1 text-title_light dark:text-text_dark ">
            {lang==='en'? (PTBR.home.text1):(ENUS.home.text1)} 
              <br />
              
            </p>
            <p className="p-1 text-detail_light dark:text-[#54daff]">
              <a href="https://github.com/HericMendez" target="_blank" rel="noreferrer">
              {lang==='en'? (PTBR.home.link1):(ENUS.home.link1)} 
                </a>
              </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
