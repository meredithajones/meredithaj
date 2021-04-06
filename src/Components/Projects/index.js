import React from 'react'

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Fridge For All</ProjectsH2>
                    <ProjectsP>These are projects that I love</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Exercise Tracker</ProjectsH2>
                    <ProjectsP>These are projects that I love</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                <ProjectsIcon src={Icon3} />
                    <ProjectsH2>Shop & Chef</ProjectsH2>
                    <ProjectsP>These are projects that I love</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
