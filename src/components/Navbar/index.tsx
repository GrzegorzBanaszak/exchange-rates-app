import "./navbar.styles.scss";
import { RiExchangeDollarFill } from "react-icons/ri";
import { useAppSelector } from "../../app/hooks";
import { AiOutlineUser } from "react-icons/ai";
const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <RiExchangeDollarFill size={24} />
        Exchange rates
      </div>
      <div className="navbar__user">
        <AiOutlineUser size={22} />
        {user}
      </div>
    </nav>
  );
};

export default Navbar;
