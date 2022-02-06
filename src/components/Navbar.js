import { useState } from 'react';
import { styled } from '@mui/system';
import {
    Box,
    Grid,
    Link,
    Typography,
    IconButton
} from '@mui/material';
import {
    Menu,
    Close
} from '@mui/icons-material'

const NavbarStyled = styled(Grid, {})(({ theme }) => ({
    padding: '40px 80px',
    backgroundColor: theme.palette.background.default,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 3,
    [theme.breakpoints.down('tablet')]: {
        padding: '20px',
    }
}));

const MobileNavbarStyled = styled(Grid, {})(({ theme }) => ({
    padding: '20px',
    backgroundColor: theme.palette.background.default,
    width: '100%',
    zIndex: 3,
    height: "100vh",
    position: 'fixed',
}));

const LinkStyled = styled(Link, {})(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: "24px",
    [theme.breakpoints.down('tablet')]: {
        display: "none"
    }
}));

const MobileLinkStyled = styled(Link, {})(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: "24px",
}));

const MenuStyled = styled(IconButton, {})(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up('tablet')]: {
        display: "none"
    }
}))

const iconStyle = {
    fontSize: "40px",
}

export default function Navbar() {
    const [click, setClick] = useState(false);
    const clickMenu = () => {
        setClick(true);
        document.body.style.overflow="hidden";
    }
    const closeMenu = () => {
        setClick(false);
        document.body.style.overflow="unset";
    }
    return (
        <Box>
            {!click &&
                <NavbarStyled
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    gap="40px"
                >
                    <Typography
                        sx={{
                            marginRight: "auto",
                            fontSize: "24px"

                        }}
                        variant="h2"
                    >
                        Eric Dam
                    </Typography>

                    <LinkStyled variant="h3" 
                        underline="hover" 
                        sx={{ color: "#2FD6C2" }}
                        href="#"
                    >
                        Home
                    </LinkStyled>
                    <LinkStyled variant="body2"
                        underline="hover"
                        href="#aboutMe"
                    >
                        About
                    </LinkStyled>
                    <LinkStyled variant="body2" 
                        underline="hover"
                        href="#projects"
                    >
                        Projects
                    </LinkStyled>
                    <LinkStyled variant="body2" 
                        underline="hover"
                        href="https://drive.google.com/drive/folders/17cdw8GQJ90FAYoKtLCaaHJRPmcEfDhuI?usp=sharing"
                    >
                        Resume
                    </LinkStyled>
                    <MenuStyled onClick={clickMenu}>
                        <Menu sx={iconStyle}/>
                    </MenuStyled>
                </NavbarStyled>
            }
            {click &&
                <MobileNavbarStyled
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    gap="40px"
                >
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            sx={{
                                marginRight: "auto",
                                fontSize: "24px"

                            }}
                            variant="h2"
                        >
                            Eric Dam
                        </Typography>
                        <IconButton sx={{color: "#E9F1F2"}} onClick={closeMenu}>
                            <Close sx={iconStyle}/>
                        </IconButton>
                    </Grid>
                    <MobileLinkStyled variant="h3" 
                        underline="hover" 
                        sx={{ color: "#2FD6C2" }}
                        href="#banner"
                        onClick={closeMenu}
                    >
                        Home
                    </MobileLinkStyled>
                    <MobileLinkStyled variant="body2" 
                        underline="hover"
                        href="#aboutMe"
                        onClick={closeMenu}
                    >
                        About
                    </MobileLinkStyled>
                    <MobileLinkStyled variant="body2" 
                        underline="hover"
                        href="#projects"
                        onClick={closeMenu}
                    >
                        Projects
                    </MobileLinkStyled>
                    <MobileLinkStyled variant="body2" 
                        underline="hover"
                        href="https://drive.google.com/drive/folders/17cdw8GQJ90FAYoKtLCaaHJRPmcEfDhuI?usp=sharing"
                    >
                        Resume
                    </MobileLinkStyled>
                </MobileNavbarStyled>
            }
        </Box>
    )
}