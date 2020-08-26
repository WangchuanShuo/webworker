importScripts('./worker.js')
if (window.Worker) {
    var myWorker = new Worker('worker.js');
    function firstOnChange() {
        console.log(document.getElementById('first').value)
        console.dir('myWorker', myWorker);
        console.dir('myWorker', [document.getElementById('first').value, document.getElementById('second').value]);
        myWorker.postMessage([document.getElementById('first').value, document.getElementById('second').value])
    }
    function secondOnChange() {
        myWorker.postMessage([document.getElementById('first').value, document.getElementById('second').value])
    }   
}
