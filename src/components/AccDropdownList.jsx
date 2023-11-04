function AccDropdownList() {
  return (
    <div className="bg-white rounded-lg py-2 w-48 mt-2 shadow-xl absolute right-0">
      <a
        className="block px-4 py-2 hover:bg-indigo-500 hover:text-white"
        href="#">
        Account settings
      </a>
      <a
        className="block px-4 py-2 hover:bg-indigo-500 hover:text-white"
        href="#">
        Support
      </a>
      <a
        className="block px-4 py-2 hover:bg-indigo-500 hover:text-white"
        href="#">
        Sign out
      </a>
    </div>
  );
}

export default AccDropdownList;
