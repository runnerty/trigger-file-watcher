# File Watcher Trigger for [Runnerty]:

It is possible to set up file system path trigger in Runnerty with the help of auto-magically configured filewatchers. Them are defined with the **condition** property and can be fired through the following actions:

- *add*: when a file is added.
- *change*: when a file is changed.
- *unlink*: when a file is deleted.
- *error*: when there is an error in the file treatment.

### Configuration sample:
```json
{
  "id": "filewatcher_default",
  "type": "@runnerty-trigger-file-watcher"
}
```

### Plan sample:
```json
{
  "id": "filewatcher_default",
  "file_name": "/path/myfile.txt",
  "condition": "change"
}
```

### Chain input
This trigger sends to the custom_values of the chain the name of the file watched (file_name).


[Runnerty]: http://www.runnerty.io
