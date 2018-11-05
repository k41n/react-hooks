import { useEffect, useRef } from 'react';

const $ = window.$;

export default () => {
  const elem = useRef(null);

  useEffect(() => {
    $(elem.current).tooltip();
    return () => {
      $(elem.current).tooltip('dispose');
    };
  });

  return elem;
};