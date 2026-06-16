const connectButton = document.querySelector(".connect-btn");

connectButton.addEventListener("click", async () => {

if(window.ethereum){

```
try{

  await window.ethereum.request({
    method:"eth_requestAccounts"
  });

  connectButton.innerText = "Wallet Connected";

}catch(error){

  console.log(error);

}
```

}else{

```
alert("Please install MetaMask");
```

}

});

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

```
navbar.style.background = "#050816";
```

}else{

```
navbar.style.background = "rgba(0,0,0,0.4)";
```

}

});
