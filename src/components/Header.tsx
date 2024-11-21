import React from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center text-rose-500 cursor-pointer">
          <svg viewBox="0 0 32 32" className="h-8 w-8 fill-current">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.91 3.517 0 2.917-2.403 5.3-5.339 5.3-1.653 0-3.185-.764-4.1-2.1-2.476-3.764-4.524-8.117-6.9-11.816-.697-1.094-2.292-1.094-2.99 0-2.376 3.699-4.424 8.052-6.9 11.816-.915 1.336-2.447 2.1-4.1 2.1-2.936 0-5.339-2.383-5.339-5.3 0-1.045.243-1.926.91-3.517l.145-.353c.986-2.297 5.146-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.573 2.454 0 1.712 1.368 3.1 3.039 3.1.983 0 1.885-.484 2.404-1.252 2.274-3.48 4.196-7.52 6.468-11.067 1.067-1.674 3.357-1.674 4.424 0 2.272 3.547 4.194 7.587 6.468 11.067.52.768 1.421 1.252 2.404 1.252 1.671 0 3.039-1.388 3.039-3.1 0-.8-.146-1.383-.573-2.454l-.345-.836c-.97-2.263-5.105-10.916-7.031-14.692l-.523-1.008C18.053 3.539 17.239 3 16 3z"/>
          </svg>
          <span className="ml-2 text-xl font-bold hidden sm:block">bolt.bnb</span>
        </Link>

        <div className="hidden md:flex items-center justify-center flex-1 max-w-xl mx-8">
          <div className="flex items-center w-full px-4 py-2 rounded-full border hover:shadow-md transition-shadow">
            <input 
              type="text" 
              placeholder="Start your search"
              className="flex-1 border-none outline-none bg-transparent"
            />
            <div className="bg-rose-500 p-2 rounded-full text-white cursor-pointer">
              <Search className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
            Become a Host
          </button>
          <button className="hover:bg-gray-100 p-2 rounded-full">
            <Globe className="h-5 w-5" />
          </button>
          <div className="flex items-center border rounded-full p-2 hover:shadow-md cursor-pointer">
            <Menu className="h-5 w-5 mr-2" />
            <User className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}