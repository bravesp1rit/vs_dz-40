/* eslint-disable no-undef */
void function (){
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let data = localStorage.getItem(DATA_KEY);
    if(!data) {
        const h1 = document.createElement('h1');
        h1.textContent = 'form is empty';
        return document.body.prepend(h1);
    }
    
    data = JSON.parse(data);

    const ul = document.createElement('ul');
    Object.keys(data).forEach( key => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${key}:</b> ${data[key]}`;
        ul.append(li);
    })
    document.body.append(ul);
console.log(ul);

})


}()