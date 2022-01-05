# mongoose-config

## How to import and use database models:

```javascript
const { models } = require('mongoose');
[...]
const examples1 = await models.Example1.find();
const examples2 = await models.Example2.find();
```