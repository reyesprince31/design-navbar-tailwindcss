import { useEffect, useState } from "react";
import AccDropdownList from "./AccDropdownList";

function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative ml-6">
      <button
        onClick={toggleDropdown}
        className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:border-white">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          alt="Your avatar"
        />
      </button>

      {isOpen && (
        <>
          <button
            tabIndex="-1"
            onClick={toggleDropdown}
            className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"></button>
          <AccDropdownList />
        </>
      )}
    </div>
  );
}

export default AccountDropdown;
