import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/menu.css'
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineMenuUnfold } from 'react-icons/ai';


export function Menu() {
  const see = () => {
    const menu = document.getElementById('menuMobile')
    menu.classList.remove('inactive')
    menu.classList.remove('scale-out-hor-right')
    menu.classList.add('scale-in-hor-right')
  }
  const notSee = () => {
    const menu = document.getElementById('menuMobile')
    menu.classList.remove('scale-in-hor-right')
    menu.classList.add('scale-out-hor-right')
    setTimeout(() => {
      menu.classList.add('inactive')
    }, 500);
  }

  return (
    <header>
      <div className='nav-Header'>
        <div>
          <h1>Lashes & Nails</h1>
        </div>
        <section className='iconOpen' onClick={see} >
          <AiOutlineMenuFold />
        </section>
      </div>
      <nav id='menuMobile' className='menuMobile inactive'>
        <section className='menu-Mobile'>
          <section className='sectionMenu-1'>
            <h2>Lashes & Nails</h2>
            <section className='iconClosed' onClick={notSee} >
              <AiOutlineMenuUnfold />
            </section>
          </section>
          <section className='sectionMenu-2'>
            <ul >
              {
                routes.map(route => {
                  return (
                    <li key={route.to} onClick={notSee}>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#8d1c3d" : "black",
                          textDecoration: isActive ? "underline" : "none"
                        })}
                        to={route.to}
                      >
                        {route.text}
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        </section>
      </nav>
    </header>
  )
}
const routes = [];
routes.push({
  to: "/",
  text: "Home",
  private: false
});
routes.push({
  to: "/jobs",
  text: "Trabajos",
  private: false
});
routes.push({
  to: "/turns",
  text: "Turnos",
  private: false
});
routes.push({
  to: "/services",
  text: "Servicios",
  private: false
});
