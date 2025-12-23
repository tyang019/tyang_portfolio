import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarImg from "../images/tyang.JPG"; 
import ProjectSection from "./ProjectSection";


const greeting = "Hello, I am Tortrong!"
const bio1 = "Entry-Level Frontend Developer | React & JavaScript"
const bio2 = "Computer Science graduate building responsive web applications with React, JavaScript, and modern UI libraries."

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack margin="150px auto">
      <Avatar src={avatarImg} boxSize="150px"/>
      <Text fontSize="20x" textAlign="center" maxWidth="600px">{greeting}</Text>
      <Heading> 
          {bio1}
      </Heading>
      <Text fontSize="xl" textAlign="center" maxWidth="600px">
          {bio2}
      </Text>
    </VStack>
    <ProjectSection />
  </FullScreenSection>
);

export default LandingSection;
