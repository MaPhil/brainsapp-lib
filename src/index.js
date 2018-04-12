if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js', { scope: '../' }).then(function (reg) {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function (error) {
    console.log('Registration failed with ' + error);
  });
}

fetch('https://code.brainsapp.org/sw.js', {mode: 'opaque'}).then((res) => {
  console.log(res);
}).catch(e => console.error(e));