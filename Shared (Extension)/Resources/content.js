//browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
//    console.log("Received response: ", response);
//});
//
//browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//    console.log("Received request: ", request);
//});

setTimeout(() => {
    document.querySelector('.css-1qpaaev').toggleAttribute('hidden');
    console.log('toggle hidden to .css-1qpaaev');
}, 1000);
