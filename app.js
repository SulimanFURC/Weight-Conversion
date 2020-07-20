document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('click', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let pounds = e.target.value;
    document.getElementById('gramsOutput').innerHTML = pounds/0.0022046;
    document.getElementById('KgOutput').innerHTML = pounds/2.205;
    document.getElementById('OnceOutput').innerHTML = pounds*16;
})