import React from 'react';
import Button from './Button';

export const ConttentInfo = () => {
    function handleOnClick() {
        alert("The button is pressed");
    }

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-pink-200 to-cyan-200 p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
            <label className="text-gray-800 font-semibold text-lg mb-2">Title</label>
            <input
                type="text"
                className=" text-center w-full p-30 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none mb-4"
                placeholder="Enter title here"
            />
            <label className="text-gray-800 font-semibold text-lg mb-2">Description</label>
            <textarea
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-pink-400 focus:outline-none resize-none mb-4 text-center"
                placeholder="Enter description here"
            />
            <Button onClick={handleOnClick}>ADD</Button>
        </div>
    );
};
