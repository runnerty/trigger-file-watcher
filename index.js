'use strict';

const chokidar = require('chokidar');
const Trigger = global.TriggerClass;

class triggerFileWatcher extends Trigger {
  constructor(chain, params) {
    super(chain, params);
  }

  start() {
    // Create file watcher:
    this.fileWatcher = chokidar.watch(this.params.file_name, {
      ignored: /(^|[\/\\])\../,
      persistent: true,
      usePolling: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 150
      }
    });

    // Create watch condition:
    this.fileWatcher.on(this.params.condition, pathfile => {
      const checkCalendar = true;
      const inputValues = [];
      const customValues = { file_name: pathfile };

      // Start Chain: Send file_name into inputValues.
      this.startChain(checkCalendar, inputValues, customValues).catch(err => {
        this.logger.error('startChain error (triggerFileWatcher):', err);
      });
    });
  }
}

module.exports = triggerFileWatcher;
