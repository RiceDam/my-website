import { styled } from '@mui/system';
import {
    Grid,
    Typography,
    IconButton
} from '@mui/material';
import {
    GitHub,
    LinkedIn,
    Email,
} from '@mui/icons-material'
import Me from '../images/img001.jpg';
import { theme } from '../styles/theme.js';

const tech_list1 = ["Java", "React", "C#", "C++", "C", "HTML", "CSS"];
const tech_list2 = ["JavaScript", "Python", "MySQL", "MongoDB", "Google Firebase", "Docker", ".NET"];
const tech_list3 = ["Django", "NodeJS", "Angular"];

const AboutStyled = styled(Grid, {})(({ theme }) => ({
    padding: "80px 15vw",
    scrollMarginTop: "150px",
    [theme.breakpoints.down('laptop')]: {
        flexDirection: "column-reverse",
        padding: "10vw",
        alignItems: "center",
        justifyContent: "center",
        scrollMarginTop: "100px",
        margin: 0,
    },
}))

const iconStyle = {
    color: theme.palette.text.secondary,
    fontSize: "60px",
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: "40px",
    padding: "10px",
    ":hover": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.text.secondary
    }
}



const TechStyled = styled(Grid, {})(({theme}) => ({
    [theme.breakpoints.down('tablet')]: {
        flexWrap: "wrap",
    }
}))


export default function About() {
    return (
        <AboutStyled
            container
            direction="row"
            wrap="nowrap"
            gap="5vw"
            id="aboutMe"
        >
            <Grid
                container
                direction="column"
                gap="20px"
                sx={{flex: 2}}
            >
                <Typography variant="h1">About Me</Typography>
                <Typography variant="h2" color="secondary">Who I Am</Typography>
                <Typography variant="body1">I am a full-stack developer with experience in <b>Java</b>, <b>React</b>, <b>HTML</b>, <b>CSS</b>, and <b>JavaScript.</b></Typography>
                <Typography variant="body1">I graduated from <b>British Columbia Institute of Technology's Computer Systems Technology</b> program in May 2021 and am seeking a position as a full-stack developer or software developer.</Typography>
                <Typography variant="h2" color="secondary">Technologies</Typography>
                <TechStyled
                    container
                    direction="row"
                    wrap="nowrap"
                    justifyContent="space-between"
                >
                    <ul>
                        {tech_list1.map((value) => (
                            <li
                                key={value}
                            >
                                <Typography variant="body1">{value}</Typography>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {tech_list2.map((value) => (
                            <li
                                key={value}
                            >
                                <Typography variant="body1">{value}</Typography>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {tech_list3.map((value) => (
                            <li
                                key={value}
                            >
                                <Typography variant="body1">{value}</Typography>
                            </li>
                        ))}
                    </ul>
                </TechStyled>
                <Typography>I am currently looking to make new connections and expand my network. Please feel free to reach out to me through any of the platforms below.</Typography>
                <Grid
                    container
                    direction="row"
                    gap="5px"
                >
                    <IconButton color="secondary"
                        variant="link" href="https://github.com/RiceDam"
                    >
                        <GitHub sx={iconStyle} />
                    </IconButton>
                    <IconButton color="secondary"
                        variant="link" href="https://www.linkedin.com/in/ericdam/"
                    >
                        <LinkedIn sx={iconStyle} />
                    </IconButton>
                    <IconButton color="secondary"
                        variant="link" href="mailto: dam.eric3@gmail.com"
                    >
                        <Email sx={iconStyle} />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid
                sx={{flex: 1}}
            >
                <img src={Me} alt="me" style={{maxWidth: "100%"}}/>
            </Grid>
        </AboutStyled>
    );
}