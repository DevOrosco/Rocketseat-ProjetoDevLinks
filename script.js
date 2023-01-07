function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector("#profile img");

    if(html.classList.contains('light')){
        img.setAttribute('src','./assets/avatar-light.png');
        img.setAttribute('alt', 'Foto de Vinicius Orosco dentro de um elevador vestindo uma roupa casual, camisa jeans, calça jogger bege e um celular em sua mão');
    }else{
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Foto de Vinicius Orosco, sorrindo com o manto do Instituto Proa com um fundo branco.');
    }
}