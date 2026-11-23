(() => {
  'use strict';

  const products = [
    {
      id: 'iphone-17', name: 'Apple iPhone 17', brand: 'Apple', category: 'Apple',
      memory: '256 ГБ', price: 65950, badge: 'Хит продаж', badgeClass: 'text-bg-primary',
      desc: 'Яркий OLED-дисплей 6,3″, камера 48 Мп и производительный чип A19.',
      image: 'images/iphone.webp',
      specs: [['Экран', '6,3″ Super Retina XDR OLED'], ['Память', '256 ГБ'], ['Камера', '48 Мп основная + 48 Мп сверхширокоугольная'], ['Процессор', 'Apple A19'], ['Защита', 'IP68'], ['Связь', '5G, eSIM / nano-SIM (зависит от региона)']],
      features: ['Плавный дисплей ProMotion до 120 Гц', 'Камера 48 Мп для повседневной съёмки', 'Корпус с защитой от воды и пыли IP68']
    },
    {
      id: 'iphone-17-pro', name: 'Apple iPhone 17 Pro', brand: 'Apple', category: 'Apple',
      memory: '256 ГБ', price: 104550, badge: 'Pro', badgeClass: 'text-bg-dark',
      desc: 'Флагманская камера Pro Fusion, дисплей 6,3″ и чип A19 Pro.',
      image: 'images/iphone 17 pro.webp',
      specs: [['Экран', '6,3″ Super Retina XDR OLED'], ['Память', '256 ГБ'], ['Камера', 'Система Pro Fusion 48 Мп'], ['Процессор', 'Apple A19 Pro'], ['Материал', 'Алюминиевый корпус'], ['Защита', 'IP68']],
      features: ['Система камер Pro Fusion', 'Производительность для фото и видео', 'Премиальный алюминиевый корпус']
    },
    {
      id: 'galaxy-s26', name: 'Samsung Galaxy S26', brand: 'Samsung', category: 'Samsung',
      memory: '256 ГБ', price: 61990, badge: 'Популярный', badgeClass: 'text-bg-primary',
      desc: 'Компактный Android-флагман с AMOLED-экраном и универсальной камерой.',
      image: 'images/galaxy s 26.webp',
      specs: [['Экран', '6,3″ Dynamic AMOLED 2X'], ['Память', '256 ГБ'], ['Камера', '50 Мп основная + телефото + ультраширокая'], ['Платформа', 'Samsung Exynos / Snapdragon (зависит от региона)'], ['Защита', 'IP68'], ['Связь', '5G']],
      features: ['Яркий AMOLED-дисплей 120 Гц', 'Универсальная система камер', 'Компактный флагманский формат']
    },
    {
      id: 'galaxy-s26-ultra', name: 'Samsung Galaxy S26 Ultra', brand: 'Samsung', category: 'Samsung',
      memory: '256 ГБ', price: 83990, badge: 'Флагман', badgeClass: 'text-bg-dark',
      desc: 'Большой экран, продвинутый зум и поддержка S Pen.',
      image: 'images/galaxy s 26 ultra.webp',
      specs: [['Экран', '6,9″ Dynamic AMOLED 2X'], ['Память', '256 ГБ'], ['Камера', 'Основной модуль высокого разрешения + телеобъективы'], ['Платформа', 'Snapdragon for Galaxy'], ['Дополнительно', 'S Pen'], ['Защита', 'IP68']],
      features: ['Большой экран для работы и развлечений', 'Продвинутая система камер с зумом', 'Встроенный стилус S Pen']
    },
    {
      id: 'galaxy-a57', name: 'Samsung Galaxy A57', brand: 'Samsung', category: 'Samsung',
      memory: '128 ГБ', price: 30990, badge: 'Разумный выбор', badgeClass: 'text-bg-success',
      desc: 'Сбалансированный смартфон для общения, фото и повседневных задач.',
      image: 'https://admin.ledikom.mk/uploads/items/5765/1776847044-50.jpg?v=1',
      specs: [['Экран', 'Super AMOLED'], ['Память', '128 ГБ'], ['Камера', 'Основная камера с оптической стабилизацией'], ['Сеть', '5G'], ['Система', 'Android'], ['Линейка', 'Galaxy A']],
      features: ['Яркий AMOLED-дисплей', 'Подходит для повседневных задач', 'Доступнее флагманской серии S']
    },
    {
      id: 'xiaomi-17t', name: 'Xiaomi 17T', brand: 'Xiaomi', category: 'Xiaomi',
      memory: '256 ГБ', price: 39990, badge: 'Новинка', badgeClass: 'text-bg-success',
      desc: 'AMOLED-дисплей, камера с настройкой Leica и ёмкий аккумулятор.',
      image: 'https://images.eprice.it/nobrand/0/hres/154/310081154/ICECAT_681c44ac-bfb6-40cc-980c-57321ac3575a-0.jpg',
      specs: [['Экран', '6,59″ AMOLED, 120 Гц'], ['Память', '256 ГБ'], ['Камера', '50 + 50 + 12 Мп, Leica'], ['Процессор', 'MediaTek Dimensity 8500-Ultra'], ['Аккумулятор', '6500 мА·ч'], ['Система', 'Android 16']],
      features: ['AMOLED-экран 120 Гц', 'Камеры с настройкой Leica', 'Аккумулятор 6500 мА·ч']
    },
    {
      id: 'redmi-note-17-pro', name: 'Redmi Note 17 Pro 5G', brand: 'Xiaomi', category: 'Xiaomi',
      memory: '128 ГБ', price: 25690, badge: 'Доступная цена', badgeClass: 'text-bg-warning',
      desc: 'Большой AMOLED-дисплей и хорошая основная камера за разумные деньги.',
      image: 'https://www.xiaomistore.pt/cdn/shop/files/redmi-note-pro-17-5g.png?v=1787843861&width=1200',
      specs: [['Экран', '6,83″ AMOLED'], ['Память', '128 ГБ'], ['Камера', '50 Мп основная + сверхширокоугольная'], ['Сеть', '5G'], ['Система', 'Android'], ['Линейка', 'Redmi Note']],
      features: ['Большой AMOLED-дисплей', 'Основная камера 50 Мп', 'Доступная модель с поддержкой 5G']
    }
  ];

  const CART_KEY = 'techstore_cart_v2';
  const FAV_KEY = 'techstore_favorites_v2';
  const money = value => new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
  const productWord = n => (n % 10 === 1 && n % 100 !== 11) ? 'товар' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) ? 'товара' : 'товаров';
  const safeRead = (key, fallback) => {
    try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; }
    catch { return fallback; }
  };
  const getCart = () => safeRead(CART_KEY, []);
  const saveCart = cart => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartCount(); };
  const getFavorites = () => safeRead(FAV_KEY, []);
  const byId = id => products.find(item => item.id === id);
  const getImage = product => product.image || 'images/phone-fallback.svg';
  const fallbackImages = root => {
    (root || document).querySelectorAll('img[data-product-image]').forEach(img => {
      img.addEventListener('error', () => { img.onerror = null; img.src = 'images/phone-fallback.svg'; }, { once: true });
    });
  };

  function ensureToast() {
    if (document.querySelector('#siteToast')) return;
    const holder = document.createElement('div');
    holder.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    holder.innerHTML = `<div id="siteToast" class="toast border-0 shadow" role="status" aria-live="polite" aria-atomic="true"><div class="d-flex"><div class="toast-body" id="toastMessage">Готово</div><button type="button" class="btn-close me-3 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button></div></div>`;
    document.body.appendChild(holder);
  }
  function notify(message) {
    ensureToast();
    const node = document.getElementById('siteToast');
    document.getElementById('toastMessage').textContent = message;
    if (window.bootstrap?.Toast) bootstrap.Toast.getOrCreateInstance(node, { delay: 2600 }).show();
    else window.alert(message);
  }
  function updateCartCount() {
    const count = getCart().reduce((sum, row) => sum + row.qty, 0);
    document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = count; el.classList.toggle('d-none', count === 0); });
  }
  function addToCart(id, qty = 1) {
    const product = byId(id);
    if (!product) return;
    const cart = getCart();
    const row = cart.find(item => item.id === id);
    if (row) row.qty = Math.min(20, row.qty + qty);
    else cart.push({ id, qty: Math.max(1, Math.min(20, qty)) });
    saveCart(cart);
    notify(`${product.name} добавлен в корзину`);
  }
  function toggleFavorite(id, button) {
    const favorites = getFavorites();
    const index = favorites.indexOf(id);
    if (index >= 0) favorites.splice(index, 1); else favorites.push(id);
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    if (button) {
      button.classList.toggle('is-favorite', favorites.includes(id));
      button.setAttribute('aria-pressed', String(favorites.includes(id)));
      button.textContent = favorites.includes(id) ? '♥' : '♡';
    }
    notify(index >= 0 ? 'Удалено из избранного' : 'Добавлено в избранное');
  }

  function productCard(product, compact = false) {
    const favorite = getFavorites().includes(product.id);
    return `<div class="col-12 col-sm-6 ${compact ? 'col-xl-3' : 'col-xl-4'}" data-product-card>
      <article class="product-card card h-100">
        <div class="product-media">
          <span class="badge ${product.badgeClass} product-badge">${product.badge}</span>
          <button class="favorite-btn ${favorite ? 'is-favorite' : ''}" type="button" data-favorite="${product.id}" aria-label="Добавить в избранное" aria-pressed="${favorite}">${favorite ? '♥' : '♡'}</button>
          <a href="product.html?id=${product.id}" aria-label="Подробнее: ${product.name}">
            <img data-product-image src="${getImage(product)}" alt="${product.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer">
          </a>
        </div>
        <div class="card-body">
          <div class="product-meta">${product.brand} · ${product.memory}</div>
          <h3 class="card-title h5"><a class="text-decoration-none" href="product.html?id=${product.id}">${product.name}</a></h3>
          <p class="product-description">${product.desc}</p>
          <div class="product-actions">
            <span class="product-price">${money(product.price)}</span>
            <button class="btn btn-primary btn-sm" type="button" data-add="${product.id}">В корзину</button>
          </div>
        </div>
      </article>
    </div>`;
  }

  function renderHome() {
    const grid = document.querySelector('[data-home-products]');
    if (grid) grid.innerHTML = products.slice(0, 4).map(product => productCard(product, true)).join('');
    fallbackImages(grid);
  }

  function renderCatalog() {
    const grid = document.querySelector('[data-catalog-products]');
    if (!grid) return;
    const search = document.querySelector('[data-catalog-search]');
    const sort = document.querySelector('[data-catalog-sort]');
    const range = document.querySelector('[data-price-range]');
    const rangeValue = document.querySelector('[data-price-readout]');
    const count = document.querySelector('[data-catalog-count]');
    const reset = document.querySelector('[data-filter-reset]');
    const selectedBrands = () => [...document.querySelectorAll('[data-brand-filter]:checked')].map(el => el.value);
    let quickFilter = '';
    const quickMatches = product => {
      if (quickFilter === 'under40') return product.price <= 40000;
      if (quickFilter === 'flagship') return ['iphone-17-pro', 'galaxy-s26', 'galaxy-s26-ultra'].includes(product.id);
      return true;
    };
    const queryFromUrl = new URLSearchParams(location.search).get('q') || '';
    if (search && queryFromUrl && !search.value) search.value = queryFromUrl;
    const apply = () => {
      const query = (search?.value || '').trim().toLocaleLowerCase('ru');
      const brands = selectedBrands();
      const max = Number(range?.value || 120000);
      if (rangeValue) rangeValue.textContent = money(max);
      if (range) {
        const percent = (max / Number(range.max)) * 100;
        range.style.background = `linear-gradient(to right, #2864e8 ${percent}%, #dce6f8 ${percent}%)`;
      }
      let result = products.filter(product => {
        const matchBrand = !brands.length || brands.includes(product.brand);
        const matchPrice = product.price <= max;
        const haystack = `${product.name} ${product.brand} ${product.desc} ${product.memory}`.toLocaleLowerCase('ru');
        return matchBrand && matchPrice && quickMatches(product) && (!query || haystack.includes(query));
      });
      const mode = sort?.value || 'popular';
      if (mode === 'cheap') result.sort((a,b) => a.price - b.price);
      if (mode === 'expensive') result.sort((a,b) => b.price - a.price);
      if (mode === 'name') result.sort((a,b) => a.name.localeCompare(b.name, 'ru'));
      count.textContent = `Найдено: ${result.length} ${productWord(result.length)}`;
      grid.innerHTML = result.length ? result.map(product => productCard(product)).join('') : `<div class="col-12"><div class="empty-state"><div class="display-6 mb-2">⌕</div><h3 class="h5 text-dark">Ничего не найдено</h3><p class="mb-3">Измени фильтры или сбрось параметры поиска.</p><button class="btn btn-outline-primary" type="button" data-filter-reset>Сбросить фильтры</button></div></div>`;
      fallbackImages(grid);
    };
    search?.addEventListener('input', () => { quickFilter = ''; apply(); });
    sort?.addEventListener('change', apply);
    range?.addEventListener('input', () => { quickFilter = ''; apply(); });
    document.querySelectorAll('[data-brand-filter]').forEach(el => el.addEventListener('change', () => { quickFilter = ''; apply(); }));
    document.querySelectorAll('[data-quick-filter]').forEach(button => button.addEventListener('click', () => {
      quickFilter = button.dataset.quickFilter;
      if (range) range.value = quickFilter === 'under40' ? 40000 : 120000;
      document.querySelectorAll('[data-brand-filter]').forEach(el => { el.checked = false; });
      apply();
    }));
    reset?.addEventListener('click', () => {
      quickFilter = '';
      if (search) search.value = '';
      if (range) range.value = range.max;
      if (sort) sort.value = 'popular';
      document.querySelectorAll('[data-brand-filter]').forEach(el => { el.checked = false; });
      apply();
    });
    document.addEventListener('click', event => {
      if (event.target.closest('[data-filter-reset]') && event.target !== reset) reset?.click();
    });
    apply();
  }

  function renderProduct() {
    const root = document.querySelector('[data-product-detail]');
    if (!root) return;
    const id = new URLSearchParams(location.search).get('id') || products[0].id;
    const product = byId(id) || products[0];
    const titles = document.querySelectorAll('[data-detail-name]');
    const image = document.querySelector('[data-detail-image]');
    document.title = `${product.name} — TechStore`;
    document.querySelector('[data-detail-brand]').textContent = `${product.brand} · ${product.memory}`;
    titles.forEach(title => { title.textContent = product.name; });
    document.querySelector('[data-detail-price]').textContent = money(product.price);
    document.querySelector('[data-detail-description]').textContent = product.desc;
    document.querySelector('[data-detail-badge]').textContent = product.badge;
    image.src = product.image;
    image.alt = product.name;
    image.addEventListener('error', () => { image.onerror = null; image.src = 'images/phone-fallback.svg'; }, { once: true });
    document.querySelector('[data-detail-features]').innerHTML = product.features.map(text => `<li class="detail-feature"><span>✓</span><span>${text}</span></li>`).join('');
    document.querySelector('[data-detail-specs]').innerHTML = product.specs.map(([key,value]) => `<tr><th scope="row">${key}</th><td>${value}</td></tr>`).join('');
    document.querySelector('[data-detail-add]').addEventListener('click', () => {
      const qty = Math.max(1, Number(document.querySelector('[data-detail-qty]').textContent || 1));
      addToCart(product.id, qty);
    });
    let qty = 1;
    document.querySelector('[data-qty-minus]').addEventListener('click', () => { qty = Math.max(1, qty - 1); document.querySelector('[data-detail-qty]').textContent = qty; });
    document.querySelector('[data-qty-plus]').addEventListener('click', () => { qty = Math.min(20, qty + 1); document.querySelector('[data-detail-qty]').textContent = qty; });
    const favorite = document.querySelector('[data-detail-favorite]');
    const favs = getFavorites(); favorite.textContent = favs.includes(product.id) ? '♥ В избранном' : '♡ В избранное';
    favorite.classList.toggle('btn-danger', favs.includes(product.id));
    favorite.addEventListener('click', () => { toggleFavorite(product.id); const on = getFavorites().includes(product.id); favorite.textContent = on ? '♥ В избранном' : '♡ В избранное'; });
    const related = document.querySelector('[data-related-products]');
    related.innerHTML = products.filter(p => p.id !== product.id).slice(0,3).map(p => `<a class="related-item" href="product.html?id=${p.id}"><img src="${p.image}" alt="" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='images/phone-fallback.svg'"><span><strong>${p.name}</strong><small>${money(p.price)}</small></span></a>`).join('');
  }

  function renderOrder() {
    const list = document.querySelector('[data-cart-list]');
    if (!list) return;
    const subtotalEl = document.querySelector('[data-order-subtotal]');
    const discountEl = document.querySelector('[data-order-discount]');
    const totalEl = document.querySelector('[data-order-total]');
    const promoInput = document.querySelector('[data-promo-input]');
    const promoButton = document.querySelector('[data-promo-apply]');
    const promoMessage = document.querySelector('[data-promo-message]');
    const empty = document.querySelector('[data-cart-empty]');
    const form = document.querySelector('[data-order-form]');
    const chosen = document.querySelector('[data-order-product]');
    let promoApplied = false;

    chosen.innerHTML = `<option value="">Выберите товар или тему заявки</option>` + products.map(p => `<option value="${p.id}">${p.name} — ${money(p.price)}</option>`).join('');
    const paint = () => {
      const cart = getCart();
      list.innerHTML = cart.length ? cart.map(row => {
        const p = byId(row.id); if (!p) return '';
        return `<div class="cart-row">
          <img class="cart-thumb" src="${p.image}" alt="${p.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='images/phone-fallback.svg'">
          <div><div class="cart-row-title">${p.name}</div><div class="cart-row-sub">${p.memory} · ${money(p.price)} / шт.</div>
            <div class="cart-row-controls"><button type="button" data-cart-minus="${p.id}" aria-label="Уменьшить количество">−</button><span class="fw-semibold">${row.qty}</span><button type="button" data-cart-plus="${p.id}" aria-label="Увеличить количество">+</button><button type="button" class="cart-remove" data-cart-remove="${p.id}">Удалить</button></div></div>
          <div class="cart-line-total fw-bold">${money(p.price * row.qty)}</div>
        </div>`;
      }).join('') : '';
      empty.classList.toggle('d-none', cart.length > 0);
      list.classList.toggle('d-none', cart.length === 0);
      const subtotal = cart.reduce((sum,row) => sum + (byId(row.id)?.price || 0) * row.qty, 0);
      const discount = promoApplied ? Math.round(subtotal * .10) : 0;
      subtotalEl.textContent = money(subtotal);
      discountEl.textContent = `− ${money(discount)}`;
      totalEl.textContent = money(subtotal - discount);
      if (!chosen.value && cart.length) chosen.value = cart[0].id;
      updateCartCount();
    };
    list.addEventListener('click', event => {
      const minus = event.target.closest('[data-cart-minus]');
      const plus = event.target.closest('[data-cart-plus]');
      const remove = event.target.closest('[data-cart-remove]');
      let cart = getCart();
      if (minus) { const row = cart.find(r => r.id === minus.dataset.cartMinus); if (row) row.qty = Math.max(1, row.qty - 1); }
      if (plus) { const row = cart.find(r => r.id === plus.dataset.cartPlus); if (row) row.qty = Math.min(20, row.qty + 1); }
      if (remove) cart = cart.filter(r => r.id !== remove.dataset.cartRemove);
      saveCart(cart); paint();
    });
    promoButton.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      promoApplied = code === 'TECH10';
      promoMessage.textContent = promoApplied ? 'Промокод применён: скидка 10%.' : 'Промокод не найден. Попробуй TECH10.';
      promoMessage.className = `small mt-2 ${promoApplied ? 'text-success' : 'text-danger'}`;
      paint();
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.checkValidity()) { form.classList.add('was-validated'); form.reportValidity(); return; }
      if (!getCart().length && !chosen.value) { notify('Добавь товар в корзину или выбери товар в форме.'); return; }
      if (!getCart().length && chosen.value) { saveCart([{ id: chosen.value, qty: 1 }]); paint(); }
      const success = document.querySelector('[data-order-success]');
      success.classList.add('is-visible');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      success.textContent = 'Заявка заполнена. Это демонстрационный проект: данные проверены в браузере, но на сервер не отправляются.';
    });
    paint();
  }

  function initGlobalSearch() {
    document.querySelectorAll('[data-global-search-form]').forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        const q = form.querySelector('input').value.trim();
        location.href = `catalog.html${q ? `?q=${encodeURIComponent(q)}` : ''}`;
      });
    });
  }

  document.addEventListener('click', event => {
    const add = event.target.closest('[data-add]');
    if (add) addToCart(add.dataset.add);
    const fav = event.target.closest('[data-favorite]');
    if (fav) toggleFavorite(fav.dataset.favorite, fav);
  });

  document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    initGlobalSearch();
    renderHome();
    renderCatalog();
    renderProduct();
    renderOrder();
    fallbackImages();
  });

  window.TechStore = { products, addToCart, money };
})();
