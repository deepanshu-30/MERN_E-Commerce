import { Box, Grid, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Base from '../Base'
import MainContainer from '../Container/MainContainer'
import { PrimarySmallButton } from '../Button/Button'
import Info from '../../assests/Info.png'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { productById } from '../../Store/Product/getProductById'
import { useParams } from 'react-router-dom'

import { fetchProductsFromLocalStorage } from '../../Store/Cart/itemIncart';

interface Product {
    product: {
        _id: string; // Assuming _id is a string
        // Add other properties here if needed
    }
    quantity: number;
}
const Pdp = () => {
    const theme = useTheme();

    const { color, space, lineHeights, fontSizes, sizes } = theme;
    const [quantity, setQuantity] = useState(1)
    const [count, setCount] = useState(0)
    let { id } = useParams();
    const { product, loading, error } = useAppSelector((state) => state.getProductById);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(productById(id ?? ''))

    }, [dispatch])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const buyproduct = (e: any) => {
        e.preventDefault();

        const data = {
            product,
            quantity
        }
        console.log(data)
        const productsString = localStorage.getItem('products');
        const products = productsString ? JSON.parse(productsString) : [];

        // Add the new product to the array
        // Check if the product already exists
        const existingProductIndex = products.findIndex((p: Product) => p.product._id === data.product._id);

        if (existingProductIndex !== -1) {
            // Product exists, update quantity
            products[existingProductIndex].quantity += data.quantity;
        } else {
            // New product, add to array
            products.push(data);
        }

        // Save the updated products array back to localStorage
        localStorage.setItem('products', JSON.stringify(products));

        dispatch(fetchProductsFromLocalStorage()).then((data): any => {
            console.log(data.payload.length)
            setCount(data.payload.length)
        })
    }
    return (
        <Base>
            <MainContainer >
                <Box sx={{ marginTop: '60px' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                        <Grid container xs={4} sm={4} md={1} marginLeft={{ sm: '15px', md: '80px' }} display={{ xs: 'none', sm: 'flex' }}>
                            {product.images.slice(-4).map((e, index) => (
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="flex-end"
                                >
                                    <Box
                                        width={'170px'}
                                        height={'138px'}
                                        bgcolor={color.greyLight}
                                        borderRadius={'4px'}
                                        marginBottom={'17px'}
                                    >
                                        <Box
                                            width={'121px'}
                                            height={'114px'}
                                            display='flex'
                                            justifyContent='center'
                                            alignItems='center'
                                            paddingX='24px'
                                            paddingY='12px'
                                        >
                                            <img src={e.url} alt="" style={{ maxWidth: '100%', height: 'auto' }}
                                            />
                                        </Box>

                                    </Box>


                                </Grid>
                            ))}

                        </Grid>
                        <Grid container xs={12} sm={7} md={4} marginLeft={{ xs: '20px', sm: '30px', md: '100px' }} >
                            <Box paddingX={{ xs: '10px', sm: '10px', md: '27px' }} paddingY={{ xs: '10px', sm: '100px', md: '100px' }} height='405px' width={{ xs: '358px', sm: '405px' }} bgcolor={color.greyLight}>
                                <img src={product.images[0].url} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                            </Box>

                        </Grid>
                        <Grid container xs={12} sm={12} md={5}
                            display='flex'
                            justifyContent='center'
                            alignItems='flex-start'
                            marginLeft={{ xs: '40px', sm: '40px', md: '60px' }}
                            marginTop={{ xs: '132px', sm: '132px', md: '0px' }}>
                            <Box>
                                <Box>
                                    <Typography
                                        component='span'
                                        color={color.darkBlack}
                                        fontSize={fontSizes.base.headingSmall}
                                        lineHeight={lineHeights.base.display}
                                        fontWeight='bolder'

                                    >
                                        {product.name}
                                    </Typography>
                                </Box>
                                <Box marginTop={'16px'} marginLeft={'230px'}>
                                    <Typography
                                        component='span'
                                        color={color.parrot}
                                        fontSize={fontSizes.base.smallp}
                                        lineHeight={lineHeights.base.smallp}
                                        fontWeight='regular'

                                    >
                                        {product.isInStock ? 'Instock' : 'Out of Stock'}
                                    </Typography>
                                </Box>
                                <Box marginTop={'16px'}>
                                    <Typography
                                        component='span'
                                        color={color.darkBlack}
                                        fontSize={fontSizes.base.headingSmall}
                                        lineHeight={lineHeights.base.display}
                                        fontWeight='regular'

                                    >
                                        ${product.priceDiscount ? product.priceDiscount : product.price}
                                    </Typography>
                                </Box>
                                <Box marginTop={'24px'}>
                                    <Typography
                                        component='span'
                                        color={color.darkBlack}
                                        fontSize={fontSizes.base.headingSmall}
                                        lineHeight={lineHeights.base.display}
                                        fontWeight='regular'


                                    >
                                        {product.description}
                                    </Typography>
                                    <Box marginTop={'24px'} borderTop={'1px solid black'}></Box>
                                </Box>
                                <Box marginTop={'24px'}
                                    display={'flex'}
                                    flexDirection={'row'}
                                    justifyContent={'flex-start'}
                                    alignItems={'flex-start'}
                                >
                                    <Box
                                        display={'flex'}
                                        flexDirection={'row'}
                                        justifyContent={'flex-start'}
                                        alignItems={'flex-start'}

                                    >
                                        <Box width={'40px'} height={'56px'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                            border={'1px solid black'}
                                            borderRadius={'4px'}
                                            sx={{
                                                '&:hover': {
                                                    bgcolor: color.brickRed,
                                                    border: '1px solid red',
                                                    color: 'white'
                                                },
                                            }}

                                            onClick={() => {
                                                if (quantity <= 1) {
                                                    alert('Sorry You can not reduce more')
                                                }
                                                else {
                                                    setQuantity(quantity - 1)
                                                }

                                            }}
                                        >
                                            <Typography
                                                component='span'
                                                color={color.darkBlack}
                                                fontSize={fontSizes.base.headingExtraExtraSmall}
                                                lineHeight={lineHeights.base.subheading}
                                                fontWeight='regular'

                                            >
                                                -
                                            </Typography>
                                        </Box>
                                        <Box width={'80px'} height={'56px'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                            borderTop={'1px solid black'}
                                            borderBottom={'1px solid black'}

                                        >
                                            <Typography
                                                component='span'
                                                color={color.darkBlack}
                                                fontSize={fontSizes.base.headingExtraExtraSmall}
                                                lineHeight={lineHeights.base.subheading}
                                                fontWeight='regular'

                                            >
                                                {quantity}
                                            </Typography>
                                        </Box>
                                        <Box width={'40px'} height={'56px'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                            border={'1px solid black'}
                                            borderRadius={'4px'}
                                            sx={{
                                                '&:hover': {
                                                    bgcolor: color.brickRed,
                                                    border: '1px solid red',
                                                    color: 'white'
                                                },
                                            }}
                                            onClick={() => {
                                                if (quantity >= 5) {
                                                    alert('Sorry You can not add more')
                                                }
                                                else {
                                                    setQuantity(quantity + 1)
                                                }

                                            }}
                                        >
                                            <Typography
                                                component='span'
                                                color={color.darkBlack}
                                                fontSize={fontSizes.base.headingExtraExtraSmall}
                                                lineHeight={lineHeights.base.subheading}
                                                fontWeight='regular'

                                            >
                                                +
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box marginLeft={'16px'} onClick={buyproduct}>
                                        <PrimarySmallButton buttonText='Add To Cart' />
                                    </Box>
                                </Box>
                                <Box marginTop={'24px'}
                                    display={'flex'}
                                    flexDirection={'row'}
                                    justifyContent={'flex-start'}
                                    alignItems={'flex-start'}

                                ><img src={Info} alt="" style={{ maxWidth: '100%', height: 'auto' }} /></Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </MainContainer>
        </Base >
    )
}

export default Pdp
