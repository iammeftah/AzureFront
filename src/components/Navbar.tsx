import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/home" className="text-white text-lg font-bold">
                    Home
                </Link>
                <Link to="/profile" className="text-white text-lg font-bold">
                    Profile
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;