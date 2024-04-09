const electron = require('electron');

function hrefWorker(el) {
  el.addEventListener("click", () => {
    const link = el.getAttribute("href");
    electron.shell.openExternal(link);
  })
}

const els = {
  nav: {
    discord: document.getElementById("custom_nav_discord"),
    cafe: document.getElementById("custom_nav_cafe"),
  },
  launch: {
    container: document.getElementById("custom_launch_content"),
    prelaunch: {
      container: document.getElementById("custom_prelaunch"),
      launchBtn: document.getElementById("launch_button")
    },
    postlaunch: {
      container: document.getElementById("custom_postlaunch"),
      launchBtn: document.getElementById("launch_loading"),
      progress: document.getElementById("launch_loading_mask"),
    }
  }
};



hrefWorker(els.nav.discord);
hrefWorker(els.nav.cafe);

els.launch.prelaunch.launchBtn.addEventListener("click", function() {
  els.launch.prelaunch.container.style.display = "none";
  els.launch.postlaunch.container.style.display = "";
});

function updateProgress(percent) {
  percent = percent / 100;
  if (Math.abs(1 - percent) < 0.001) {
    els.launch.container.style.display = "none";
  } else {
    els.launch.container.style.display = "";
    els.launch.postlaunch.progress.style.setProperty("--progress", percent);
  }
}
