import * as React from "react";

import {
  Stack,
  Typography,
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Menu,
  Container,
  Button,
  MenuItem,
  Badge,
} from "@mui/material";
import { IoMenu } from "react-icons/io5";

import { FaShoppingCart } from "react-icons/fa";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../../redux/Auth/userTokenSlice";
import { getAllCart } from "../../redux/Cart/CartSlice";

const pages = ["home", "cart", "wish list", "products", "categories", "brands"];

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { userToken } = useSelector(state => state.auth)

  console.log('navvvvvvvvv', userToken);


  const { allCart } = useSelector((state) => state.addCart);
  // console.log("cart ", allCart?.numOfCartItems);

  function getCart() {
    dispatch(getAllCart())
  }
  React.useEffect(() => {
    getCart()
  }, [])


  const handleLogOut = () => {
    localStorage.removeItem('userToken');
    dispatch(setUserToken(null));
    navigate('/login')
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (index) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#e9ecef" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            ".MuiBox-root.css-1t6c9ts": {
              justifyContent: "flex-end",
            },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
            }}
          >
            <Link
              to={"cart"}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <FaShoppingCart
                className="primary-color "
                style={{ marginRight: 2 }}
              />
              fresh cart
            </Link>
          </Typography>
          {/* ============= mobile========================================== */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ mx: 2 }}
            >
              <IoMenu
                style={{
                  color: 'gray', border: '1px solid rgb(191 185 187 / 95%)',
                  padding: "6px 12px",
                  fontSize: "38px"
                }}
              />
            </IconButton>
            {userToken ? <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },

                ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                {
                  width: "100%",
                  m: 0,
                  left: "0px !important",
                  backgroundColor: "#e9ecef",
                  boxShadow: "0px 0px 0px !important",
                  maxWidth: "100%",
                },
              }}
            >
              {/* small screen */}

              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(index)}
                  sx={{
                    display: "block",
                  }}
                >
                  <NavLink
                    to={page == "home" ? "" : page.replace(/ /g, "-")}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        padding: 10,
                        backgroundColor: isActive ? "#4fa74f" : "transparent",
                        color: isActive ? "white" : "rgba(33, 37, 41, .75)",
                        borderRadius: 5,
                      };
                    }}
                  >
                    {page}
                  </NavLink>
                </Button>
              ))}
              <Stack sx={{ alignItems: 'center', justifyContent: 'center', }}>
                <Link to='cart'>
                  <Badge // badgeContent={allCart.length > 0 ? allCart?.numOfCartItems : 0}
                    badgeContent={allCart?.numOfCartItems} color="primary"
                    style={{ marginRight: 20 }}>
                    <FaShoppingCart
                      className="gray"
                    />
                  </Badge>
                </Link>
                <Typography className="gray" onClick={() => { handleLogOut() }}>Log out</Typography>
              </Stack>
            </Menu>
              :

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                  {
                    width: "100%",
                    m: 0,
                    left: "0px !important",
                    backgroundColor: "#e9ecef",
                    boxShadow: "0px 0px 0px !important",
                    maxWidth: "100%",
                  },
                }}
              >
                <Stack direction='column' sx={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Button sx={{ display: "block", }}>
                    <NavLink
                      to={'register'}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      style={({ isActive }) => {
                        return {
                          textDecoration: "none",
                          padding: 10,
                          backgroundColor: isActive ? "#4fa74f" : "transparent",
                          color: isActive ? "white" : "rgba(33, 37, 41, .75)",
                          borderRadius: 5,
                        };
                      }}
                    >
                      register
                    </NavLink>
                  </Button>
                  <Button sx={{ display: "block", }}>
                    <NavLink
                      to={'login'}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      style={({ isActive }) => {
                        return {
                          textDecoration: "none",
                          padding: 10,
                          backgroundColor: isActive ? "#4fa74f" : "transparent",
                          color: isActive ? "white" : "rgba(33, 37, 41, .75)",
                          borderRadius: 5,
                        };
                      }}
                    >
                      login
                    </NavLink>
                  </Button>
                </Stack>
              </Menu>
            }
          </Box>
          {/* <Stack> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
              order: 1,
            }}
          >
            <Link
              to='cart'

              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <FaShoppingCart
                className="primary-color "
                style={{ marginRight: 2 }}
              />
              fresh cart
            </Link>
          </Typography>
          {/* ============================================================== */}
          {userToken ?
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center',
                // border: 1
              }}
            >
              <Stack direction="row">
                {pages.map((page, index) => (
                  <Button
                    key={page}
                    onClick={() => handleCloseNavMenu(index)}
                    sx={{
                      display: "block",
                    }}
                  >
                    <NavLink
                      to={page == "home" ? "" : page.replace(/ /g, "-")}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      style={({ isActive }) => {
                        return {
                          textDecoration: "none",
                          padding: 10,
                          backgroundColor: isActive ? "#4fa74f" : "transparent",
                          color: isActive ? "white" : "rgba(33, 37, 41, .75)",
                          borderRadius: 5,
                          fontSize: '12px'
                        };
                      }}
                    >
                      {page}
                    </NavLink>
                  </Button>
                ))}
              </Stack>
              <Stack direction={'row'} sx={{ alignItems: 'center', }}>
                <Link to='cart'>
                  <Badge // badgeContent={allCart.length > 0 ? allCart?.numOfCartItems : 0}
                    badgeContent={allCart?.numOfCartItems}
                    color="primary"
                    style={{ marginRight: 20 }}>
                    <FaShoppingCart
                      className="gray"
                    />
                  </Badge>
                </Link>
                <Typography className="gray" onClick={() => { handleLogOut() }}>Log out</Typography>
              </Stack>
            </Box>


            :
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: "end",
                alignItems: 'center',
                // border: 1,
                pr: 3
              }}
            >
              <Button sx={{ display: "block", }}>
                <NavLink
                  to={'register'}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={({ isActive }) => {
                    return {
                      textDecoration: "none",
                      padding: 10,
                      backgroundColor: isActive ? "#4fa74f" : "transparent",
                      color: isActive ? "white" : "rgba(33, 37, 41, .75)",
                      borderRadius: 5,
                    };
                  }}
                >
                  register
                </NavLink>
              </Button>
              <Button sx={{ display: "block", }}>
                <NavLink
                  to={'login'}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={({ isActive }) => {
                    return {
                      textDecoration: "none",
                      padding: 10,
                      backgroundColor: isActive ? "#4fa74f" : "transparent",
                      color: isActive ? "white" : "rgba(33, 37, 41, .75)",
                      borderRadius: 5,
                    };
                  }}
                >
                  login
                </NavLink>
              </Button>
            </Box>

          }


          {/* </Stack> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
