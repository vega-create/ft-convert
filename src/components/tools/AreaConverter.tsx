import UnitConverter from './UnitConverter';

const units = {
    'sq-millimeter': { label: 'Square Millimeter (mm²)', toBase: (v) => v * 0.000001, fromBase: (v) => v / 0.000001 },
    'sq-centimeter': { label: 'Square Centimeter (cm²)', toBase: (v) => v * 0.0001, fromBase: (v) => v / 0.0001 },
    'sq-meter': { label: 'Square Meter (m²)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'sq-kilometer': { label: 'Square Kilometer (km²)', toBase: (v) => v * 1000000, fromBase: (v) => v / 1000000 },
    'sq-inch': { label: 'Square Inch (in²)', toBase: (v) => v * 0.00064516, fromBase: (v) => v / 0.00064516 },
    'sq-foot': { label: 'Square Foot (ft²)', toBase: (v) => v * 0.092903, fromBase: (v) => v / 0.092903 },
    'sq-yard': { label: 'Square Yard (yd²)', toBase: (v) => v * 0.836127, fromBase: (v) => v / 0.836127 },
    'acre': { label: 'Acre', toBase: (v) => v * 4046.86, fromBase: (v) => v / 4046.86 },
    'hectare': { label: 'Hectare (ha)', toBase: (v) => v * 10000, fromBase: (v) => v / 10000 }
};

export default function AreaConverter() {
  return <UnitConverter title="Area Converter" units={units} defaultFrom="sq-meter" defaultTo="sq-foot" />;
}
