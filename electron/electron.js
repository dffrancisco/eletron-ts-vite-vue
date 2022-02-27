const path = require('path');
const { app, BrowserWindow } = require('electron');

const isDev = process.env.IS_DEV == "true" ? true : false;

function createWindow() {
    const win = new BrowserWindow({
        // transparent: true,
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        },
        icon: path.join(__dirname, '../dist/icons/icon.png'),
        // icon: path.join(globalAny.__static, os.platform() === 'win32' ? 'icons/icon.ico' : 'icons/64x64.png'),
        backgroundColor: '#cfd9df',
        autoHideMenuBar: true,
    });
    // win.setMenuBarVisibility(false)

    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../dist/index.html')}`
    );

    // Open the DevTools.
    if (isDev) win.webContents.openDevTools();

}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

});

app.on('closed', () => app = null);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});