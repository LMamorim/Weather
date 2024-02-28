async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    try {
    const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    } catch (error) {
        alert(error.message);
    }
}

async function getPrevisao(){
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    try {
    const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
    const data = await response.json();
    console.log(data);
    document.getElementById('previsao').value = `Previsão de tempo de acordo com a região: ${data.hourly.temperature_2m[12]}°C`;
    } catch (error) {
        alert(error.message);
    }
}

const btn = document.querySelector('#buttons');

btn.addEventListener("click", () => {
    getAddressByCep();
    getPrevisao();
});