import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export const useIsSmaller = (breakpoint: number | Breakpoint) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down(breakpoint));
    return isSmall;
};

export const useIsLarger = (breakpoint: number | Breakpoint) => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up(breakpoint));
    return isLarge;
};
