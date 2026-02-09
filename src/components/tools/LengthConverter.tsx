import UnitConverter from './UnitConverter';

const units = {
    'millimeter': { label: 'Millimeter (mm)', toBase: (v) => v * 0.001, fromBase: (v) => v / 0.001 },
    'centimeter': { label: 'Centimeter (cm)', toBase: (v) => v * 0.01, fromBase: (v) => v / 0.01 },
    'meter': { label: 'Meter (m)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'kilometer': { label: 'Kilometer (km)', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    'inch': { label: 'Inch (in)', toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
    'foot': { label: 'Foot (ft)', toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
    'yard': { label: 'Yard (yd)', toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
    'mile': { label: 'Mile (mi)', toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },
    'nautical-mile': { label: 'Nautical Mile', toBase: (v) => v * 1852, fromBase: (v) => v / 1852 }
};

export default function LengthConverter() {
  return <UnitConverter title="Length Converter" units={units} defaultFrom="meter" defaultTo="foot" />;
}
