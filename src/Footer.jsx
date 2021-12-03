import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="max-w-3xl mx-auto flex items-center justify-between lg:py-12 md:py-10 py-8 md:px-0 px-4">
          <div className="text-xs text-gray-800 my-auto">
            &copy; 2021 DeCV - Detheme.All Right Reserved. <span style={{ color: '#5bac4e' }}>Denny Group</span>
          </div>
          <div className="md:flex items-center ml-auto font-semibold text-center text-gray-800 text-xs">
            <p>SOCIAL MEDIA</p>
            <div className="flex  space-x-4 mt-2">
              <div className="py-3 w-8 bg-gray-300">FB</div>
              <div className="py-3 w-8 bg-gray-300">TW</div>
              <div className="py-3 w-8 bg-gray-300">IN</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
