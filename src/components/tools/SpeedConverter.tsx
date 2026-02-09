import UnitConverter from './UnitConverter';

const units = {
    'meter-per-second': { label: 'Meters per Second (m/s)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'kmh': { label: 'Kilometers per Hour (km/h)', toBase: (v) => v * 0.277778, fromBase: (v) => v / 0.277778 },
    'mph': { label: 'Miles per Hour (mph)', toBase: (v) => v * 0.44704, fromBase: (v) => v / 0.44704 },
    'feet-per-second': { label: 'Feet per Second (ft/s)', toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
    'knot': { label: 'Knot (kn)', toBase: (v) => v * 0.514444, fromBase: (v) => v / 0.514444 },
    'mach': { label: 'Mach (at sea level)', toBase: (v) => v * 343, fromBase: (v) => v / 343 }
};

export default function SpeedConverter() {
  return <UnitConverter title="Speed Converter" units={units} defaultFrom="kmh" defaultTo="mph" />;
}
