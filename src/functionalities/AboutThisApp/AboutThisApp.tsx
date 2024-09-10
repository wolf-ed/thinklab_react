import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// LOCAL
import { Summary } from './components/Summary';
import { BEArchitechture } from './components/BEArchitechture';
import { BETechnologyStack } from './components/BETechnologyStack';
import { KeyFeatures } from './components/KeyFeatures';
import { FEArchitechture } from './components/FEArchitechture';
import { FETechnologyStack } from './components/FETechnologyStack';
import { FESecurity } from './components/FESecurity';
import { FEDevelopmentFeatures } from './components/FEDevelopmentFeatures';
import { BEDevelopmentFeatures } from './components/BEDevelopmentFeatures';
import { TopNavBar } from '../../navigation/TopNavBar/TopNavBar';
import { ThinklabTitle } from './components/ThinklabTitle';

const drawerWidth = 240;

export function AboutThisApp() {
  const thinklabRef = useRef(null);
  const summaryRef = useRef(null);
  const keyFeaturesRef = useRef(null);
  const feTechStackRef = useRef(null);
  const beTechStackRef = useRef(null);
  const feArchRef = useRef(null);
  const beArchRef = useRef(null);
  const feSecurityRef = useRef(null);
  const feDevFeaturesRef = useRef(null);
  const beDevFeaturesRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    const appBarHeight = 64;
    const topPosition = ref!.current!.offsetTop - appBarHeight;
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <TopNavBar />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection(thinklabRef)}>
                <ListItemText primary="Thinklab" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection(summaryRef)}>
                <ListItemText primary="Summary" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection(keyFeaturesRef)}>
                <ListItemText primary="Key Features" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection(feTechStackRef)}>
                <ListItemText primary="FE Technology Stack" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection(beTechStackRef)}>
                <ListItemText primary="BE Technology Stack" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection(feArchRef)}>
                <ListItemText primary="FE Architecture" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection(beArchRef)}>
                <ListItemText primary="BE Architecture" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection(feSecurityRef)}>
                <ListItemText primary="FE Security" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection(feDevFeaturesRef)}>
                <ListItemText primary="FE Development Features" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection(beDevFeaturesRef)}>
                <ListItemText primary="BE Development Features" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}
      >
        <Toolbar />
        <div ref={thinklabRef}>
          <ThinklabTitle />
        </div>
        <div ref={summaryRef}>
          <Summary />
        </div>
        <div ref={keyFeaturesRef}>
          <KeyFeatures />
        </div>
        <div ref={feTechStackRef}>
          <FETechnologyStack />
        </div>
        <div ref={beTechStackRef}>
          <BETechnologyStack />
        </div>
        <div ref={feArchRef}>
          <FEArchitechture />
        </div>
        <div ref={beArchRef}>
          <BEArchitechture />
        </div>
        <div ref={feSecurityRef}>
          <FESecurity />
        </div>
        <div ref={feDevFeaturesRef}>
          <FEDevelopmentFeatures />
        </div>
        <div ref={beDevFeaturesRef}>
          <BEDevelopmentFeatures />
        </div>
      </Box>
    </Box>
  );
}
