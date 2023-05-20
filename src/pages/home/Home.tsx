import { 
    Box,
    Flex,
    Input,
    Select,
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

const Home = () => {
    return (
        <Box p="40px" pl="50px" pr="70px" boxSizing="border-box">
            <Flex 
                justifyContent={{ md: "space-between" }}
                alignItems={{ base: 'flex-start', md: 'center' }}
                flexDirection={{ base: 'column', md: 'row' }}
            >
                <Flex background="white"
                    width={{ base: '300px', sm: '400px', md: '350px', lg: '480px' }}
                    boxShadow="0px 1px 10px hsl(0, 0%, 90%)"
                    alignItems="center"
                    p="5px"
                    borderRadius="5px"
                >
                    <SearchIcon ml="30px" color='gray.600'/>
                    <Input placeholder="Search for a country..."
                        size="lg" 
                        border="none"
                        fontSize="md"
                    />
                </Flex>
                <Select placeholder='Filter by Region'
                    background="white"
                    width="240px"
                    size="lg"
                    border="none"
                    p="5px"
                    mt={{ base: '40px', md: '0px' }}
                    borderRadius="5px"
                    boxShadow="0px 1px 10px hsl(0, 0%, 90%)"
                >
                    <option value='option1'>Africa</option>
                    <option value='option2'>America</option>
                    <option value='option3'>Asia</option>
                    <option value='option3'>Europe</option>
                    <option value='option3'>Oceania</option>
                </Select>
            </Flex>
        </Box>
    );
}
 
export default Home;