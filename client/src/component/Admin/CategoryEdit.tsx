import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryHoverNoButton } from '../Button/Button'
import AdminBase from './AdminBase'

const CategoryEdit = () => {
    return (
        <AdminBase name="Category">
            <Box marginLeft={'100px'} marginTop={'100px'}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Box>
                        <Link to='/admin_453@565/addcategory'><PrimaryHoverNoButton buttonText='Add Category' /></Link>
                        <PrimaryHoverNoButton buttonText='Update Category' />
                        <PrimaryHoverNoButton buttonText='Delete Category' />
                    </Box>
                </Box>
            </Box>
        </AdminBase>
    )
}

export default CategoryEdit
