import UnitConverter from './UnitConverter';

const units = {
    'millisecond': { label: 'Millisecond (ms)', toBase: (v) => v * 0.001, fromBase: (v) => v / 0.001 },
    'second': { label: 'Second (s)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'minute': { label: 'Minute (min)', toBase: (v) => v * 60, fromBase: (v) => v / 60 },
    'hour': { label: 'Hour (hr)', toBase: (v) => v * 3600, fromBase: (v) => v / 3600 },
    'day': { label: 'Day', toBase: (v) => v * 86400, fromBase: (v) => v / 86400 },
    'week': { label: 'Week', toBase: (v) => v * 604800, fromBase: (v) => v / 604800 },
    'month': { label: 'Month (30 days)', toBase: (v) => v * 2592000, fromBase: (v) => v / 2592000 },
    'year': { label: 'Year (365.25 days)', toBase: (v) => v * 31557600, fromBase: (v) => v / 31557600 }
};

export default function TimeConverter() {
  return <UnitConverter title="Time Converter" units={units} defaultFrom="hour" defaultTo="minute" />;
}
