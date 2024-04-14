import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Base from '../Base'
import Side from '../../assests/Side.png'
import { TextField, Typography } from '@mui/material';
import { PrimarySmallButton } from '../Button/Button';
import { Link } from 'react-router-dom';

export default function Exclusive() {
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    return (
        <Base>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={{ xs: 4, md: 12 }} marginTop={space[7]}>
                    <Grid item md={6} >
                        <Box height={'auto'} display={{ xs: 'none', sm: 'flex' }} >
                            <img src={Side} alt="" width={'765px'} />

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box
                            marginTop={{ xs: space[1.25], sm: space[16.25] }}
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
                                <TextField id="standard-basic" label="UserName" variant="standard" size={'medium'} sx={{ width: { xs: '320px', sm: '370px' } }} /><br />
                                <TextField id="standard-basic" label="Password" variant="standard" sx={{ marginTop: space[5], width: { xs: '320px', sm: '370px' } }} />
                            </Box>
                            <Box marginTop={space[5]}>
                                <Link to='/admin_453@565/dashboard'>n
                                    <PrimarySmallButton buttonText='Login' />
                                </Link>

                                <Typography
                                    component='span'
                                    fontSize={fontSizes.base.p}
                                    lineHeight={lineHeights.base.p}
                                    fontWeight='regular'
                                    color={color.brickRed}
                                    marginLeft={{ xs: space[5], sm: space[10] }}

                                >
                                    Forget Password?
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Base>
    );
}
