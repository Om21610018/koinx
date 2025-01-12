import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  coinName: string;
}

export const Breadcrumb: React.FC<Props> = ({ coinName }) => {
  return (
    <nav className="bg-gray-50 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-gray-500 text-sm">
          <Link to="/" className="hover:text-gray-700">Cryptocurrencies</Link>
          <span>&gt;</span>
          <span className="text-gray-900">{coinName}</span>
        </div>
      </div>
    </nav>
  );
};