import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryHoverNoButton } from '../Button/Button'
import AdminBase from './AdminBase'

const ProductEdit = () => {
    return (
        <AdminBase name="Product">
            <Box marginLeft={'100px'} marginTop={'100px'}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Box>
                        <Link to='/admin_453@565/addpproduct'><PrimaryHoverNoButton buttonText='Add Product' /></Link>
                        <PrimaryHoverNoButton buttonText='Update Product' />
                        <PrimaryHoverNoButton buttonText='Delete Product' />
                        <Link to='/admin_453@565/updatequanitity'><PrimaryHoverNoButton buttonText='Update Product Quantity by Cron' /></Link>
                    </Box>
                </Box>
            </Box>
        </AdminBase>
    )
}


export default ProductEdit
