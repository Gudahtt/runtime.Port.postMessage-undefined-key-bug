
chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((msg) => {
    console.log(`Received in background: ${Object.keys(msg)}`)

    port.postMessage({
      exampleResponse: 'Hello!',
      exampleUndefinedKey: undefined
    })
  })
})