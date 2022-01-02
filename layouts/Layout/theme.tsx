import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: '#333',
        bg: '#fff',
        fontSize: "1.2em",
      },
      a: {
        color:"green.600",
        transition: "color 0.25s",
        transitionTimingFunction: "ease-out",
        fontWeight: "500",
        _hover: {
          color: "green.600",
        },
      },
    }),
  },
  components: {},
  colors: {
    maroon: {
      100: "#800000",
      200: "#800000",
      800: "#ffffff"
    }
  }
});