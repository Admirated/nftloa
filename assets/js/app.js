const padeId = window.location.href.split('#')[1];

window.addEventListener('DOMContentLoaded', () => {
   const loader = document.querySelector('.loader-wrapper');
   showLoader();

   const pages = document.querySelectorAll('section[data-page]'),
      navItems = document.querySelectorAll('.navigation-item');

   if (!padeId) {
      const page = document.querySelector('section[data-page="about"]')
      activatePage(page);
      document.querySelectorAll('.navigation-item[data-page="about"]')
         .forEach(link => link.classList.add('_active'));
   } else {
      pages.forEach(page => {
         if (page.dataset.page === padeId) {
            activatePage(page);
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
            activatePage(page);
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

   const copyBtn = document.querySelector('.copyBtn');
   const address = document.querySelector('p.address').textContent;
   copyBtn.addEventListener('click', () => setClipboard(address, copyBtn));


});

function setClipboard(text, btn) {
   var type = "text/plain";
   var blob = new Blob([text], {
      type
   });
   var data = [new ClipboardItem({
      [type]: blob
   })];

   navigator.clipboard.write(data).then(
      function () {
         btn.classList.add('success');
         setTimeout(() => {
            btn.classList.remove('success');
         }, 2500);
      }
   );
}

function activatePage(page) {
   page.classList.remove('hide');
   setTimeout(() => {
      page.classList.add('_active');
   }, 4);
}