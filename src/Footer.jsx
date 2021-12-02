import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="max-w-3xl mx-auto grid grid-cols-2 py-12">
          <div className="col-span-1 text-xs text-gray-800 my-auto">
            &copy; 2021 DeCV - Detheme.All Right Reserved. <span style={{ color: '#5bac4e' }}>Denny Group</span>
          </div>
          <div className="col-span-1 flex items-center space-x-3 ml-auto font-semibold text-center text-gray-800 text-xs">
            <p>SOCIAL MEDIA</p>
            <div className="py-3 w-8 bg-gray-300">FB</div>
            <div className="py-3 w-8 bg-gray-300">TW</div>
            <div className="py-3 w-8 bg-gray-300">IN</div>
          </div>
        </div>
      </div>
    );
  }
}
