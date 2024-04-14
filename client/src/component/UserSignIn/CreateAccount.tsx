import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Base from '../Base'
import Side from '../../assests/Side.png'
import { TextField, Typography } from '@mui/material';
import { PrimaryHoverNoButton } from '../Button/Button';
import { useAppDispatch } from '../../hooks/hooks';
import { userRegister } from '../../Store/userRegisterSlice';
import { userLogin } from '../../Store/userSlice';
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [data, setdata] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phoneno: 0,
        address: {
            street: '',
            city: '',
            country: '',
            pincode: 0,
        }
    })
    const register = async (e: any) => {
        e.preventDefault();
        const response = await dispatch(userRegister(data))
        if (response.payload.statusCode === 200) {
            navigate("/");
        }
    }
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    return (
        <Base>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={{ xs: 4, md: 12 }} marginTop={space[7]}>
                    <Grid item md={6} >
                        <Box height={'auto'} display={{ xs: 'none', sm: 'none', md: 'flex' }} >
                            <img src={Side} alt="" width={'765px'} />

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box
                            marginTop={{ xs: space[1.25], sm: space[1.5] }}
                            marginLeft={{ xs: space[6.5], sm: space[16.25] }}
                        >
                            <Typography
                                component='h2'
                                color={color.darkBlack}
                                fontSize={fontSizes.base.headingMedium}
                                lineHeight={lineHeights.base.display}
                                fontWeight='bolder'
                            >
                                Log in to Exclusive
                            </Typography>
                            <Box
                                marginTop={space[3]}
                            >
                                <Typography
                                    component='span'
                                    color={color.darkBlack}
                                    fontSize={fontSizes.base.p}
                                    lineHeight={lineHeights.base.p}
                                    fontWeight='regular'
                                >
                                    Enter your details below
                                </Typography>
                            </Box>
                            <Box
                                marginTop={space[6]}
                            >
                                <TextField id="standard-basic" label="FirstName" variant="standard" size={'medium'} sx={{ width: { xs: '320px', sm: '370px' } }} value={data.firstname} onChange={e => { setdata({ ...data, firstname: e.target.value }) }} /><br />
                                <TextField id="standard-basic" label="LastName" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.lastname} onChange={e => { setdata({ ...data, lastname: e.target.value }) }} /><br />
                                <TextField id="standard-basic" label="Email" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.email} onChange={e => { setdata({ ...data, email: e.target.value }) }} /><br />
                                <TextField id="standard-basic" label="Password" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.password} onChange={e => { setdata({ ...data, password: e.target.value }) }} /><br />
                                <TextField id="standard-basic" label="PhoneNumber" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.phoneno} onChange={e => { setdata({ ...data, phoneno: parseInt(e.target.value) }) }} /><br />
                                <TextField id="standard-basic" label="Street" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.address.street} onChange={e => { setdata({ ...data, address: { ...data.address, street: e.target.value } }) }} /><br />
                                <TextField id="standard-basic" label="City" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.address.city} onChange={e => { setdata({ ...data, address: { ...data.address, city: e.target.value } }) }} /><br />
                                <TextField id="standard-basic" label="Country" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.address.country} onChange={e => { setdata({ ...data, address: { ...data.address, country: e.target.value } }) }} /><br />
                                <TextField id="standard-basic" label="Pincode" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} value={data.address.pincode} onChange={e => { setdata({ ...data, address: { ...data.address, pincode: parseInt(e.target.value) } }) }} />

                            </Box>
                            <Box marginTop={space[5]} onClick={register}>
                                <PrimaryHoverNoButton buttonText='SignUp' />
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Base>
    );
}
