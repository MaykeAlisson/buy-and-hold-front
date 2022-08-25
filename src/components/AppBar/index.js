import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Buy Hold
            </Typography>
            <Divider />
            <List>
                <ListItem key={'Assert'} disablePadding onClick={() => {
                    navigate('/assert')
                }}>
                    <ListItemButton sx={{ textAlign: 'center' }} >
                        <ListItemText primary={'Assert'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Launch'} disablePadding onClick={() => {
                    console.log('oi nav')
                    navigate('/launch')
                }}>
                    <ListItemButton sx={{ textAlign: 'center' }} >
                        <ListItemText primary={'Launch'} />
                    </ListItemButton>
                </ListItem>
                <ListItem style={{ 'marginTop': '10px' }} key={"sair"} >
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={'Sair'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Buy Hold
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button key={'Assert'} sx={{ color: '#fff' }} onClick={() => {
                            navigate('/assert')
                        }}>
                            Assert
                        </Button>
                        <Button key={'Launch'} sx={{ color: '#fff' }} onClick={() => {
                            navigate('/launch')
                        }}>
                            Launch
                        </Button>
                    </Box>
                    <Box style={{ 'paddingLeft': '30px' }} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button key={"logout"} sx={{ color: '#fff' }}>
                            Sair
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }} />
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
