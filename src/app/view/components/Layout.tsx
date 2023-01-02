import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ExpandLess, ExpandMore, StarBorder, SubjectOutlined } from '@mui/icons-material';
import '../../../App.css'
import { Collapse } from '@mui/material';

interface LayoutComponentProps {

}
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const LayoutComponent: React.FunctionComponent<LayoutComponentProps> = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [expandCategory, setExpandCategory] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const navigate = useNavigate()
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const menuItem = [
        {
            text: 'Home',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Admin Portal',
            icon: <SubjectOutlined color="secondary" />,
            path: '/adminPortal'
        },
        {
            text: 'Useful Contacts',
            icon: <SubjectOutlined color="secondary" />,
            path: '/usercontact'
        },
        {
            text: 'Emergency Contact',
            icon: <SubjectOutlined color="secondary" />,
            path: '/emergencycontact'
        }
    ]
    let handleOnClick = () => {
        setExpandCategory(!expandCategory)
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}

            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <ListItem onClick={() => handleOnClick()}>
                    <ListItemText inset primary="Dashboard" />
                    {expandCategory ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expandCategory} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {menuItem.map((item, index) => (

                            <ListItem key={item.text} disablePadding onClick={() => navigate(item.path)} >
                                <ListItemButton>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary={item.text}></ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Main />
            </Drawer>
            <Main open={open} style={{ backgroundColor: '#F1EAE0' }}>
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
}

export default LayoutComponent;