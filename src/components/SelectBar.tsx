import { Select } from "@chakra-ui/react";

const SelectBar = () => {
    return (
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
    );
}
 
export default SelectBar;