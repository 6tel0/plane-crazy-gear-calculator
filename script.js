<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Plane Crazy Gear Calculator</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Gear Calculator for Plane Crazy</h1>

  <label>Number of Teeth (n):
    <input type="number" id="teeth" value="8" min="1" />
  </label>
  
  <label>Current Offset (optional):
    <input type="number" id="currentOffset" placeholder="Enter offset (default 0)" />
  </label>
  
  <button onclick="calculate()">Calculate</button>

  <h2>Results:</h2>
  <div id="results">
    <div class="result-box" id="teethResult"></div>
    <div class="result-box" id="angleResult"></div>
    <div class="result-box" id="halfAngleResult"></div>
    <div class="result-box" id="radiusResult"></div>
    <div class="result-box" id="offsetResult"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>

