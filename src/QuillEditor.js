
import React from 'react'


/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */


const CustomButton = () => <span className="octicon octicon-star">💩</span>
export const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1" />
      <option value="2" />
    </select>
    <button className="ql-bold" />
    <select className="ql-color">
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="orange" />
      <option value="violet" />
      <option value="#d0d1d2" />
    </select>    
    <button className="ql-insertStar">
      <CustomButton />
    </button>
  </div>
)

