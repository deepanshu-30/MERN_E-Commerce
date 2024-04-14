import { Stepper, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MainContainer from '../Container/MainContainer'
import Countdown from 'react-countdown';
import Grid from '@mui/material/Unstable_Grid2';
import { PrimaryHoverNoButton } from '../Button/Button';
import { IProductData } from '../../Store/Product/getFlaseSaleProduct';
import { Link } from 'react-router-dom';

export interface IDisplay {
    id: string,
    heading: string;
    title: string;
    products: IProductData[];
    isFlashsale: boolean;
}

const Displaysection = (props: IDisplay) => {
    const theme = useTheme();

    const { color, space, lineHeights, fontSizes, sizes } = theme;
    const { id, heading, title, products, isFlashsale } = props
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
                            {heading}
                        </Typography>

                        <Box
                            position={'absolute'}
                            top={'64px'}
                            left={{ xs: '90px', sm: '0px' }}

                        >
                            <Typography
                                component='h2'
                                fontSize={fontSizes.base.headingExtraLarge}
                                lineHeight={lineHeights.base.headingLarge}
                                fontWeight='bolder'
                                color={color.darkBlack}

                            >
                                {title}
                            </Typography>

                        </Box>
                        {isFlashsale &&
                            <Box
                                position={'absolute'}
                                top={{
                                    xs: '125px', sm: '64px'
                                }}
                                left={{ xs: '90px', sm: '298px' }}

                            >
                                <Typography
                                    component='h2'
                                    fontSize={fontSizes.base.headingExtraLarge}
                                    lineHeight={lineHeights.base.headingLarge}
                                    fontWeight='bolder'
                                    color={color.darkBlack}

                                >
                                    <Countdown date={Date.now() + 100000} />
                                </Typography>
                            </Box>
                        }

                    </Box>
                    <Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, sm: 8, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={{ xs: 'center' }} alignItems={{ xs: 'center' }}>
                                {products.slice(-4).map((product, index) => (

                                    <Grid xs={3} sm={4} md={3} key={index} >
                                        <Box><>

                                            <Box bgcolor={color.greyLight} position={'relative'} height={'250px'} width={'270px'}>
                                                {isFlashsale &&
                                                    <Box
                                                        width={'55px'}
                                                        height={'26px'}
                                                        bgcolor={color.brickRed}
                                                        position={'absolute'}
                                                        top={'12px'}
                                                        left={'12px'}
                                                        borderRadius={'4px'}
                                                        zIndex={1}
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
                                                            -{((product.price - product.priceDiscount) / product.price) * 100}%
                                                        </Typography>
                                                    </Box>
                                                }
                                                <Box
                                                    width={{ xs: '220px', sm: '180px' }}
                                                    height={'220px'}
                                                    position={'absolute'}
                                                    top={'35px'}
                                                    left={'40px'}
                                                    borderRadius={'4px'}>
                                                    <img src={product.images[0].url} alt="" style={{ maxWidth: '100%', height: 'auto' }} />

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

                                                            ><Link to={`/pdp/${product._id}`}>
                                                                    {product.name}
                                                                </Link>

                                                            </Typography>
                                                        </Box>

                                                        <Box marginTop={'8px'}>
                                                            {product.priceDiscount &&
                                                                <Typography
                                                                    component='span'
                                                                    color={color.brickRed}
                                                                    fontSize={fontSizes.base.p}
                                                                    lineHeight={lineHeights.base.p}
                                                                    fontWeight='bolder'

                                                                >${product.priceDiscount}</Typography>
                                                            }
                                                            {product.priceDiscount ?
                                                                <Typography
                                                                    component='span'
                                                                    color={color.grey}
                                                                    fontSize={fontSizes.base.p}
                                                                    lineHeight={lineHeights.base.p}
                                                                    fontWeight='bolder'
                                                                    marginLeft={'12px'}
                                                                    sx={{ textDecoration: 'line-through' }}

                                                                >${product.price}</Typography>
                                                                : <Typography
                                                                    component='span'
                                                                    color={color.brickRed}
                                                                    fontSize={fontSizes.base.p}
                                                                    lineHeight={lineHeights.base.p}
                                                                    fontWeight='bolder'
                                                                >${product.price}</Typography>}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </></Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>

                        <Link to={`/plp/${id}`}>
                            <PrimaryHoverNoButton buttonText={'View All Products'} />
                        </Link>
                    </Box>
                </Box>
                <Stepper orientation="horizontal" sx={{ border: '0.2px solid #7D8184', marginTop: '60px' }} />
            </MainContainer >
        </Box >
    )
}

export default Displaysection
