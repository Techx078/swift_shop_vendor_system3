import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Navbar from "../pages/Navbar";
export default function MainLayout() {
    return (
        <div>
            <header className="mb-[90px]">
                <Navbar />
                {/*  */}
            </header>

            <main >
                <Outlet />
            </main>

        </div>
    );
}