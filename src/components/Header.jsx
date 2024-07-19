import { Link } from "react-router-dom";

function Header() {
  const menu = [
    { name: "à l'affiche", url: "/fresh" },
    { name: "animation", url: "/animations" },
    { name: "documentaire", url: "/docs" },
    { name: "spectacle", url: "/shows" },
  ];
  return (
    <header className="flex bg-gray-700 p-2 w-full justify-center">
      <h1 className="text-green-600 content-center px-4">STREAMIV</h1>
      <nav>
        <ul className=" flex text-white">
          {menu.map((item, index) => (
            <Link to={item.url} key={index}>
              <li className="p-4 hover:bg-gray-300 hover:text-black">{item.name.toUpperCase()}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
