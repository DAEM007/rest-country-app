import { 
    useState,
    useEffect
} from "react";
import axios from "axios";

const useFetch = ({ url }: any) => {
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        setIsPending(true);

        axios(url)
            .then((response) => { 
                console.log(response.data);
                setData(response.data);
                setIsPending(false);
            })
            .catch((error) => {
                console.log(`sorry! couldn't fetch data from API`);
                setError(error);
                setIsPending(false);
            })

    }, [url]);

    return { data, error, isPending };

}
 
export default useFetch;