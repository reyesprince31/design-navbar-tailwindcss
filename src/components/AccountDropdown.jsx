function AccountDropdown() {
  return (
    <div>
      <button className="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          alt="Your avatar"
        />
      </button>
      <div className="bg-white rounded-lg py-2 w-48 mt-2 shadow-xl">
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
    </div>
  );
}

export default AccountDropdown;
