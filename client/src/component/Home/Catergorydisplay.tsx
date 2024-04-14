import { Stepper, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MainContainer from '../Container/MainContainer'

import Grid from '@mui/material/Unstable_Grid2';
import Category from '../../assests/Cat1.png'


const Catergorydisplay = () => {
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    return (
        <Box marginTop={space[20]}>
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
                            Categories
                        </Typography>

                        <Box
                            position={'absolute'}
                            top={'64px'}
                            textAlign={'center'}
                            justifyContent={'center'}
                            alignContent={'center'}
                        >
                            <Typography
                                component='h2'
                                fontSize={fontSizes.base.headingExtraLarge}
                                lineHeight={lineHeights.base.headingLarge}
                                fontWeight='bolder'
                                color={color.darkBlack}

                            >
                                Browse By Category
                            </Typography>

                        </Box>


                    </Box>
                    <Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, sm: 8, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={{ xs: 'center' }} alignItems={{ xs: 'center' }}>
                                {Array.from(Array(6)).map((_, index) => (
                                    <Grid xs={3} sm={4} md={2} key={index} >
                                        <Box display={'flex'}
                                            justifyContent={'center'}
                                            alignItems={'center'}>
                                            <Box bgcolor={color.white}
                                                height={'145px'} width={'170px'}
                                                border={'2px solid #F5F5F5'}
                                                borderRadius={'4px'}
                                                sx={{
                                                    '&:hover': {
                                                        bgcolor: color.brickRed
                                                    },
                                                }}
                                            >
                                                <Box
                                                    paddingX={'58px'}
                                                    paddingTop={'25px'}
                                                    paddingBottom={'16px'}>
                                                    <img src={Category} alt="" />
                                                </Box>
                                                <Typography
                                                    component='span'
                                                    color={color.darkBlack}
                                                    fontSize={fontSizes.base.p}
                                                    lineHeight={lineHeights.base.p}
                                                    fontWeight='regular'
                                                    paddingX={'44px'}
                                                    paddingBottom={'24px'}
                                                >
                                                    Computers
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Box>
                <Stepper orientation="horizontal" sx={{ border: '0.2px solid #7D8184', marginTop: '60px' }} />
            </MainContainer >
        </Box >
    )
}

export default Catergorydisplay
