import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IconButton } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/Skeleton' {
  interface SkeletonPropsVariantOverrides {
    input: true
    block: true
    button: true
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    hoverCard: string
    hoverTableRow: string
  }
  interface PaletteOptions {
    hoverCard: string
    hoverTableRow: string
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ['Fira Sans', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    h2: {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    h3: {
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    h4: {
      fontWeight: 400,
      fontSize: '34px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    h5: {
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    h6: {
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    body2: {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    overline: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
    caption: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '120%',
      letterSpacing: '0',
    },
  },
  palette: {
    hoverCard: '#E5EAFF',
    hoverTableRow: 'rgba(63, 81, 181, 0.08)',
    text: {
      primary: '#050819',
      secondary: '#050819',
      disabled: '#CCCCCC',
    },
    primary: {
      main: '#353A7E',
      dark: '#5D6198',
      light: '#EBECF3',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0077ff',
      dark: '#64a6f0',
      light: '#FFEBE5',
      contrastText: '#FFFFFF',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
    },
    error: {
      main: '#F3230E',
      dark: '#FFBAB2',
      light: '#FFE8E5',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FCCA25',
      dark: '#FDD551',
      light: '#FFFBEE',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#2196F3',
      dark: '#0B79D0',
      light: '#64B6F7',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#B0C935',
      dark: '#C0D45D',
      light: '#E6EEBE',
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#FFFFFF',
      default: '#F2F3F5',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'secondary',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
        size: 'small',
        InputLabelProps: {
          shrink: true,
        },
        InputProps: {
          notched: false,
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          background: '#FFFFFF',
        },
        notchedOutline: {
          '& > legend': {
            maxWidth: '0',
          },
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        noOptionsText: 'Нет подходящих вариантов',
        loadingText: 'Загрузка...',
        getOptionLabel: (option) => option.name as string,
        isOptionEqualToValue: (option, value) => option.id === value.id,
        fullWidth: true,
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        outlined: {
          position: 'initial',
          transform: 'none',
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        variant: 'fullWidth',
      },
    },
    MuiChip: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: {
          borderRadius: '4px',
          ':hover': {
            backgroundColor: '#CED6FF',
            opacity: 0.8,
          },
        },
        colorPrimary: {
          backgroundColor: '#CED6FF',
          color: '#353A7E',
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
        disableGutters: true,
        square: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          '&::before': {
            opacity: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: (
          <IconButton size='large' disableRipple>
            <ExpandMoreIcon />
          </IconButton>
        ),
      },
      styleOverrides: {
        root: {
          flexDirection: 'row-reverse',
          padding: '0',
          marginRight: '',
          position: 'relative',
          left: '-16px',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '12px 16px 16px',
          '&:last-child': {
            paddingBottom: '16px',
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiSkeleton: {
      variants: [
        {
          props: { variant: 'input' },
          style: { height: '40px', width: '100%' },
        },
        {
          props: { variant: 'block' },
          style: { height: '50px', width: '100%' },
        },
        {
          props: { variant: 'button' },
          style: { height: '32px', width: '120px' },
        },
      ],
    },
  },
})

export default theme
