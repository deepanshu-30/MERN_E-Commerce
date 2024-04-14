import { Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react'

interface IButton {
    buttonText: string
}
const PrimaryHoverNoButton = (props: IButton) => {
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    const { buttonText } = props;
    return (
        <>
            <Button variant="contained" sx={{
                bgcolor: color.brickRed, width: '234px', height: '56px', textAlign: 'center',
                '&:hover': {
                    bgcolor: color.brickHoverRed
                },
            }} >
                <Typography
                    color={color.white}
                    fontSize={fontSizes.base.p}
                    lineHeight={lineHeights.base.p}
                    fontWeight='regular'
                >
                    {buttonText}
                </Typography>
            </Button>
        </>
    )
}
const PrimarySmallButton = (props: IButton) => {
    const theme = useTheme();
    const { color, space, lineHeights, fontSizes, sizes } = theme;
    const { buttonText } = props;
    return (
        <>
            <Button variant="contained" sx={{
                bgcolor: color.brickRed, width: '143px', height: '56px', textAlign: 'center',
                '&:hover': {
                    bgcolor: color.brickHoverRed
                },
            }} >
                <Typography
                    color={color.white}
                    fontSize={fontSizes.base.p}
                    lineHeight={lineHeights.base.p}
                    fontWeight='regular'
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    {buttonText}
                </Typography>
            </Button>
        </>
    )
}


export { PrimaryHoverNoButton, PrimarySmallButton }
