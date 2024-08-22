import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Development from './Development'
import Design from './Design'
import Uiux from './Uiux'

function Courses() {
    const {slug} = useParams()

    switch(slug){
        case 'web-development' : return <Development></Development>
            case 'web-design' : return <Design></Design>
                case 'UI-UX' : return <Uiux></Uiux>
    }
}
export default function Coursedetails(){


  return (
    <div className='text-[100px]'>
        some of our courses are-:
        <div className='flex flex-col text-[50px]'>
        <Link to='web-development' >Web-Development</Link>
  <Link to='web-design'>Web-design</Link>
  <Link to='UI-UX'>UI-UX</Link>
        </div>

        <Routes>
            <Route path=':slug' element={<Courses/>}/>
        </Routes>
 
    </div>
  )
}
