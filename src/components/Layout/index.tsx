import { Outlet } from "react-router-dom";
import "./layout.styles.scss";

const Layout = () => {
  return (
    <section className="layout" style={{ backgroundImage: `url(bg.jpg)` }}>
      <span
        className="layout__info"
        role="img"
        aria-label="Photo by Nick Chong on Unsplash"
      ></span>
      <Outlet />
    </section>
  );
};

export default Layout;
