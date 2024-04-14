import { Box, Button, Checkbox, FormControlLabel, TextField, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { updateQuantityCsv } from '../../Store/Product/updateQuantity'

import AdminBase from './AdminBase'

const UpdateproductQuaintity = () => {
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    const [data, setdata] = useState<{

        quntatityupdate: File[]; // Specify the type here

    }>({

        quntatityupdate: [],

    });
    const onFileChange = (e: any) => {
        setdata({ ...data, quntatityupdate: e.target.files });
    };
    const dispatch = useAppDispatch()
    const uploads = async (e: React.FormEvent<HTMLFormElement>) => {
        alert("hey")
        e.preventDefault();
        const formData = new FormData();
        for (var x = 0; x <= data.quntatityupdate.length; x++) {
            formData.append("quntatityupdate", data.quntatityupdate[x])
        }
        console.log("hey brother", Object.fromEntries(formData))
        const response = await dispatch(updateQuantityCsv(formData))
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
                                <input type="file" name="quntatityupdate" onChange={onFileChange} /><br /><br /><br /><br />
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

export default UpdateproductQuaintity
