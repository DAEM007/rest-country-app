import { 
    Flex,
    Input
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
    return (
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
    );
}
 
export default SearchBar;