import React, { useEffect, useState } from 'react'

const useApiData = (url) => {
    const [data, setData] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const result = await response.json();
            setData(result)

        }
        fetchData();
    }, [])
    return { data }
}

export default useApiData
