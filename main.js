const { hash } = window.location;
const msg= atob(hash.replace('#',''));
if (msg)
{
    document.querySelector('#link').classList.add('hide');
    document.querySelector('#msg-link').classList.remove('hide');
    document.querySelector('#sec-msg').classList.add('hide');
       
    document.querySelector('h1').innerHTML = msg;

}

document.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault();

        document.querySelector('#sec-msg').classList.add('hide');
        document.querySelector('#link').classList.remove('hide');

    const input =document.querySelector('#msg-input');
    const encrypt = btoa(input.value);

    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypt}`;
    linkInput.select();
});
document.querySelector('#copy').addEventListener('click',event=>{

document.execCommand("Copy");
alert("Copied Successfully!");
});