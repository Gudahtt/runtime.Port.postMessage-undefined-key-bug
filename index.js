document.addEventListener('DOMContentLoaded', () => {
  const port = chrome.runtime.connect()
  port.postMessage({
    exampleMessage: 'Hello!', exampleUndefined: undefined
  })
  port.onMessage.addListener((msg) => {
    console.log(`Received in popup: ${Object.keys(msg)}`)
    document.getElementById('message').innerHTML = Object.keys(msg)
  })
});