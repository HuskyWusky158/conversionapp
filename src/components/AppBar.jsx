import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

function ResponsiveAppBar() {
return (
    <AppBar position="static">
    <Container maxWidth="xl">
        <Toolbar disableGutters>
        < BakeryDiningIcon  sx={{ display: { Large: 'large', md: 'flex' }, mr: 1, fontSize: '4rem' }} />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
            mr: 2,
            display: { xs: 'large', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            fontSize: 'large',
            }}
        >
            Home
        </Typography>

        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/help"
            sx={{
            mr: 2,
            color: 'inherit',
            textDecoration: 'none',
            fontSize: 'large',
            }}
        >
            Help
        </Typography>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/feedback"
            sx={{
            mr: 2,
            color: 'inherit',
            textDecoration: 'none',
            fontSize: 'large',
            }}
        >
            Feedback
        </Typography>

        </Toolbar>
    </Container>
    </AppBar>
);
}
export default ResponsiveAppBar;