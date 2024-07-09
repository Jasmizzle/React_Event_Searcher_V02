import { useContext } from "react";
import { EventsContext } from "../../Context";
import { Flex, Heading, Image } from "@chakra-ui/react";

export const UserCard = ({ userId }) => {
  const { users } = useContext(EventsContext);

  console.log("users:", users);
  console.log("userId:", userId);

  const user = users.filter((user) => {
    console.log("number userId:", Number(userId));
    console.log("user.id:", user.id);
    return user.id === Number(userId);
  });

  console.log("user:", user);
  console.log("user[0]:", user[0]);

  if (user.length === 0) {
    return <p>User not found</p>;
  }

  return (
    <Flex direction="row" align="center" gap={4}>
      <Image
        src={user[0]?.image || "fallback-image-url"} // Fallback URL for the image
        alt={user[0]?.name || "Unnamed User"} // Fallback alt text
        borderRadius={200}
        boxSize="100px"
        onError={(e) => {
          e.target.src = "fallback-image-url"; // Fallback URL if image fails to load
        }}
      />
      <div>
        <p>Event created by </p>
        <Heading fontSize="3xl">{user[0]?.name || "Unnamed User"}</Heading>
      </div>
    </Flex>
  );
};
