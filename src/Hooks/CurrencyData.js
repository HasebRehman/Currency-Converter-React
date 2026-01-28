import { useEffect, useState } from "react"

const useCurrencyInfo = (currency) => {

    const [currencyData, setCurrencyData] = useState({});

    useEffect(() => {

        const fetchData = async () => {

            const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
            let response = await fetch(url);
            let res = await response.json();

            setCurrencyData(res[currency]);
        }

        fetchData();
        
    }, [currency]);

    return currencyData;

}

export default useCurrencyInfo