export const useCatalog = () => {
    // Vars
    const btnBurger = document.querySelector('.btn-burger');
    const btnClose = document.querySelector('.btn-close');
    const catalog = document.querySelector('.catalog');
    const subCatalog = document.querySelector('.subcatalog');
    const suCatalogHeader = document.querySelector('.subcatalog-header');
    const btnReturn = document.querySelector('.btn-return');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('beforeend', overlay);

// Functions
    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    const closeMenu = () => {
        catalog.classList.remove('open');
        overlay.classList.remove('active');
        closeSubMenu();
    }

    const openSubMenu = ev => {
        ev.preventDefault();
        const target = ev.target;
        const itemList = target.closest('.catalog-list__item');
        if (itemList){
            suCatalogHeader.innerHTML = itemList.innerHTML;
            subCatalog.classList.add('subopen');
        }
    };

    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
    };

// Events
    btnBurger.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', openSubMenu);
    btnReturn.addEventListener('click', closeSubMenu);

    document.addEventListener('keydown', ev => {
        if(ev.code === 'Escape'){
            closeMenu();
        }
    });

// Calls functions
}

