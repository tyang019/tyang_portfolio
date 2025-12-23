import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react"; 

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack bg={"white"} borderRadius="10px" align="stretch">
      <VStack>
        <Image borderRadius="10px" src={imageSrc} objectFit="cover" width="fit-content" height="100%" cursor="pointer"></Image>
        <Heading as="h1" fontSize="13px" color="black">{title}</Heading>
        <Text color="gray" padding="5px" fontSize="11px" noOfLines={3}>{description}</Text>
        <Text color="black" fontSize="sm" cursor="pointer" fontWeight="medium">Click here<FontAwesomeIcon icon={faArrowRight} /></Text>
      </VStack>
    </HStack>
  );
}
export default Card;