import { Box, Button, Typography, Link } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material'

const Topheader = () => {

    const theme = useTheme();
    const { color, space, lineHeights, fontSizes } = theme;

    return (
        <>
            <Box display={'flex'}
                bgcolor={color.darkBlack}
                py={space[1.375]}
                justifyContent={'center'}
            >
                <Box display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    textAlign={'center'}
                    flexWrap={'wrap'}
                    px={space[1.25]}
                    gap={space[1]} >
                    <Typography color={color.white}
                        lineHeight={lineHeights.base.p}
                        fontSize={fontSizes.base.smallp}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography>
                    <Link href="#"
                        underline="always"
                        lineHeight={lineHeights.base.leadp}
                        fontSize={fontSizes.base.smallp}
                    >ShopNow</Link>

                </Box>
            </Box>
        </>
    )
}

export default Topheader
