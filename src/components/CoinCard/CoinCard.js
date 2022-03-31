import React from 'react';

const CoinCard = ({coin}) => {
    const {name,image}=coin
    return (
        <div className='shadow-lg rounded-2xl w-[250px] pb-4 bg-white'>
            <div>
                <div>
                    <img src={} alt="" />
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default CoinCard;