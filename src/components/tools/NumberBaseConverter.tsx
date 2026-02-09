import { useState } from 'react';

export default function NumberBaseConverter() {
  const [value, setValue] = useState('255');
  const [from, setFrom] = useState('decimal');

  const bases: Record<string, number> = { binary: 2, octal: 8, decimal: 10, hexadecimal: 16 };
  const labels: Record<string, string> = { binary: 'Binary (Base 2)', octal: 'Octal (Base 8)', decimal: 'Decimal (Base 10)', hexadecimal: 'Hexadecimal (Base 16)' };

  const toDecimal = (v: string, base: number): number => {
    const n = parseInt(v, base);
    return isNaN(n) ? NaN : n;
  };

  const dec = toDecimal(value, bases[from]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label>Value</label>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} className="text-2xl font-semibold font-mono" placeholder="Enter number" />
          </div>
          <div>
            <label>Input Base</label>
            <select value={from} onChange={e => setFrom(e.target.value)}>
              {Object.keys(bases).map(b => <option key={b} value={b}>{labels[b]}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {Object.entries(bases).map(([key, base]) => (
          <div key={key} className={`p-4 rounded-xl ${key === from ? 'bg-primary-50 border-2 border-primary-200' : 'bg-white border border-gray-100'}`}>
            <div className="text-sm text-gray-500 mb-1">{labels[key]}</div>
            <div className="text-xl font-bold font-mono text-gray-900 break-all">
              {!isNaN(dec) ? dec.toString(base).toUpperCase() : '—'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
