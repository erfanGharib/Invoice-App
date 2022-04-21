import React, { useState } from "react";
import { ReactComponent as SunIco } from '../assets/icons/sun.svg';
import { ReactComponent as MoonIco } from '../assets/icons/moon.svg';
const ThemeSwitcher = props => {
    const [IS_DARK_THEME, setTheme] = useState(false);

    const switchTheme = () => {
        setTheme(IS_DARK_THEME ? false : true)
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