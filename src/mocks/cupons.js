//Teste de Cupom
import testeCupom from '../assets/cupons-teste/teste-cupom.png'

//Simulando distancia do estabelecimento
const randomDistance = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Simulando avaliação do estabelecimento
const randomRating = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Simulando lista de estabelecimentos
const cupons = {
    list: [
      {
        model: "Café Gratis",
        brand: "StarBucks",
        image: testeCupom,
        distance: randomDistance(0.1, 5),
        rating: randomRating(1, 5),
      },
      {
        model: "Coma um e Doe Outro",
        brand: "McDonalds",
        image: testeCupom,
        distance: randomDistance(0.1, 5),
        rating: randomRating(1, 5),
      },
      {
        model: "Terço Gratis",
        brand: "Catedral da Sé",
        image: testeCupom,
        distance: randomDistance(0.1, 5),
        rating: randomRating(1, 5),
      },
      {
        model: "Entrada Gratis",
        brand: "Farol Santander",
        image: testeCupom,
        distance: randomDistance(0.1, 5),
        rating: randomRating(1, 5),
      },
      {
        model: "Espetaculo Surpresa",
        brand: "Sala São Paulo",
        image: testeCupom,
        distance: randomDistance(0.1, 5),
        rating: randomRating(1, 5),
      }
    ]
  };

export default cupons;