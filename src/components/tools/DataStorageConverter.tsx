import UnitConverter from './UnitConverter';

const units = {
    'bit': { label: 'Bit (b)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'byte': { label: 'Byte (B)', toBase: (v) => v * 8, fromBase: (v) => v / 8 },
    'kilobyte': { label: 'Kilobyte (KB)', toBase: (v) => v * 8000, fromBase: (v) => v / 8000 },
    'megabyte': { label: 'Megabyte (MB)', toBase: (v) => v * 8000000, fromBase: (v) => v / 8000000 },
    'gigabyte': { label: 'Gigabyte (GB)', toBase: (v) => v * 8000000000, fromBase: (v) => v / 8000000000 },
    'terabyte': { label: 'Terabyte (TB)', toBase: (v) => v * 8000000000000, fromBase: (v) => v / 8000000000000 },
    'petabyte': { label: 'Petabyte (PB)', toBase: (v) => v * 8000000000000000, fromBase: (v) => v / 8000000000000000 },
    'kibibyte': { label: 'Kibibyte (KiB)', toBase: (v) => v * 8192, fromBase: (v) => v / 8192 },
    'mebibyte': { label: 'Mebibyte (MiB)', toBase: (v) => v * 8388608, fromBase: (v) => v / 8388608 },
    'gibibyte': { label: 'Gibibyte (GiB)', toBase: (v) => v * 8589934592, fromBase: (v) => v / 8589934592 }
};

export default function DataStorageConverter() {
  return <UnitConverter title="Data Storage Converter" units={units} defaultFrom="gigabyte" defaultTo="megabyte" />;
}
