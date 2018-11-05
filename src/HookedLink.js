import React from 'react';
import useTooltip from './hooks/useTooltip';

export default (props) => {
  const elemRef = useTooltip(null);

  return <a href={props.href} ref={elemRef} title={props.title} {...props}>{ props.caption }</a>
}
