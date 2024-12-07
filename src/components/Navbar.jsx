import { useRef, useState, useEffect } from "react";
import Button from "./common/Button.jsx";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const navbarRef = useRef(null);
  const { y: scrollY } = useWindowScroll();
  const [previousScrollY, setPreviousScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    if (scrollY === 0) {
      setIsNavbarVisible(true);
      navbarRef.current.classList.remove("bg-black");
    } else if (scrollY > previousScrollY) {
      setIsNavbarVisible(false);
      navbarRef.current.classList.add("bg-black");
    } else if (scrollY < previousScrollY) {
      setIsNavbarVisible(true);
      navbarRef.current.classList.add("bg-black");
    }
    setPreviousScrollY(scrollY);
  }, [previousScrollY, scrollY]);

  useEffect(()=>{
    gsap.to(navbarRef.current,{
        y:isNavbarVisible ? 0 : -100,
        opacity : isNavbarVisible ? 1 : 0,
        duration: 0.2,
    })
  },[isNavbarVisible])

  return (
    <div
      ref={navbarRef}
      className="fixed h-16 inset-x-0 sm:inset-x-6 top-4  z-50 rounded-md duration-700 "
    >
      <header className="py-4 size-full">
        <nav className="container flex items-center justify-between size-full">
          <div className="flex items-center gap-4">
            <span className="special-font text-5xl text-white">
              <b>A</b>
            </span>
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex items-center gap-4">
            {navItems.map((link) => (
              <a
                key={link}
                href={`#${link.toLocaleLowerCase()}`}
                className="nav-hover-btn"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
