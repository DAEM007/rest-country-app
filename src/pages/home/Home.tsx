import { 
    Box,
    Card,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";
import SelectBar from "../../components/SelectBar";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [countries, setCountries] = useState<any[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios('https://restcountries.com/v3.1/all')
            .then((response) => { 
                console.log(response.data);
                setCountries(response.data);
            })
            .catch((error) => {
                console.log(`sorry! couldn't fetch data from API`);
                setError(error);
            })
    }, [])

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
                { countries && countries.map((country, index) => (
                    <Card
                        key={index}
                    >
                        <Box>
                            <Image 
                                src={country.flags.png}
                                alt={country.flags.alt}
                                width="100%"
                                height="150px"
                                objectFit="cover"
                            />
                        </Box>
                        <Box
                            p="30px"
                            textTransform="capitalize"
                        >
                            <Heading 
                                size="md"
                                textAlign="center"
                            >{ country.name.common }</Heading>
                            <Text>population:</Text>
                            <Text>region:</Text>
                            <Text>capital:</Text>
                        </Box>
                        
                    </Card>
                )) }

                { error && <Box>{ error }</Box> }

            </SimpleGrid>

        </Box>
    );
}
 
export default Home;