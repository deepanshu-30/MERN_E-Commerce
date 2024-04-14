import { Box, Button, Checkbox, FormControlLabel, TextField, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { addNewCategory } from '../../Store/Product/addCategory'
import { addNewProduct } from '../../Store/Product/addProduct'
import { PrimaryHoverNoButton } from '../Button/Button'
import AdminBase from './AdminBase'

const AddCaterory = () => {
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    const [data, setdata] = useState<{
        name: string;
        description: string;
        categoryImage: File[]; // Specify the type here

    }>({
        name: '',
        description: '',
        categoryImage: [],

    });
    const onFileChange = (e: any) => {
        setdata({ ...data, categoryImage: e.target.files });
    };
    const dispatch = useAppDispatch()
    const uploads = async (e: React.FormEvent<HTMLFormElement>) => {
        alert("hey")
        e.preventDefault();
        console.log("hey", data)

        const formData = new FormData();
        console.log(data.name)
        formData.append('name', data.name);
        console.log(formData)
        formData.append("description", data.description);
        for (var x = 0; x <= data.categoryImage.length; x++) {
            formData.append("categoryImage", data.categoryImage[x])
        }
        console.log("hey brother", Object.fromEntries(formData))
        const response = await dispatch(addNewCategory(formData))
        if (response.payload.statusCode === 200) {
            alert("hey product is added")
        }
    }
    return (
        <AdminBase name="Add Product">
            <Box marginLeft={'200px'} marginTop={'100px'}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Box>
                        <Box
                        >
                            <form onSubmit={uploads}>
                                <TextField id="standard-basic" label="Category Name" name="name" variant="standard" size={'medium'} sx={{ width: { xs: '320px', sm: '370px' } }}
                                    value={data.name} onChange={e => { setdata({ ...data, name: e.target.value }) }} /><br />
                                <TextField id="standard-basic" label="Description" name="description" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.description} onChange={e => { setdata({ ...data, description: e.target.value }) }} /><br />
                                <input type="file" name="categoryImage" onChange={onFileChange} /><br /><br /><br /><br />
                                <Box>
                                    <Button type="submit" variant="contained">Submit</Button>
                                </Box>
                            </form>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </AdminBase >
    )
}

export default AddCaterory
