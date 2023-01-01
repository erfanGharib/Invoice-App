import React, { useState } from "react";
import { ReactComponent as SunIco } from '../assets/icons/sun.svg';
import { ReactComponent as MoonIco } from '../assets/icons/moon.svg';
const ThemeSwitcher = props => {
    let x = Number(localStorage.getItem('darkMode'));
    if(x === null) x = 0;

    const [IS_DARK_THEME, setTheme] = useState(x);

    const htmlClass = document.querySelector('html').classList;
    IS_DARK_THEME === 1 ? htmlClass.add('dark') : htmlClass.remove('dark');

    const switchTheme = () => {
        localStorage.setItem('darkMode', IS_DARK_THEME === 0 ? 1 : 0);
        setTheme(IS_DARK_THEME === 0 ? 1 : 0);
    }

    return (
        <button 
            onClick={switchTheme} 
            className="sm:border-b border-r border-secondry-l-purple sm:border-r-0 f-center sm:w-full sm:min-h-20 h-full min-w-20"
        >
            {IS_DARK_THEME ? <SunIco /> : <MoonIco />}
        </button>
    )
}
export default ThemeSwitcher;