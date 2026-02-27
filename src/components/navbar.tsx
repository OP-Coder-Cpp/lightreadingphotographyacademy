"use client";


import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaImage,
  FaBook,
  FaTrophy,
  FaEnvelope,
} from "react-icons/fa";

const sections = ["hero", "mentor", "students","achievements", "courses", "contact"];

export default function Navbar() {
  // const [mount,setMount]=useState(false);
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);
  // useEffect(()=>{
  //   setMount(true);
  // },[])
  // Detect active section
  useEffect(() => {
    // if(!mount) return;
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide navbar while hero is visible
  useEffect(() => {
    // if(!mount) return;
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const icons = [
    { id: "hero", icon: <FaHome /> },
    { id: "mentor", icon: <FaUser /> },
    { id: "students", icon: <FaImage /> },
    {id:"achievements",icon:<FaTrophy/>},
    { id: "courses", icon: <FaBook /> },
    { id: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <nav 
      className={`
        fixed
        bottom-0
        md:bottom-auto
        md:top-1/2
        md:-translate-y-1/2
        md:left-6
        left-0
        right-0
        md:right-auto
        flex
        md:flex-col
        justify-around
        md:space-y-6
        bg-black/70
        backdrop-blur-md
        p-4
        z-40
        transition-all
        duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      {icons.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="text-xl transition-colors duration-300"
          style={{
            color: active === item.id ? "#ffde59" : "white",
          }}
        >
          {item.icon}
        </button>
      ))}
    </nav>
    </>
    
  );
}