# SQS Clean Up
For use with [node-squarespace-server](https://github.com/kitajchuk/node-squarespace-server).

Node Squarespace Server includes the html `head` from Squarespace. This
includes the CSS includes resulting in any CSS that is on the squarespace.com
instance to be included locally. With that CSS present, any local changes need
to override existing properties -- just removing properties results in no
visible change.

This removes the included Squarespace CSS so your local server only displays
your local CSS.

Not intended to be used on Squarespace.com. It is set to only run on localhost.
Add domains as needed for testing environment.

## Example usage

```js
import './sqsCleanUp';
```
