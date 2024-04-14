import React, { ReactNode } from 'react';
import { createTheme } from '@mui/material';
import { color } from '../theme/color';
import { sizes, spacing, breakpoints, typography } from '../theme/layout/';

declare module '@mui/material/styles' {
    interface Theme {
        space: {
            0: string;
            0.5: string;
            0.625: string;
            0.75: string;
            0.875: string;
            1: string;
            1.25: string;
            1.375: string;
            1.5: string;
            1.875: string;
            2: string;
            2.25: string;
            2.5: string;
            3: string;
            3.25: string;
            3.75: string;
            4: string;
            5: string;
            6: string;
            6.5: string;
            7: string;
            8: string;
            9: string;
            10: string;
            16.25: string;
            20: string;
            11.87: string;
            40.625: string;
        }
        sizes: {
            auto: string;
            quarter: string;
            '44%': string;
            half: string;
            '75%': string;
            full: string;
            fit: string;
            container: {
                'component-max': string;
            }
        }
        color: {
            white: string;
            lightWhite: string;
            greyDark: string;
            grey: string;
            greyLight: string;
            black: string;
            darkBlack: string;
            creame: string;
            brickRed: string;
            parrot: string;
            brickHoverRed: string;
            hoverBlue: string;
        },
        breakpoints: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            '2xl': number;
        };
        lineHeights: {
            base: {
                display: string;
                headingExtraLarge: string;
                headingLarge: string;
                headingMedium: string;
                headingSmall: string;
                headingExtraSmall: string;
                headingExtraExtraSmall: string;
                subheading: string;
                subheadingSmall: string;
                eyebrow: string;
                p: string;
                smallp: string;
                disclaimer: string;
                leadp: string;
                largep: string;
                trademark: string;
                medium: string
            };
            desktop: {
                display: string;
                headingExtraLarge: string;
                headingLarge: string;
                headingMedium: string;
                headingSmall: string;
                headingExtraSmall: string;
                headingExtraExtraSmall: string;
                subheading: string;
                subheadingSmall: string;
                eyebrow: string;
                p: string;
                smallp: string;
                disclaimer: string;
                leadp: string;
                largep: string;
                trademark: string;
                medium: string;
            };
            70: string;
        };
        fontSizes: {
            base: {
                display: string;
                headingExtraLarge: string;
                headingLarge: string;
                headingMedium: string;
                headingSmall: string;
                headingExtraSmall: string;
                headingExtraExtraSmall: string;
                subheading: string;
                subheadingSmall: string;
                eyebrow: string;
                p: string;
                smallp: string;
                disclaimer: string;
                leadp: string;
                largep: string;
                trademark: string;
                planData: string;
            };
            desktop: {
                display: string;
                headingExtraLarge: string;
                headingLarge: string;
                headingMedium: string;
                headingSmall: string;
                headingExtraSmall: string;
                headingExtraExtraSmall: string;
                subheading: string;
                subheadingSmall: string;
                eyebrow: string;
                p: string;
                smallp: string;
                disclaimer: string;
                leadp: string;
                largep: string;
                trademark: string;
                errorHeading: string;
            };
        };

    }
}

const CustomThemeProvider = createTheme({

    ...color,
    ...spacing,
    ...sizes,
    ...breakpoints,
    ...typography,
    palette: {},
});

export default CustomThemeProvider
