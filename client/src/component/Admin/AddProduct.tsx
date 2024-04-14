import { Box, Button, Checkbox, FormControlLabel, TextField, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { addNewProduct } from '../../Store/Product/addProduct'
import { PrimaryHoverNoButton } from '../Button/Button'
import AdminBase from './AdminBase'

const AddProduct = () => {
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    const [file, setfile] = useState('')
    const [data, setdata] = useState<{
        name: string;
        price: number;
        description: string;
        quantity: number;
        isInStock: boolean;
        flashSale: boolean;
        bestSellingProduct: boolean;
        newArrivales: boolean;
        sku: string;
        productImage: File[]; // Specify the type here
        priceDiscount: number;
        category: string;
    }>({
        name: '',
        price: 0,
        description: '',
        quantity: 0,
        isInStock: false,
        flashSale: false,
        bestSellingProduct: false,
        newArrivales: false,
        sku: '',
        productImage: [],
        priceDiscount: 0,
        category: ''
    });
    const onFileChange = (e: any) => {
        setdata({ ...data, productImage: e.target.files });
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
        formData.append("price", data.price.toString());
        formData.append("description", data.description);
        formData.append("quantity", data.quantity.toString());
        formData.append("isInStock", data.isInStock.toString());
        formData.append("flashSale", data.flashSale.toString());
        formData.append("bestSellingProduct", data.bestSellingProduct.toString());
        formData.append("newArrivales", data.newArrivales.toString());
        formData.append("sku", data.sku);
        formData.append("priceDiscount", data.priceDiscount.toString());
        formData.append("category", data.category);
        for (var x = 0; x <= data.productImage.length; x++) {
            formData.append("productImage", data.productImage[x])
        }
        console.log("hey brother", Object.fromEntries(formData))
        const response = await dispatch(addNewProduct(formData))
        if (response.payload.statusCode === 200) {
            alert("hey product is added")
        }
    }
    return (
        <AdminBase name="Add Product">
            <Box marginLeft={'600px'} marginTop={'100px'}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Box>
                        <Box
                        >
                            <form onSubmit={uploads}>
                                <TextField id="standard-basic" label="Product Name" name="name" variant="standard" size={'medium'} sx={{ width: { xs: '320px', sm: '370px' } }}
                                    value={data.name} onChange={e => { setdata({ ...data, name: e.target.value }) }} /><br />
                                <TextField id="standard-basic" label="Price" name="price" variant="standard" sx={{
                                    marginTop: space[5],
                                    width: { xs: '320px', sm: '370px' }
                                }} value={data.price}
                                    onChange={e => { setdata({ ...data, price: parseInt(e.target.value) }) }} /><br />
                                <TextField id="standard-basic" label="Description" name="description" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.description} onChange={e => { setdata({ ...data, description: e.target.value }) }} /><br />
                                <TextField id="standard-basic" label="Quantity" name="quantity" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.quantity} onChange={e => { setdata({ ...data, quantity: parseInt(e.target.value) }) }} /><br />
                                <FormControlLabel id="standard-basic" name="isInStock" control={<Checkbox checked={data.isInStock} onChange={e => setdata({ ...data, isInStock: e.target.checked })} />} label="In Stock" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.isInStock} />
                                <FormControlLabel id="standard-basic" name="flashSale" control={<Checkbox checked={data.flashSale} onChange={e => setdata({ ...data, flashSale: e.target.checked })} />} label="Flash Sale" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.flashSale} />
                                <FormControlLabel id="standard-basic" name="bestSellingProduct" control={<Checkbox checked={data.bestSellingProduct} onChange={e => setdata({ ...data, bestSellingProduct: e.target.checked })} />} label="Best Selling Product" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.bestSellingProduct} />
                                <FormControlLabel id="standard-basic" name="newArrivales" control={<Checkbox checked={data.newArrivales} onChange={e => setdata({ ...data, newArrivales: e.target.checked })} />} label="New Arrivales" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.newArrivales} /><br />
                                <TextField id="standard-basic" label="Sku" name="sku" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.sku} onChange={e => { setdata({ ...data, sku: e.target.value }) }} /><br />
                                <TextField id="standard-basic" label="Price Discount" name="priceDiscount" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.priceDiscount} onChange={e => { setdata({ ...data, priceDiscount: parseInt(e.target.value) }) }} /><br />
                                <TextField id="standard-basic" label="Category" name="category" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.category} onChange={e => { setdata({ ...data, category: e.target.value }) }} /><br />
                                <input type="file" name="productImage" multiple onChange={onFileChange} /><br /><br /><br /><br />
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

export default AddProduct
