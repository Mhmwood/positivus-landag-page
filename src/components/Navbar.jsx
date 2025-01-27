import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(''); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (name) => {
        setActiveItem(name); 
        setIsOpen(false); 
    };

    const menuItems = [
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Use Cases', href: '#use-cases' },
        { name: 'Team', href: '#team' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    useEffect(() => {
        const sections = menuItems.map(item => document.querySelector(item.href));
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let currentSection = '';

            sections.forEach((section) => {
                if (section && section.offsetTop < scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveItem(menuItems.find(item => item.href === `#${currentSection}`)?.name || '');
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuItems]);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 text-xs lg:text-sm  ">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 lg:py-4">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/"><img className="h-8 w-auto" src="/logo.png" alt="Your Logo" /></a>
                    </div>

                    {/* Menu Items (hidden on mobile) */}
                    <div className="hidden md:flex  space-x-2 lg:space-x-10 items-center">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={() => handleMenuClick(item.name)}
                                className={`text-black px-2 hover:bg-primary rounded-lg hover:underline underline-offset-4 transition-all duration-300 ${
                                    activeItem === item.name ? 'bg-primary text-black underline underline-offset-4' : ''
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-9 py-5 border border-black text-black hover:bg-primary hover:border-primary rounded-lg"
                        >
                            Request a quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-700 hover:text-primary focus:outline-none">
                            {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenuAlt3 className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (shown on mobile) */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={() => handleMenuClick(item.name)}
                                className={`block text-gray-700 hover:text-primary hover:underline underline-offset-4 ${
                                    activeItem === item.name ? 'text-primary' : ''
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="block px-4 py-2 border border-black text-black hover:bg-primary hover:border-primary rounded-md"
                        >
                            Request a quote
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
