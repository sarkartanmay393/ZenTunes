'use client'

import React from 'react'
import { Container, Divider, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import LayoutProps from '../../../interfaces/Layout'
import Theme from './../../../theme/theme';

export default function PlayRouteLayout({ children }: LayoutProps) {
  const theme = React.useMemo(() => createTheme(Theme('dark')), [])

  return (
    <ThemeProvider theme={theme}>
      <Container component='div' sx={{ padding: 3 }}>
        <Typography variant='h2'>Zen Tunes</Typography>
        <Typography variant='body1'>Stream white noise, stay productive with a Pomodoro timer</Typography>
        {children}
      </Container>
    </ThemeProvider>
  )
}
