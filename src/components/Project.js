import { styled } from '@mui/system';
import {
    Grid,
    Link,
    Typography
} from '@mui/material';

const ProjectStyled = styled(Grid, {})(({theme}) => ({
    border: `${theme.palette.text.primary} 2px solid`,
    padding: "2vw",
}))

const LinkStyled = styled(Link, {})(({ theme }) => ({
    color: theme.palette.tertiary.main,
    fontSize: "18px",
    border: `${theme.palette.tertiary.main} 2px solid`,
    borderRadius: "40px",
    padding: "1vw",
    ":hover": {
        backgroundColor: theme.palette.tertiary.main,
        color: theme.palette.primary.main
    },
    [theme.breakpoints.down('tablet')]: {
        padding: "10px"
    }
}));

const CodeButtonsStyled = styled(Grid, {})(({theme}) => ({
    [theme.breakpoints.down('tablet')]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        padding: "10px"
    }
}));

export default function Project(props) {
    return (
        <ProjectStyled
            container
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            gap="10px"
        >
            <Typography
                sx={{
                    color: "#2FD6C2",
                    fontSize: "48px",
                    marginBottom: "20px"
                }}
            >
                &lt;/&gt;
            </Typography>
            <Typography variant="h3">{props.projectName}</Typography>
            <Typography>
                <Typography
                    sx={{ color: "#2FD6C2", fontSize: "18px", display: "inline-block" }}
                    variant="h1"
                >
                    Technologies used:
                </Typography> {props.technologies}
            </Typography>
            <ul>
                {props.details.map((value) => (
                    <li
                        key={value}
                        style={{ textAlign: "left" }}
                    >
                        <Typography variant="body1">{value}</Typography>
                    </li>
                ))}
            </ul>
            <CodeButtonsStyled
                container
                direction="row"
                gap="10px"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                {props.links.length > 1 ?
                    (props.links.map((value, index) => {
                        if (index === 0) {
                            return (
                                <LinkStyled
                                    key={value}
                                    href={value}
                                    underline="none"
                                    variant="h1"
                                >
                                    View back end code
                                </LinkStyled>
                            )
                        }
                        else if (index === 1) {
                            return (
                                <LinkStyled
                                    key={value}
                                    href={value}
                                    underline="none"
                                    variant="h1"
                                >
                                    View front end code
                                </LinkStyled>)
                        }
                        else {
                            return (
                                <LinkStyled
                                    key={value}
                                    href={value}
                                    underline="none"
                                    variant="h1"
                                >
                                    View extra code
                                </LinkStyled>)
                        }
                    }))
                    :
                    (props.links.map((value) => (
                        <LinkStyled
                            key={value}
                            href={value}
                            underline="none"
                            variant="h1"
                        >
                            View code
                        </LinkStyled>
                    )))
                }
            </CodeButtonsStyled>

        </ProjectStyled>
    )
}