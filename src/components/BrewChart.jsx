import React, { Component, useEffect, useState } from "react";

const CoinChart = ({ symbol, market }) => {
    const [histData, setHistData] = useState(null);

    useEffect(() => {
        const getCoinHist = async () => {
        const response = await fetch(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&e=${market}&limit=30&api_key=` +
            API_KEY
        );
    
        const json = await response.json();
        setHistData(json.Data.Data);
    };
    getCoinHist().catch(console.error);
    }, [market, symbol]);

    
    return (
    <div>
        {histData ? (// rendering only if API call actually returned us data
        <div>
            
        </div>
        ) : null}
    </div>
    );

};

export default CoinChart;