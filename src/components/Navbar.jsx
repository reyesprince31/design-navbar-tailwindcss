import { useEffect, useState } from "react";
import logoInverted from "/img/logo-inverted.svg";
import logo from "/img/logo.svg";
import MobileMenuButton from "./MobileMenuButton";
import AccountDropdown from "./AccountDropdown";
import NavLink from "./NavLink";
import UserAvatar from "./UserAvatar";
import AccDropdownMobile from "./AccDropdownMobile";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setSticky(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const navLinks = (
    <div className={`sm:flex ${!sticky && "text-white"}`}>
      <NavLink sticky={sticky} text="List your property" />
      <NavLink sticky={sticky} text="Trips" />
      <NavLink sticky={sticky} text="Messages" />
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 ${
        sticky && "bg-white/50"
      }`}>
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img
            className="h-8"
            src={sticky ? logo : logoInverted}
            alt="Workcation"
          />
        </div>
        <div className="sm:hidden">
          <MobileMenuButton toOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <nav className={`sm:block ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
          {navLinks}
          <AccountDropdown />
        </div>
        <div className="px-4 py-5 border-t border-gray-700 sm:hidden">
          <UserAvatar />
          <AccDropdownMobile />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
