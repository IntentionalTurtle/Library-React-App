import { Link } from 'react-router-dom'
// import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';



function Navbar() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };
    



    return (
        <nav className='flex flex-row items-center flex-wrap bg-gray-500 w-screen'>
            <div className='flex sm:flex-row flex-shrink-0  text-gray-200  justify-around w-screen p-6'>
                <div className='flex items-center mr-auto'>
                    <Link to='/' className='font-semibold text-xl'>Library Project</Link>
                </div>
                <div className='flex'>
                    <button className='items-center'>
                        <div>
                            <Link to='/dashboard' className='flex lg:inline-block lg:mt-0 p-6
                             text-gray-200 hover:text-black hover:bg-white'>
                               Inventory
                            </Link>
                        </div>
                    </button>

                    { !isAuthenticated ?

                    <button>
                        <div>
                        <Link to="/" onClick={ () => { signInOnClick()}} className='flex lg:inline-block lg:mt-0 p-6
                         text-gray-200 hover:text-black hover:bg-white '>
                            Login
                        </Link>
                        </div>
                    </button>
                    :
                    <button>
                        <div>
                            <Link to="/" onClick={ () => { signOutOnClick()}} className='flex lg:inline-block lg:mt-0 p-6
                            text-gray-200 hover:text-black hover:bg-white' >
                                Sign Out
                            </Link>
                        </div>
                    </button>
                     }
            </div>
        </div>
        <div className='w-full block flex-grow items-center'>
            <div className="text-sm lg:flex-grow">

                            
            </div>
        </div>
        </nav>
    )  
}

export default Navbar