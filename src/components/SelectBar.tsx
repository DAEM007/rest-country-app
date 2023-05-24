import { Select } from "@chakra-ui/react";
import "./SelectBar.css";

const SelectBar = () => {
    return (
        <Select placeholder='Filter by Region'
            background="white"
            width="200px"
            // size="lg"
            border="none"
            p="5px"
            mt={{ base: '40px', md: '0px' }}
            borderRadius="5px"
            boxShadow="0px 1px 10px hsl(0, 0%, 90%)"
            fontWeight="semibold"
        >
            
            <option className="option" value='option1'>Africa</option>
            <option className="option" value='option2'>America</option>
            <option className="option" value='option3'>Asia</option>
            <option className="option" value='option3'>Europe</option>
            <option className="option" value='option3'>Oceania</option>
            
        </Select>
    );
}
 
export default SelectBar;