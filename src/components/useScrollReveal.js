import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal(threshold) {
  var ref = useRef(null);
  var state = useState(false);
  var revealed = state[0];
  var setRevealed = state[1];

  useEffect(function() {
    var observer = new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: threshold || 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return function() {
      observer.disconnect();
    };
  }, [threshold, setRevealed]);

  return [ref, revealed];
}