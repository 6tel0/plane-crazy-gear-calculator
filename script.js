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

  <div id="startMessage">Enter your gear details above and click Calculate to get started!</div>

  <h2>Results:</h2>
  <div id="results" class="fade" style="display: none;">
    <div class="result-box" id="teethResult"></div>
    <div class="result-box" id="angleResult"></div>
    <div class="result-box" id="halfAngleResult"></div>
    <div class="result-box" id="radiusResult"></div>
    <div class="result-box" id="offsetResult"></div>
  </div>

  <div id="explanationBox" style="display:none;" class="explanation-box fade">
    <h3>Explanation</h3>
    <p id="explanationText"></p>
  </div>

  <footer>
    <p>
      Made by <a href="https://www.youtube.com/@6tel0" target="_blank" rel="noopener">6tel0</a> |
      Thanks for using the gear calculator!
    </p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
