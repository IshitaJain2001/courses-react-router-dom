    import React from 'react'
    import { Link, Route, Routes } from 'react-router-dom'
    import About from './Topics/About'
    import Contact from './Topics/Contact'
    import Courses from './Topics/Courses'
import Coursedetails from './Topics/Courses'

    export default function Nav() {
    return (
        <>
    <div className='flex gap-[70px] h-[60px] w-full bg-gray-300 text-[30px] justify-end pr-[40px] '> 
        <Link to='/About'>ABOUT</Link>
        <Link to='/CONTACT'>CONTACT</Link>
        <Link to='/COURSES'>COURSES</Link>
    </div>

    <Routes>
    <Route path='about' Component={About}/>
    <Route path='contact' Component={Contact}/>
    <Route path='courses/*' Component={Coursedetails}/>
    </Routes>
        </>
    )
    }
