import React, {  useEffect, useState } from 'react';
import "./Burger.css"
import RightNav from './RightNav';

function Burger() {
const [open, setOpen] = useState(false)

useEffect(() => {
  let timeoutId;

  const handleWindowResize = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (window.innerWidth > 890) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }, 200);
  };

  window.addEventListener("resize", handleWindowResize);

  return () => {
    window.removeEventListener("resize", handleWindowResize);
    clearTimeout(timeoutId);
    console.log(window.innerWidth)
  };
}, []);


  return (
    <>
        {/* <div className='burger' open={open} onClick={() => setOpen(!open)}>
            <div style={{
            backgroundColor: open ? 'var(--primary-yellow)' : '',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transformOrigin: '1px',
            }} className='burger_line'/>
            <div style={{
            backgroundColor: open ? 'var(--primary-yellow)' : '',
            transform: open ? 'translateX(100%)' : 'translateX(0)',
            opacity: open ? 0 : 1,
            }} className='burger_line'/>
            <div style={{
            backgroundColor: open ? 'var(--primary-yellow)' : '',
            transform: open ? 'rotate(-45deg)' : 'rotate(0deg)',
            transformOrigin: '1px',
            }} className='burger_line'/>
        </div> */}
        {/* {open && window.innerWidth < 890 && (
        <style>{`body { overflow: hidden; }`}</style> */}
        <RightNav open={open}/>
    </>
  )
}

export default Burger