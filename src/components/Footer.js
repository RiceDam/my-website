import { styled } from '@mui/system';
import bannerImage from '../images/Rectangle.svg';
import {
    Grid,
    Typography,
    IconButton
} from '@mui/material';
import {
    GitHub,
    LinkedIn,
    Email,
} from '@mui/icons-material';
import { theme } from '../styles/theme';

const FooterStyled = styled(Grid, {})(({ theme }) => ({
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.primary.secondary,
    padding: "2vw"
}));

const iconStyle = {
    color: theme.palette.text.primary,
    fontSize: "60px",
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: "40px",
    padding: "10px",
    ":hover": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.text.primary
    }
}

export default function Footer() {
    return (
        <FooterStyled
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2vh"
        >
            <Grid
                container
                direction="row"
                gap="5px"
                justifyContent="center"
                sx={{
                    width: "fit-content"
                }}
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
            <Typography>Website created by Eric Dam</Typography>
        </FooterStyled>
    )
}