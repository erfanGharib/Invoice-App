import React from "react";
import userProfile from '../assets/images/IMG_20220114_112341_955-edited.jpg'
import ThemeSwitcher from './theme-switcher';
import { ReactComponent as AppLogo } from '../logo.svg';
const SideBar = props => {
    return (
        <div className="z-30 sw-full h-20 relative min-h-20 sm:h-full sm:rounded-r-3xl overflow-hidden sm:w-20 bg-mid-dark-blue flex flex-row items-center justify-between sm:flex-col">
            <AppLogo />
            <div className="flex flex-row sm:flex-col sm:w-full sm:h-auto h-full">
                <ThemeSwitcher />
                <div className="w-full f-center sm:w-full sm:min-h-20 h-full min-w-20">
                    <img src={userProfile} alt="user profile" className="rounded-full w-7 h-7" />
                </div>
            </div>
        </div>
    );
}
export default SideBar;