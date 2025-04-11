'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const pathname = usePathname();
  
  // Structure des données de la sidebar
  const menuItems = [
    {
      id: 1,
      title: 'Dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      path: '/dashboard',
      subItems: []
    },
    {
      id: 2,
      title: 'Produits',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m-8-4l8 4m8 0l-8 4m8-4v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7" />
        </svg>
      ),
      path: null,
      subItems: [
        { id: 21, title: 'Liste des produits', path: '/products' },
        { id: 22, title: 'Ajouter un produit', path: '/products/add' },
        { id: 23, title: 'Catégories', path: '/products/categories' }
      ]
    },
    {
      id: 3,
      title: 'Clients',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      path: null,
      subItems: [
        { id: 31, title: 'Liste des clients', path: '/clients' },
        { id: 32, title: 'Ajouter un client', path: '/clients/add' },
        { id: 33, title: 'Segments', path: '/clients/segments' }
      ]
    },
    {
      id: 4,
      title: 'Commandes',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      path: null,
      subItems: [
        { id: 41, title: 'Toutes les commandes', path: '/orders' },
        { id: 42, title: 'En attente', path: '/orders/pending' },
        { id: 43, title: 'Expédiées', path: '/orders/shipped' }
      ]
    },
    {
      id: 5,
      title: 'Paramètres',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      path: '/settings',
      subItems: []
    }
  ];

  // État pour suivre quelles sections sont ouvertes
  const [openSections, setOpenSections] = useState({});

  // Fonction pour basculer l'état ouvert/fermé d'une section
  const toggleSection = (id) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 fixed top-0 left-0 overflow-y-auto">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
      </div>
      
      <div className="py-4">
        {menuItems.map((item) => (
          <div key={item.id} className="px-3 py-1">
            {item.subItems.length > 0 ? (
              <>
                <button
                  onClick={() => toggleSection(item.id)}
                  className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.title}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`ml-auto h-4 w-4 transition-transform ${openSections[item.id] ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openSections[item.id] && (
                  <div className="pl-10 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.path}
                        className={`block px-4 py-2 text-sm rounded-md ${
                          pathname === subItem.path 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.path}
                className={`flex items-center px-4 py-2 rounded-md ${
                  pathname === item.path 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;