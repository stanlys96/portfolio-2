import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  margin-top: auto;
`;

const ButtonProject = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
`;
const Card = styled.div`
  width: 330px;
  height: 510px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  // &:hover ${Button} {
  //   display: block;
  // }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const TagsOther = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const TagBlue = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.tagBlue};
  background-color: ${({ theme }) => theme.tagBlue + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const TagYellow = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.tagYellow};
  background-color: ${({ theme }) => theme.tagYellow + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;
const TagGreen = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.tagGreen};
  background-color: ${({ theme }) => theme.tagGreen + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <DateContainer>
          <Date>{project.date}</Date>
          <TagsOther>
            {project.categories?.map((tag, index) => {
              if (tag === "Website") {
                return <TagBlue>{tag}</TagBlue>;
              } else if (tag === "Mobile App") {
                return <TagGreen>{tag}</TagGreen>;
              }
              return <TagYellow>{tag}</TagYellow>;
            })}
          </TagsOther>
        </DateContainer>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar src={member.img} />
        ))}
      </Members>
      <Button>View Project</Button>
      {/* {(project.webapp || project.github) && (
        <ButtonContainer>
          {project.github && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, "_blank");
              }}
            >
              View Code
            </Button>
          )}
          {project.webapp && (
            <ButtonProject
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.webapp, "_blank");
              }}
            >
              View Project
            </ButtonProject>
          )}
        </ButtonContainer>
      )} */}
    </Card>
  );
};

export default ProjectCards;
