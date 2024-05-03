'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Icon } from '@iconify/react';
import { TsaButton } from '../Button';
import { Drawer, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import { TsaNavDrawerProps, TsaNavbarProps } from '../../../utils/propTypes';
import Link from 'next/link';
import { TsaWrapper } from '../containers/Wrapper';
import { convertUnit as fn } from 'libs/ui/src/utils/fontsFn';

export const TsaNavbar: React.FC<TsaNavbarProps> = ({
  navLinks,
  courses,
  ...rest
}) => {
  // State to control drawer open/close
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    // listen for the scroll event and act accordingly
  }, []);

  return (
    <AppBar elevation={0} sx={{ zIndex: 999 }} position={`fixed`} {...rest}>
      <TsaWrapper>
        <Toolbar
          sx={{
            justifyContent: `space-between`,
            alignItems: `center`,
            height: fn.rem(96),
          }}
          disableGutters
        >
          {/* desktop view */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img
              src={
                // color
                //   ? `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/logo-black.png`
                // : `
                `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/logo-white.png`
              }
              alt="logo"
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
            }}
          >
            {navLinks?.map((page, index) => (
              <React.Fragment key={index}>
                <Link style={{ textDecoration: `none` }} href={`/`}>
                  <ListItemText
                    sx={{
                      my: 2,
                      color: 'white',
                      fontWeight: 700,
                      display: 'block',
                    }}
                    primary={page}
                  />
                </Link>

                {index === 0 && <CourseMenu courses={courses} />}
              </React.Fragment>
            ))}
          </Box>
          <Box
            gap={`1rem`}
            sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}
          >
            <TsaButton name={'Login'} sx={{ height: fn.rem(48) }} />
            <TsaButton
              color={`inherit`}
              variant={`text`}
              name={'Register'}
              sx={{ height: fn.rem(48) }}
            />
          </Box>
          {/* mobile view */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <img
              src={
                // color
                //   ? `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/logo-black.png`
                // : `
                `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/logo-white.png`
              }
              alt="logo"
            />
          </Typography>
          <Box
            width={`fit-content`}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <TsaNavDrawer
              navLinks={navLinks}
              courses={courses}
              open={drawerOpen}
              onClose={toggleDrawer}
            />
          </Box>
        </Toolbar>
      </TsaWrapper>
    </AppBar>
  );
};

const TsaNavDrawer = ({
  navLinks,
  courses,
  open,
  onClose,
}: TsaNavDrawerProps) => {
  return (
    <div>
      <IconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={onClose}
      >
        <Icon icon="mdi:menu" />
      </IconButton>

      <Drawer
        elevation={0}
        sx={{ zIndex: 1 }}
        anchor={`top`}
        open={open}
        onClose={onClose}
      >
        <Box
          display={`flex`}
          flexDirection={`column`}
          justifyContent={`center`}
          alignItems={`center`}
          role="presentation"
          onClick={onClose}
          bgcolor={`primary.main`}
          mt={fn.rem(96)}
        >
          {navLinks?.map((page, index) => (
            <React.Fragment key={index}>
              <Button
                sx={{
                  my: 2,
                  color: 'white',
                  fontWeight: `bold`,
                  display: 'block',
                }}
              >
                {page}
              </Button>
              {index === 0 && <CourseMenu courses={courses} />}
            </React.Fragment>
          ))}
        </Box>
      </Drawer>
    </div>
  );
};

const CourseMenu = ({ courses }: TsaNavbarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<Icon icon={'mdi-light:chevron-down'} />}
        size={`large`}
        sx={{ color: `#fff`, fontWeight: 700, textTransform: `capitalize` }}
      >
        Courses
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {courses?.map((course) => {
          return (
            <MenuItem key={course} onClick={handleClose}>
              {course}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
