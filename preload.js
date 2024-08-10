const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  someMethod: () => ipcRenderer.invoke('some-method'),
});