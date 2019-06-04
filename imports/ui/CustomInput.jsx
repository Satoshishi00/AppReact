import React from 'react';

const CustomInput = ({ update, blabla, ...rest }) => (
  <div>
    <input
      onChange={(e) =>
        update(e, e.target || {})
      }
      {...rest}
    />
  </div>
);

export default CustomInput;
