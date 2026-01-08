import { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  imageUrl: string;
  opacity?: number;
  speed?: number;
}

const ParallaxBackground = ({ imageUrl, opacity = 0.3, speed = 0.5 }: ParallaxBackgroundProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageUrl})`,
        opacity,
        transform: `translateY(${offsetY * speed}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
};

export default ParallaxBackground;
