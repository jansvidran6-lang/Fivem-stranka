// ---- CONFIG ----
const SERVER_IP = "play.nightcityrp.com";
// Optional: point at a FiveM server endpoint (e.g. https://servers-frontend.fivem.net/api/servers/single/<code>)
// Leave null to use mocked numbers so the page always looks alive.
const FIVEM_API = null;
// ----------------

document.getElementById("year").textContent = new Date().getFullYear();

const $status = document.getElementById("status-text");
const $dot = document.querySelector(".badge .dot");
const $players = document.getElementById("player-count");
const $uptime = document.getElementById("uptime");
const $ping = document.getElementById("ping");

function setOnline(players, max) {
  $dot.classList.add("online");
  $status.textContent = `Online · ${players}/${max}`;
  $players.textContent = `${players}/${max}`;
}
function setOffline() {
  $dot.classList.add("offline");
  $status.textContent = "Offline";
  $players.textContent = "0";
}

async function loadStatus() {
  if (!FIVEM_API) {
    // Mock so the MVP never looks dead during dev
    setOnline(42, 128);
    $uptime.textContent = "99.8%";
    $ping.textContent = "EU";
    return;
  }
  try {
    const r = await fetch(FIVEM_API);
    const { Data } = await r.json();
    setOnline(Data.clients, Data.sv_maxclients);
    $uptime.textContent = "99.8%";
    $ping.textContent = "EU";
  } catch {
    setOffline();
    $uptime.textContent = "—";
    $ping.textContent = "—";
  }
}
loadStatus();
setInterval(loadStatus, 30_000);

// Copy IP
const $copy = document.getElementById("copy-ip");
$copy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText($copy.dataset.ip);
    const old = $copy.textContent;
    $copy.textContent = "Copied ✓";
    setTimeout(() => ($copy.textContent = old), 1500);
  } catch {
    prompt("Copy the server IP:", $copy.dataset.ip);
  }
});
