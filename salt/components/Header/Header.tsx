import { Navigate, useNavigate } from "react-router-dom";



export default function Header() {
    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate("/login"); // or any route you want
    };
    return (
    <header className="w-full h-24 bg-gray-900 rounded-2xl flex p-4 items-center justify-between border border-gray-700">
      {/* Left Section - Hostel Logo */}
      <div className="w-1/3 h-16 flex items-center">
        {/* <img src={logo} alt="Hostel Logo" className="h-full" /> */}
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 h-16 bg-gray-800 rounded-xl border border-gray-600 flex items-center justify-around px-4">
        {/* Small buttons */}
        <div
            onClick={() => {
                alert("clicked");
            }} 
            className="w-16 h-8 bg-gray-700 rounded-md border border-gray-500 flex items-center justify-center text-white text-sm cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gray-600 hover:scale-110 hover:shadow-lg hover:border-gray-400 active:scale-95"
            >
                Sign Up
        </div>
        <div
            onClick={() => {
                handleClick();
            }} 
            className="w-16 h-8 bg-gray-700 rounded-md border border-gray-500 flex items-center justify-center text-white text-sm cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gray-600 hover:scale-110 hover:shadow-lg hover:border-gray-400 active:scale-95"
            >
                Login
        </div>
        <div className="w-16 h-8 bg-gray-700 rounded-md border border-gray-500 flex items-center justify-center text-white text-sm">Button</div>
        {/* Circular Element */}
        <div className="w-12 h-12 bg-gray-700 rounded-full border border-gray-500"></div>
      </div>
    </header>
  );
}