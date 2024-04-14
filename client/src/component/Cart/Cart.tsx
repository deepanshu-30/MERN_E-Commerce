import { Box } from '@mui/system'
import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import Base from '../Base'

const Cart = () => {
    const itemCount = useAppSelector(state => state.itemIncart)
    const total = itemCount.products.map((e: any, index) => {
        let count = 0
        let a = parseInt(e.quantity) * parseInt(e.product.price);
        console.log("hey", typeof (a))
        count = count + a
        return count
    })
    console.log(total)

    return (
        <Base>
            <Box marginX={{ xs: '10px', sm: '135px' }}>
                <Box boxShadow={1} borderRadius={'4px'} display={{ xs: 'flex', sm: 'flex', md: 'flex' }} flexDirection={'row'} paddingY={'24px'} marginTop={'80px'}>
                    <Box marginLeft={{ xs: '10px', sm: '47px' }}>Product</Box>
                    <Box marginLeft={{ xs: '110px', sm: "130px", md: '350px' }}>Price</Box>
                    <Box marginLeft={{ xs: '20px', sm: "50px", md: '350px' }}>Quantity</Box>
                    <Box marginRight={'47px'} marginLeft={{ xs: '30px', sm: "50px", md: '350px' }} >Subtotal</Box>
                </Box>
                <Box>
                    {itemCount.products.map((e: any, index) => (
                        <>
                            <Box boxShadow={1} borderRadius={'4px'} display={'flex'} flexDirection={'row'} paddingY={'24px'} marginTop={'80px'}>
                                <Box display="flex" alignItems="center" marginLeft={{ xs: '10px', sm: '47px' }}>
                                    <img src={e.product.images[0].url} alt={e.product.name} width={54} height={54} />
                                    <Box width={{ xs: "80px", sm: '80px', md: '150px' }} marginLeft={'20px'}>{e.product.name}</Box>
                                </Box>
                                <Box marginLeft={{ xs: '30px', sm: "50px", md: '200px' }}>{e.product.price}</Box>
                                <Box marginLeft={{ xs: '60px', sm: "80px", md: '380px' }}>{e.quantity}</Box>
                                <Box marginRight={'47px'} marginLeft={{ xs: '70px', sm: "100px", md: '400px' }}>{e.quantity * e.product.price}</Box>
                            </Box>
                        </>
                    ))}
                </Box>
                <Box boxShadow={1} borderRadius={'4px'} display={{ xs: 'flex', sm: 'flex', md: 'flex' }} flexDirection={'row'} paddingY={'24px'} marginTop={'80px'}>
                    <Box marginLeft={{ xs: '10px', sm: '47px' }}></Box>
                    <Box marginLeft={{ xs: '110px', sm: "130px", md: '350px' }}>Total</Box>
                    <Box marginLeft={{ xs: '20px', sm: "50px", md: '350px' }}></Box>
                    <Box marginRight={'47px'} marginLeft={{ xs: '30px', sm: "50px", md: '350px' }} >{total}</Box>
                </Box>
                <Box>
                </Box>
            </Box>
        </Base >


    )
}

export default Cart
