import React, { Component } from 'react';
import ImageTwo from './asset/p2.png';
import IconOne from './asset/icon1.png';

export default class Biography extends Component {
  render() {
    return (
      <div className="grid grid-cols-2 bg-black lg:px-0 px-4" style={{ background: '#3a4046' }}>
        <div className="col-span-1 relative md:inline-block hidden xl:mr-8 lg:mr-6 mr-5">
          <img className="absolute xl:-top-32 lg:-top-28 md:-top-20 w-full lg:h-96 h-80" src={ImageTwo} alt="" />
        </div>
        <div className="md:col-span-1 col-span-2 lg:space-y-10 space-y-8 xl:mt-20 lg:mt-16 md:mt-12 mt-16">
          <div className="flex items-center space-x-2 font-semibold text-xs text-white">
            <img className="w-6" src={IconOne} alt="" />
            <p>BIOGRAPHY</p>
          </div>
          <p className="text-5xl font-semibold leading-12" style={{ color: '#5bac4e' }}>
            <span className="text-white">Biography</span>,<br /> few words about my background
          </p>
        </div>
        <div className="col-span-2 pt-16 grid md:grid-cols-4 grid grid-cols-2 gap-8 max-w-5xl mx-auto xl:mt-8">
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
          <div className="md:col-span-4 col-span-2 xl:mb-20 lg:mb-16 md:mb-12 mb-16 flex items-center">
            <button className="md:w-2/5 w-full py-3 text-white text-sm" style={{ backgroundColor: '#5bac4e' }} href="/">
              SEE MY EXPERIENCE
            </button>
            <div className="border-t w-full border-gray-600"></div>
          </div>
        </div>
      </div>
    );
  }
}
