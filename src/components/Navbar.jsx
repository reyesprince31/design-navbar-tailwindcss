import { useState } from "react";
import logoInverted from "/img/logo-inverted.svg";
import MobileMenuButton from "./MobileMenuButton";

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
      <div
        className={`px-2 pt-2 pb-4 sm:flex sm:p-0 ${
          isOpen ? "block" : "hidden"
        }`}>
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
      </div>
    </header>
  );
}

export default Navbar;
