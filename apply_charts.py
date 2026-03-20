#!/usr/bin/env python3
"""Generate and apply content-specific CSS charts to all ft-convert articles."""
import os, re

POSTS_DIR = "/Users/linyangting/Desktop/ft-repos/ft-convert/src/content/posts"

CHARTS = {
    "angle-conversion-degrees-radians.md": '''<div style="margin: 2rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 0.5rem;">
<div style="padding: 0.6rem; background: #dbeafe; border-radius: 8px; text-align: center; border: 1px solid #93c5fd;">
<div style="font-weight: 800; color: #1e40af; font-size: 1rem;">0°</div><div style="font-size: 0.65rem; color: #6b7280;">0 rad</div></div>
<div style="padding: 0.6rem; background: #d1fae5; border-radius: 8px; text-align: center; border: 1px solid #6ee7b7;">
<div style="font-weight: 800; color: #059669; font-size: 1rem;">90°</div><div style="font-size: 0.65rem; color: #6b7280;">π/2 rad</div></div>
<div style="padding: 0.6rem; background: #fef3c7; border-radius: 8px; text-align: center; border: 1px solid #fde68a;">
<div style="font-weight: 800; color: #b45309; font-size: 1rem;">180°</div><div style="font-size: 0.65rem; color: #6b7280;">π rad</div></div>
<div style="padding: 0.6rem; background: #fce7f3; border-radius: 8px; text-align: center; border: 1px solid #f9a8d4;">
<div style="font-weight: 800; color: #be185d; font-size: 1rem;">270°</div><div style="font-size: 0.65rem; color: #6b7280;">3π/2 rad</div></div>
<div style="padding: 0.6rem; background: #ede9fe; border-radius: 8px; text-align: center; border: 1px solid #c4b5fd;">
<div style="font-weight: 800; color: #6d28d9; font-size: 1rem;">360°</div><div style="font-size: 0.65rem; color: #6b7280;">2π rad</div></div>
</div>''',

    "area-measurement-real-estate.md": '''<div style="margin: 2rem 0; background: #f8fafc; border-radius: 12px; padding: 1.2rem; border: 1px solid #e2e8f0;">
<div style="font-weight: 700; font-size: 0.85rem; color: #334155; margin-bottom: 0.8rem;">Area Unit Comparisons</div>
<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 0.3rem; font-size: 0.8rem; align-items: center;">
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">1 sq ft</div>
<div style="color: #94a3b8;">=</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">0.0929 m²</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">1 acre</div>
<div style="color: #94a3b8;">=</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">43,560 sq ft</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">1 hectare</div>
<div style="color: #94a3b8;">=</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">2.471 acres</div>
</div></div>''',

    "binary-hex-number-systems.md": '''<div style="margin: 2rem 0; background: #1e293b; border-radius: 12px; padding: 1.2rem; border: 1px solid #334155;">
<div style="font-weight: 700; font-size: 0.85rem; color: #94a3b8; margin-bottom: 0.8rem;">Number 255 in Different Bases</div>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem;">
<div style="background: #334155; padding: 0.6rem; border-radius: 8px; text-align: center;">
<div style="font-size: 0.65rem; color: #94a3b8;">Decimal (Base 10)</div>
<div style="font-weight: 800; color: #60a5fa; font-size: 1.1rem; font-family: monospace;">255</div></div>
<div style="background: #334155; padding: 0.6rem; border-radius: 8px; text-align: center;">
<div style="font-size: 0.65rem; color: #94a3b8;">Binary (Base 2)</div>
<div style="font-weight: 800; color: #4ade80; font-size: 1.1rem; font-family: monospace;">11111111</div></div>
<div style="background: #334155; padding: 0.6rem; border-radius: 8px; text-align: center;">
<div style="font-size: 0.65rem; color: #94a3b8;">Hex (Base 16)</div>
<div style="font-weight: 800; color: #f472b6; font-size: 1.1rem; font-family: monospace;">FF</div></div>
</div></div>''',

    "cooking-measurement-conversions.md": '''<div style="margin: 2rem 0; background: #fef3c7; border-radius: 12px; padding: 1.2rem; border: 1px solid #fde68a;">
<div style="font-weight: 700; font-size: 0.85rem; color: #92400e; margin-bottom: 0.8rem;">Kitchen Quick Reference</div>
<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 0.3rem; font-size: 0.8rem; align-items: center;">
<div style="background: white; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #92400e;">3 tsp</div>
<div style="color: #d97706;">=</div>
<div style="background: white; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #92400e;">1 tbsp</div>
<div style="background: white; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #92400e;">16 tbsp</div>
<div style="color: #d97706;">=</div>
<div style="background: white; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #92400e;">1 cup</div>
<div style="background: white; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #92400e;">1 cup</div>
<div style="color: #d97706;">=</div>
<div style="background: white; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #92400e;">240 mL</div>
<div style="background: white; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #92400e;">1 oz</div>
<div style="color: #d97706;">=</div>
<div style="background: white; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #92400e;">28.35 g</div>
</div></div>''',

    "data-storage-units-explained.md": '''<div style="margin: 2rem 0; background: #f8fafc; border-radius: 12px; padding: 1.2rem; border: 1px solid #e2e8f0;">
<div style="font-weight: 700; font-size: 0.85rem; color: #334155; margin-bottom: 0.8rem;">Data Storage Scale (each step = ×1,024)</div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
<div style="width: 15%; background: #94a3b8; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; color: white;">1 KB</div></div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
<div style="width: 30%; background: #60a5fa; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; color: white;">1 MB = 1,024 KB</div></div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
<div style="width: 50%; background: #34d399; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; color: white;">1 GB = 1,024 MB</div></div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
<div style="width: 75%; background: #f59e0b; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; color: white;">1 TB = 1,024 GB</div></div>
<div style="display: flex; align-items: center; gap: 0.5rem;">
<div style="width: 100%; background: #8b5cf6; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; color: white;">1 PB = 1,024 TB</div></div>
</div>''',

    "energy-units-calories-joules-kwh.md": '''<div style="margin: 2rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 0.5rem;">
<div style="padding: 0.7rem; background: #fef2f2; border-radius: 10px; text-align: center; border: 1px solid #fecaca;">
<div style="font-weight: 800; color: #dc2626; font-size: 1rem;">1 Cal</div>
<div style="font-size: 0.65rem; color: #6b7280;">= 4,184 J</div></div>
<div style="padding: 0.7rem; background: #dbeafe; border-radius: 10px; text-align: center; border: 1px solid #93c5fd;">
<div style="font-weight: 800; color: #2563eb; font-size: 1rem;">1 kWh</div>
<div style="font-size: 0.65rem; color: #6b7280;">= 3.6 MJ</div></div>
<div style="padding: 0.7rem; background: #d1fae5; border-radius: 10px; text-align: center; border: 1px solid #6ee7b7;">
<div style="font-weight: 800; color: #059669; font-size: 1rem;">1 BTU</div>
<div style="font-size: 0.65rem; color: #6b7280;">= 1,055 J</div></div>
<div style="padding: 0.7rem; background: #fef3c7; border-radius: 10px; text-align: center; border: 1px solid #fde68a;">
<div style="font-weight: 800; color: #b45309; font-size: 1rem;">1 eV</div>
<div style="font-size: 0.65rem; color: #6b7280;">= 1.6×10⁻¹⁹ J</div></div>
</div>''',

    "frequency-units-hz-explained.md": '''<div style="margin: 2rem 0; background: #f8fafc; border-radius: 12px; padding: 1.2rem; border: 1px solid #e2e8f0;">
<div style="font-weight: 700; font-size: 0.85rem; color: #334155; margin-bottom: 0.8rem;">Frequency Scale — Where Things Fall</div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
<div style="width: 20%; background: #94a3b8; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; color: white;">60 Hz — AC power</div></div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
<div style="width: 35%; background: #60a5fa; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; color: white;">20 kHz — Human hearing limit</div></div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
<div style="width: 55%; background: #34d399; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; color: white;">2.4 GHz — WiFi</div></div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
<div style="width: 75%; background: #f59e0b; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; color: white;">5 GHz — WiFi 5/6</div></div>
<div style="display: flex; align-items: center; gap: 0.5rem;">
<div style="width: 100%; background: #8b5cf6; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; color: white;">5.8 GHz — CPU clock speed</div></div>
</div>''',

    "fuel-economy-mpg-vs-l100km.md": '''<div style="margin: 2rem 0; background: #f8fafc; border-radius: 12px; padding: 1.2rem; border: 1px solid #e2e8f0;">
<div style="font-weight: 700; font-size: 0.85rem; color: #334155; margin-bottom: 0.8rem;">Fuel Economy: MPG ↔ L/100km</div>
<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 0.3rem; font-size: 0.8rem; align-items: center;">
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">20 MPG</div>
<div style="color: #94a3b8;">≈</div>
<div style="background: #fecaca; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #dc2626;">11.8 L/100km</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">30 MPG</div>
<div style="color: #94a3b8;">≈</div>
<div style="background: #fef3c7; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #b45309;">7.8 L/100km</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">40 MPG</div>
<div style="color: #94a3b8;">≈</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">5.9 L/100km</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">50 MPG</div>
<div style="color: #94a3b8;">≈</div>
<div style="background: #dcfce7; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #16a34a;">4.7 L/100km</div>
</div></div>''',

    "length-conversion-travel-guide.md": '''<div style="margin: 2rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 0.5rem;">
<div style="padding: 0.7rem; background: #dbeafe; border-radius: 10px; text-align: center; border: 1px solid #93c5fd;">
<div style="font-weight: 800; color: #1e40af; font-size: 0.9rem;">1 mile</div>
<div style="font-size: 0.7rem; color: #6b7280;">= 1.609 km</div></div>
<div style="padding: 0.7rem; background: #d1fae5; border-radius: 10px; text-align: center; border: 1px solid #6ee7b7;">
<div style="font-weight: 800; color: #059669; font-size: 0.9rem;">1 km</div>
<div style="font-size: 0.7rem; color: #6b7280;">= 0.621 miles</div></div>
<div style="padding: 0.7rem; background: #fef3c7; border-radius: 10px; text-align: center; border: 1px solid #fde68a;">
<div style="font-weight: 800; color: #b45309; font-size: 0.9rem;">5 km</div>
<div style="font-size: 0.7rem; color: #6b7280;">= 3.1 miles</div></div>
<div style="padding: 0.7rem; background: #fce7f3; border-radius: 10px; text-align: center; border: 1px solid #f9a8d4;">
<div style="font-weight: 800; color: #be185d; font-size: 0.9rem;">100 km</div>
<div style="font-size: 0.7rem; color: #6b7280;">= 62.1 miles</div></div>
</div>''',

    "metric-vs-imperial-complete-guide.md": '''<div style="margin: 2rem 0; background: #f8fafc; border-radius: 12px; padding: 1.2rem; border: 1px solid #e2e8f0;">
<div style="font-weight: 700; font-size: 0.85rem; color: #334155; margin-bottom: 0.8rem;">Metric vs Imperial — Key Equivalents</div>
<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.3rem; font-size: 0.75rem;">
<div style="font-weight: 700; color: #64748b; text-align: center; padding: 0.3rem;">Measure</div>
<div style="font-weight: 700; color: #2563eb; text-align: center; padding: 0.3rem;">Imperial</div>
<div style="font-weight: 700; color: #059669; text-align: center; padding: 0.3rem;">Metric</div>
<div style="text-align: center; padding: 0.3rem; font-weight: 600;">Length</div>
<div style="background: #dbeafe; padding: 0.3rem; border-radius: 4px; text-align: center;">1 mile</div>
<div style="background: #d1fae5; padding: 0.3rem; border-radius: 4px; text-align: center;">1.609 km</div>
<div style="text-align: center; padding: 0.3rem; font-weight: 600;">Weight</div>
<div style="background: #dbeafe; padding: 0.3rem; border-radius: 4px; text-align: center;">1 pound</div>
<div style="background: #d1fae5; padding: 0.3rem; border-radius: 4px; text-align: center;">0.454 kg</div>
<div style="text-align: center; padding: 0.3rem; font-weight: 600;">Volume</div>
<div style="background: #dbeafe; padding: 0.3rem; border-radius: 4px; text-align: center;">1 gallon</div>
<div style="background: #d1fae5; padding: 0.3rem; border-radius: 4px; text-align: center;">3.785 L</div>
<div style="text-align: center; padding: 0.3rem; font-weight: 600;">Temp</div>
<div style="background: #dbeafe; padding: 0.3rem; border-radius: 4px; text-align: center;">72°F</div>
<div style="background: #d1fae5; padding: 0.3rem; border-radius: 4px; text-align: center;">22.2°C</div>
</div></div>''',

    "pressure-units-tires-weather.md": '''<div style="margin: 2rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 0.5rem;">
<div style="padding: 0.7rem; background: #dbeafe; border-radius: 10px; text-align: center; border: 1px solid #93c5fd;">
<div style="font-weight: 800; color: #1e40af; font-size: 0.9rem;">1 atm</div>
<div style="font-size: 0.65rem; color: #6b7280;">101.325 kPa</div></div>
<div style="padding: 0.7rem; background: #d1fae5; border-radius: 10px; text-align: center; border: 1px solid #6ee7b7;">
<div style="font-weight: 800; color: #059669; font-size: 0.9rem;">14.7 PSI</div>
<div style="font-size: 0.65rem; color: #6b7280;">= 1 atm</div></div>
<div style="padding: 0.7rem; background: #fef3c7; border-radius: 10px; text-align: center; border: 1px solid #fde68a;">
<div style="font-weight: 800; color: #b45309; font-size: 0.9rem;">32 PSI</div>
<div style="font-size: 0.65rem; color: #6b7280;">Typical tire</div></div>
<div style="padding: 0.7rem; background: #fce7f3; border-radius: 10px; text-align: center; border: 1px solid #f9a8d4;">
<div style="font-weight: 800; color: #be185d; font-size: 0.9rem;">1013 hPa</div>
<div style="font-size: 0.65rem; color: #6b7280;">Std weather</div></div>
</div>''',

    "speed-units-around-the-world.md": '''<div style="margin: 2rem 0; background: #f8fafc; border-radius: 12px; padding: 1.2rem; border: 1px solid #e2e8f0;">
<div style="font-weight: 700; font-size: 0.85rem; color: #334155; margin-bottom: 0.8rem;">Highway Speed in Different Units</div>
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.4rem;">
<div style="background: #dbeafe; padding: 0.5rem; border-radius: 8px; text-align: center; border: 1px solid #93c5fd;">
<div style="font-weight: 800; color: #1e40af; font-size: 1rem;">65</div>
<div style="font-size: 0.7rem; color: #6b7280;">mph</div></div>
<div style="background: #d1fae5; padding: 0.5rem; border-radius: 8px; text-align: center; border: 1px solid #6ee7b7;">
<div style="font-weight: 800; color: #059669; font-size: 1rem;">105</div>
<div style="font-size: 0.7rem; color: #6b7280;">km/h</div></div>
<div style="background: #fef3c7; padding: 0.5rem; border-radius: 8px; text-align: center; border: 1px solid #fde68a;">
<div style="font-weight: 800; color: #b45309; font-size: 1rem;">56</div>
<div style="font-size: 0.7rem; color: #6b7280;">knots</div></div>
<div style="background: #fce7f3; padding: 0.5rem; border-radius: 8px; text-align: center; border: 1px solid #f9a8d4;">
<div style="font-weight: 800; color: #be185d; font-size: 1rem;">29</div>
<div style="font-size: 0.7rem; color: #6b7280;">m/s</div></div>
</div></div>''',

    "time-zones-conversion-tips.md": '''<div style="margin: 2rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.5rem;">
<div style="padding: 0.6rem; background: #dbeafe; border-radius: 8px; text-align: center; border: 1px solid #93c5fd;">
<div style="font-weight: 800; color: #1e40af; font-size: 0.9rem;">60 sec</div><div style="font-size: 0.65rem; color: #6b7280;">= 1 min</div></div>
<div style="padding: 0.6rem; background: #d1fae5; border-radius: 8px; text-align: center; border: 1px solid #6ee7b7;">
<div style="font-weight: 800; color: #059669; font-size: 0.9rem;">3,600 sec</div><div style="font-size: 0.65rem; color: #6b7280;">= 1 hour</div></div>
<div style="padding: 0.6rem; background: #fef3c7; border-radius: 8px; text-align: center; border: 1px solid #fde68a;">
<div style="font-weight: 800; color: #b45309; font-size: 0.9rem;">86,400 sec</div><div style="font-size: 0.65rem; color: #6b7280;">= 1 day</div></div>
<div style="padding: 0.6rem; background: #ede9fe; border-radius: 8px; text-align: center; border: 1px solid #c4b5fd;">
<div style="font-weight: 800; color: #6d28d9; font-size: 0.9rem;">31.5M sec</div><div style="font-size: 0.65rem; color: #6b7280;">≈ 1 year</div></div>
</div>''',

    "understanding-temperature-scales.md": '''<div style="margin: 2rem 0; background: #f8fafc; border-radius: 12px; padding: 1.2rem; border: 1px solid #e2e8f0;">
<div style="font-weight: 700; font-size: 0.85rem; color: #334155; margin-bottom: 0.8rem;">Three Temperature Scales at Key Points</div>
<div style="display: grid; grid-template-columns: auto 1fr 1fr 1fr; gap: 0.3rem; font-size: 0.75rem; align-items: center;">
<div style="padding: 0.3rem;"></div>
<div style="font-weight: 700; color: #2563eb; text-align: center;">°F</div>
<div style="font-weight: 700; color: #dc2626; text-align: center;">°C</div>
<div style="font-weight: 700; color: #7c3aed; text-align: center;">K</div>
<div style="padding: 0.3rem; font-weight: 600;">Absolute zero</div>
<div style="background: #dbeafe; padding: 0.3rem; border-radius: 4px; text-align: center;">−459.67</div>
<div style="background: #fecaca; padding: 0.3rem; border-radius: 4px; text-align: center;">−273.15</div>
<div style="background: #ede9fe; padding: 0.3rem; border-radius: 4px; text-align: center;">0</div>
<div style="padding: 0.3rem; font-weight: 600;">Water freezes</div>
<div style="background: #dbeafe; padding: 0.3rem; border-radius: 4px; text-align: center;">32</div>
<div style="background: #fecaca; padding: 0.3rem; border-radius: 4px; text-align: center;">0</div>
<div style="background: #ede9fe; padding: 0.3rem; border-radius: 4px; text-align: center;">273.15</div>
<div style="padding: 0.3rem; font-weight: 600;">Water boils</div>
<div style="background: #dbeafe; padding: 0.3rem; border-radius: 4px; text-align: center;">212</div>
<div style="background: #fecaca; padding: 0.3rem; border-radius: 4px; text-align: center;">100</div>
<div style="background: #ede9fe; padding: 0.3rem; border-radius: 4px; text-align: center;">373.15</div>
</div></div>''',

    "volume-conversions-practical-guide.md": '''<div style="margin: 2rem 0; background: #f8fafc; border-radius: 12px; padding: 1.2rem; border: 1px solid #e2e8f0;">
<div style="font-weight: 700; font-size: 0.85rem; color: #334155; margin-bottom: 0.8rem;">Volume Conversion Reference</div>
<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 0.3rem; font-size: 0.8rem; align-items: center;">
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">1 US gallon</div>
<div style="color: #94a3b8;">=</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">3.785 L</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">1 liter</div>
<div style="color: #94a3b8;">=</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">4.227 cups</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">1 fl oz</div>
<div style="color: #94a3b8;">=</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">29.57 mL</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">1 quart</div>
<div style="color: #94a3b8;">=</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">0.946 L</div>
</div></div>''',

    "weight-conversion-guide-kg-lbs.md": '''<div style="margin: 2rem 0; background: #f8fafc; border-radius: 12px; padding: 1.2rem; border: 1px solid #e2e8f0;">
<div style="font-weight: 700; font-size: 0.85rem; color: #334155; margin-bottom: 0.8rem;">Common Weight Conversions</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; font-size: 0.8rem;">
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">50 kg</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">110 lbs</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">70 kg</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">154 lbs</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">90 kg</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">198 lbs</div>
<div style="background: #dbeafe; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #1e40af;">100 kg</div>
<div style="background: #d1fae5; padding: 0.4rem; border-radius: 6px; text-align: center; font-weight: 700; color: #059669;">220 lbs</div>
</div>
<div style="margin-top: 0.5rem; font-size: 0.7rem; color: #94a3b8; text-align: center;">1 kg = 2.2046 lbs | 1 lb = 0.4536 kg</div>
</div>''',
}


def apply_chart(filepath, chart_html):
    with open(filepath, 'r') as f:
        content = f.read()
    parts = content.split('---', 2)
    if len(parts) < 3:
        return False
    frontmatter = parts[1]
    body = parts[2]
    body_stripped = body.lstrip('\n')
    if body_stripped.startswith('<div style="margin: 2rem 0;'):
        depth = 0
        end_idx = 0
        i = 0
        while i < len(body_stripped):
            if body_stripped[i:i+4] == '<div':
                depth += 1
                i += 4
            elif body_stripped[i:i+6] == '</div>':
                depth -= 1
                i += 6
                if depth == 0:
                    end_idx = i
                    break
            else:
                i += 1
        if end_idx > 0:
            body = '\n' + body_stripped[end_idx:].lstrip('\n')
    new_content = f'---{frontmatter}---\n\n{chart_html}\n{body.lstrip(chr(10))}'
    with open(filepath, 'w') as f:
        f.write(new_content)
    return True

success = 0
for filename, chart in CHARTS.items():
    filepath = os.path.join(POSTS_DIR, filename)
    if not os.path.exists(filepath):
        print(f"  NOT FOUND: {filename}")
        continue
    if apply_chart(filepath, chart):
        print(f"  ✅ {filename}")
        success += 1
print(f"\nDone: {success}/{len(CHARTS)} charts applied")
