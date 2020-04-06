# iframer

A utility to allow consistent iframe creation.

## Example

```javascript
var iframer = require("iframer");

var myIframe = iframer({
  name: "braintree-dropin-iframe",
  style: "z-index: 999",
  width: "100%",
  height: "68",
});

document.body.appendChild(myIframe);
```

## Testing

```
npm t
```
