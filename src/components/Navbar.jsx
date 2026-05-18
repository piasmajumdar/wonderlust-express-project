import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between bg-white p-5'>
            <ul className='flex gap-3'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destination</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                <li><Link href={'/add-destination'}>Add Destination</Link></li>
            </ul>

            <div>
                <Image src={'/assets/Wanderlast.png'} alt='nav' height={150} width={150}></Image>
            </div>
            
            <ul className='flex gap-3'>
                <li><Link href={'/profile'}>Profie</Link></li>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signup'}>Sign Up</Link></li>
            </ul>
            
        </div>
    );
};

export default Navbar;