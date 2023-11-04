import { useState } from "react";
import logoInverted from "/img/logo-inverted.svg";
import MobileMenuButton from "./MobileMenuButton";
import AccountDropdown from "./AccountDropdown";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img className="h-8" src={logoInverted} alt="Workcation" />
        </div>
        <div className="sm:hidden">
          <MobileMenuButton toOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <nav className={`sm:block ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
          <a
            href="#"
            className="block text-white font-semibold hover:bg-gray-800 px-2 py-1 mt-1 sm:ml-2">
            List your property
          </a>
          <a
            href="#"
            className="block text-white font-semibold hover:bg-gray-800 px-2 py-1 mt-1 sm:ml-2">
            Trips
          </a>
          <a
            href="#"
            className="block text-white font-semibold hover:bg-gray-800 px-2 py-1 mt-1 sm:ml-2">
            Messages
          </a>
          <AccountDropdown />
        </div>
        <div className="px-4 py-5 border-t border-gray-700 sm:hidden">
          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-full object-cover border-2 border-gray-600"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
              alt="Your avatar"
            />
            <span className="text-white font-semibold ml-3">Jane Doe</span>
          </div>
          <div className="mt-4">
            <a href="#" className="text-gray-400 block mt-2 hover:text-white">
              Account settings
            </a>
            <a href="#" className="text-gray-400 block mt-2 hover:text-white">
              Support
            </a>
            <a href="#" className="text-gray-400 block mt-2 hover:text-white">
              Sign out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
