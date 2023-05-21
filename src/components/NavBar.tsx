import { 
    Box,
    Text,
    Flex,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
    return (
        <Flex 
            background="white"
            justifyContent="space-between" 
            boxShadow="0px 1px 10px hsl(0, 0%, 90%)"
            px="70px"
            py="20px"
            fontSize={{ base: '12px', md: '20px', lg: '25px' }}
            fontWeight="bold"
        >
            <Box>
                <Text>Where in the world?</Text>
            </Box>
            <Flex alignItems="center" cursor="pointer">
                <FontAwesomeIcon icon={faMoon} size="sm" />
                <Text ml="10px" fontSize={{ base: '11px', md: '18px', lg: '22px' }}>Dark Mode</Text>
            </Flex>
        </Flex>
    );
}
 
export default NavBar;