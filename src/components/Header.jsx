import { Link } from "react-router-dom";

function Header() {
  const menu = [
    { name: "Action", url: "28" },
    { name: "animation", url: "16" },
    { name: "Science-Fiction", url: "878" },
    { name: "Fantastique", url: "14" },
  ];
  return (
    <header className="flex bg-zinc-700 p-2 w-full justify-center">
        <Link className="text-green-600 text-3xl content-center px-4" to={"/"}>
      <h1 >STREAMIV</h1>
        </Link>
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
