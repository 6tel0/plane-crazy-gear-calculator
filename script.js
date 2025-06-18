function calculate() {
  const n = parseFloat(document.getElementById('teeth').value);
  const currentOffsetInput = document.getElementById('currentOffset').value;
  const currentOffset = currentOffsetInput ? parseFloat(currentOffsetInput) : 0;

  if (n <= 0 || isNaN(n)) {
    alert("Enter a valid number of teeth");
    return;
  }
  if (isNaN(currentOffset)) {
    alert("Enter a valid number for current offset");
    return;
  }

  const a = 360 / n;
  const b = a / 2;
  const r = Math.cos(toRad(b * Math.PI / 180)) / Math.sin(toRad(a * Math.PI / 180));
  const offset = r - currentOffset;

  document.getElementById('teethResult').textContent = `Number of Teeth (n):\n${n}`;
  document.getElementById('angleResult').textContent = `Angle per Tooth (a):\n${a.toFixed(4)}°`;
  document.getElementById('halfAngleResult').textContent = `Half-Angle (b):\n${b.toFixed(4)}°`;
  document.getElementById('radiusResult').textContent = `Radius (r):\n${r.toFixed(6)}`;
  document.getElementById('offsetResult').textContent = `Compressor Offset (r - current offset):\n${offset.toFixed(6)}`;

  // Fade in
  document.getElementById('results').style.opacity = 0;
  document.getElementById('explanationBox').style.opacity = 0;
  document.getElementById('results').style.display = 'flex';
  document.getElementById('explanationBox').style.display = 'block';

  setTimeout(() => {
    document.getElementById('results').style.opacity = 1;
    document.getElementById('explanationBox').style.opacity = 1;
  }, 10);

  // Explanation
  document.getElementById('explanationText').innerHTML = `
    <b>How it works:</b><br>
    You entered <b>${n}</b> teeth. First, we calculate the angle per tooth:<br>
    <code>a = 360 / n = ${a.toFixed(4)}</code><br>
    Then we find the half-angle:<br>
    <code>b = a / 2 = ${b.toFixed(4)}</code><br><br>

    We use this to get the radius of the gear circle using trigonometry:<br>
    <code>r = cos(b) / sin(a) = ${r.toFixed(6)}</code><br><br>

    Finally, the compressor offset is:<br>
    <code>Offset = r - current offset = ${r.toFixed(6)} - ${currentOffset} = ${(r - currentOffset).toFixed(6)}</code><br><br>

    This tells you how much to compress to perfectly align your gear in Plane Crazy.
  `;
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}
