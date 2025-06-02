function calculate() {
  const n = parseFloat(document.getElementById('teeth').value);
  const angleOffset = parseFloat(document.getElementById('angleOffset').value);

  if (n <= 0 || isNaN(n)) {
    alert("Enter a valid number of teeth");
    return;
  }
  if (angleOffset < 0 || isNaN(angleOffset)) {
    alert("Enter a valid angle block offset (0 or more)");
    return;
  }

  const a = 360 / n;
  const b = a / 2;
  const r = Math.cos(toRad(b)) / Math.sin(toRad(a));
  const baseOffset = 1 - r;
  const actualOffset = baseOffset * angleOffset;

  document.getElementById('results').textContent = `
Number of Teeth (n): ${n}
Angle per Tooth (a): ${a.toFixed(4)}°
Half-Angle (b): ${b.toFixed(4)}°
Radius (r): ${r.toFixed(6)}
Base Compressor Offset (1 - r): ${baseOffset.toFixed(6)}
Actual Compressor Offset (with angle block offset): ${actualOffset.toFixed(6)} blocks
`;
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}
