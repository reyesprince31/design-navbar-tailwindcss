function NavLink({ text, sticky }) {
  const hoverColor = sticky ? "gray-300" : "gray-800";
  return (
    <a
      href="#"
      className={`block font-semibold px-2 py-1 mt-1 sm:ml-2 hover:bg-${hoverColor}`}>
      {text}
    </a>
  );
}

export default NavLink;
