const padeId = window.location.href.split('#')[1];

window.addEventListener('DOMContentLoaded', () => {
   const loader = document.querySelector('.loader-wrapper');
   showLoader();

   const pages = document.querySelectorAll('section[data-page]'),
      navItems = document.querySelectorAll('.navigation-item');

   if (!padeId) {
      document.querySelector('section[data-page="dragons"]').classList.add('_active');;
      document.querySelectorAll('.navigation-item[data-page="dragons"]')
         .forEach(link => link.classList.add('_active'));
   } else {
      pages.forEach(page => {
         if (page.dataset.page === padeId) {
            page.classList.add('_active');
         } else {
            page.classList.add('hide');
         }
      });
   }
   hideLoader();

   navItems.forEach(nav => {
      if (padeId && nav.dataset.page === padeId) {
         nav.classList.add('_active');
      }

      nav.addEventListener('click', setActiveLink);
   });

   const burger = document.querySelector('.menu__icon'),
      overlay = document.querySelector('.overlay'),
      menu = document.querySelector('.header__navigation'),
      menuTitle = menu.querySelector('.menu__title');

   burger.addEventListener('click', () => {
      menu.classList.toggle('_active');
      burger.classList.toggle('_active');
      menuTitle.classList.toggle('hide');
      overlay.classList.remove('hide');
   })

   overlay.addEventListener('click', () => {
      burger.classList.remove('_active');
      menu.classList.remove('_active');
      menuTitle.classList.add('hide');
      overlay.classList.add('hide');
   });

   function setActiveLink(e) {
      document.querySelectorAll('.navigation-item._active')
         .forEach(link => link.classList.remove('_active'));
      this.classList.add('_active');
      const pageId = this.dataset.page;
      for (const page of pages) {
         if (page.dataset.page != pageId) {
            page.classList.remove('_active');
            page.classList.add('hide');
         } else {
            page.classList.remove('hide');
            setTimeout(() => {
               page.classList.add('_active');
            }, 4);
            document.querySelectorAll(`.navigation-item[data-page="${pageId}"]`)
               .forEach(link => link.classList.add('_active'));
         }
      }
      menu.classList.remove('_active');
      burger.classList.remove('_active');
      window.scrollTo(0, 0);
   }

   function showLoader() {
      loader.style.display = 'flex';
   }

   function hideLoader() {
      loader.style.display = 'none';
   }

});