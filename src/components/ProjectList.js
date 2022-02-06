import { styled } from '@mui/system';
import {
    Box,
    Grid,
    Link,
    Typography
} from '@mui/material';

import Project from './Project';

const ProjectListStyled = styled(Grid, {})(({theme}) => ({
    textAlign: 'center',
    scrollMarginTop: "150px",
    [theme.breakpoints.down('laptop')]: {
        scrollMarginTop: "100px",
        margin: 0
    }
}));

const tech_stack1 = "Flutter, AWS, Django, Python, RabbitMQ, Raspberry Pi, and PostreSQL";
const tech_stack2 = "React, MongoDB, ExpressJS, NodeJS, HTML, and CSS"
const tech_stack3 = "Java EE, React";

const details1 = [
    "Created a Flutter application that replaces traditional buzzing and key fob systems for buildings.",
    "Received and sent messages from a message broker to perform tasks using a Raspberry Pi.",
    "Hosted a database and implemented login and registration features on AWS.",
    "Connected the mobile application to a Raspberry Pi prototype with LEDs to simulate a door."
];

const details2 = [
    "Created a company website for a cybersecurity company.",
    "Collaborated with others on a team of four to create the website",
    "Designed and developed the GUI with the use of React.",
    "Implemented login, registration, cart and checkout features."
];

const details3 = [
    "Collaborated with other developers to createa web-based timesheet application.",
    "Implemented a login and registration system with tokens in Java.",
    "Gathered data from a MySQL database using RESTful APIs.",
    "Designed and developed the GUI with the use of React."
];

const links1 = [
    "https://github.com/RiceDam/Gloocel_Django",
    "https://github.com/RiceDam/Gloocel_Mobile",
    "https://github.com/RiceDam/Gloocel_Pi"
];

const links3 = [
    "https://github.com/RiceDam/Yojana-Backend",
    "https://github.com/RiceDam/Yojana-Client"
];

const links2 = [
    "https://github.com/RiceDam/Byte-Sense"
]

const ProjectsStyled = styled(Box, {})(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridAutoRows: "1fr",
    padding: "4vw 10vw",
    gap: "1vw",
    marginLeft: "5vw",
    marginRight: "5vw",
    [theme.breakpoints.down('tablet')]: {
        gridTemplateColumns: "1fr",
        gridAutoRows: "auto"
    }
}));

const LinkStyled = styled(Link, {})(({theme}) => ({
    width: 'fit-content',
    color: '#2FD6C2',
    border: '#2FD6C2 1px solid',
    marginTop: "10px",
    borderRadius: "50px",
    padding: "1vw",
    ":hover": {
        backgroundColor: "#2FD6C2",
        color: "#333333",
    },
    [theme.breakpoints.down('tablet')]: {
        padding: "20px",
    }
}))

export default function ProjectList() {
    return (
        <ProjectListStyled
            container
            direction="column"
            gap="10px"
            alignItems="center"
            id="projects"
        >
            <Typography variant="h1">Projects</Typography>
            <LinkStyled variant="h3" underline="none"
                href="https://github.com/RiceDam"
            >
                View My GitHub
            </LinkStyled>
            <ProjectsStyled>
                <Project
                    projectName="Gloocel Innovations"
                    technologies={tech_stack1}
                    details={details1}
                    links={links1}
                />
                <Project
                    projectName="ByteSense"
                    technologies={tech_stack2}
                    details={details2}
                    links={links2}
                />
                <Project
                    projectName="Yojana"
                    technologies={tech_stack3}
                    details={details3}
                    links={links3}
                />
            </ProjectsStyled>
        </ProjectListStyled>
    );
}