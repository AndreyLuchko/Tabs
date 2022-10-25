

// Створюєемо функцію  
function tabs() {
    const tabHeader = document.querySelector('.tabs'), // пошук батькивського div, по якому користувач буде кликати
        tabs = document.querySelectorAll('.tabs-title'), // псевдомассив елементів по яким кликаєм
        content = document.querySelectorAll('.tabs-content li'); // псевдомасив елементів контенту

// функція, яка видаляє клас 'active' у елементів tabs, та скриває усі єлементи контента
    function hide() {
        content.forEach(item => {
            item.setAttribute('hidden', '');
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }
    hide();
// функція, яка додає клас 'active' у елемент tabs, та видаляє атрибут, який сриває єл контента
// додаєм значення 0 у атрибут "i", для того щоб по замовчуванню відображався перший єл tabs і контент
    function show(i = 0) {
        tabs[i].classList.add('active');
        content[i].removeAttribute('hidden');
    }
    show();
// викликаєм слухач подій по 'click'
    tabHeader.addEventListener('click', (event) => {
        const target = event.target; // локальна константа для події

        tabs.forEach((item, i) => {
           //якщо подія на елементі, викликаєм hide, та show (з індексом ел події)
            if (target == item) {
                hide();
                show(i);
            }
        });
    });
}

tabs();