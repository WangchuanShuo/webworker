// selft.onmessage = function(e) {
//     console.log('Message received from main script');
//     var workResult = e.data[0] * e.data[1];
//     console.log('Posting message back to main script');
//     postMessage(workResult)
// }

self.addEventListener('message', function(e) {
    console.log('Message received from main script');
    var workResult = e.data[0] * e.data[1];
    console.log('Posting message back to main script');
    postMessage(workResult)
}, false);

onmessage = function(e) {
  console.log('e', e)
};