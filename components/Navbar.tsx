import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ textColor }: { textColor: string }) => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleOpen = () => setOpen2(!open2);
    const toggleClose = () => setOpen(false);
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen2(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                // setScrolled(true);
                if (scrollTop > lastScrollY) {
                    setScrolled(false); // Scroll down
                } else {
                    setScrolled(true); // Scroll up
                }
                setLastScrollY(scrollTop);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    const color = scrolled || open ? 'black' : textColor;

    return (
        <>
            <div className={`flex  top-0 left-0 right-0 py-2 duration-200 px-6 sm:px-12 w-full ${scrolled ? 'fixed shadow-md bg-white' : 'absolute bg-transparent'}  gap-5 font-semibold z-20 tracking-normal leading-[173%]`}>
                <div className="flex-auto text-xl sm:text-3xl tracking-normal" style={{ color: color }}>Brainwave.io</div>

                {/* Desktop Links */}
                <div className="hidden md:flex uppercase flex-wrap tracking-wide text-sm leading-5 font-semibold items-center gap-3 text-center" style={{ color: color }}>
                    <Link href="/">Home</Link>
                    <Link href="/product">Product</Link>
                    <Link href="/jobs">Jobs</Link>
                    <div className='flex cursor-pointer relative' ref={dropdownRef} onClick={toggleOpen}>More Pages+
                        {open2 &&
                            <div className={`absolute p-2 grid grid-cols-2 w-80 animate-modal top-8 lg:left-0 -left-24 bg-white text-black shadow-lg rounded-lg`} >
                                <Link className='p-3  rounded-md hover:bg-slate-200' href="/website">Website</Link>
                                <Link className='p-3  rounded-md hover:bg-slate-200' href="/ecommerce">Ecommerce</Link>
                                <Link className='p-3  rounded-md hover:bg-slate-200' href="/subscription">Subscription</Link>
                                <Link className='p-3  rounded-md hover:bg-slate-200' href="/co-working">Co-working</Link>
                                <Link className='p-3  rounded-md hover:bg-slate-200' href="/b2b">B2B</Link>
                                <Link className='p-3  rounded-md hover:bg-slate-200' href="/consultation">Consultation</Link>
                                <Link className='p-3  rounded-md hover:bg-slate-200' href="/app">App</Link>
                            </div>
                        }
                    </div>
                </div>

                {open ? <div onClick={() => setOpen(!open)} className="md:hidden text-2xl cursor-pointer" style={{ color: color }}>
                    &#10005;
                </div>
                    : <div onClick={() => setOpen(!open)} className="md:hidden text-2xl cursor-pointer" style={{ color: color }}>
                        ☰
                    </div>
                }
                <div className="flex-auto max-md:hidden text-lg uppercase text-right cursor-pointer" style={{ color: color }}>
                    Login
                </div>
            </div>

            {/* Mobile Links */}
            {open && (
                <div className={`flex flex-col font-semibold justify-center gap-3 text-center bg-white w-full h-full py-5 xl:hidden fixed top-0 left-0 right-0 z-10`} style={{ color: color }}>
                    <Link className='px-3 py-1 w-full rounded-md hover:bg-slate-200' href="/">Home</Link>
                    <Link className='px-3 py-1 w-full rounded-md hover:bg-slate-200' href="/ecommerce">Ecommerce</Link>
                    <Link className='px-3 py-1 w-full rounded-md hover:bg-slate-200' href="/subscription">Subscription</Link>
                    <Link className='px-3 py-1 w-full rounded-md hover:bg-slate-200' href="/website">Website</Link>
                    <Link className='px-3 py-1 w-full rounded-md hover:bg-slate-200' href="/product">Product</Link>
                    <Link className='px-3 py-1 w-full rounded-md hover:bg-slate-200' href="/jobs">Jobs</Link>
                    <Link className='px-3 py-1 w-full rounded-md hover:bg-slate-200' href="/co-working">Co-working</Link>
                    <Link className='px-3 py-1 w-full rounded-md hover:bg-slate-200' href="/b2b">B2B</Link>
                    <Link className='px-3 py-1 w-full rounded-md hover:bg-slate-200' href="/consultation">Consultation</Link>
                    <Link className='px-3 py-1 w-full rounded-md hover:bg-slate-200' href="/app">App</Link>
                    <button onClick={toggleClose} className='px-3 py-1 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-200'>Close</button>
                </div>
            )}
        </>
    );
}

export default Navbar;
