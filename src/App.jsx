import AccountDropdown from "./components/AccountDropdown";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="app" className="antialiased text-gray-900">
      <div className="bg-gray-800 min-h-screen py-32 px-6">
        {/* <Navbar /> */}
        <AccountDropdown />
      </div>
    </div>
  );
}

export default App;
