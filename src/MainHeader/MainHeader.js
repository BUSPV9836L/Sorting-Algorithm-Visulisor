import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
const MainHeader = (props)=>{
    function clickHandler(){
        props.showHandler();
    }
return(
    <div className='flex w-full h-fit justify-center py-2 bg-gradient-to-r from-blue-400 to-yellow-300 items-center'>
        <h1 className="sm:text-3xl text-lg ">Sorting Algorithm Visulisor!</h1>
    </div>
);
}

export default MainHeader;
