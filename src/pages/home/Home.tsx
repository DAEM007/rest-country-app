import { 
    Box,
    Flex,
} from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";
import SelectBar from "../../components/SelectBar";

const Home = () => {
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
        </Box>
    );
}
 
export default Home;