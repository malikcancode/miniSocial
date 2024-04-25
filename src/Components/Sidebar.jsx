function Sidebar({ setSelected, selected }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setSelected("Home")}>
          <a
            href="#"
            className={`text-white nav-link ${selected === "Home" && "active"}`}
          >
            Home
          </a>
        </li>
        <li onClick={() => setSelected("Create Post")}>
          <a
            href="#"
            className={`text-white nav-link ${
              selected === "Create Post" && "active"
            }`}
          >
            Create Post
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
