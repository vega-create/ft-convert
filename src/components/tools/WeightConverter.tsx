import UnitConverter from './UnitConverter';

const units = {
    'milligram': { label: 'Milligram (mg)', toBase: (v) => v * 0.000001, fromBase: (v) => v / 0.000001 },
    'gram': { label: 'Gram (g)', toBase: (v) => v * 0.001, fromBase: (v) => v / 0.001 },
    'kilogram': { label: 'Kilogram (kg)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'metric-ton': { label: 'Metric Ton (t)', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    'ounce': { label: 'Ounce (oz)', toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
    'pound': { label: 'Pound (lb)', toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 },
    'stone': { label: 'Stone (st)', toBase: (v) => v * 6.35029, fromBase: (v) => v / 6.35029 },
    'us-ton': { label: 'US Ton', toBase: (v) => v * 907.185, fromBase: (v) => v / 907.185 }
};

export default function WeightConverter() {
  return <UnitConverter title="Weight Converter" units={units} defaultFrom="kilogram" defaultTo="pound" />;
}
