import React from 'react';

import './Styles.scss';

const Button = (props) => {

  return (
    <div className={"submitButton"} onClick={props.handleSubmit} >
      {props.label}
    </div>
  )
}

export default Button;