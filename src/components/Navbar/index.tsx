import "./navbar.styles.scss";
import { RiExchangeDollarFill } from "react-icons/ri";
import { useAppSelector } from "../../app/hooks";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <nav className="navbar">
      <Link to="/dashboard" className="navbar__logo">
        <RiExchangeDollarFill size={24} />
        Exchange rates
      </Link>
      <Link to="/dashboard/favorites" className="navbar__user">
        <AiOutlineUser size={22} />
        {user}
      </Link>
    </nav>
  );
};

export default Navbar;
