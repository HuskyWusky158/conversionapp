import { Box } from '@mui/system';

const Header = () => {
    return (
        <Box sx={{ position: 'relative', width: '100%', height: '3in', margin: '0 auto', overflow: 'hidden' }}>
            <img src="BlueberryMuffins.jpeg" alt="Herbs" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', color: 'white' }}>
                <h2 style={{ fontSize: '4rem', margin: 0 }}>Help</h2>
            </div>
        </Box>
    )
};

export default Header;