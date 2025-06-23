const Footer = () => {
  return (
    <footer className="w-full bg-black p-6 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Large Rounded Section */}
        <div className="w-64 h-64 bg-gray-800 rounded-3xl flex items-center justify-center mb-6 md:mb-0">
          <p className="text-center text-gray-400">Logo/Info</p>
        </div>

        {/* Right Side Elements */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <div className="w-48 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">Link 1</p>
          </div>
          <div className="w-48 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">Link 2</p>
          </div>
          <div className="w-48 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">Link 3</p>
          </div>
          <div className="w-48 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">Link 4</p>
          </div>
          <div className="w-48 h-16 bg-gray-800 rounded-xl flex items-center justify-center col-span-2">
            <p className="text-gray-400">Link 5</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;