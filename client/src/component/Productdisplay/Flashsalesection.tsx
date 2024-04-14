import { Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MainContainer from '../Container/MainContainer'
import Countdown from 'react-countdown';
import Grid from '@mui/material/Unstable_Grid2';
import Remote from '../../assests/remote.png'
import { PrimaryHoverNoButton } from '../Button/Button';

const Flashsalesection = () => {
    const theme = useTheme();

    const { color, space, lineHeights, fontSizes, sizes } = theme;
    return (
        <Box marginTop={'120px'}>
            <MainContainer>
                <Box >
                    <Box height={'200px'} position={'relative'} >
                        <Box
                            width={'20px'}
                            height={'40px'}
                            bgcolor={color.brickRed}
                            position={'absolute'}
                            top={0}
                            left={0}
                            borderRadius={'4px'}
                        />
                        <Typography
                            component='span'
                            color={color.brickRed}
                            position={'absolute'}
                            top={'10px'}
                            left={'36px'}
                            fontSize={fontSizes.base.p}
                            lineHeight={lineHeights.base.medium}
                            fontWeight='bolder'

                        >
                            Today’s
                        </Typography>

                        <Box
                            position={'absolute'}
                            top={'64px'}
                            left={{ xs: '110px', sm: '0px' }}

                        >
                            <Typography
                                component='h2'
                                fontSize={fontSizes.base.headingExtraLarge}
                                lineHeight={lineHeights.base.headingLarge}
                                fontWeight='bolder'
                                color={color.darkBlack}

                            >
                                Flash Sales
                            </Typography>

                        </Box>
                        <Box
                            position={'absolute'}
                            top={{
                                xs: '125px', sm: '64px'
                            }}
                            left={{ xs: '110px', sm: '298px' }}

                        >
                            <Typography
                                component='h2'
                                fontSize={fontSizes.base.headingExtraLarge}
                                lineHeight={lineHeights.base.headingLarge}
                                fontWeight='bolder'
                                color={color.darkBlack}
                            >
                                <Countdown date={Date.now() + 1000000000} />

                            </Typography>

                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, sm: 8, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={{ xs: 'center' }} alignItems={{ xs: 'center' }}>
                                {Array.from(Array(4)).map((_, index) => (
                                    <Grid xs={3} sm={4} md={3} key={index} >
                                        <Box>
                                            <Box bgcolor={color.greyLight} position={'relative'} height={'250px'} width={'270px'}>
                                                <Box
                                                    width={'55px'}
                                                    height={'26px'}
                                                    bgcolor={color.brickRed}
                                                    position={'absolute'}
                                                    top={'12px'}
                                                    left={'12px'}
                                                    borderRadius={'4px'}
                                                >
                                                    <Typography
                                                        component='span'
                                                        color={color.white}
                                                        position={'absolute'}
                                                        top={'4px'}
                                                        left={'12px'}
                                                        fontSize={fontSizes.base.p}
                                                        lineHeight={lineHeights.base.medium}
                                                        fontWeight='bolder'

                                                    >
                                                        -40%
                                                    </Typography>
                                                    <Box
                                                        width={{ xs: '220px', sm: '180px' }}
                                                        height={'220px'}
                                                        position={'absolute'}
                                                        top={'35px'}
                                                        left={'40px'}
                                                        borderRadius={'4px'}>
                                                        <img src={Remote} alt="" />

                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box height={'200px'}>
                                                <Box position={'relative'} height={'200px'}>
                                                    <Box position={'absolute'} top={'32px'}>
                                                        <Box>
                                                            <Typography
                                                                component='span'
                                                                color={color.darkBlack}
                                                                fontSize={fontSizes.base.p}
                                                                lineHeight={lineHeights.base.p}
                                                                fontWeight='bolder'

                                                            >HAVIT HV-G92 Gamepad</Typography>
                                                        </Box>
                                                        <Box marginTop={'8px'}>
                                                            <Typography
                                                                component='span'
                                                                color={color.brickRed}
                                                                fontSize={fontSizes.base.p}
                                                                lineHeight={lineHeights.base.p}
                                                                fontWeight='bolder'

                                                            >$120</Typography>
                                                            <Typography
                                                                component='span'
                                                                color={color.grey}
                                                                fontSize={fontSizes.base.p}
                                                                lineHeight={lineHeights.base.p}
                                                                fontWeight='bolder'
                                                                marginLeft={'12px'}
                                                                sx={{ textDecoration: 'line-through' }}

                                                            >$120</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <PrimaryHoverNoButton buttonText={'View All Products'} />
                    </Box>

                </Box>
            </MainContainer >
        </Box >
    )
}

export default Flashsalesection
