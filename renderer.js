const { ipcRenderer } = require('electron');

      document.getElementById('frames-button').addEventListener('click', (event) => {
        const buttonValue = event.target.value;
        ipcRenderer.send('buttonClicked', buttonValue);
      });