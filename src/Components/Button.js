import propTypes from 'prop-types';
import React from 'react'

const Button = ({color}) => {
  return (
    <div>
        <button 
        className='btn'
        style={{backgroundColor: color}}>
            Button
        </button>
    </div>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}
Button.prototype = {
    color: propTypes.string,
    text: propTypes.string,
    onclick: propTypes.func,
}

export default Button
