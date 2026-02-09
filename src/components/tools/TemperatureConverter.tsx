import { useState } from 'react';

export default function TemperatureConverter() {
  const [value, setValue] = useState('100');
  const [from, setFrom] = useState('celsius');

  const units = ['celsius', 'fahrenheit', 'kelvin'];
  const labels: Record<string, string> = { celsius: '°C', fahrenheit: '°F', kelvin: 'K' };
  const fullLabels: Record<string, string> = { celsius: 'Celsius (°C)', fahrenheit: 'Fahrenheit (°F)', kelvin: 'Kelvin (K)' };

  const toC = (v: number, f: string): number => {
    if (f === 'celsius') return v;
    if (f === 'fahrenheit') return (v - 32) * 5/9;
    return v - 273.15;
  };
  const fromC = (c: number, t: string): number => {
    if (t === 'celsius') return c;
    if (t === 'fahrenheit') return c * 9/5 + 32;
    return c + 273.15;
  };

  const num = parseFloat(value);
  const c = !isNaN(num) ? toC(num, from) : NaN;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label>Value</label>
            <input type="number" value={value} onChange={e => setValue(e.target.value)} className="text-2xl font-semibold" placeholder="Enter temperature" />
          </div>
          <div>
            <label>From</label>
            <select value={from} onChange={e => setFrom(e.target.value)}>
              {units.map(u => <option key={u} value={u}>{fullLabels[u]}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {units.map(u => (
          <div key={u} className={`p-4 rounded-xl ${u === from ? 'bg-primary-50 border-2 border-primary-200' : 'bg-white border border-gray-100'}`}>
            <div className="text-sm text-gray-500 mb-1">{fullLabels[u]}</div>
            <div className="text-2xl font-bold text-gray-900">
              {!isNaN(c) ? parseFloat(fromC(c, u).toFixed(4)) : '—'} {labels[u]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
