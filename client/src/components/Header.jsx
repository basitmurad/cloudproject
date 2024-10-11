import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Header() {
    const { currentUser } = useSelector(state => state.user)
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }

    },[location.search])

    return (
        <header className='bg-orange-400 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-blod text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>RealEstate Website</span>
                    </h1>
                </Link>

                <form onSubmit={handelSubmit} className='bg-orange-800 p-3 rounded-lg flex items-center'>
                    <input
                        type="text"
                        placeholder='Search'
                        className='bg-transparent focus:outline-none w-24 sm:w-64'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                        <FaSearch className='text-black-300' />
                    </button>
                </form>

                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-slate-700 hover:underline' >Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-red-700 hover:underline'>About</li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ? (
                            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile image" />
                        ) : <li className='text-slate-700 hover:underline'>Sign in</li>}

                    </Link>

                </ul>
            </div>
        </header>
    )
}
