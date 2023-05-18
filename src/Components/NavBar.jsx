import React from 'react'
import Image from 'next/image'
import Logo from "../img/linkedin.png"
import Link from 'next/link'
import { IoGrid, IoHome, } from 'react-icons/io5'
import {  FiUsers } from "react-icons/fi"
import { FaBell, FaBriefcase, FaComment } from "react-icons/fa"
function NavBar() {
  return (
    <nav className='bg-slate-200'>
        <div className='nav-content mx-96 py-2 flex justify-between items-center'>
          <div className='flex justify-start items-center gap-3'>
            <Image src={Logo} alt=''></Image>
            <div className=''>
              <input className='w-72 focus:w-80 focus:transition-all h-8 indent-3' type='search' placeholder='Recherche'/>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <Link href="#/" className='flex justify-center flex-col items-center text-sm'>
              <IoHome size={20} />
              <p>
                Acceuil
              </p>
            </Link>
            <Link href="#/" className='flex justify-center flex-col items-center text-sm'>
              <FiUsers size={20} />
              <p>
                Réseau
              </p>
            </Link>
            <Link href="#/" className='flex justify-center flex-col items-center text-sm'>
              <FaBriefcase size={20} />
              <p>
                Offre d'emplois
              </p>
            </Link>
            <Link href="#/" className='flex justify-center flex-col items-center text-sm'>
              <FaComment size={20} />
              <p>
                Discussion
              </p>
            </Link>
            <Link href="#/" className='flex justify-center flex-col items-center text-sm'>
              <FaBell size={20} />
              <p>
                Notifications
              </p>
            </Link>
            <Image src={Logo} height={30} className='rounded-full' />
            <span>|</span>
            <Link href="#/" className='flex justify-center flex-col items-center text-sm'>
              <IoGrid size={25} />
              <p>
                Pour les entreprises
              </p>
            </Link>
          </div>
        </div>
      </nav>
  )
}

export default NavBar