import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link } from "react-scroll";
const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Sobre Mim
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="Projetos"
              smooth={true}
              duration={1000}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Projetos
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="Habilidades"
              smooth={true}
              duration={5000}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Hablididades
            </Link>
          </MenuItem>

        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
