import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const placeholderTexts = ["Grocery", "Fashion", "Electronics"];
const intervalTime = 3500; 

const Search = () => {
    const [placeholder, setPlaceholder] = useState(placeholderTexts[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % placeholderTexts.length;
            setPlaceholder(placeholderTexts[index]);
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
            <input 
                type="text" 
                placeholder={`Search for ${placeholder}...`} 
                className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]" 
            />
            <Button className="!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black">
                <IoSearch className='text-[#4e4e4e] text-[22px]' />
            </Button>
        </div>
    );
}

export default Search;
