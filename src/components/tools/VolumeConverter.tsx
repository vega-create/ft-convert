import UnitConverter from './UnitConverter';

const units = {
    'milliliter': { label: 'Milliliter (mL)', toBase: (v) => v * 0.001, fromBase: (v) => v / 0.001 },
    'liter': { label: 'Liter (L)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'cubic-meter': { label: 'Cubic Meter (m³)', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    'us-fluid-ounce': { label: 'US Fluid Ounce (fl oz)', toBase: (v) => v * 0.0295735, fromBase: (v) => v / 0.0295735 },
    'us-cup': { label: 'US Cup', toBase: (v) => v * 0.236588, fromBase: (v) => v / 0.236588 },
    'us-pint': { label: 'US Pint', toBase: (v) => v * 0.473176, fromBase: (v) => v / 0.473176 },
    'us-quart': { label: 'US Quart', toBase: (v) => v * 0.946353, fromBase: (v) => v / 0.946353 },
    'us-gallon': { label: 'US Gallon', toBase: (v) => v * 3.78541, fromBase: (v) => v / 3.78541 },
    'imperial-gallon': { label: 'Imperial Gallon', toBase: (v) => v * 4.54609, fromBase: (v) => v / 4.54609 }
};

export default function VolumeConverter() {
  return <UnitConverter title="Volume Converter" units={units} defaultFrom="liter" defaultTo="us-gallon" />;
}
