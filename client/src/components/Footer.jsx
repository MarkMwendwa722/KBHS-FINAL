import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#295E4F] text-white py-10 text-center"> 
        <p className="text-xl font-semibold">KBHS HIGH SCHOOL</p> 
          <ul className="flex gap-4 list-none justify-center"> 
            <li><Link to="/" className="text-white no-underline text-sm">Home</Link></li> 
            <li><Link to="/about" className="text-white no-underline text-sm">About Us</Link></li>
            <li><Link to="/admissions-page" className="text-white no-underline text-sm">Admission</Link></li>
            <li><Link to="/contact" className="text-white no-underline text-sm">Contact</Link></li>
            <li><Link to="/facilities" className="text-white no-underline text-sm">Facilities</Link></li>
          </ul>
    </footer>
  );
};







const styles = {
  footer: {
    backgroundColor: '#295E4F', 
    color: '#fff',
    padding: '20px',
    width: 'auto',
    textAlign: 'center', 
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  navLinks: {
    textAlign: 'center',
    marginBottom: '10px', 
  },
  footerTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  footerNavList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px'
  },
  footerNavItem: {
    marginBottom: '8px',
  },
  footerNavLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  footerInfo: {
    marginTop: '10px',
  },
  
};

export default Footer;