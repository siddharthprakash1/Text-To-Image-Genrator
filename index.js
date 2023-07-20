const API_KEY = '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';
const url ='https://api.openai.com/v1/images/generations'
const outputImg = document.getElementById('imageOutput');

document.getElementById('generateBtn').addEventListener('click', () => {
    const prompt = document.getElementById('textInput').value;
    generateImage(prompt);
  });


function generateImage(prompt) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: '256x256',
        response_format: 'b64_json'
      })
    };
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      const imageData = data.data[0].b64_json;
      outputImg.innerHTML = `<img src="data:image/png;base64,${imageData}">`;
    })
    .catch(error => console.error(error));
}