import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "./theme";

const Layout = ({children}) => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Box className="Layout">{children}</Box>
    </ChakraProvider>
  );
};

export default Layout;
