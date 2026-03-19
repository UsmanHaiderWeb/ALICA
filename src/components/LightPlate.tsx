import React from 'react';

interface LightPlateProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  color?: string;
  intensity?: string;
  width?: string;
  beamOpacity?: number;
  spread?: string;
  className?: string;
}

export const LightPlate: React.FC<LightPlateProps> = ({
  direction = 'up',
  color = '#38bdf8', // Default to a bright light blue
  intensity = '25px',
  width = '100%',
  beamOpacity = 0.2,
  spread = '10px',
  className = '',
}) => {
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 0,
  };

  const plateStyle: React.CSSProperties = {
    position: 'absolute',
    background: color,
    boxShadow: `0 0 4px ${color}, 0 0 12px ${color}, 0 0 24px ${color}`,
    borderRadius: '50%',
  };

  const beamStyle: React.CSSProperties = {
    position: 'absolute',
    opacity: beamOpacity,
  };

  switch (direction) {
    case 'up':
      containerStyle.bottom = 0;
      containerStyle.left = '50%';
      containerStyle.transform = 'translateX(-50%)';
      containerStyle.width = width;
      
      plateStyle.bottom = '-3px';
      plateStyle.left = '0';
      plateStyle.right = '0';
      plateStyle.height = '6px';
      
      beamStyle.bottom = '0';
      beamStyle.left = `-${spread}`;
      beamStyle.right = `-${spread}`;
      beamStyle.height = intensity;
      beamStyle.background = `linear-gradient(to top, ${color}, transparent)`;
      beamStyle.clipPath = `polygon(0 0, 100% 0, calc(100% - ${spread}) 100%, ${spread} 100%)`;
      break;
      
    case 'down':
      containerStyle.top = 0;
      containerStyle.left = '50%';
      containerStyle.transform = 'translateX(-50%)';
      containerStyle.width = width;
      
      plateStyle.top = '-3px';
      plateStyle.left = '0';
      plateStyle.right = '0';
      plateStyle.height = '6px';
      
      beamStyle.top = '0';
      beamStyle.left = `-${spread}`;
      beamStyle.right = `-${spread}`;
      beamStyle.height = intensity;
      beamStyle.background = `linear-gradient(to bottom, ${color}, transparent)`;
      beamStyle.clipPath = `polygon(${spread} 0, calc(100% - ${spread}) 0, 100% 100%, 0 100%)`;
      break;

    case 'left':
      containerStyle.right = 0;
      containerStyle.top = '50%';
      containerStyle.transform = 'translateY(-50%)';
      containerStyle.height = width;
      
      plateStyle.right = '-3px';
      plateStyle.top = '0';
      plateStyle.bottom = '0';
      plateStyle.width = '6px';
      
      beamStyle.right = '0';
      beamStyle.top = `-${spread}`;
      beamStyle.bottom = `-${spread}`;
      beamStyle.width = intensity;
      beamStyle.background = `linear-gradient(to left, ${color}, transparent)`;
      beamStyle.clipPath = `polygon(0 0, 100% ${spread}, 100% calc(100% - ${spread}), 0 100%)`;
      break;

    case 'right':
      containerStyle.left = 0;
      containerStyle.top = '50%';
      containerStyle.transform = 'translateY(-50%)';
      containerStyle.height = width;
      
      plateStyle.left = '-3px';
      plateStyle.top = '0';
      plateStyle.bottom = '0';
      plateStyle.width = '6px';
      
      beamStyle.left = '0';
      beamStyle.top = `-${spread}`;
      beamStyle.bottom = `-${spread}`;
      beamStyle.width = intensity;
      beamStyle.background = `linear-gradient(to right, ${color}, transparent)`;
      beamStyle.clipPath = `polygon(0 ${spread}, 100% 0, 100% 100%, 0 calc(100% - ${spread}))`;
      break;
  }

  return (
    <div className={`light-plate-container ${className}`} style={containerStyle}>
      <div className="light-beam" style={beamStyle} />
      <div className="light-source-plate" style={plateStyle} />
    </div>
  );
};
