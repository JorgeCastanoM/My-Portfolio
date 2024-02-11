import React, {useState} from 'react'
import { Logo } from './logo'
import {Button} from "@nextui-org/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import {Listbox, ListboxItem} from "@nextui-org/react";


const Nav = () => {
    const[nav, setNav] = useState(true)

    const handleNav = () => setNav(!nav)

    return (
        <div className='flex justify-between h-16 w-full mx-auto px-10 text-black border-b-2'>
            <Logo />
            <ul className='space-x-4 pt-2 hidden md:flex '>
                <Button color="primary" variant="ghost">Projects</Button>  
                <Button color="warning" variant="ghost">Skills</Button>  
                <Button color="danger" variant="ghost">Contact</Button>  
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={40}/> : <CgMenuGridR size={40} />}
            </div>
            <div className={!nav ? 'fixed right-0 top-20 w-[60%] h-auto border rounded-md border-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]' }>
                <ul  className=' uppercase'>
                <Listbox>
                    <ListboxItem className="text-primary" color="primary">Projects</ListboxItem>
                    <ListboxItem  className="text-warning" color="warning">Skills</ListboxItem>
                    <ListboxItem  className="text-danger " color="danger">Contact</ListboxItem>
                </Listbox>

                </ul>
            </div>
        </div>
    )
}

export default Nav