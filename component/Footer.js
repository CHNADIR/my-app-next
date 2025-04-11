'use client'; // Si vous utilisez Next.js App Router, ajoutez ceci
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 px-4">
            <h3 className="text-xl font-semibold mb-4">À propos</h3>
            <p className="text-gray-300">
              Notre entreprise s'engage à fournir des services de qualité à nos clients depuis 2022.
            </p>
          </div>
          
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 px-4">
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 px-4">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              123 Rue Exemple<br />
              75000 Paris, France<br />
              <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
                contact@example.com
              </a><br />
              <a href="tel:+33123456789" className="hover:text-white transition-colors">
                +33 1 23 45 67 89
              </a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mon Application. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;