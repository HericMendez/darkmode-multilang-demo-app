
import { useState } from 'react';
import Home from './components/Home';


function App() {
  const [darkmode, setDarkmode] = useState(false)
  const darkmode_data = (darkdata) => setDarkmode(darkdata)

  const [lang, setLang] = useState(false)
  const language_data = (langdata) => setLang(langdata)
  console.log(lang)


  return (
    <div className={darkmode ? 'dark' : ''}>

      <Home dark={darkmode_data} language={language_data}/>

    </div>
  );
}

export default App;
