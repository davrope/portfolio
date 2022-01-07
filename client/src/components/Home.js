import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }


    return (
        <div>
            <Sidebar isOpen ={isOpen} toggle={toggle} />
            <Navbar toggle ={toggle} />
        </div>
    )
}
