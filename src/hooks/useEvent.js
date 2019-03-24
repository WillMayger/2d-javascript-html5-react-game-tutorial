import { useEffect } from 'react';

export default function useEvent(event, handler) {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
}
