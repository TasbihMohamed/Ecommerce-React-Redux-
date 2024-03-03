import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Allorders() {
    return (
        <Stack direction={'column'} sx={{my:4,
            justifyContent: 'center', alignItems: 'center',
        }}>
            <Typography>
                There is no other orders
            </Typography>
        </Stack>
    )
}
