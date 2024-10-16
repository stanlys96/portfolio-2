import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to mobile
          apps (Android and iOS). Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Website" ? (
            <ToggleButton
              active
              value="Website"
              onClick={() => setToggle("Website")}
            >
              Web Apps
            </ToggleButton>
          ) : (
            <ToggleButton value="Website" onClick={() => setToggle("Website")}>
              Web Apps
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Mobile App" ? (
            <ToggleButton
              active
              value="and"
              onClick={() => setToggle("Mobile App")}
            >
              Mobile Apps
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Mobile App"
              onClick={() => setToggle("Mobile App")}
            >
              Mobile Apps
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Web3" ? (
            <ToggleButton active value="Web3" onClick={() => setToggle("Web3")}>
              Web3
            </ToggleButton>
          ) : (
            <ToggleButton value="Web3" onClick={() => setToggle("Web3")}>
              Web3
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <Desc style={{ marginBottom: 10 }}>
          Result:{" "}
          {toggle !== "all"
            ? projects.filter((item) => item.categories.includes(toggle)).length
            : projects.length}{" "}
          projects
        </Desc>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.categories.includes(toggle))
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
