require('babel/polyfill');


/**
 * Node sqs-server includes all the assets from the squarespace.com instance.
 * This removes those CSS references so don't have conflicting styles locally.
 * This only needs to run on the Node server -- currently set to just localhost.
 */

if (window.location.hostname === 'localhost') {
  let head = document.querySelectorAll('head')[0];
  let links = head.querySelectorAll('link');

  for (let link of links) {
    if (link.href.indexOf('squarespace.com') > 0) {
      head.removeChild(link);
    }
  }
}
