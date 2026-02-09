import { useState } from 'react';

export default function FuelConverter() {
  const [value, setValue] = useState('30');
  const [from, setFrom] = useState('mpg-us');

  const labels: Record<string, string> = { 'mpg-us': 'MPG (US)', 'mpg-uk': 'MPG (Imperial)', 'km-per-l': 'km/L', 'l-per-100km': 'L/100km' };

  const toKmPerL = (v: number, f: string): number => {
    switch(f) {
      case 'mpg-us': return v * 0.425144;
      case 'mpg-uk': return v * 0.354006;
      case 'km-per-l': return v;
      case 'l-per-100km': return 100 / v;
      default: return v;
    }
  };
  const fromKmPerL = (kmpl: number, t: string): number => {
    switch(t) {
      case 'mpg-us': return kmpl / 0.425144;
      case 'mpg-uk': return kmpl / 0.354006;
      case 'km-per-l': return kmpl;
      case 'l-per-100km': return 100 / kmpl;
      default: return kmpl;
    }
  };

  const num = parseFloat(value);
  const kmpl = !isNaN(num) && num > 0 ? toKmPerL(num, from) : NaN;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label>Value</label>
            <input type="number" value={value} onChange={e => setValue(e.target.value)} className="text-2xl font-semibold" placeholder="Enter value" />
          </div>
          <div>
            <label>From</label>
            <select value={from} onChange={e => setFrom(e.target.value)}>
              {Object.keys(labels).map(k => <option key={k} value={k}>{labels[k]}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {Object.entries(labels).map(([key, label]) => (
          <div key={key} className={`p-4 rounded-xl ${key === from ? 'bg-primary-50 border-2 border-primary-200' : 'bg-white border border-gray-100'}`}>
            <div className="text-sm text-gray-500 mb-1">{label}</div>
            <div className="text-2xl font-bold text-gray-900">
              {!isNaN(kmpl) ? parseFloat(fromKmPerL(kmpl, key).toFixed(2)) : '—'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
