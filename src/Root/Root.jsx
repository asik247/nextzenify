import React from "react";
import { Outlet } from "react-router";

import Nav from "../Component/Nav&Foot/Nav";
import Foot from "../Component/Nav&Foot/Foot";

const Root = () => {
    return (
        <div className="flex min-h-screen flex-col bg-base-100">
            {/* Navbar */}
            <header className="absolute top-0 left-0 z-50 w-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
                    <Nav />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-base-300">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Foot />
                </div>
            </footer>
        </div>
    );
};

export default Root;