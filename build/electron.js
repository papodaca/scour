/* eslint no-console: 0 */
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  BrowserWindow.addDevToolsExtension(
    path.join(
      "/Users",
      "usr1",
      "Library",
      "Application Support",
      "Google",
      "Chrome",
      "Default",
      "Extensions",
      "fmkadmapgofadopljbjfkapdkoienihi",
      "3.2.4_0",
    ),
  );
  mainWindow.webContents.openDevTools();
  mainWindow.loadURL(
    isDev
      ? "http://localhost:8080"
      : `file://${path.join(__dirname, "../build/index.html")}`
  ); // load the react app
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

// on MacOS leave process running also with no windows
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// if there are no windows create one
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
