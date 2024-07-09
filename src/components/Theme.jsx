import { extendTheme } from "@chakra-ui/react";
import '@fontsource-variable/playwrite-de-la';
import "@fontsource/open-sans";

const theme = extendTheme({
  fonts: {
    heading: 'Playwrite DE LA Variable',
    body: 'Open Sans, sans-serif',         // Ensuring proper fallback font
  },
});

export default theme;