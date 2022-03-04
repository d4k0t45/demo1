/* mobile */
const a = () => {
    const burgir = document.querySelector(".lista");
    if (burgir.classList.contains('lista')) {
        burgir.classList.remove('mobile')
        burgir.classList.add('displayMobile');
    } else if (burgir.classList.contains('lista')){
        burgir.classList.remove('displayMobile');
        burgir.classList.add('mobile')
    }
}