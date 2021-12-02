import React, { Component } from 'react';
import ImageOne from './asset/p1.png';
import IconOne from '../src/asset/icon1.png';

export default class Content extends Component {
  render() {
    return (
      <div className="max-w-3xl mx-auto mt-16 mb-56">
        <div className="grid grid-cols-2 items-center">
          <div className="col-span-1 space-y-10">
            <div className="flex items-center space-x-2 font-semibold text-xs">
              <img className="w-6" src={IconOne} alt="" />
              <p> SOMETHING ABOUT ME</p>
            </div>
            <p className="text-5xl font-bold text-gray-800">What are my strongest sides and skills?</p>
            <p className="mb-10 text-gray-400 text-sm leading-8 pr-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam adipisci placeat pariatur corporis nostrum harum, omnis, qui corrupti, impedit quibusdam eveniet! Totam, modi
              explicabo!
            </p>
            <br />
            <button className="px-6 py-3 text-white text-sm" style={{ backgroundColor: '#5bac4e' }} href="/">
              SEE MY EXPERIENCE
            </button>
          </div>
          <div className="col-span-1">
            <img src={ImageOne} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
