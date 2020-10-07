function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}
const formulario = document.querySelector('#form');
const btn = document.querySelector('#btn');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '573176956443';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value;
        let apellidos = document.querySelector('#apellidos').value;
        let email = document.querySelector('#email').value;
        let tel = document.querySelector('#tel').value;
        let msm = document.querySelector('#msm').value;
        let mensaje = 'send?phone=' + telefono + '&text=*_Formulario Alejandro Rojas_*%0A*¿Cual es tu nombre?*%0A'
         + nombre + '%0A*¿Cuáles son tus apellidos?*%0A' + apellidos + '%0A*¿Cuál es tu correo electrónico?*%0A' 
         + email + '%0A*¿Cuál es tu N° de Celular?*%0A' + tel + '%0A*¿Dimé que requieres?*%0A' + msm  + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }

    }, 2000);

});