/* eslint-disable no-undef */
void function (){
'use strict;'

// Собрать данные с формы при ее сабмите
// Сохранить эти данные в качестве объекта внутри localStorage (не забываем о преобразовании в json)
// Создать второй html файл, в котором списком (ul > li) вывести вывести все те данные, которые пользователь ввел в форму ранее
// Если данных нет, то показать соответствующее сообщение

const form = document.querySelector('#form');


form.addEventListener('submit', event => {
    event.preventDefault();

    
    const {target} = event;
    const formInputs = target.querySelectorAll('input, select, textarea');
    const formValues = Array.from(formInputs).reduce((acc, {name, value}) => {
        acc[name] = value;
        return acc;
    }, {})
    console.log(formValues);

    localStorage.setItem(DATA_KEY, JSON.stringify(formValues));
})
    
document.addEventListener('DOMContentLoaded', () => {
    let data = localStorage.getItem(DATA_KEY);
    if(!data) return;
    
    data = JSON.parse(data);
    const formInputs = form.querySelectorAll('input, select, textarea');
    formInputs.forEach( item => {
        item.value = data[item.name]
    })

})


}()