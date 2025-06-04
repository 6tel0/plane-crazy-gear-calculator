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
  const r = Math.cos(toRad(b)) / Math.sin(toRad(a));
  const offset = r - currentOffset;

  // Animate result boxes: reset animation
  const results = document.querySelectorAll('.result-box');
  results.forEach(box => {
    box.style.opacity = 0;
    box.style.transform = 'translateY(20px)';
  });

  // Update text content
  document.getElementById('teethResult').textContent = `Number of Teeth (n):\n${n}`;
  document.getElementById('angleResult').textContent = `Angle per Tooth (a):\n${a.toFixed(4)}°`;
  document.getElementById('halfAngleResult').textContent = `Half-Angle (b):\n${b.toFixed(4)}°`;
  document.getElementById('radiusResult').textContent = `Radius (r):\n${r.toFixed(6)}`;
  document.getElementById('offsetResult').textContent = `Compressor Offset (r - current offset):\n${offset.toFixed(6)}`;

  // Animate result boxes fade-in staggered
  results.forEach((box, i) => {
    setTimeout(() => {
      box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
    }, i * 150);
  });

  // Show explanation box with fade + slide
  const explanationBox = document.getElementById('explanationBox');
  explanationBox.style.display = 'block';
  explanationBox.style.opacity = 0;
  explanationBox.style.transform = 'translateY(20px)';
  setTimeout(() => {
    explanationBox.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    explanationBox.style.opacity = 1;
    explanationBox.style.transform = 'translateY(0)';
  }, results.length * 150 + 100);

  document.getElementById('explanationText').innerHTML = `
    <b>How it works:</b><br>
    You entered <b>${n}</b> teeth. First, we calculate the angle per tooth:<br>
    <code>a = 360 / n = ${a.toFixed(4)}</code><br>
    Then we find the half-angle:<br>
    <code>b = a / 2 = ${b.toFixed(4)}</code><br><br>

    We use this to get the radius of the gear circle using trigonometry:<br>
    <code>r = cos(b) / sin(a) = ${r.toFixed(6)}</code><br><br>

    Finally, the compressor offset is:<br>
    <code>Offset = r - current offset = ${r.toFixed(6)} - ${currentOffset} = ${offset.toFixed(6)}</code><br><br>

    This tells you how much to compress to perfectly align your gear in Plane Crazy.
  `;
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}
