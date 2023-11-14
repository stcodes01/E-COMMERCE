import { useEffect,useState } from "react";
import {fetchDataFromApi} from  "../utils/api";
const useFetch = (endpoint) =>{
    const [data,setData] = useState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(  () => {
        makeApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [endpoint]);

    const makeApiCall = async () => {

        const res = await fetchDataFromApi(endpoint);
        setData(res);

    };

return { data };
};
export default useFetch;