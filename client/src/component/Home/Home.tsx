import React, { useEffect } from 'react'
import Base from '../Base'
import Banner from './Banner'
import Displaysection from './Displaysection'
import Advertisment from '../../assests/add.png'
import MainContainer from '../Container/MainContainer'
import { Box } from '@mui/system'
import Catergorydisplay from './Catergorydisplay'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { flashSaleProduct } from '../../Store/Product/getFlaseSaleProduct'
import { bestSellingProduct } from '../../Store/Product/getBestSellingProduct'
import { allProduct } from '../../Store/Product/getAllProduct'


const Home = () => {
    const { product, loading, error, id, heading, title, isFlashsale } = useAppSelector((state) => state.getFlashSaleProduct);
    const { product: bestSellingProducts, loading: bestSellingLoading, error: bestSellingError, id: bestSellingProductsId, heading: bestSellingProductsHeading, title: bestSellingProductsTitle, isFlashsale: bestSellingProductsIsFlashSale } = useAppSelector((state) => state.getBestSellingProduct);
    const { product: allProducts, loading: allProductLoading, error: allProductError, id: allProductId, heading: allProductHeading, title: allProductTitle, isFlashsale: allProductIsFlashSale } = useAppSelector((state) => state.getAllProduct);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(flashSaleProduct())
        dispatch(bestSellingProduct())
        dispatch(allProduct())
    }, [dispatch])

    if (loading || bestSellingLoading || allProductLoading) return <div>Loading...</div>;
    if (error || bestSellingError || allProductError) return <div>Error: {error}</div>;
    console.log(allProducts)
    const data = {
        id: id,
        heading: heading,
        title: title,
        products: product,
        isFlashsale: isFlashsale,
    }
    const data2 = {
        id: bestSellingProductsId,
        heading: bestSellingProductsHeading,
        title: bestSellingProductsTitle,
        products: bestSellingProducts,
        isFlashsale: bestSellingProductsIsFlashSale
    }
    const data3 = {
        id: allProductId,
        heading: allProductHeading,
        title: allProductTitle,
        products: allProducts,
        isFlashsale: allProductIsFlashSale
    }
    return (
        <Base>
            <Banner />
            <Displaysection {...data} />
            <Catergorydisplay />
            <Displaysection {...data2} />
            <MainContainer>
                <Box marginTop={'140px'} >
                    <img src={Advertisment} alt="" width="100%" height={'auto'} />
                </Box>

            </MainContainer>

            <Displaysection {...data3} />

        </Base >
    )
}

export default Home
