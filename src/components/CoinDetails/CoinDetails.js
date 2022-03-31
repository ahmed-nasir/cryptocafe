import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id} = useParams()
    const [coin, setCoin] = useState({})
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCoin(data)
            })
    }, [id])
    return (
        <div className='h-[90vh] px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center content-center'>
                <div className='order-2 md:order-1'>
                    <h1 className='text-3xl'>Genaral Info: </h1>
                    <hr />
                    <h1>Name: {coin.name}</h1>
                    <h1>Market Cap: {coin.market_cap_rank}</h1>
                    <h1>Origin: {coin.country_origin ? coin.country_origin : 'not Found'}</h1>
                    <br />
                    <h1 className='text-3xl'>Score Info: </h1>
                    <hr />
                    <h1>Community Score: {coin.community_score}</h1>
                    <h1>Developer Score {coin.developer_score}</h1>
                    <h1>liquidity score: {coin.liquidity_score}</h1>
                </div>
                <div className='flex justify-center items-center order-1 md:order-2'>
                    <img src={coin.image?.large} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;