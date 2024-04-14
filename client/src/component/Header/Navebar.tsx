import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import MenuItem from '@mui/material/MenuItem';
import { Badge, Stepper, useTheme } from '@mui/material'
import MainContainer from '../Container/MainContainer';
import { NavLink } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { ShoppingCartCheckout } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProductsFromLocalStorage } from '../../Store/Cart/itemIncart';



const pages = [{ 'Home': '/' }, { 'Contact': '/pdp' }, { 'About': '/plp' }, { 'Sign Up': '/register' }];
const settings = ['Logout'];

function Navebar() {
    const dispatch = useAppDispatch()
    const [count, setCount] = React.useState(0)
    const itemCount = useAppSelector(state => state.itemIncart)
    console.log(itemCount.products.length)
    React.useEffect(() => {
        dispatch(fetchProductsFromLocalStorage()).then((data): any => {
            console.log(data.payload.length)
            setCount(data.payload.length)
        })
    }, [dispatch])
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes } = theme;
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <MainContainer>
                <AppBar position="static" color={'transparent'} sx={{
                    boxShadow: 'none',
                    marginTop: '30px',
                    marginBottom: "12px"
                }}>
                    <Toolbar disableGutters>
                        <Box sx={{ display: { xs: 'normal', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography
                                            fontSize={fontSizes.base.p}
                                            lineHeight={lineHeights.base.display}
                                            fontWeight='regular'
                                            marginRight={space[6]}
                                            color={color.black}
                                        >
                                            <NavLink
                                                to={`${Object.values(page)}`} >
                                                {Object.keys(page)}
                                            </NavLink>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            fontSize={fontSizes.base.headingSmall}
                            fontWeight='bold'
                            lineHeight={lineHeights.base.display}
                            color={color.darkBlack}
                            ml={{ xs: '70px', sm: '40px', md: '70px' }}
                        >
                            <NavLink
                                to="/"
                            >Exclusive</NavLink>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '190px' }}>
                            {pages.map((page) => (

                                <Typography
                                    fontSize={fontSizes.base.p}
                                    lineHeight={lineHeights.base.display}
                                    fontWeight='regular'
                                    marginRight={space[6]}
                                    color={color.darkBlack}
                                >
                                    <NavLink
                                        to={`${Object.values(page)}`} >{Object.keys(page)}</NavLink>
                                </Typography>

                            ))}
                        </Box>

                        <Box >
                            <Box sx={{ p: 0, ml: { xs: '80px', sm: '250px', md: '415px' } }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <NavLink to='/plp'>  <FavoriteBorderOutlinedIcon sx={{ marginRight: '20px', display: { xs: 'none', sm: 'flex', md: 'flex' }, fontSize: '40px' }} /></NavLink>
                                <NavLink to='/checkout/cart'>
                                    <IconButton size="large" sx={{ color: 'black' }}>
                                        <Badge badgeContent={itemCount.products.length} color="error">
                                            <ShoppingCartCheckout sx={{ marginRight: '20px', display: { xs: 'none', sm: 'flex', md: 'flex' }, fontSize: '40px' }} />
                                        </Badge>
                                    </IconButton>

                                </NavLink>
                                <AccountCircleOutlinedIcon onClick={handleOpenUserMenu} sx={{ marginRight: '20px', fontSize: '40px' }} />
                            </Box>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>

                </AppBar >

            </MainContainer>
            <Stepper orientation="horizontal" sx={{ border: '0.2px solid #7D8184' }} />
        </>
    );
}
export default Navebar;