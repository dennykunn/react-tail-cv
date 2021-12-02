import React, { Component } from 'react';
import ImageTwo from './asset/p2.png';
import IconOne from './asset/icon1.png';

export default class Biography extends Component {
  render() {
    return (
      <div className="grid grid-cols-2 bg-black" style={{ background: '#3a4046' }}>
        <div className="col-span-1 relative">
          <img className="absolute" style={{ top: '-135px' }} src={ImageTwo} alt="" />
        </div>
        <div className="col-span-1 space-y-10" style={{ marginTop: '92px' }}>
          <div className="flex items-center space-x-2 font-semibold text-xs text-white">
            <img className="w-6" src={IconOne} alt="" />
            <p>BIOGRAPHY</p>
          </div>
          <p className="text-5xl font-semibold leading-12" style={{ color: '#5bac4e' }}>
            <span className="text-white">Biography</span>,<br /> few words about my <br /> background
          </p>
        </div>
        <div className="col-span-2 pt-16 grid grid-cols-4 gap-8 max-w-5xl mx-auto" style={{ marginBottom: '92px' }}>
          <div className="col-span-1">
            <p className="text-white text-lg">My education, courses and completed education profiles.</p>
            <p className="text-gray-500 text-sm pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum perferendis. Delectus illum voluptates eos.</p>
          </div>
          <div className="col-span-1">
            <p className="text-white text-lg">Career ladders and careen advencements in recent years.</p>
            <p className="text-gray-500 text-sm pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum perferendis. Delectus illum voluptates eos.</p>
          </div>
          <div className="col-span-1">
            <p className="text-white text-lg">
              Steering positions where i had to opportunity to <br /> work.
            </p>
            <p className="text-gray-500 text-sm pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum perferendis. Delectus illum voluptates eos.</p>
          </div>
          <div className="col-span-1">
            <p className="text-white text-lg">A summary of my social activities that i devote to outside of work.</p>
            <p className="text-gray-500 text-sm pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum perferendis. Delectus illum voluptates eos.</p>
          </div>
          <div className="col-span-4 mt-16 flex items-center">
            <button className="w-1/4 py-3 text-white text-sm" style={{ backgroundColor: '#5bac4e' }} href="/">
              SEE MY EXPERIENCE
            </button>
            <div className="border-t w-3/4 border-gray-600"></div>
          </div>
        </div>
      </div>
    );
  }
}
