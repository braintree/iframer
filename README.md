iFramer
=======

A utility to allow consistent iFrame creation.

## Example

```javascript
var iFramer = require('iframer');

var myIframe = iFramer({
  name: 'braintree-dropin-iframe',
  style: 'z-index: 999',
  width: '100%',
  height: '68'
});

document.body.appendChild(myIframe);
```

## Testing

```
npm t
```
