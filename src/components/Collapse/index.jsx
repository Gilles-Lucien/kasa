import React from 'react';

function Collapse(props) {
  const { children, ...rest } = props;
  return /*#__PURE__*/React.createElement("div", rest, children);
}

export default Collapse;