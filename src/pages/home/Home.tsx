import { 
    Box,
    Card,
    Flex,
    SimpleGrid,
} from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";
import SelectBar from "../../components/SelectBar";
import CardInner from "../../components/CardInner";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
    const [countries, setCountries] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    // fetch countries data
    useEffect(() => {
        setIsPending(true);

        axios('https://restcountries.com/v3.1/all')
            .then((response) => { 
                console.log(response.data);
                setCountries(response.data);
                setIsPending(false);
            })
            .catch((error) => {
                console.log(`sorry! couldn't fetch data from API`);
                setError(error);
                setIsPending(false);
            })

    }, []);

    return (
        <Box p="40px" pl="50px" pr="70px" boxSizing="border-box">
            <Flex 
                justifyContent={{ md: "space-between" }}
                alignItems={{ base: 'flex-start', md: 'center' }}
                flexDirection={{ base: 'column', md: 'row' }}
            >
                <SearchBar />
                <SelectBar />
            </Flex>

            <SimpleGrid 
                columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing='40px'
                m="40px"
                ml="4px"
                mr="5px"
            >
                { countries && countries.map((country: any, index: any) => (
                    <Card
                        key={index}
                    >
                        <CardInner country={country}/>
                    </Card>
                )) }

            </SimpleGrid>

            {isPending && <Box>Loading...</Box>}

            { error && <Box>{ error }</Box> }

        </Box>
    );
}
 
export default Home;