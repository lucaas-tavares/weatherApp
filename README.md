# ⛅ Weather App

Este projeto é um painel de clima que exibe informações meteorológicas para uma localização especificada pelo usuário. Ele usa a API do OpenWeatherMap para buscar dados meteorológicos.

## Funcionalidades

- Exibe a data atual e a localização.
- Mostra a temperatura atual, descrição do clima, ícone do clima, precipitação, umidade e velocidade do vento.
- Permite ao usuário inserir uma localização para buscar dados meteorológicos.
- Exibe a previsão do tempo para os próximos quatro dias.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- [OpenWeatherMap API](https://openweathermap.org/api)

## Como Usar

1. Clone este repositório em seu computador:
    ```bash
    git clone https://github.com/lucaas-tavares/weatherApp.git
    ```

2. Navegue até o diretório do projeto.

3. Abra o arquivo `index.html` em seu navegador.

4. Para buscar dados meteorológicos de uma nova localização, clique no botão e insira o nome da cidade desejada.

## Configuração da API

Para utilizar a API do OpenWeatherMap, você precisará de uma chave de API. Siga os passos abaixo para configurar sua chave de API:

1. Registre-se no [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) e obtenha uma [chave de API](https://home.openweathermap.org/api_keys).
2. No arquivo `app.js`, substitua `'YOUR_API_KEY'` pela sua chave de API:
    ```javascript
    const apiKey = 'YOUR_API_KEY';
    ```