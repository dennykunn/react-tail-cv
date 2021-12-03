import React, { Component } from 'react';
import ImageThree from './asset/p3.png';
import IconOne from './asset/icon1.png';

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className="max-w-3xl mx-auto md:grid grid-cols-2 md:px-0 px-4">
          <div className="col-span-1 lg:space-y-10 space-y-8 md:mt-24 mt-16">
            <div className="flex items-center space-x-2 font-semibold text-xs">
              <img className="w-6" src={IconOne} alt="" />
              <p>MY PROVIOUS JOBS</p>
            </div>
            <p className="text-5xl font-semibold leading-12" style={{ color: '#5bac4e' }}>
              <span className="text-gray-800">My experience</span>,<br /> great places, great people
            </p>
          </div>
          <div className="col-span-1 md:mt-0 mt-10">
            <img src={ImageThree} alt="" />
          </div>
          <div className="col-span-2 hidden md:grid grid-cols-9 my-20">
            {/* 1 */}
            <div className="col-span-4 text-right font-semibold text-xs pt-1">
              <p>DECEMBER 2021-NOW</p>
            </div>
            <div className="col-span-1 mx-auto">
              <img className="w-6" src={IconOne} alt="" />
            </div>
            <div className="col-span-4 text-xs space-y-2">
              <p className="text-xl ">Senior Marketing Specialist</p>
              <p className="font-semibold">REMOTE TECHNOLOGIES</p>
              <p className="text-gray-500 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur, magnam vitae architecto sequi reiciendis aliquid. Pariatur ut fugiat asperiores sed dolorem odit?
                Voluptatum doloribus.
              </p>
            </div>
            {/* batas 1 */}
            {/* 2 */}
            <div className="col-span-4 text-xs space-y-2 text-right mt-10">
              <p className="text-xl">Main Company Consultant</p>
              <p className="font-semibold">ABSTRACT VISION</p>
              <p className="text-gray-500 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur, magnam vitae architecto sequi reiciendis aliquid. Pariatur ut fugiat asperiores sed odit?
              </p>
            </div>
            <div className="col-span-1 mx-auto mt-10">
              <img className="w-6" src={IconOne} alt="" />
            </div>
            <div className="col-span-4 font-semibold text-xs pt-1 mt-10">
              <p>JUNY 2018-NOVEMBER 2021</p>
            </div>
            {/* batas 2 */}
            {/* 3 */}
            <div className="col-span-4 text-right font-semibold text-xs pt-1 mt-10">
              <p>MARCH 2014-Mei 2018</p>
            </div>
            <div className="col-span-1 mx-auto mt-10">
              <img className="w-6" src={IconOne} alt="" />
            </div>
            <div className="col-span-4 text-xs space-y-2 mt-10">
              <p className="text-xl ">HR Specialist & Marketing Consultant</p>
              <p className="font-semibold">BTR SOLUTIONS LTD</p>
              <p className="text-gray-500 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur, magnam vitae architecto sequi reiciendis aliquid. Pariatur ut fugiat asperiores sed dolorem odit?
                Voluptatum doloribus.
              </p>
            </div>
            {/* batas 3 */}
            {/* 4 */}
            <div className="col-span-4 text-xs space-y-2 text-right mt-10">
              <p className="text-xl">Junior Salesman and Office Manager</p>
              <p className="font-semibold">ECONOMIC PLARTFORM</p>
              <p className="text-gray-500 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur, magnam vitae architecto sequi reiciendis aliquid. Pariatur ut fugiat asperiores sed odit?
              </p>
            </div>
            <div className="col-span-1 mx-auto mt-10">
              <img className="w-6" src={IconOne} alt="" />
            </div>
            <div className="col-span-4 font-semibold text-xs pt-1 mt-10">
              <p>SEPTEMBER 2010-FEBRUARY 2014</p>
            </div>
            {/* batas 4 */}
            <div className="col-start-3 md:col-start-4 md:col-span-3 col-span-5 mt-12 px-auto">
              <button className="w-full py-3 text-white text-sm " style={{ backgroundColor: '#5bac4e' }} href="/">
                GO TO MY CERTIFICATES
              </button>
            </div>
          </div>
          {/* asfasf */}
          <div className="md:hidden grid grid-cols-12 col-span-2 mt-10 mb-16 gap-2 space-y-8">
            {/* 1 */}
            <div className="col-span-1" style={{ marginTop: '60px' }}>
              <img className="w-6" src={IconOne} alt="" />
            </div>
            <div className="col-span-11 text-xs space-y-2">
              <p className="font-semibold">DECEMBER 2021-NOW</p>
              <p className="text-xl ">Senior Marketing Specialist</p>
              <p className="font-semibold">REMOTE TECHNOLOGIES</p>
              <p className="text-gray-500 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur, magnam vitae architecto sequi reiciendis aliquid. Pariatur ut fugiat asperiores sed dolorem odit?
                Voluptatum doloribus.
              </p>
            </div>
            {/* 1 */}
            {/* 2 */}
            <div className="col-span-1" style={{ marginTop: '60px' }}>
              <img className="w-6" src={IconOne} alt="" />
            </div>
            <div className="col-span-11 text-xs space-y-2">
              <p className="font-semibold">JUNY 2018-NOVEMBER 2021</p>
              <p className="text-xl ">Main Company Consultant</p>
              <p className="font-semibold">ABSTRACT VISION</p>
              <p className="text-gray-500 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur, magnam vitae architecto sequi reiciendis aliquid. Pariatur ut fugiat asperiores sed dolorem odit?
                Voluptatum doloribus.
              </p>
            </div>
            {/* 2 */}
            {/* 3 */}
            <div className="col-span-1" style={{ marginTop: '60px' }}>
              <img className="w-6" src={IconOne} alt="" />
            </div>
            <div className="col-span-11 text-xs space-y-2">
              <p className="font-semibold">DECEMBER 2021-NOW</p>
              <p className="text-xl ">HR Specialist & Marketing Consultant</p>
              <p className="font-semibold">BTR SOLUTIONS LTD</p>
              <p className="text-gray-500 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur, magnam vitae architecto sequi reiciendis aliquid. Pariatur ut fugiat asperiores sed dolorem odit?
                Voluptatum doloribus.
              </p>
            </div>
            {/* 3 */}
            {/* 4 */}
            <div className="col-span-1" style={{ marginTop: '60px' }}>
              <img className="w-6" src={IconOne} alt="" />
            </div>
            <div className="col-span-11 text-xs space-y-2">
              <p className="font-semibold">SEPTEMBER 2010-FEBRUARY 2014</p>
              <p className="text-xl ">Junior Salesman and Office Manager</p>
              <p className="font-semibold">ECONOMIC PLARTFORM</p>
              <p className="text-gray-500 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur, magnam vitae architecto sequi reiciendis aliquid. Pariatur ut fugiat asperiores sed dolorem odit?
                Voluptatum doloribus.
              </p>
            </div>
            {/* 4 */}
          </div>
        </div>
      </div>
    );
  }
}
