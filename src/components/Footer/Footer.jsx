import React from "react";
import { Stack, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Stack>
            <Typography
                textAlign="center"
                sx={{
                    backgroundColor: "#e9ecef", py: 3,
                }}>
                Copyright © Your Website 2024
            </Typography>
        </Stack>
    );
}
