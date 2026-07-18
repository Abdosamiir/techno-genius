import "./header.css";

// props
const Header = ({ heading }) => {
  return <header className="header">hello from {heading}</header>;
};

export default Header;
