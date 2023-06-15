import Footer from "./footer";
import Logo from "./logo";
import NavBar from "./navBar";

const Layout = ({ children }) => {
  return (
    <div className="page-content">
      <NavBar />
      <div className="content-wrapper">
        <div className="projects-logo-container">
          <div className="projects-logo">
            <Logo width={46} />
          </div>
        </div>
        <main>{children}</main>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
