import UnitConverter from './UnitConverter';

const units = {
    'degree': { label: 'Degree (°)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'radian': { label: 'Radian (rad)', toBase: (v) => v * 57.2958, fromBase: (v) => v / 57.2958 },
    'gradian': { label: 'Gradian (grad)', toBase: (v) => v * 0.9, fromBase: (v) => v / 0.9 },
    'arcminute': { label: 'Arcminute', toBase: (v) => v * 0.016667, fromBase: (v) => v / 0.016667 },
    'arcsecond': { label: 'Arcsecond', toBase: (v) => v * 0.000278, fromBase: (v) => v / 0.000278 },
    'turn': { label: 'Turn (revolution)', toBase: (v) => v * 360, fromBase: (v) => v / 360 }
};

export default function AngleConverter() {
  return <UnitConverter title="Angle Converter" units={units} defaultFrom="degree" defaultTo="radian" />;
}
