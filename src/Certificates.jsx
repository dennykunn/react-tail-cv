import React, { Component } from 'react';
import IconOne from './asset/icon1.png';
import IconTwo from './asset/icon2.png';
import IconThree from './asset/icon3.png';
import IconFour from './asset/icon4.png';
import IconFive from './asset/icon5.png';

export default class Certificates extends Component {
  render() {
    return (
      <div>
        <div className="max-w-5xl mx-auto py-20" style={{ backgroundColor: '#5bac4e' }}>
          <div className="max-w-3xl grid grid-cols-2 mx-auto">
            <div className="col-span-1 space-y-10">
              <div className="flex items-center space-x-2 font-semibold text-xs text-white">
                <img className="w-6" src={IconOne} alt="" />
                <p>SOFT SKILLS</p>
              </div>
              <p className="text-5xl font-semibold leading-12 text-white">
                <span className="text-white text-gray-800">Certificate</span>, <br /> and trainings
              </p>
            </div>
            <div className="col-span-1 text-gray-200 leading-6 text-sm">
              <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis at magni consequatur exercitationem corporis eveniet amet fuga excepturi deleniti officiis.</p>
              <br />
              <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, quod? Tempore tenetur voluptatum, ipsa quae commodi sunt eum repellendus fuga!</p>
            </div>
            <div className="col-span-2 grid grid-cols-4 gap-4 my-14">
              <div className="col-span-1 space-y-2 text-xs text-gray-200 leading-5">
                <img style={{ width: '67px' }} src={IconTwo} alt="" />
                <p className="text-gray-800 font-semibold">TEAMWORK CERTIFICATE</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="col-span-1 space-y-2 text-xs text-gray-200 leading-5">
                <img style={{ width: '80px' }} src={IconThree} alt="" />
                <p className="text-gray-800 font-semibold">CROSS SELLING TRAINING</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="col-span-1 space-y-2 text-xs text-gray-200 leading-5">
                <img style={{ width: '63px' }} src={IconFour} alt="" />
                <p className="text-gray-800 font-semibold">HOW TO CHOOSE TARGET?</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="col-span-1 space-y-2 text-xs text-gray-200 leading-5">
                <img style={{ width: '58px' }} src={IconFive} alt="" />
                <p className="text-gray-800 font-semibold">MARKETING PSYCHOLOGY</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="col-span-2 mx-auto">
              <button className="w-56 py-3 text-white text-sm bg-gray-800" href="/">
                DISCOVER MY SKILLS
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
