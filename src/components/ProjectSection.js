import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Center, Heading } from "@chakra-ui/react";
import Card from "./Card"; 

//Array of Project Details
const projects = [
  {
    title: "Little Lemon Restauraunt Website",
    description:
      "A website for the Little Lemon restaurant, showcasing their menu, location, and contact information.",
    getImageSrc: () => require("../images/littlelemon.png"),
    url: "https://tyang019.github.io/little_lemon_project/"
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },{
    title: "Mangata & Gallo Jewelry Store",
    description:
      "An online store for Mangata & Gallo Jewelry, showcasing their unique jewelry collections and allowing customers to make purchases online.",
    getImageSrc: () => require("../images/photo4.jpg"),
  }
];

const ProjectSection = () => (
  <FullScreenSection
    isDarkBackground={false}  
    backgroundColor="#F0F1F3"
    alignItems="flex-start"
    padding="2rem"
  >
    <Heading color="rgb(57, 69, 109)" as="h2" size="xl" mb="4">
      Projects
    </Heading>
    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gridGap={8}>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
        />
      ))}
    </Box>
  </FullScreenSection>
);

export default ProjectSection;