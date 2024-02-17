
const rinp = document.querySelectorAll('.inptxt');
const icon = document.querySelectorAll('.edit-task');
const icon2 = document.querySelectorAll('.edit-task2');
const icon3 = document.querySelectorAll('.edit-check');
const icon4 = document.querySelectorAll('.edit-trash');
const icon5 = document.querySelectorAll('.close-task');

let isEditable = false;

icon.forEach((element, index) => {
    element.addEventListener('click', () => {
        isEditable = true;
        rinp[index].readOnly = false;


        rinp[index].focus();
        rinp[index].classList.add('active');
        icon[index].classList.add('active');
        icon2[index].classList.add('active');
        icon3[index].classList.add('active');
        icon4[index].classList.add('active');
        icon5[index].classList.add('active');
        rinp[index].selectionStart = rinp[index].selectionEnd = rinp[index].value.length;
    });
});

icon2.forEach((element, index) => {
    element.addEventListener('click', () => {
    
        // Remove the 'active' class from icon2
        rinp[index].classList.remove('active');
        icon[index].classList.remove('active');
        icon2[index].classList.remove('active');
        icon3[index].classList.remove('active');
        icon4[index].classList.remove('active');
        icon5[index].classList.remove('active');
    
        // Set the input field to readOnly
        rinp[index].readOnly = true;
    });
    
});

icon5.forEach((element, index) => {
    element.addEventListener('click', () => {
    
        // Remove the 'active' class from icon2
        rinp[index].classList.remove('active');
        icon[index].classList.remove('active');
        icon2[index].classList.remove('active');
        icon3[index].classList.remove('active');
        icon4[index].classList.remove('active');
        icon5[index].classList.remove('active');
    
        // Set the input field to readOnly
        rinp[index].readOnly = true;
    });
});
