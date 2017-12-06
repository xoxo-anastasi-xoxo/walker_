import React from 'react';
import PropTypes from 'prop-types';

function Spy(props) {
  const styles = {
    transform: `scale(${props.scale})`,
  };
// let image = "/img/events/RoundIcons_FreeSet-" + (Math.floor(Math.random() * (60 + 1))) + ".svg";
  return (
    <img width="36px" height="36px" src="/img/events/RoundIcons_FreeSet-15.svg"/>
    // {/*<svg*/}
    //   {/*width="31px"*/}
    //   {/*height="39px"*/}
    //   {/*xmlns="http://www.w3.org/2000/svg"*/}
    //   {/*style={styles}*/}
    // {/*>*/}
    //
    // {/*</svg>*/}

  );
}

Spy.propTypes = {
  scale: PropTypes.string,
};

export default Spy;
