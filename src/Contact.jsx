import React, { Component } from 'react';
import ImageOne from './asset/p4.png';
import IconOne from './asset/icon1.png';

export default class Contact extends Component {
  render() {
    return (
      <div style={{ background: '#3a4046' }}>
        <div className="max-w-3xl md:grid grid-cols-7 mx-auto gap-12 md:px-0 px-4 md:py-0 py-2">
          <div className="col-span-3 relative">
            <img className="absolute md:inline-block hidden -top-20" src={ImageOne} alt="" />
          </div>
          <div className="col-span-4 space-y-10">
            <div className="flex items-center space-x-2 text-white font-semibold text-xs mt-14">
              <img className="w-6" src={IconOne} alt="" />
              <p>CONTACT</p>
            </div>
            <p className="text-5xl font-semibold leading-12" style={{ color: '#5bac4e' }}>
              <span className="text-white">Contact me</span>, feel free to call to write anytime
            </p>
          </div>
          <div className="col-span-3 space-y-6 pb-16">
            <div className="text-xs leading-5">
              <p className="text-gray-500">MY PHONE</p>
              <p className="text-gray-200">+62 882 7123 0905</p>
            </div>
            <div className="text-xs leading-5">
              <p className="text-gray-500">CONTACT ME VIA EMAIL</p>
              <p style={{ color: '#5bac4e' }}>dennykunn@gmail.com</p>
            </div>
            <div className="text-xs leading-5">
              <p className="text-gray-500">MY WEBSITE</p>
              <p style={{ color: '#5bac4e' }}>weather-v2.vercel.app</p>
              <p style={{ color: '#5bac4e' }}>react-tail-cv.vercel.app</p>
              <p style={{ color: '#5bac4e' }}>react-tailwind.vercel.app</p>
            </div>
            <div className="text-xs space-y-4">
              <p className="text-gray-500">MY SOCIAL MEDIA</p>
              <div className="flex space-x-2 text-white text-center font-bold">
                <div className="w-8 py-2 rounded-full" style={{ backgroundColor: '#5bac4e' }}>
                  FB
                </div>
                <div className="w-8 py-2 rounded-full" style={{ backgroundColor: '#5bac4e' }}>
                  TW
                </div>
                <div className="w-8 py-2 rounded-full" style={{ backgroundColor: '#5bac4e' }}>
                  IN
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-2">
            <div className="col-span-2 space-y-4">
              <input className="bg-transparent border-b border-gray-600 w-full py-4 text-xs outline-none text-white" type="text" placeholder="FULL NAME" />
              <input className="bg-transparent border-b border-gray-600 w-full py-4 text-xs outline-none text-white" type="email" placeholder="EMAIL ADDRESS" />
              {/* <input className="bg-transparent border-b border-gray-600 w-full py-4 text-xs outline-none text-white" type="text" placeholder="FULL NAME" /> */}
              <textarea className="bg-transparent border-b border-gray-600 w-full py-4 text-xs outline-none text-white" placeholder="MESSAGE" rows="4"></textarea>
            </div>
            <div className="col-start-2 col-span-1 md:mt-0 mt-10 md:mb-0 mb-16">
              <button className="w-full py-3 text-white text-sm" style={{ backgroundColor: '#5bac4e' }} href="/">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
