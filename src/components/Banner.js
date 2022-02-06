import { styled } from '@mui/system';
import bannerImage from '../images/Rectangle.svg';
import {
    Grid,
    Button,
    Typography
} from '@mui/material';

const BannerStyled = styled(Grid, {})(({ theme }) => ({
    height: 'calc(100vh - 114.31px)',
    marginTop: '114.31px',
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.primary.secondary,
    textAlign: "center",
    [theme.breakpoints.down('tablet')]: {
        height: 'calc(100vh - 96px)',
        marginTop: '96px',
        "h1": {
            fontSize: "72px",
        }
    }
}));

const ButtonStyled = styled(Button, {})(({ theme }) => ({
    marginTop: '40px',
    color: theme.palette.text.primary,
    border: `${theme.palette.text.primary} 2px solid`,
    borderRadius: "60px",
    padding: "32px",
    textTransform: 'none',
    ":hover": {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
    },
    [theme.breakpoints.down('tablet')]: {
        padding: "20px",
        marginTop: "20px"
    }
}));

const TextStyled = styled(Typography, {})(({ theme }) => ({
    width: "40vw",
    [theme.breakpoints.down('tablet')]: {
        width: "fit-content",
        padding: "20px"
    }
}))

export default function Banner() {
    return (
        <BannerStyled
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            id="banner"
        >
            <Typography variant="h2">Hi, my name is</Typography>
            <Typography variant="h1" sx={{ fontSize: "96px" }}>Eric Dam</Typography>
            <TextStyled variant="body1"
            >
                I am a full-stack developer with a diploma in Computer Systems Technology from BCIT with a specialization in information systems
            </TextStyled>
            <ButtonStyled variant="outlined link"
                href="https://drive.google.com/drive/folders/17cdw8GQJ90FAYoKtLCaaHJRPmcEfDhuI?usp=sharing"
            >
                View my resume
            </ButtonStyled>
        </BannerStyled>
    )
}