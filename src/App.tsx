import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from 'gsap/React';

function App() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-item', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, container);

    return () => ctx.revert();
  });

  return (
    <div
      ref={container}
      className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
    >
      <div className="text-center text-white">
        <h1 className="animate-item text-5xl font-bold mb-4">diglibass</h1>
        <p className="animate-item text-lg">
          React + Tailwind CSS + GSAP starter
        </p>
      </div>
    </div>
  );
}

export default App;
