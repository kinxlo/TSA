import * as React from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Icon } from '@iconify/react';
import { TsaButton } from '../Button';

// const pages = ['About Us', 'FAQs', 'Contact Us'];
// const courses = ['frontend', 'backend', 'full stack'];

interface TsaNavbarProps extends AppBarProps {
  navLinks?: string[];
  courses?: string[];
}

export const TsaNavbar: React.FC<TsaNavbarProps> = ({
  navLinks,
  courses,
  ...rest
}) => {
  return (
    <AppBar position={`fixed`} {...rest}>
      <Container maxWidth="xl" sx={{ paddingInline: `none` }}>
        <Toolbar
          sx={{ justifyContent: `space-between`, alignItems: `center` }}
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
          <Box
            gap={`1rem`}
            sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}
          >
            <TsaButton name={'Login'} />
            <TsaButton color={`inherit`} variant={`text`} name={'Register'} />
          </Box>
          {/* mobile view */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
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
            width={`fit-content`}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Icon icon="ri:menu-2-fill" />
            </IconButton>
            <Menu
              id="menu-appbar"
              // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              // open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              open={false}
            >
              {navLinks?.map((page) => (
                <MenuItem
                  key={page}
                  //  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const CourseMenu = ({ courses }: TsaNavbarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        variant="text"
        sx={{ color: `#fff`, fontWeight: `bold` }}
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
            <MenuItem key={`course`} onClick={handleClose}>
              {course}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
