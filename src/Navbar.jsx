import React, { Component } from 'react';
import ImageOne from './asset/d2.png';
export default class navbar extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto">
          <div className="flex justify-between pt-4">
            <div className="flex items-center">
              <img className="w-14" src={ImageOne} alt="" />
              <div className="font-semibold ml-2 mt-3">
                <p className="text-sm">PERSONAL CV</p>
                <p className="font-semibold text-lg" style={{ color: '#5bac4e' }}>
                  Denny Firmansyah
                </p>
              </div>
            </div>
            <div className="flex items-center text-xs space-x-6 font-semibold">
              <a href="/">ABOUT ME</a>
              <a href="/">MY BIO</a>
              <a href="/">EXPERIENCE</a>
              <a href="/">CERTIFICATES</a>
              <a href="/">SKILL</a>
              <a href="/">CONTACT</a>
              <a className="py-3 px-6 text-white" style={{ backgroundColor: '#5bac4e' }} href="/">
                CALL ME RIGHT NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
