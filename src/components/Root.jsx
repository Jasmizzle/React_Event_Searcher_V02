import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Flex, Heading } from "@chakra-ui/react";
import { EventsContext } from "../Context";
import "@fontsource-variable/playwrite-de-la";
import "@fontsource/open-sans";

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users");
  const categories = await fetch("http://localhost:3000/categories");

  return {
    users: await users.json(),
    categories: await categories.json(),
  };
};

export const Root = () => {
  const { users, categories } = useLoaderData();

  return (
    <Flex
      bgImage="../images/background.jpg"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      bgPosition="center"
      bgSize="cover"  // Adjust the background size
      zIndex={-1}
      minHeight="100vh"  // Ensure the Flex container covers the viewport
    >
      <Heading
        fontSize="6xl"  // Reduced font size
        color="white"
        textAlign="left"
        padding={4}
        position="fixed"
        bottom="20px"
        zIndex={0}
        width="450px"
      
      >
        Find something you love to do!
      </Heading>

      <Navigation />
      <EventsContext.Provider value={{ users, categories }}>
        <Outlet />
      </EventsContext.Provider>
    </Flex>
  );
};
