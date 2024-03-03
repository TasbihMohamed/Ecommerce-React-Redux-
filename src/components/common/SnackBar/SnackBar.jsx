import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar() {
    const [snackOpen, setSnackOpen] = React.useState(false);

    const snackbarOpen = () => {
        setSnackOpen(true);
    };

    const snackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackOpen(false);
    };

    return (
        <div>
            <Button onClick={snackbarOpen}>Open Snackbar</Button>
            <Snackbar
                open={snackOpen}
                autoHideDuration={5000}
                onClose={snackbarClose}
                message="This Snackbar will be dismissed in 5 seconds."
            />
        </div>
    );
}