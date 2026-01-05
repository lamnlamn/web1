// --- DATA ---
// Removed textColor, reverted to standard white (handled in CSS)
const HERO_SLIDES = [
    {
        id: 1, type: 'image',
        src: './assets/shop_image/top_banner/shop_banner1.gif',
        title: "Essential<br><em>Elegance</em>", 
        subtitle: "WINTER / SPRING 2025", 
        btnText: "Discover",
        targetId: "cat_1",
        align: "center"
    },
    {
        id: 2, type: 'image',
        src: './assets/shop_image/top_banner/shop_banner2.webp',
        title: "The Art of<br><em>Layering</em>", 
        subtitle: "MODERN SILHOUETTE", 
        btnText: "View Collection",
        targetId: "cat_2",
        align: "left-compact"
    },
    {
        id: 3, type: 'image',
        src: './assets/shop_image/top_banner/shop_banner3.webp',
        title: "Urban<br><em>Movement</em>", 
        subtitle: "NEW YORK CITY WALKERS", 
        btnText: "Shop Now",
        targetId: "cat_3",
        align: "left-compact"
    },
    {
        id: 4, type: 'image',
        src: './assets/shop_image/top_banner/shop_banner4.avif',
        title: "Modern<br><em>Classics</em>",
        subtitle: "OFFICE ESSENTIALS",
        btnText: "Shop Office",
        targetId: "cat_3",
        align: "left-compact"
    }
];

// Reverted to Original Vietnamese Names
const ALL_PRODUCTS = [
    { id: 1, name: "Áo 1", price: 99000, originalPrice: 999000, image: "./assets/shop_image/products/row1/ao_MU.avif", tag: "Quý ông PHẢI CÓ",category: "Outerwear" },
    { id: 2, name: "Áo 2", price: 399000, originalPrice: 599000, image: "./assets/shop_image/products/row1/ao2.avif", tag: "OOia", category: "Knitwear" },
    { id: 3, name: "Áo 3", price: 399000, originalPrice: 599000, image: "./assets/shop_image/products/row1/ao3.avif", tag: "OOia", category: "Bottoms" },
    { id: 4, name: "Áo 4", price: 499000, image: "./assets/shop_image/products/row1/ao4.webp", tag: "OOia", category: "Shirts" },
    { id: 5, name: "Áo 5", price: 399000, originalPrice: 999000, image: "./assets/shop_image/products/row2/ao14.avif", tag: "OOia",category: "T-Shirts" },
    { id: 6, name: "Áo 6", price: 980000, originalPrice: 999000, image: "./assets/shop_image/products/row2/ao12.avif", tag: "OOia", category: "Jeans" },
    { id: 7, name: "Áo 36", price: 666666, originalPrice: 3600000, image: "./assets/shop_image/products/row2/ao_JU.jpg",tag: "Vô địch tầm giá", category: "Outerwear" },
    { id: 8, name: "Áo 7", price: 299000,  originalPrice: 499000, image: "./assets/shop_image/products/row2/ao13.avif", tag: "OOia", category: "Accessories" },
    { id: 9, name: "Áo 8", price: 599000,  originalPrice: 699000, image: "./assets/shop_image/products/row3/ao8.avif",tag: "OOia", category: "Outerwear" },
    { id: 10, name: "Quarter zip", price: 10000,  originalPrice: 1000000, image: "./assets/shop_image/products/row3/ao9.avif", tag: "Matcha boy", category: "Skirts" },
    { id: 11, name: "Áo 9", price: 699000,  originalPrice: 700000, image: "./assets/shop_image/products/row3/ao10.avif", tag: "OOia",  category: "Outerwear" },
    { id: 12, name: "Tê con 6 sao", price: 1800000, originalPrice: 3600000,image: "./assets/shop_image/products/row3/T1.png", tag: "Tê Oăn", category: "Accessories" }
];

const CATEGORY_SECTIONS = [
    {
        id: "cat_1", title: "Outerwear",
        description: "Bảo vệ bạn khỏi các yếu tố thời tiết nhưng vẫn giữ được vẻ thanh lịch. Các thiết kế áo khoác của chúng tôi tập trung vào phom dáng kiến trúc và chất liệu bền vững.",
        bannerImage: "./assets/shop_image/base_banner/base_banner1.webp",
        products: ALL_PRODUCTS.slice(0, 4)
    },
    {
        id: "cat_2", title: "Casual",
        description: "Sự sang trọng thầm lặng cho ngày thường. Chất liệu cotton Ai Cập và Linen thoáng khí mang lại cảm giác nhẹ nhàng tựa như không.",
        bannerImage: "./assets/shop_image/base_banner/base_banner2.jpg",
        products: ALL_PRODUCTS.slice(4, 8)
    },
    {
        id: "cat_3", title: "Office",
        description: "Định nghĩa lại trang phục công sở hiện đại. Những đường cắt sắc sảo, tối giản chi tiết thừa để tôn vinh sự chuyên nghiệp.",
        bannerImage: "./assets/shop_image/base_banner/base_banner3.jpg",
        products: ALL_PRODUCTS.slice(8, 12)
    }
];

// --- STATE ---
let currentState = {
    slideIndex: 0,
    user: localStorage.getItem('currentUser') || null,
    cart: [],
    wishlist: [],
    selectedProductForCart: null
};

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderCategories();
    updateNavbar();
    setInterval(() => changeSlide(1), 6000);
    
    // Fade in on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
});

// --- RENDER FUNCTIONS ---
function renderHero() {
    const container = document.getElementById('hero-slides');
    const indicators = document.getElementById('hero-indicators');
    
    container.innerHTML = HERO_SLIDES.map((slide, idx) => `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}" id="slide-${idx}">
            <div class="hero-media" style="background-image: url('${slide.src}'); background-size: cover; background-position: center;"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content ${slide.align === 'left-compact' ? 'align-left-compact' : 'align-center'}">
                <div class="hero-text">
                    <p>${slide.subtitle}</p>
                    <h2>${slide.title}</h2>
                    <button onclick="document.getElementById('${slide.targetId}').scrollIntoView({behavior:'smooth'})" class="hero-btn">
                        ${slide.btnText}
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    indicators.innerHTML = HERO_SLIDES.map((_, idx) => `
        <div onclick="goToSlide(${idx})" class="indicator ${idx === 0 ? 'active' : ''}" id="indicator-${idx}"></div>
    `).join('');
}

function renderCategories() {
    const main = document.getElementById('main-content');
    main.innerHTML = CATEGORY_SECTIONS.map(section => `
        <section id="${section.id}" class="category-section">
            <div class="container">
                <div class="section-header">
                    <h3>${section.title}</h3>
                    <div class="divider"></div>
                </div>
                
                <!-- Big Banner Layout: Banner on top, then Desc + Products -->
                <div class="cat-content">
                    <div class="banner-img-wrap">
                        <img src="${section.bannerImage}" class="banner-img" alt="${section.title}">
                    </div>

                    <div class="cat-desc">
                        <p>${section.description}</p>
                        <button class="outline-btn">View All</button>
                    </div>

                    <div class="product-grid" id="products-${section.id}">
                        ${section.products.map(p => renderProductCard(p)).join('')}
                    </div>
                </div>
            </div>
        </section>
    `).join('');
}

function renderProductCard(product) {
    const isLiked = currentState.wishlist.includes(product.id);
    // Added ID to the wrapper div to allow scrolling to it
    return `
        <div class="product-card" id="p-card-${product.id}">
            <div class="p-img-box">
                <img src="${product.image}" class="p-img" alt="${product.name}">
                ${product.tag ? `<span class="p-tag">${product.tag}</span>` : ''}
                <button onclick="initAddToCart(${product.id})" class="add-cart-btn">Add to Cart</button>
            </div>
            <div class="p-info">
                <div style="flex:1">
                    <h4 class="p-name">${product.name}</h4>
                    <div>
                        <span class="p-price ${product.originalPrice ? 'text-red' : ''}">${product.price.toLocaleString()} ₫</span>
                        ${product.originalPrice ? `<span class="p-price-old">${product.originalPrice.toLocaleString()} ₫</span>` : ''}
                    </div>
                </div>
                <button onclick="toggleWishlist(${product.id})" class="like-btn ${isLiked ? 'liked' : ''}" id="like-btn-${product.id}">
                    <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>
        </div>
    `;
}

// --- LOGIC: SLIDER ---
function changeSlide(direction) {
    let nextIndex = (currentState.slideIndex + direction + HERO_SLIDES.length) % HERO_SLIDES.length;
    goToSlide(nextIndex);
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if(slides[currentState.slideIndex]) {
        slides[currentState.slideIndex].classList.remove('active');
        indicators[currentState.slideIndex].classList.remove('active');
    }

    currentState.slideIndex = index;
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

// --- LOGIC: ACTIONS ---
function updateNavbar() {
    const wBadge = document.getElementById('wishlist-badge');
    const cBadge = document.getElementById('cart-badge');
    const uBtn = document.getElementById('user-btn');

    if(currentState.wishlist.length > 0) { 
        wBadge.innerText = currentState.wishlist.length; 
        wBadge.classList.remove('hidden'); 
    } else {
        wBadge.classList.add('hidden');
    }

    if(currentState.cart.length > 0) { 
        cBadge.innerText = currentState.cart.length; 
        cBadge.classList.remove('hidden'); 
    } else {
        cBadge.classList.add('hidden');
    }

    uBtn.innerText = currentState.user ? currentState.user : 'LOGIN';
}

function toggleWishlist(id) {
    const idx = currentState.wishlist.indexOf(id);
    if(idx === -1) {
        currentState.wishlist.push(id);
        showToast('Added to Wishlist');
    } else {
        currentState.wishlist.splice(idx, 1);
        showToast('Removed from Wishlist');
    }
    updateNavbar();
    
    // Update UI icons without re-rendering everything
    const btns = document.querySelectorAll(`#like-btn-${id}`);
    btns.forEach(btn => {
        const isLiked = currentState.wishlist.includes(id);
        btn.innerHTML = `<i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>`;
        if(isLiked) btn.classList.add('liked');
        else btn.classList.remove('liked');
    });
    
    if(document.getElementById('wishlist-content-list')) renderWishlistModal();
}

function initAddToCart(id) {
    const product = ALL_PRODUCTS.find(p => p.id === id);
    currentState.selectedProductForCart = product;
    openModal('SIZE_SELECTION');
}

function confirmAddToCart(size) {
    //Validate sản phẩm tồn tại
    if(!currentState.selectedProductForCart) {
        showToast('Lỗi: Không tìm thấy sản phẩm!');
        return;
    }

    // Validate Size
    // Nếu size là null, undefined hoặc rỗng
    if (!size || size === 'undefined') {
        showToast('Vui lòng chọn Size trước khi thêm!');
        return;
    }

    const item = { ...currentState.selectedProductForCart, size, quantity: 1 };
    currentState.cart.push(item);
    showToast(`Đã thêm ${item.name} (Size ${size}) vào giỏ`);
    updateNavbar();
    closeModal();
}

function removeFromCart(index) {
    currentState.cart.splice(index, 1);
    showToast('Item removed from bag');
    updateNavbar();
    openModal('CART'); // Re-render modal to show updated list
}

function toggleSizeGuide() {
    const guide = document.getElementById('size-guide');
    if(guide) guide.classList.toggle('hidden');
}

// --- LOGIC: SEARCH & NAVIGATION ---

// New function to handle navigation to a product from search
function navigateToProduct(id) {
    closeModal();
    const element = document.getElementById(`p-card-${id}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Optional: Add a visual cue class momentarily
        element.classList.add('highlight-product');
        setTimeout(() => element.classList.remove('highlight-product'), 2000);
    }
}

function performSearch(query) {
    const container = document.getElementById('search-results');
    if (!query) {
        container.innerHTML = '<p style="color:#999; text-align:center;">Vui lòng nhâp từ khóa để tìm kiếm...</p>';
        return;
    }
    const lowerQuery = query.toLowerCase().trim();
    const results = ALL_PRODUCTS.filter(p => p.name.toLowerCase().includes(lowerQuery));

    if (results.length === 0) {
        container.innerHTML = '<p style="color:#999; text-align:center;">No products found.</p>';
    } else {
        container.innerHTML = results.map(p => `
            <div class="search-result-item" onclick="navigateToProduct(${p.id})">
                <img src="${p.image}" class="search-result-img">
                <div>
                    <h4 style="font-family: var(--font-serif); font-size: 1rem;">${p.name}</h4>
                    <p style="font-size: 0.8rem; color: #666;">${p.category}</p>
                    <div>
                        <span class="${p.originalPrice ? 'text-red' : ''}" style="font-weight: 600;">${p.price.toLocaleString()} ₫</span>
                        ${p.originalPrice ? `<span style="text-decoration: line-through; color:#999; font-size:0.8rem; margin-left:5px;">${p.originalPrice.toLocaleString()} ₫</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function subscribeNewsletter() {
    const emailInput = document.getElementById('cs-email');
    const email = emailInput.value.trim(); // Xóa khoảng trắng thừa

    // 1. Kiểm tra rỗng
    if (!email) {
        showToast('Vui lòng nhập địa chỉ Email!');
        emailInput.focus();
        return;
    }

    // 2. Kiểm tra định dạng Email (Validate)
    if (!isValidEmail(email)) {
        showToast('Email không hợp lệ! (Ví dụ: abc@gmail.com)');
        emailInput.focus();
        return;
    }

    // 3. Thành công
    showToast('Cảm ơn bạn đã đăng ký!');
    emailInput.value = '';
}

// --- LOGIC: MODALS ---
function openModal(type) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');
    body.innerHTML = ''; 

    overlay.classList.remove('hidden');

    if(type === 'LOGIN') {
        if(currentState.user) {
            body.innerHTML = `
                <div class="modal-body-content">
                    <h2 class="modal-title">My Account</h2>
                    <div style="text-align: center; padding: 2rem 0;">
                        <p style="margin-bottom: 2rem; font-size: 1.2rem;">Welcome back, <strong>${currentState.user}</strong></p>
                        <button onclick="logout()" class="modal-btn">Log Out</button>
                    </div>
                </div>`;
        } else {
            body.innerHTML = `
                <div class="modal-body-content">
                    <h2 class="modal-title">Login</h2>
                    <div>
                        <input type="text" id="login-name" placeholder="Username / Email" class="input-field">
                        <input type="password" id="login-pass" placeholder="Password" class="input-field">
                        <button onclick="login()" class="modal-btn">Sign In</button>
                        <p style="text-align: center; margin-top: 1rem; font-size: 0.8rem; color: #666;">Don't have an account? <a href="#" style="text-decoration: underline;">Register</a></p>
                    </div>
                </div>`;
        }
    } else if (type === 'SEARCH') {
        body.innerHTML = `
            <div class="modal-body-content">
                <button onclick="closeModal()" class="close-modal-btn"><i class="fa-solid fa-xmark"></i></button>
                <h2 class="modal-title">Search</h2>
                <div class="search-input-container">
                    <input type="text" placeholder="Type to search..." class="search-input" oninput="performSearch(this.value)" autofocus>
                </div>
                <div id="search-results" class="search-results-grid">
                    <p style="color:#999; text-align:center;">Type to search for products...</p>
                </div>
            </div>
        `;
        // Autofocus input after render
        setTimeout(() => document.querySelector('.search-input').focus(), 100);

    } else if (type === 'CART') {
        const total = currentState.cart.reduce((sum, item) => sum + item.price, 0);
        // Cart Layout: Dark Header
        body.innerHTML = `
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div class="modal-header-cart">
                    <h2 class="modal-title">Shopping Bag</h2>
                    <span class="modal-subtitle">${currentState.cart.length} ITEMS</span>
                    <button onclick="closeModal()" class="close-modal-btn light"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div style="flex:1; overflow-y: auto; padding: 2rem;">
                    ${currentState.cart.length === 0 ? '<p style="color:#999; margin-top: 20px;">Your bag is empty.</p>' : currentState.cart.map((item, index) => `
                        <div class="modal-p-item">
                            <img src="${item.image}" class="modal-p-img">
                            <div style="flex:1">
                                <h4 style="font-family: var(--font-serif); font-size: 1rem;">${item.name}</h4>
                                <p style="font-size: 0.8rem; color: #666; margin: 5px 0;">Size: ${item.size}</p>
                                <div>
                                    <span style="font-weight: 600;" class="${item.originalPrice ? 'text-red' : ''}">${item.price.toLocaleString()} ₫</span>
                                    ${item.originalPrice ? `<span style="font-size: 0.8rem; color: #999; text-decoration: line-through; margin-left: 5px;">${item.originalPrice.toLocaleString()} ₫</span>` : ''}
                                </div>
                                <button onclick="removeFromCart(${index})" class="remove-item-btn">Remove</button>
                            </div>
                        </div>`).join('')}
                </div>
                <div style="padding: 2rem; border-top: 1px solid #eee;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; font-size: 1.1rem;">
                        <span>Total</span>
                        <span style="font-weight: 600;">${total.toLocaleString()} ₫</span>
                    </div>
                    <button class="modal-btn">Checkout</button>
                </div>
            </div>`;
    } else if (type === 'WISHLIST') {
        renderWishlistModal();
    } else if (type === 'SIZE_SELECTION') {
        const p = currentState.selectedProductForCart;
        // Size Selection with restored table
        body.innerHTML = `
            <div class="modal-body-content">
                <button onclick="closeModal()" class="close-modal-btn"><i class="fa-solid fa-xmark"></i></button>
                <h2 class="modal-title">Select Size</h2>
                <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                    <img src="${p.image}" style="width: 6rem; height: 8rem; object-fit: cover;">
                    <div>
                        <h4 style="font-family: var(--font-serif); font-size: 1.2rem; margin-bottom: 0.5rem;">${p.name}</h4>
                        <div>
                            <span style="font-weight: 600; font-size: 1rem;" class="${p.originalPrice ? 'text-red' : 'color-gray'}">${p.price.toLocaleString()} ₫</span>
                            ${p.originalPrice ? `<span style="font-size: 0.9rem; color: #999; text-decoration: line-through; margin-left: 5px;">${p.originalPrice.toLocaleString()} ₫</span>` : ''}
                        </div>
                    </div>
                </div>
                <div style="display: flex; gap: 10px; margin-bottom: 1rem;" id="size-options">
                    ${['S','M','L','XL'].map(s => `<button onclick="selectSize(this, '${s}')" class="size-btn">${s}</button>`).join('')}
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <button onclick="toggleSizeGuide()" class="guide-btn"><i class="fa-solid fa-ruler-horizontal"></i> Size Guide</button>
                    <div id="size-guide" class="size-table-wrap hidden">
                        <table class="size-table">
                            <thead><tr><th>Size</th><th>Height (cm)</th><th>Weight (kg)</th></tr></thead>
                            <tbody>
                                <tr><td>S</td><td>150-160</td><td>45-55</td></tr>
                                <tr><td>M</td><td>160-170</td><td>55-65</td></tr>
                                <tr><td>L</td><td>170-175</td><td>65-75</td></tr>
                                <tr><td>XL</td><td>175-180</td><td>75-85</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <button id="add-btn" disabled onclick="confirmAddToCart(this.dataset.size)" class="modal-btn">Add to Bag</button>
            </div>`;
    }
}

function renderWishlistModal() {
    const body = document.getElementById('modal-body');
    const items = ALL_PRODUCTS.filter(p => currentState.wishlist.includes(p.id));
    // Wishlist Layout: Light Header
    body.innerHTML = `
        <div id="wishlist-content-list" style="display: flex; flex-direction: column; height: 100%;">
            <div class="modal-header-wishlist">
                <h2 class="modal-title">Wishlist</h2>
                <span class="modal-subtitle">${items.length} SAVED</span>
                <button onclick="closeModal()" class="close-modal-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div style="flex:1; overflow-y: auto; padding: 2rem;">
                ${items.length === 0 ? '<p style="color:#999;">No items saved.</p>' : items.map(item => `
                    <div class="modal-p-item">
                        <img src="${item.image}" class="modal-p-img">
                        <div style="flex:1">
                            <h4 style="font-family: var(--font-serif);">${item.name}</h4>
                            <p style="font-weight: 600; margin: 5px 0;">${item.price.toLocaleString()} ₫</p>
                            <button onclick="toggleWishlist(${item.id})" style="font-size: 0.7rem; text-decoration: underline; text-transform: uppercase;">Remove</button>
                        </div>
                    </div>`).join('')}
            </div>
        </div>`;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
}

function selectSize(btn, size) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    const addBtn = document.getElementById('add-btn');
    addBtn.disabled = false;
    addBtn.dataset.size = size;
}

function login() {
    const nameInput = document.getElementById('login-name');
    const passInput = document.getElementById('login-pass'); // Cần ID này từ bước 1
    
    const name = nameInput.value.trim();
    const pass = passInput ? passInput.value.trim() : '';

    //Validate Tên đăng nhập
    if (!name) {
        showToast('Vui lòng nhập Tên đăng nhập!');
        nameInput.focus();
        return;
    }

    //Validate Mật khẩu (Ví dụ: phải trên 6 ký tự)
    if (!pass) {
        showToast('Vui lòng nhập Mật khẩu!');
        if(passInput) passInput.focus();
        return;
    }
    
    if (pass.length < 6) {
        showToast('Mật khẩu phải có ít nhất 6 ký tự!');
        if(passInput) passInput.focus();
        return;
    }

    //Xử lý logic đăng nhập
    currentState.user = name;
    localStorage.setItem('currentUser', name);
    showToast(`Chào mừng trở lại, ${name}`);
    updateNavbar();
    closeModal();
}

function logout() {
    currentState.user = null;
    localStorage.removeItem('currentUser');
    showToast('Signed out');
    updateNavbar();
    closeModal();
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const overlay = document.querySelector('.menu-overlay');
    if(menu && overlay) {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}
//Validate 1
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}