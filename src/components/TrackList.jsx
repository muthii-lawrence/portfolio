import React from "react";

const TrackList = ({Year, Title, Organisation, Details}) =>{
    return(
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4">
            <div className="absolutr w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1,4 border-white"/>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="inline-block px-2 p-1 font-semibold text-white bg-[#001b5e] rounded-md">{Year}</span>
                <span className="text-lg font-semibold text-[#oo1b5e]">{Organisation}</span>
                <span className="my-1 text-sm font-normal leading-none text-stone-400">{Title}</span>
                </p>
                <p className="my-2 text-base font-normal text-stone-500">{Details.map((item, index) => item)}</p>
        </li>
        </ol>
    );
};
export default TrackList