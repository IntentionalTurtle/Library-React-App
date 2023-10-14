import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [isLogged, setLogged] = useState(false)

    const signInOnClick = () => {
        setLogged(true)
    }

    const signOutOnClick = () => {
        setLogged(false)
    }


    return (
        <nav className='flex flex-row items-center flex-wrap bg-gray-500 w-screen'>
            <div className='flex sm:flex-row flex-shrink-0  text-gray-200  justify-around w-screen p-6'>
                <div className='flex items-center mr-auto'>
                    <Link to='/' className='font-semibold text-xl'>Car Inventory Project</Link>
                </div>
                <div className='flex'>
                    <button className='items-center'>
                            <div>
                                {!isLogged ?
                                <Link to='/' className='flex lg:inline-block lg:mt-0 p-6
                                 text-gray-200 hover:text-black hover:bg-white'>
                                    Inventory
                                </Link>
                                :
                                <Link to='/dashboard' className='flex lg:inline-block lg:mt-0 p-6
                                 text-gray-200 hover:text-black hover:bg-white'>
                                    Inventory
                                </Link>
                            }
                            </div>
                        </button>
                        { !isLogged ?
                        <button>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='flex lg:inline-block lg:mt-0 p-6
                                 text-gray-200 hover:text-black hover:bg-white '>
                                        Login
                                    </Link>
                                </div>
                            </button>
                            :
                            <button>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='flex lg:inline-block lg:mt-0 p-6
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