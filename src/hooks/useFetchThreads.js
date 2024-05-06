import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/variables";

export const useFetchThreads = () => {
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${BASE_URL}/threads`);
            const parsedData = await data.json();
            setFetchedData(parsedData);
        };

        fetchData();
    }, []);

    return fetchedData;
}
