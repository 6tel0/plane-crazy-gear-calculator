<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Gear Calculator</title>
</head>
<body>

  <h1>Gear Calculator</h1>
  
  <input id="teeth" type="number" placeholder="Number of teeth" />
  <input id="currentOffset" type="number" placeholder="Current offset" />
  
  <button onclick="calculate()">Calculate</button>
  
  <div id="teethResult"></div>
  <div id="angleResult"></div>
  <div id="halfAngleResult"></div>
  <div id="radiusResult"></div>
  <div id="offsetResult"></div>

  <script>
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

      document.getElementById('teethResult').textContent = `Number of Teeth (n): ${n}`;
      document.getElementById('angleResult').textContent = `Angle per Tooth (a): ${a.toFixed(4)}°`;
      document.getElementById('halfAngleResult').textContent = `Half-Angle (b): ${b.toFixed(4)}°`;
      document.getElementById('radiusResult').textContent = `Radius (r): ${r.toFixed(6)}`;
      document.getElementById('offsetResult').textContent = `Compressor Offset (r - current offset): ${offset.toFixed(6)}`;
    }

    function toRad(deg) {
      return deg * (Math.PI / 180);
    }
  </script>

</body>
</html>
