import { Link } from "react-router-dom";

const nav = [
  { name: "Home", link: "/" },
  { name: "About me", link: "/" },
  { name: "Social", link: "/" },
];

function Header() {
  return (
    <>
      <nav className="">
        {nav.map((item) => (
          <Link key={item.name} to={item.link} className="">
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Header;
