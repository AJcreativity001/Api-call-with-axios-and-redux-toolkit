import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
import User from "../../assets/images/image.jpg";
import { MdMyLocation } from "react-icons/md";

const Staffs = () => {
  const user = useSelector((state) => state.users);
  console.log({ user: user });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingY={{ base: "1rem", md: "2rem", lg: "2rem" }}
      bgColor="#b56c60"
      height="auto"
    >
      <Box
        bgColor="#fffdd0"
        color="#8b0000"
        paddingY={{ base: ".8rem", md: ".8rem", lg: "2rem" }}
        paddingX={{ base: ".5rem", md: ".8rem", lg: "2rem" }}
        width={{ base: "98%", md: "95%", lg: "70rem" }}
        borderRadius={{ base: ".2rem", md: ".5rem", lg: ".5rem" }}
      >
        <Flex alignItems="baseline" justifyContent="space-between">
          <Heading
            fontSize={{ base: "1.4rem", md: "3rem", lg: "3rem" }}
            fontWeight="900"
          >
            Our Esteem Customers
          </Heading>
          <Text>10 users</Text>
        </Flex>
        <Box bgColor="#8b0000" height="2px"></Box>
        {user.users.map((person) => (
          <Box>
            <Flex
              paddingY={{ base: "1rem", md: "1.5rem", lg: "1rem" }}
              gap={{ base: ".3rem", md: "1rem", lg: "1rem" }}
            >
              <Box
                width={{ base: "3rem", md: "5rem", lg: "5%" }}
                className="border"
                padding=".1rem"
              >
                <img src={User} alt="userImage" />
              </Box>
              <Box>
                <Heading
                  fontSize={{ base: "1rem", md: "2rem", lg: "1.8rem" }}
                  key={person.id}
                >
                  {person.name}
                </Heading>
                <Text key={person.username}>{person.username}</Text>
              </Box>
              <Button padding={{ lg: ".5rem" }} leftIcon={<MdMyLocation />}>
                {person.address.city}
              </Button>
            </Flex>
            <Box
              bgColor="#8b0000"
              height={{ base: ".5px", md: ".5px", lg: "1px" }}
            ></Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Staffs;