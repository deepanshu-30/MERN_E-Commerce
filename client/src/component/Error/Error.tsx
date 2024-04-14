import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react'
import Base from '../Base'
import { PrimaryHoverNoButton } from '../Button/Button';
import MainContainer from '../Container/MainContainer'

const Error = () => {
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    return (
        <Base>
            <MainContainer>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginTop={'60px'} textAlign={'center'}>
                    <Typography
                        component='h2'
                        color={color.darkBlack}
                        fontSize={{ xs: fontSizes.desktop.headingLarge, sm: fontSizes.desktop.display, md: fontSizes.desktop.errorHeading }}
                        lineHeight={lineHeights.base.display}
                        fontWeight='regular'
                    >404 Not Found</Typography>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginTop={'40px'} textAlign={'center'}>
                    <Typography
                        component='h2'
                        color={color.darkBlack}
                        fontSize={fontSizes.desktop.p}
                        lineHeight={lineHeights.base.p}
                        fontWeight='regular'
                    >Your visited page not found. You may go home page.</Typography>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginTop={'80px'}>
                    <PrimaryHoverNoButton buttonText='Back to home page' />
                </Box>
            </MainContainer>
        </Base >
    )
}

export default Error
