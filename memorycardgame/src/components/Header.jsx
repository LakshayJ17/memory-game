import React from 'react';

function Header({ currentScore, highestScore }) {
    return (
        <div className="flex flex-row items-center justify-between bg-gray-100 p-6 shadow-md rounded-lg">
            <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-2 ">Memory Game</div>
                <h3 className="text-gray-600">
                    Get points by clicking on an image, but don&apos;t click on any more than once!
                </h3>
            </div>

            <div className="text-right">
                <h3 className="text-lg font-semibold text-gray-700 mb-1 mr-10">Current Score: {currentScore}</h3>
                <h3 className="text-lg font-semibold text-gray-700 mr-10">Highest Score: {highestScore}</h3>
            </div>
        </div>
    );
}

export default Header;
