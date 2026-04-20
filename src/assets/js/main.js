document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile dropdown menu ---
  if (window.innerWidth < 769) {
    document.querySelectorAll('.drop_menu').forEach(menu => menu.style.display = 'none');

    document.querySelectorAll('.menu_item').forEach(item => {
      item.addEventListener('click', () => {
        const dropMenu = item.querySelector('.drop_menu');
        if (dropMenu.style.display === 'none' || dropMenu.style.display === '') {
          dropMenu.style.display = 'block';
        } else {
          dropMenu.style.display = 'none';
        }
      });
    });
  }

  // --- Sorting block on index page ---
  document.querySelectorAll('.search_parameter .sorting .top a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.search_parameter .sorting .top a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');

      document.querySelectorAll('.search_parameter .sorting_content').forEach(content => content.classList.remove('active'));
      const target = document.getElementById(link.dataset.sorting);
      if (target) target.classList.add('active');
    });
  });

  // --- Brand select ---
  document.querySelectorAll('.select .visual_part').forEach(visual => {
    visual.addEventListener('click', () => {
      const list = visual.closest('.select').querySelector('.list');
      list.style.display = (list.style.display === 'block' ? 'none' : 'block');
    });
  });

  document.querySelectorAll('.select .list a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const select = link.closest('.select');
      const visualSpan = select.querySelector('.visual_part span');
      visualSpan.textContent = link.textContent;
      link.closest('.list').style.display = 'none';
    });
  });

  // --- View variant toggle ---
  document.querySelectorAll('.view_variant > div').forEach(div => {
    div.addEventListener('click', () => {
      document.querySelectorAll('.view_variant > div').forEach(d => d.classList.remove('active'));
      div.classList.add('active');

      document.querySelectorAll('.products .card').forEach(card => {
        if (document.querySelector('.view_variant .line.active')) {
          card.classList.add('line');
        } else {
          card.classList.remove('line');
        }
      });
    });
  });

  // --- Catalog filters toggle ---
  document.querySelectorAll('.filter h3.title').forEach(title => {
    title.addEventListener('click', () => {
      title.classList.toggle('open');
      const inner = title.nextElementSibling;
      if (inner) inner.style.display = (inner.style.display === 'block' ? 'none' : 'block');
    });
  });

  document.querySelectorAll('.filters .close').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.catalog_page .filters').classList.toggle('open');
    });
  });

  document.querySelectorAll('.filters_btn button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.catalog_page .filters').classList.toggle('open');
    });
  });

  // --- Product page image switch ---
  document.querySelectorAll('.product_page .mini_images .img').forEach(imgDiv => {
    imgDiv.addEventListener('click', () => {
      document.querySelectorAll('.product_page .mini_images .img').forEach(d => d.classList.remove('active'));
      imgDiv.classList.add('active');

      const mainImg = document.querySelector('.product_page .main_img img');
      const newSrc = imgDiv.querySelector('img').src;
      if (mainImg) mainImg.src = newSrc;
    });
  });

    // --- Модальное окно по выбору user_status ---
  document.querySelectorAll('[name="user_status"]').forEach(input => {
    input.addEventListener('change', function() {
      // Скрыть все блоки
      document.querySelectorAll('.form_inputs > div').forEach(div => {
        div.style.display = 'none';
      });

      // Показать блок по выбранному значению
      const target = document.querySelector(`.${this.value}`);
      if (target) target.style.display = 'flex';
    });
  });

  // --- Кнопки открытия модального окна ---
  const toOrdering = document.querySelectorAll('.to_ordering, ._reg');

  toOrdering.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '17px'; // учитываем скролл
      const modal = document.querySelector('.modal');
      if (modal) modal.style.display = 'flex';
    });
  });

  // --- Закрытие модального окна ---
  const modalCloseElements = document.querySelectorAll('.modal, .close');

  modalCloseElements.forEach(item => {
    item.addEventListener('click', (e) => {
      const modal = document.querySelector('.modal');
      if (!modal) return;

      // Проверка, что кликнули по затемнённой области или крестику
      if (
        e.target.classList.contains('modal') ||
        e.target.classList.contains('close') ||
        e.target.closest('.close')
      ) {
        document.body.style.overflow = 'visible';
        document.body.style.paddingRight = '0';
        modal.style.display = 'none';
      }
    });
  });

  // --- Phone mask (vanilla JS alternative requires external library, e.g., IMask) ---
  // const phoneInputs = document.querySelectorAll('[name="phone"]');
  // phoneInputs.forEach(input => IMask(input, { mask: '+{7}(000) 000-00-00' }));

  // --- Mobile menu toggle ---
  document.querySelectorAll('.hamburger').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      document.querySelector('.mobile_menu').classList.toggle('active');
    });
  });

  // --- Responsive DOM adjustments ---
  let mobileView = false;
  let filtersMobile = false;

  const handleResize = () => {
    if (window.innerWidth < 1300 && !filtersMobile) {
      filtersMobile = true;
      window.location.reload();
    } else if (window.innerWidth >= 1300 && filtersMobile) {
      filtersMobile = false;
      window.location.reload();
    }

    if (window.innerWidth < 993 && !mobileView) {
      mobileView = true;
      document.querySelector('.mobile_menu .container').append(document.querySelector('.header_panel'));
      document.querySelector('.header .container').append(document.querySelector('.header_catalog'));
    } else if (window.innerWidth >= 993 && mobileView) {
      mobileView = false;
      document.querySelector('.header .container').append(document.querySelector('.header_panel'));
      document.querySelector('.header_panel .bottom').prepend(document.querySelector('.header_catalog'));
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();

});