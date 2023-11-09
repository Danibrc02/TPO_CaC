
async function loadData1(){
    const url = 'https://rickandmortyapi.com/api/character/1';
    let name = '';
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        name = 'Kit ' + result.name;
        document.getElementById('texto-api01').innerHTML = name;
    } catch (error) {
        console.error(error);
    }
}
loadData1()

async function loadData2(){
    const url = 'https://rickandmortyapi.com/api/character/2';
    let name = '';
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        name = 'Kit ' +  result.name;
        document.getElementById('texto-api02').innerHTML = name;
    } catch (error) {
        console.error(error);
    }
}
loadData2()

async function loadData3(){
    const url = 'https://rickandmortyapi.com/api/character/3';
    let name = '';
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        name = 'Kit ' +  result.name;
        document.getElementById('texto-api03').innerHTML = name;
    } catch (error) {
        console.error(error);
    }
}
loadData3()

async function loadData4(){
    const url = 'https://rickandmortyapi.com/api/character/4';
    let name = '';
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        name = 'Kit ' + result.name;
        document.getElementById('texto-api04').innerHTML = name;
    } catch (error) {
        console.error(error);
    }
}
loadData4()

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });