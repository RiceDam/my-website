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

const tech_list1 = ["Java", "React", "C#", "C++", "C", "HTML", "CSS"];
const tech_list2 = ["JavaScript", "Python", "MySQL", "MongoDB", "Google Firebase", "Docker", ".NET"];
const tech_list3 = ["Django", "NodeJS", "Angular"];

const AboutStyled = styled(Grid, {})(({ theme }) => ({
    padding: "80px 10vw",
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
    color: "#3A95D6",
    fontSize: "60px",
    border: "2px solid #E9F1F2",
    borderRadius: "40px",
    padding: "10px",
    ":hover": {
        color: "#333333",
        backgroundColor: "#3A95D6",
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
                <Typography variant="body1">test</Typography>
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
                <Typography>test</Typography>
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