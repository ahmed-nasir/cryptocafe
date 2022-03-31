import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    const { name, image, symble } = coin
    console.log(coin)
    return (
        <div className='shadow-lg rounded-2xl w-[250px] p-4 bg-white'>
            <Link to='/'>
                <div className='flex gap-4 justify-between items-center'>
                    <div className='flex-shrink-0'>
                        <img className='mx-auto object-cover rounded-full h-16 w-16 ' src={image} alt="" />
                    </div>
                    <div className='flex flex-col justify-end'>
                        <span className='text-gray-600 font-medium'>{name}</span>
                        <span className='text-gray-500 text-xs'>{symble}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CoinCard;