

// Створюєемо функцію  
function tabs(parentSelector, titleSelector, contentSelector) {
    const tabHeader = document.querySelector(parentSelector), // пошук батькивського div
        tabs = document.querySelectorAll(titleSelector), // псевдомассив елементів по яким кликаєм
        content = document.querySelectorAll(contentSelector); // псевдомасив елементів контенту

// функція, яка видаляє клас 'active' у елементів tabs, та скриває усі єлементи контента
    function hide() {
        content.forEach(item => {
            item.setAttribute('hidden', '');
            item.classList.remove('active');
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
        content[i].classList.add('active');
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

tabs('.tabs', '.tabs-title', '.tabs-content li');