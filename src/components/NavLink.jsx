function NavLink({ text, sticky }) {
  return (
    <a
      href="#"
      className={`block font-semibold ${
        sticky ? "hover:bg-gray-300" : "hover:bg-gray-800"
      } px-2 py-1 mt-1 sm:ml-2`}>
      {text}
    </a>
  );
}

export default NavLink;
