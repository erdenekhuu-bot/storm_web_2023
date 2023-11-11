function openForm(){
    document.getElementById('myForm').style.display = 'block';
    document.addEventListener('click', closeFormOutside)
}

function closeForm(){
    document.getElementById('myForm').style.display = 'none'
    document.removeEventListener('click', closeFormOutside)
}

function closeFormOutside(event){
    const form=document.getElementById('myForm')
    if(!form.contains(event.target) && event.target !== document.getElementById('openBtn')){
        closeForm()
    }
}