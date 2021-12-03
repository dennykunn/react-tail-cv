import React, { Component } from 'react';
import ImageOne from './asset/d2.png';
export default class navbar extends Component {
  render() {
    return (
      <div className="sticky top-0 z-30 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between py-4 md:px-0 px-4">
            <div className="flex items-center">
              <img className="xl:w-12 w-10" src={ImageOne} alt="" />
              <div className="font-semibold ml-2 mt-3">
                <p className="text-xs">PERSONAL CV</p>
                <p className="font-semibold" style={{ color: '#5bac4e' }}>
                  Denny Firmansyah
                </p>
              </div>
            </div>
            <div className="md:flex hidden items-center text-xs xl:space-x-6 space-x-3 font-semibold">
              <a href="/">ABOUT ME</a>
              <a href="/">MY BIO</a>
              <a href="/">EXPERIENCE</a>
              <a href="/">CERTIFICATES</a>
              <a href="/">SKILL</a>
              <a href="/">CONTACT</a>
              <a className="py-3 xl:px-6 px-4 text-white" style={{ backgroundColor: '#5bac4e' }} href="/">
                CALL ME RIGHT NOW
              </a>
            </div>
            <div className="md:hidden my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 transition-all text-white cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
