import { app, BrowserWindow } from "electron";
import isDev from "./isDev.js";
import path from "path";

console .log(isDev() ? "Development mode" : "Production mode");
app.on("ready", () => {
    let mainWindow = new BrowserWindow({});
    isDev() ? mainWindow.loadURL("http://localhost:5173") : mainWindow.loadFile(path.join(app.getAppPath() + 'dist-electron/index.html'));

});