import '../index.css';
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemButton, AppBar, Toolbar, Avatar } from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { format } from 'date-fns';

const Layout = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const drawerWidth = 240

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color='secondary'/>,
      path: "/"
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color='secondary'/>,
      path: "/create"
    },
  ]

  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <div className='root'>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant='h2'>
            Oleg's Notes
          </Typography>
        </div>

        <List>
          {menuItems.map(item => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => navigate(item.path)}
              className={location.pathname === item.path && "active"}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className="page">
        <AppBar elevation={0} sx={{ position: "sticky", marginBottom: "20px", backgroundColor: "#f9f9f9", color: "black"}}>
          <Toolbar>
            <Typography className='date'>
              Today is the {format(new Date(), "do MMMM Y")}
            </Typography>
            <Typography>
              Oleg
            </Typography>
            <Avatar alt='Oleg Rumyantsev' src="/85106125.jpg" sx={{ marginLeft: "16px" }}/>
          </Toolbar>
        </AppBar>
        {children}
      </div>
    </div>
  )
}
export default Layout