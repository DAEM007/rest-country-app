import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";

const CardInner = ({ country } : any) => {
    return (
        <>
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
                fontWeight="semibold"
            >
                <Heading 
                    size="md"
                    textAlign="left"
                >{ country.name.common }</Heading>
                <Flex gap="5px" marginTop="10px">
                    <Text>population:</Text>
                    <Text
                        color="gray.500"
                        fontWeight="normal"
                    >
                        { country.population }
                    </Text>
                </Flex>
                <Flex gap="5px">
                    <Text>region:</Text>
                    <Text
                        color="gray.500"
                        fontWeight="normal"
                    >
                        { country.region }
                    </Text>
                </Flex>
                <Flex gap="5px">
                    <Text>capital:</Text>
                    <Text
                        color="gray.500"
                        fontWeight="normal"
                    >
                        { country.capital ? country.capital: country.name.common }
                    </Text>
                </Flex>
            </Box>
        </>
    );
}
 
export default CardInner;