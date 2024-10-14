import propTypes from 'prop-types';
import React from 'react'

const Button = ({color, text, onClick}) => {
  return (
    <div>
        <button 
        className='btn'
        onClick={onClick}
        style={{backgroundColor: color}}>
            {text}
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
