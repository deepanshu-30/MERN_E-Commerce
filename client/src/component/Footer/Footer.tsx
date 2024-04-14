import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import QRImage from '../../assests/Qrcode.png';
import appStore from '../../assests/AppStore.png';
import googlePlay from '../../assests/GooglePlay.png';

const Footer = () => {
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;

    return (
        <>
            <Box
                component="footer"
                marginTop={'124px'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                textAlign={'center'}
                px={{ xs: '20px', md: '135px' }}
                py={'80px'}
                bgcolor={color.darkBlack}
                color={color.white} >
                <Box display={'flex'}
                    justifyContent={'center'}
                    gap={'80px'}
                    textAlign={'justify'}
                    flexWrap={'wrap'} >
                    <Box display={'flex'}
                        flexDirection={'column'}
                        width={{ xs: sizes.full, sm: sizes['44%'], md: sizes.auto }}
                        gap={'24px'} >
                        <Typography>Exclusive</Typography>
                        <Typography>Subscribe</Typography>
                        <Typography>Get 10% off your first order</Typography>
                        <Box >
                            <TextField
                                color="secondary"
                                focused
                                id="outlined-size-small"
                                defaultValue="Small"
                                variant="outlined"
                                size="small" />
                        </Box>
                    </Box>
                    <Box display={'flex'}
                        flexDirection={'column'}
                        width={{ xs: sizes.full, sm: sizes['44%'], md: sizes.auto }}
                        maxWidth={{ md: '175px' }}
                        gap={'24px'} >
                        <Typography>Support</Typography>
                        <Box display={'flex'}
                            flexDirection={'column'}
                            gap={'16px'} >
                            <Typography>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Typography>
                            <Typography>exclusive@gmail.com</Typography>
                            <Typography>+88015-88888-9999</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'}
                        flexDirection={'column'}
                        width={{ xs: sizes.full, sm: sizes['44%'], md: sizes.auto }}
                        gap={'24px'} >
                        <Typography>Account</Typography>
                        <Box display={'flex'}
                            flexDirection={'column'}
                            gap={'16px'} >
                            <Typography>My Account</Typography>
                            <Typography>Login / Register</Typography>
                            <Typography>Cart</Typography>
                            <Typography>Wishlist</Typography>
                            <Typography>Shop</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'}
                        flexDirection={'column'}
                        width={{ xs: sizes.full, sm: sizes['44%'], md: sizes.auto }}
                        gap={'24px'} >
                        <Typography>Quick Link</Typography>
                        <Box display={'flex'}
                            flexDirection={'column'}
                            gap={'16px'} >
                            <Typography>Privacy Policy</Typography>
                            <Typography>Terms Of Use</Typography>
                            <Typography>FAQ</Typography>
                            <Typography>Contact</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'}
                        flexDirection={'column'}
                        width={{ xs: sizes.full, sm: sizes['44%'], md: sizes.auto }}
                        maxWidth={{ md: '200px' }}
                        gap={'24px'} >
                        <Typography>Download App</Typography>
                        <Box display={'flex'}
                            flexDirection={'column'}
                            gap={'8px'} >
                            <Typography>Save $3 with App New User Only</Typography>
                            <Box display={'flex'}
                                gap={'8px'} >
                                <img src={QRImage} />
                                <Box display={'flex'}
                                    flexDirection={'column'} >
                                    <img src={googlePlay} />
                                    <img src={appStore} />
                                </Box>
                            </Box>
                        </Box>
                        <Box display={'flex'}
                            gap={'24px'} >
                            <FacebookTwoToneIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <LinkedInIcon />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box paddingBottom={'40px'} bgcolor={color.darkBlack} textAlign={'center'}>
                <Typography color={color.white}> © Copyright Rimel 2022. All right reserved</Typography>
            </Box>
        </>
    )
}

export default Footer;
