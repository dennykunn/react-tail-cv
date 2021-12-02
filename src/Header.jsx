import React, { Component } from 'react';
import ImageOne from '../src/asset/p.png';
import IconOne from '../src/asset/icon1.png';

export default class Header extends Component {
  render() {
    return (
      <div className="grid grid-cols-2 py-10">
        <div className="col-span-1 mt-auto">
          <div className="max-w-lg ml-auto text-sm space-y-10 pr-12">
            <div className="flex items-center space-x-2 font-semibold text-xs">
              <img className="w-6" src={IconOne} alt="" />
              <p> HELLO!</p>
            </div>
            <p className="text-5xl font-bold" style={{ color: '#5bac4e' }}>
              I'm Denny, <br />
              Student
            </p>
            <p className="mb-10 text-gray-600 leading-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam adipisci placeat pariatur corporis nostrum harum, omnis, qui corrupti, impedit quibusdam eveniet! Totam, modi
              explicabo!
            </p>
            <br />
            <button className="px-8 py-4 text-white" style={{ backgroundColor: '#5bac4e' }} href="/">
              DOWNLOAD NOW
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <img src={ImageOne} alt="" />
        </div>
      </div>
    );
  }
}
