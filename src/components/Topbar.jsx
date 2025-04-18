import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <header className="w-full h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm fixed left-64 top-0 z-10">
            <h1 className="text-lg font-semibold text-gray-700">Application Title</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:text-blue-600">Dashboard</Link></li>
                    <li><Link to="/team" className="hover:text-blue-600">Team</Link></li>
                    <li><Link to="/earnings" className="hover:text-blue-600">Earnings</Link></li>
                    <li><Link to="/withdraw" className="hover:text-blue-600">Withdraw</Link></li>
                    <li><Link to="/settings" className="hover:text-blue-600">Settings</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Topbar;