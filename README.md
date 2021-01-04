<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">A new way for processes managing</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url] 
<a href="#badge">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# File Watcher Trigger for [Runnerty]:

It is possible to set up file system path trigger in Runnerty with the help of auto-magically configured filewatchers. Them are defined with the **condition** property and can be fired through the following actions:

- *add*: when a file is added.
- *change*: when a file is changed.
- *unlink*: when a file is deleted.
- *error*: when there is an error in the file treatment.

### Configuration sample:
Add in [config.json]:
```json
{
  "triggers": [
    {
      "id": "filewatcher_default",
      "type": "@runnerty-trigger-file-watcher"
    }
  ]
}
```

### Plan sample:
Add in [plan.json]:
```json
{
  "triggers": [
    {
      "id": "filewatcher_default",
      "file_name": "/path/myfile.txt",
      "condition": "change"
    }
  ]
}
```
```json
{
  "triggers": [
    {
      "id": "filewatcher_default",
      "file_name": "/path/*.jpg",
      "condition": "add"
    }
  ]
}
```

### Chain input
This trigger sends to the custom_values of the chain the name of the file watched (file_name).
You can make use of this value through the "get values" function:
```
 @GV(file_name)
```

[Runnerty]: http://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/trigger-file-watcher.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/trigger-file-watcher
[npm-image]: https://img.shields.io/npm/v/@runnerty/trigger-file-watcher.svg
[david-badge]: https://david-dm.org/runnerty/trigger-file-watcher.svg
[david-badge-url]: https://david-dm.org/runnerty/trigger-file-watcher
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/