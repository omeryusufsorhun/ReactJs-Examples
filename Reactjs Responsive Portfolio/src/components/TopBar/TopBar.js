import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`topbar ${menuOpen && "active"} `}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            ÖYS
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+90 538 361 0702</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>omersorgun34@hotmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
