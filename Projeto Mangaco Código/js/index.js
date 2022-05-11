$(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
        });
});

const darkModeMatcher = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

function isDarkMode() {
  return darkModeMatcher && darkModeMatcher.matches;
}

function onDarkModeChange(callback) {
  if (!darkModeMatcher) {
    return;
  }
  darkModeMatcher.addListener(({ matches }) => callback(matches));
}

function renderCanvas(useDarkTheme) {
  const theme = useDarkTheme
    ? { background: "#4d5866", border: "#7091ba" }
    : { background: "#ffffff", border: "#000" };

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const x = 15;
  const y = 15;
  const width = canvas.width - x * 2;
  const height = canvas.height - y * 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 5;
  ctx.strokeStyle = theme.border;
  ctx.strokeRect(x, y, width, height);
  ctx.fillStyle = theme.background;
  ctx.fillRect(x, y, width, height);
}

renderCanvas(isDarkMode());
onDarkModeChange(renderCanvas);
