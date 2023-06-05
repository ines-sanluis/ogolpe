import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="py-4 bg-black">
        <nav className="container mx-auto flex items-center justify-between">
            <div>
            <Link href="/" className="font-bold text-2xl">
                Magic Maker
            </Link>
            </div>

            <ul className="flex items-center space-x-6">
            <li>
                <Link href="/about">
                    Sobre o evento
                </Link>
            </li>
            <li>
                <Link href="/programa">
                    Programa
                </Link>
            </li>
            <li>
                <Link href="/organizers">
                    Organizadores
                </Link>
            </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;
