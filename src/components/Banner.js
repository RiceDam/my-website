import { styled } from '@mui/system';
import bannerImage from '../images/Rectangle.svg';
import {
    Grid,
    Button,
    Typography
} from '@mui/material';

const BannerStyled = styled(Grid, {})(({ theme }) => ({
    height: '100vh',
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.primary.secondary,
    textAlign: "center",
    [theme.breakpoints.down('tablet')]: {
        "h1": {
            fontSize: "72px",
        }
    }
}));

const ButtonStyled = styled(Button, {})(({ theme }) => ({
    marginTop: '40px',
    color: '#E9F1F2',
    border: '#E9F1F2 1px solid',
    borderRadius: "50px",
    padding: "1vw",
    textTransform: 'none',
    ":hover": {
        border: '#E9F1F2 1px solid',
        backgroundColor: "#E9F1F2",
        color: "#333333"
    },
    [theme.breakpoints.down('tablet')]: {
        padding: "20px",
        marginTop: "20px"
    }
}));

const TextStyled = styled(Typography, {})(({theme}) => ({
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
                View My Resume
            </ButtonStyled>
        </BannerStyled>
    )
}