import { Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import MainContainer from '../Container/MainContainer'
import Grid from '@mui/material/Unstable_Grid2';
import Remote from '../../assests/remote.png'
import Base from '../Base';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { flashSaleProduct } from '../../Store/Product/getFlaseSaleProduct';
import { bestSellingProduct } from '../../Store/Product/getBestSellingProduct';
import { allProduct } from '../../Store/Product/getAllProduct';
import Countdown from 'react-countdown';

const Plp = () => {
    const theme = useTheme();
    let { id } = useParams();

    const { product, loading, error, id: flashSaleProducts, heading, title, isFlashsale } = useAppSelector((state) => state.getFlashSaleProduct);
    const { product: bestSellingProducts, loading: bestSellingLoading, error: bestSellingError, id: bestSellingProductsId, heading: bestSellingProductsHeading, title: bestSellingProductsTitle, isFlashsale: bestSellingProductsIsFlashSale } = useAppSelector((state) => state.getBestSellingProduct);
    const { product: allProducts, loading: allProductLoading, error: allProductError, id: allProductId, heading: allProductHeading, title: allProductTitle, isFlashsale: allProductIsFlashSale } = useAppSelector((state) => state.getAllProduct);

    const dispatch = useAppDispatch()
    console.log(id)
    useEffect(() => {
        if (id === '1') dispatch(flashSaleProduct())
        if (id === '2') dispatch(bestSellingProduct())
        if (id === '3') dispatch(allProduct())
    }, [id, dispatch])

    let data, type, name, showDiscountPercentage: boolean = false
    if (id === '1') {
        data = product
        type = heading
        name = title
        showDiscountPercentage = isFlashsale
    }
    if (id === '2') {
        data = bestSellingProducts
        type = bestSellingProductsHeading
        name = bestSellingProductsTitle
        showDiscountPercentage = bestSellingProductsIsFlashSale
    }

    if (id === '3') {
        data = allProducts
        type = allProductHeading
        name = allProductTitle
        showDiscountPercentage = allProductIsFlashSale
    }

    console.log("hey", data)

    console.log(product)
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    return (
        <Base>
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
                                {type}
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
                                    {name}
                                </Typography>

                            </Box>
                            {showDiscountPercentage &&
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
                                    {data?.map((e, index) => (
                                        <Grid xs={3} sm={4} md={3} key={index} >
                                            <Box>
                                                <Box bgcolor={color.greyLight} position={'relative'} height={'250px'} width={'270px'}>
                                                    {showDiscountPercentage && <Box
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
                                                            -{((e.price - e.priceDiscount) / e.price) * 100}%
                                                        </Typography>

                                                    </Box>}
                                                    <Box
                                                        width={{ xs: '220px', sm: '180px' }}
                                                        height={'220px'}
                                                        position={'absolute'}
                                                        top={'35px'}
                                                        left={'40px'}
                                                        borderRadius={'4px'}>
                                                        <img src={e.images[0].url} alt="" style={{ maxWidth: '100%', height: 'auto' }} />

                                                    </Box>
                                                </Box>
                                                <Box bgcolor={color.darkBlack} width={'270px'}>
                                                    <Box textAlign={'center'} paddingY={'12px'}>
                                                        <Typography
                                                            component='span'
                                                            color={color.white}
                                                            fontSize={fontSizes.base.p}
                                                            lineHeight={lineHeights.base.p}
                                                            fontWeight='regular'
                                                        >Add To Cart</Typography>
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

                                                                ><Link to={`/pdp/${e._id}`}>
                                                                        {e.name}
                                                                    </Link>
                                                                </Typography>
                                                            </Box>
                                                            <Box marginTop={'8px'}>
                                                                <Typography
                                                                    component='span'
                                                                    color={color.brickRed}
                                                                    fontSize={fontSizes.base.p}
                                                                    lineHeight={lineHeights.base.p}
                                                                    fontWeight='bolder'

                                                                >${e.priceDiscount}</Typography>
                                                                <Typography
                                                                    component='span'
                                                                    color={color.grey}
                                                                    fontSize={fontSizes.base.p}
                                                                    lineHeight={lineHeights.base.p}
                                                                    fontWeight='bolder'
                                                                    marginLeft={'12px'}
                                                                    sx={{ textDecoration: 'line-through' }}

                                                                >${e.price}</Typography>
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
                    </Box>
                </MainContainer >
            </Box >
        </Base >
    )
}

export default Plp
