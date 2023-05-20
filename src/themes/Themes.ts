import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: 'hsl(0, 0%, 98%)',
      }
    })
  },
})

export default theme;