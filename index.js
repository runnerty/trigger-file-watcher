'use strict';

const chokidar = require('chokidar');
var Trigger = global.TriggerClass;

class triggerFileWatcher extends Trigger {
  constructor(chain, params) {
    super(chain, params);
  }

  start() {
    let _this = this;

    // Create file watcher:
    _this.fileWatcher = chokidar.watch(_this.params.file_name, {
      ignored: /[\/\\](\.|\~)/,
      persistent: true,
      usePolling: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 150
      }
    });

    //Create watch condition:
    _this.fileWatcher.on(_this.params.condition, pathfile => {
      const checkCalendar = true;
      const inputValues = [];
      const customValues = { file_name: pathfile };

      //Start Chain: Send file_name into inputValues.
      _this
        .startChain(checkCalendar, inputValues, customValues)
        .then(() => {})
        .catch(err => {
          _this.logger.error('startChain error (triggerFileWatcher):', err);
        });
    });
  }
}

module.exports = triggerFileWatcher;
