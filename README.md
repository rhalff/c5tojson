# c5tojson

Parser for -c5 format of dict(fmt)

```
const c5tojson = require('c5tojson');

const fs = require('fs');

fs.readFile('./jpn-eng.c5', (err, data) => {
  console.log(c5Parse(data));
});
```
