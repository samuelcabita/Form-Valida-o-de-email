const email = document.querySelector('#Email');
const imgErro=document.querySelector('#img')
const spanErro = document.querySelector('.span-requerid');
const form = document.querySelector('.input-box');
const btn= document.querySelector('#botao');
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const setError=()=>{
    form.style.border = '2px solid #f96262';
    spanErro.style.display='block'
    spanErro.style.padding='10px'
    imgErro.style.display='inline'
};
const RemoveError=()=>{
    form.style.border = '';
    spanErro.style.display=''
    imgErro.style.display=''
};
const BancoDeDaos=()=>{
    const ArmazenarDados ={
        addresemail:email.value
    }
    localStorage.setItem('ArmazenarDados',JSON.stringify(ArmazenarDados));
    console.log('dados enviados');
}
const validarEmail=()=>{
    if(regexEmail.test(email.value)){
        RemoveError()
    }else{
        setError()
    }if(email.value==''){
        setError()
    };

};
btn.addEventListener('click',validarEmail);
btn.addEventListener('click',BancoDeDaos)
