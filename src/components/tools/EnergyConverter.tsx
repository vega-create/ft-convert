import UnitConverter from './UnitConverter';

const units = {
    'joule': { label: 'Joule (J)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'kilojoule': { label: 'Kilojoule (kJ)', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    'calorie': { label: 'Calorie (cal)', toBase: (v) => v * 4.184, fromBase: (v) => v / 4.184 },
    'kilocalorie': { label: 'Kilocalorie (kcal)', toBase: (v) => v * 4184, fromBase: (v) => v / 4184 },
    'watt-hour': { label: 'Watt-hour (Wh)', toBase: (v) => v * 3600, fromBase: (v) => v / 3600 },
    'kilowatthour': { label: 'Kilowatt-hour (kWh)', toBase: (v) => v * 3600000, fromBase: (v) => v / 3600000 },
    'btu': { label: 'BTU', toBase: (v) => v * 1055.06, fromBase: (v) => v / 1055.06 },
    'electron-volt': { label: 'Electron-volt (eV)', toBase: (v) => v * 1.602e-19, fromBase: (v) => v / 1.602e-19 }
};

export default function EnergyConverter() {
  return <UnitConverter title="Energy Converter" units={units} defaultFrom="kilocalorie" defaultTo="kilojoule" />;
}
