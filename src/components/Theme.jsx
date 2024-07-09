import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Playwrite-de-la', sans-serif`, // Voor koppen
    body: `'open-sans', sans-serif`,
  },
});

export default theme;