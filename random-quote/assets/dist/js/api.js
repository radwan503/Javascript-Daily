const createQuote = () => {
   fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(data => displayData(data))
}

const displayData = (data) => {
   console.log(data)
   const displayQuote = document.getElementById('displayQuote');
   displayQuote.innerText = data.quote;
}