import { MdArrowOutward } from "react-icons/md";
const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar  font-inter ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li className="text-core"><a>Home</a></li>
      <li className="text-core"><a>Services</a></li>
      <li className="text-core"><a>Blog</a></li>
      <li className="text-core"><a>About us</a></li>
      </ul>
    </div>
    <a href="/" ><img src="/logo dark.png" className="h-5 lg:h-7"  /></a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="text-core hover:bg-core hover:text-[#FFFFFF]"><a>Home</a></li>
      <li className="text-core hover:bg-core hover:text-[#FFFFFF]"><a>Services</a></li>
      <li className="text-core hover:bg-core hover:text-[#FFFFFF]"><a>Blog</a></li>
      <li className="text-core hover:bg-core hover:text-[#FFFFFF]"><a>About us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-core btn-outline btn-[#020043] rounded-2xl hover:bg-core">Appointment <MdArrowOutward /></a>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;