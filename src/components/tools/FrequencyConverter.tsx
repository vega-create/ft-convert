import UnitConverter from './UnitConverter';

const units = {
    'hertz': { label: 'Hertz (Hz)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'kilohertz': { label: 'Kilohertz (kHz)', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    'megahertz': { label: 'Megahertz (MHz)', toBase: (v) => v * 1000000, fromBase: (v) => v / 1000000 },
    'gigahertz': { label: 'Gigahertz (GHz)', toBase: (v) => v * 1000000000, fromBase: (v) => v / 1000000000 },
    'rpm': { label: 'RPM (rev/min)', toBase: (v) => v * 0.016667, fromBase: (v) => v / 0.016667 }
};

export default function FrequencyConverter() {
  return <UnitConverter title="Frequency Converter" units={units} defaultFrom="megahertz" defaultTo="gigahertz" />;
}
