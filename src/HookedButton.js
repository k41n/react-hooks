import React from 'react';
import useTooltip from './hooks/useTooltip';

export default (props) => {
  const elemRef = useTooltip();
  return <button ref={elemRef} title={props.title} {...props}>{ props.caption }</button>
}