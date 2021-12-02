import React, { Component } from 'react';
import IconOne from './asset/icon1.png';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-12 pt-20 pb-40">
          <div className="col-span-2 space-y-6 font-semibold text-center">
            <div className="space-y-2 text-xs">
              <img className="w-6 mx-auto" src={IconOne} alt="" />
              <p>MY PROGRESS</p>
            </div>
            <p className="text-5xl font-semibold leading-12 text-white" style={{ color: '#5bac4e' }}>
              Other skills
            </p>
          </div>
          {/* 1 */}
          <div className="col-span-1 space-y-3">
            <div className="flex justify-between text-sm font-semibold">
              <p>MARKETING KNOWLEDGE</p>
              <p>85%</p>
            </div>
            <div className="bg-gray-300">
              <div className="h-3 w-full" style={{ backgroundColor: '#5bac4e', width: '85%' }}></div>
            </div>
          </div>
          {/* 1 */}
          {/* 2 */}
          <div className="col-span-1 space-y-3">
            <div className="flex justify-between text-sm font-semibold">
              <p>MARKETING KNOWLEDGE</p>
              <p>79%</p>
            </div>
            <div className="bg-gray-300">
              <div className="h-3 w-full" style={{ backgroundColor: '#5bac4e', width: '79%' }}></div>
            </div>
          </div>
          {/* 2 */}
          {/* 3 */}
          <div className="col-span-1 space-y-3">
            <div className="flex justify-between text-sm font-semibold">
              <p>MARKETING KNOWLEDGE</p>
              <p>100%</p>
            </div>
            <div className="bg-gray-300">
              <div className="h-3 w-full" style={{ backgroundColor: '#5bac4e', width: '100%' }}></div>
            </div>
          </div>
          {/* 3 */}
          {/* 4 */}
          <div className="col-span-1 space-y-3">
            <div className="flex justify-between text-sm font-semibold">
              <p>MARKETING KNOWLEDGE</p>
              <p>95%</p>
            </div>
            <div className="bg-gray-300">
              <div className="h-3 w-full" style={{ backgroundColor: '#5bac4e', width: '95%' }}></div>
            </div>
          </div>
          {/* 4 */}
          {/* 5 */}
          <div className="col-span-1 space-y-3">
            <div className="flex justify-between text-sm font-semibold">
              <p>MARKETING KNOWLEDGE</p>
              <p>40%</p>
            </div>
            <div className="bg-gray-300">
              <div className="h-3 w-full" style={{ backgroundColor: '#5bac4e', width: '40%' }}></div>
            </div>
          </div>
          {/* 5 */}
          {/* 6 */}
          <div className="col-span-1 space-y-3">
            <div className="flex justify-between text-sm font-semibold">
              <p>MARKETING KNOWLEDGE</p>
              <p>50%</p>
            </div>
            <div className="bg-gray-300">
              <div className="h-3 w-full" style={{ backgroundColor: '#5bac4e', width: '50%' }}></div>
            </div>
          </div>
          {/* 6 */}
        </div>
      </div>
    );
  }
}
