fetch("stats.json")
.then(r => r.json())
.then(s => {
  document.getElementById("playtime").innerText = s.totalPlaytime;
  document.getElementById("launches").innerText = s.totalLaunches;
});
