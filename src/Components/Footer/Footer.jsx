
import { MdFacebook } from "react-icons/md";
import logo from "../../assets/logo light.png"
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-core">
            <div className="container mx-auto">
            <footer className="footer  p-10 font-inter text-[#FFFFF5] ">
  <aside>
    <img className="" src={logo} alt="" />
    <br />
    <p className="opacity-80">
    123 Main Street Anytown, USA <br />
    Postal Code: 12345
    <br />
    <br />
    Support: support@oyolloo.com
    <br />
    (Available : 10:00am to 07:00pm)
    </p>
  </aside>
  <nav className="opacity-80 font-semibold">
    
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Success Page</a>
    <a className="link link-hover">Terms and condition</a>
  </nav>
  <nav className="opacity-80 font-semibold">
    
    <a className="link link-hover">Services</a>
    <a className="link link-hover">Scheduling</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Patient Portal</a>
  </nav>
  <nav className="opacity-80">
    
    <a className="link link-hover font-semibold">Follow Us</a>
    <div className="flex gap-4 text-2xl mb-6"><MdFacebook></MdFacebook> <FaInstagram /><FaLinkedin /><FaYoutube /> </div>
    
    <a className="link link-hover">@Docplus 2024</a>
  </nav>
</footer>

            </div>
            
        </div>
    );
};

export default Footer;