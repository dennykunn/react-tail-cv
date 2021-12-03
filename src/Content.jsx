import React, { Component } from 'react';
import ImageOne from './asset/p1.png';
import IconOne from '../src/asset/icon1.png';

export default class Content extends Component {
  render() {
    return (
      <div className="max-w-3xl mx-auto mt-16 mb-56 md:px-0 px-4">
        <div className="md:grid grid-cols-2 items-center">
          <div className="col-span-1 lg:space-y-10 space-y-8">
            <div className="flex items-center space-x-2 font-semibold text-xs">
              <img className="w-6" src={IconOne} alt="" />
              <p> SOMETHING ABOUT ME</p>
            </div>
            <p className="text-5xl font-bold text-gray-800">What are my strongest sides and skills?</p>
            <p className="mb-10 text-gray-400 text-sm leading-8 pr-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam adipisci placeat pariatur corporis nostrum harum, omnis, qui corrupti, impedit quibusdam eveniet! Totam, modi
              explicabo!
            </p>
            <button className="px-6 py-3 text-white text-sm" style={{ backgroundColor: '#5bac4e' }} href="/">
              SEE MY EXPERIENCE
            </button>
          </div>
          <div className="col-span-1 md:mt-0 mt-10 ">
            <img src={ImageOne} className="mx-auto" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
