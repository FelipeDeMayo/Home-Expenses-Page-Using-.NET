import { useNavigate } from "react-router-dom";
import { Nav, IconButton, IconLink } from "../styles/NavbarStyles";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <IconButton onClick={() => navigate("/")}>
        <i className="bi bi-house-door"></i>
      </IconButton>

      <IconLink href="https://www.linkedin.com/in/felipedemayo" target="_blank">
        <img src="/linkedin_logo.png" alt="LinkedIn" />
      </IconLink>
      <IconLink href="https://github.com/FelipeDeMayo" target="_blank">
        <img src="/github_logo.png" alt="GitHub" />
      </IconLink>
    </Nav>
  );
};

export default Navbar;
