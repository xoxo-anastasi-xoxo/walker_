import React from 'react';
import PropTypes from 'prop-types';

function Spy(props) {
  const styles = {
    transform: `scale(${props.scale})`,
  };

 let image = props.logo || "/img/events/RoundIcons_FreeSet-15.svg" ;
  return (

    <img width="36px" height="36px" src={image}/>
  );
}

Spy.propTypes = {
  scale: PropTypes.string,
};

export default Spy;
