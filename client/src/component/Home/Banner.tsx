import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MainContainer from '../Container/MainContainer'
import BannerImage from '../../assests/Banner.png'
import AppleLogo from '../../assests/applelogo.png'

const Banner = () => {
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    const menuList = ['Woman’s Fashion', 'Men’s Fashion', 'Electronics', 'Home & Lifestyle', 'Medicine', 'Sports & Outdoor', 'Baby’s & Toys', 'Groceries & Pets', 'Health & Beauty']

    return (
        <MainContainer>
            <Box sx={{ flexGrow: 1 }} marginTop={space[3.25]}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={3} md={2} key={'1'} borderRight={{ xs: 'none', md: '0.2px solid #7D8184' }} >
                        <Box bgcolor={color.white} display={'flex'} justifyContent={{ xs: 'none', sm: 'center' }} alignItems={{ xs: 'none', sm: 'center' }}>
                            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2, listStyleType: 'none' }}>
                                {menuList.map((element, key) => (
                                    <li key={key}>
                                        <Typography
                                            fontSize={fontSizes.base.p}
                                            lineHeight={lineHeights.base.display}
                                            fontWeight='regular'
                                            marginBottom={space[2]}
                                        >
                                            {element}
                                        </Typography>
                                    </li>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={10} key={1}>
                        <Box display={'flex'} bgcolor={color.darkBlack}   >
                            <Grid xs={12} sm={12} md={5} color={color.lightWhite} >
                                <Box marginTop={space[7]} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} paddingBottom={'35px'}>
                                    <Box >
                                        <img src={AppleLogo} alt="" />
                                        <Typography fontSize={fontSizes.base.p}
                                            lineHeight={lineHeights.base.display}
                                            fontWeight='regular'
                                            marginTop={'-32px'}
                                            marginLeft={space[8]}
                                        >iPhone 14 Series</Typography>
                                    </Box>
                                    <Box marginTop={space[5]}>
                                        <Typography fontSize={fontSizes.base.headingExtraLarge}
                                            lineHeight={lineHeights.base.medium}
                                            fontWeight='bold'
                                            component='h2'
                                        >Up to 10% <br />off Voucher</Typography>
                                    </Box>
                                    <Box marginTop={space[2.5]}>
                                        <Typography
                                            fontSize={fontSizes.base.p}
                                            lineHeight={lineHeights.base.display}
                                            fontWeight='lighter'
                                            marginRight={space[6]}
                                        >Shop Now
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={0} sm={0} md={2} marginLeft={'130px'} height={'auto'} display={{ xs: 'none', md: 'flex' }}>
                                <img src={BannerImage} alt="text" />
                            </Grid>
                        </Box>
                    </Grid>
                </Grid >
            </Box >
        </MainContainer >

    )
}

export default Banner
