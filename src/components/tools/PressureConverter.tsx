import UnitConverter from './UnitConverter';

const units = {
    'pascal': { label: 'Pascal (Pa)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'kilopascal': { label: 'Kilopascal (kPa)', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    'bar': { label: 'Bar', toBase: (v) => v * 100000, fromBase: (v) => v / 100000 },
    'psi': { label: 'PSI (lb/in²)', toBase: (v) => v * 6894.76, fromBase: (v) => v / 6894.76 },
    'atm': { label: 'Atmosphere (atm)', toBase: (v) => v * 101325, fromBase: (v) => v / 101325 },
    'mmhg': { label: 'mmHg (Torr)', toBase: (v) => v * 133.322, fromBase: (v) => v / 133.322 }
};

export default function PressureConverter() {
  return <UnitConverter title="Pressure Converter" units={units} defaultFrom="psi" defaultTo="bar" />;
}
