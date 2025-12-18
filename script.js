// --- DATA ---
const HERO_SLIDES = [
    {
        id: 1, type: 'image',
        src: 'https://assets.vogue.com/photos/6939ce24672674ea722296a1/16:9/w_1280%2Cc_limit/2doechii_1-ezgif.com-video-to-gif-converter%2520(1).gif',
        title: "ESSENTIAL ELEGANCE", subtitle: "Vẻ đẹp tối giản cho nhịp sống hiện đại.", btnText: "KHÁM PHÁ",
        targetId: "cat_1"
    },
    {
        id: 2, type: 'image',
        src: 'https://assets.vogue.com/photos/68e58b7c8c5cb304e0c1028e/16:9/w_1920%2Cc_limit/PFW_SS26_streetstyle_day8_philoh_03.jpg',
        title: "WINTER LAYERS", subtitle: "Ấm áp và phong cách trong từng lớp áo.", btnText: "XEM BỘ SƯU TẬP",
        targetId: "cat_2"
    },
    {
        id: 3, type: 'image',
        src: 'https://assets.vogue.com/photos/6941ccde1117f69e11df3276/master/w_1920,c_limit/121625_bestalbums2025_collage%20(1).jpg',
        title: "URBAN MOVEMENT", subtitle: "Thoải mái vận động, tự do khám phá.", btnText: "MUA NGAY",
        targetId: "cat_3"
    },
    {
        id: 4, type: 'image',
        src: 'https://www.prada.com/content/dam/pradaspa/home_page/2025/10/Holiday/pradasphere/Pradasphere_DT.jpg/_jcr_content/renditions/cq5dam.web.3360.3360.jpg',
        title: "MODERN CLASSICS", subtitle: "Những thiết kế kinh điển được tái định nghĩa.", btnText: "CHI TIẾT",
        targetId: "cat_1"
    }
];

const ALL_PRODUCTS = [
    { id: 1, name: "Áo 1", price: 1299000, image: "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/CALIFORNIA_CASHMERE_V-NECK_DRESS_NAVY2.jpg?v=1709177309&format=webp&width=1800&height=1800", category: "Outerwear" },
    { id: 2, name: "Áo 2", price: 799000, originalPrice: 999000, image: "https://www.jcrew.com/s7-img-facade/BI841_BL8133?hei=380&crop=0,0,304,0", tag: "Sale", category: "Knitwear" },
    { id: 3, name: "Áo 3", price: 799000, image: "https://www.jcrew.com/s7-img-facade/CM298_SR7781?hei=380&crop=0,0,304,0", category: "Bottoms" },
    { id: 4, name: "Áo 4", price: 499000, image: "https://www.jcrew.com/s7-img-facade/CM297_SR7307?hei=380&crop=0,0,304,0", category: "Shirts" },
    { id: 5, name: "Áo 5", price: 399000, image: "https://www.jcrew.com/s7-img-facade/CO480_SR8417?hei=380&crop=0,0,304,0", category: "T-Shirts" },
    { id: 6, name: "Quần 1", price: 999000, image: "https://www.jcrew.com/s7-img-facade/AR885_NA0111?hei=640&crop=0,0,512,0", tag: "New", category: "Jeans" },
    { id: 7, name: "Áo 36", price: 1499000, image: "https://www.jcrew.com/s7-img-facade/CO474_BL5678?hei=380&crop=0,0,304,0", category: "Outerwear" },
    { id: 8, name: "Áo 7", price: 299000, image: "https://www.jcrew.com/s7-img-facade/CO536_SR7721?hei=380&crop=0,0,304,0", category: "Accessories" },
    { id: 9, name: "Áo 8", price: 599000, image: "https://www.jcrew.com/s7-img-facade/CO495_BL7398?hei=380&crop=0,0,304,0", category: "Knitwear" },
    { id: 10, name: "Áo 9", price: 999000, image: "https://www.jcrew.com/s7-img-facade/BT793_NA6434?hei=380&crop=0,0,304,0", category: "Skirts" },
    { id: 11, name: "Áo 10", price: 1699000, image: "https://www.jcrew.com/s7-img-facade/CM304_HT3002?hei=380&crop=0,0,304,0", category: "Outerwear" },
    { id: 12, name: "Áo 18", price: 399000, image: "https://www.jcrew.com/s7-img-facade/CO535_SR8604?hei=380&crop=0,0,304,0", category: "Accessories" }
];

const CATEGORY_SECTIONS = [
    {
        id: "cat_1", title: "OUTERWEAR COLLECTION",
        description: "Công nghệ giữ ấm tiên tiến trong thiết kế gọn nhẹ. Sẵn sàng cho mọi điều kiện thời tiết.",
        bannerImage: "https://www.lofficielph.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F42755%2F1758715785-women_250719_lv_s10_052_b_lvcom_1920x1080_animation.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75",
        products: ALL_PRODUCTS.slice(0, 4)
    },
    {
        id: "cat_2", title: "CASUAL COMFORT",
        description: "Chất liệu cotton mềm mại và phom dáng rộng rãi mang lại sự thoải mái tuyệt đối cho ngày dài.",
        bannerImage: "https://im.uniqlo.com/global-cms/spa/resb3c2de9e8b169740c7f2ca991039164cfr.jpg",
        products: ALL_PRODUCTS.slice(4, 8)
    },
    {
        id: "cat_3", title: "OFFICE WEAR",
        description: "Lịch lãm chốn công sở với các thiết kế tinh tế, chống nhăn và thoáng khí.",
        bannerImage: "http://fashionnet.vn/public/uploads/images/peter-do-ss22-fashion-show-main(1).jpg",
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
    setInterval(() => changeSlide(1), 8000);
    
    // Scroll Event
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// --- HELPER FUNCTION FOR MOBILE MENU ---
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const overlay = document.querySelector('.menu-overlay');
    if(menu && overlay) {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// --- RENDER FUNCTIONS ---
function renderHero() {
    const container = document.getElementById('hero-slides');
    const indicators = document.getElementById('hero-indicators');
    
    container.innerHTML = HERO_SLIDES.map((slide, idx) => `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}" id="slide-${idx}">
            <div class="hero-media" style="background-image: url('${slide.src}'); background-size: cover; background-position: center;"></div>
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <div class="hero-text">
                    <h2>${slide.title}</h2>
                    <p>${slide.subtitle}</p>
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
                <div class="banner-img-wrap">
                    <img src="${section.bannerImage}" class="banner-img" alt="${section.title}">
                </div>
                <div class="cat-content">
                    <div class="cat-desc">
                        <p>${section.description}</p>
                        <button class="outline-btn">Xem Tất Cả</button>
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
    return `
        <div class="product-card">
            <div class="p-img-box">
                <img src="${product.image}" class="p-img" alt="${product.name}">
                ${product.tag ? `<span class="p-tag ${product.tag === 'Sale' ? 'tag-sale' : 'tag-new'}">${product.tag}</span>` : ''}
                <button onclick="initAddToCart(${product.id})" class="add-cart-btn">Thêm vào giỏ</button>
            </div>
            <div class="p-info">
                <div style="flex:1">
                    <h4 class="p-name">${product.name}</h4>
                    <div>
                        <span class="p-price">${product.price.toLocaleString()} ₫</span>
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
    
    // Reset current
    if(slides[currentState.slideIndex]) {
        slides[currentState.slideIndex].classList.remove('active');
        indicators[currentState.slideIndex].classList.remove('active');
    }

    // Set next
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
        showToast('Đã thêm vào yêu thích');
    } else {
        currentState.wishlist.splice(idx, 1);
        showToast('Đã xóa khỏi yêu thích');
    }
    updateNavbar();
    
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
    if(!currentState.selectedProductForCart) return;
    const item = { ...currentState.selectedProductForCart, size, quantity: 1 };
    currentState.cart.push(item);
    showToast(`Đã thêm ${item.name} (Size ${size})`);
    updateNavbar();
    closeModal();
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
                <div style="padding: 40px; text-align: center;">
                    <p style="margin-bottom: 20px;">Hi, <strong>${currentState.user}</strong></p>
                    <button onclick="logout()" class="modal-btn">Đăng Xuất</button>
                </div>`;
        } else {
            body.innerHTML = `
                <div style="padding: 40px;">
                    <h2 class="text-center" style="margin-bottom: 20px;">ĐĂNG NHẬP</h2>
                    <input type="text" id="login-name" placeholder="Username" class="input-field">
                    <input type="password" placeholder="Password" class="input-field">
                    <button onclick="login()" class="modal-btn">Đăng Nhập</button>
                </div>`;
        }
    } else if (type === 'CART') {
        const total = currentState.cart.reduce((sum, item) => sum + item.price, 0);
        body.innerHTML = `
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div style="padding: 20px; border-bottom: 1px solid #eee;"><h2 style="text-transform: uppercase;">Giỏ Hàng (${currentState.cart.length})</h2></div>
                <div style="flex:1; overflow-y: auto; padding: 20px;">
                    ${currentState.cart.length === 0 ? '<p class="text-center" style="color:#999; margin-top: 20px;">Giỏ hàng trống.</p>' : currentState.cart.map(item => `
                        <div class="modal-p-item">
                            <img src="${item.image}" class="modal-p-img">
                            <div style="flex:1">
                                <h4 style="font-size: 14px; margin-bottom: 5px;">${item.name}</h4>
                                <p style="font-size: 12px; color: #666;">Size: ${item.size}</p>
                                <p style="font-weight: bold; margin-top: 5px;">${item.price.toLocaleString()} ₫</p>
                            </div>
                        </div>`).join('')}
                </div>
                <div style="padding: 20px; border-top: 1px solid #eee; background: #f9f9f9;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 15px;"><span style="font-weight: 600;">Tổng cộng</span><span style="font-weight: bold;">${total.toLocaleString()} ₫</span></div>
                    <button class="modal-btn">Thanh Toán</button>
                </div>
            </div>`;
    } else if (type === 'WISHLIST') {
        renderWishlistModal();
    } else if (type === 'SIZE_SELECTION') {
        const p = currentState.selectedProductForCart;
        body.innerHTML = `
            <div style="padding: 30px;">
                <h2 style="font-weight: 300; margin-bottom: 5px; text-transform: uppercase;">Chọn kích cỡ</h2>
                <p style="font-size: 12px; color: #666; margin-bottom: 20px;">${p.name}</p>
                <div style="display: flex; gap: 15px; margin-bottom: 20px;">
                    <img src="${p.image}" style="width: 80px; height: 100px; object-fit: cover;">
                    <div>
                        <p style="font-weight: bold; font-size: 18px;">${p.price.toLocaleString()} ₫</p>
                    </div>
                </div>
                <div style="display: flex; gap: 10px; margin-bottom: 15px;" id="size-options">
                    ${['S','M','L','XL'].map(s => `<button onclick="selectSize(this, '${s}')" class="size-btn">${s}</button>`).join('')}
                </div>
                <div style="margin-bottom: 20px;">
                    <button onclick="toggleSizeGuide()" class="guide-btn"><i class="fa-solid fa-ruler-horizontal"></i> Bảng kích cỡ</button>
                    <div id="size-guide" class="size-table-wrap hidden">
                        <table class="size-table">
                            <thead><tr><th>Size</th><th>Cao (cm)</th><th>Nặng (kg)</th></tr></thead>
                            <tbody>
                                <tr><td>S</td><td>150-160</td><td>45-55</td></tr>
                                <tr><td>M</td><td>160-170</td><td>55-65</td></tr>
                                <tr><td>L</td><td>170-175</td><td>65-75</td></tr>
                                <tr><td>XL</td><td>175-180</td><td>75-85</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button id="add-btn" disabled onclick="confirmAddToCart(this.dataset.size)" class="modal-btn">Thêm vào giỏ hàng</button>
            </div>`;
    }
}

function renderWishlistModal() {
    const body = document.getElementById('modal-body');
    const items = ALL_PRODUCTS.filter(p => currentState.wishlist.includes(p.id));
    body.innerHTML = `
        <div id="wishlist-content-list" style="display: flex; flex-direction: column; height: 500px;">
            <div style="padding: 20px; border-bottom: 1px solid #eee;"><h2>YÊU THÍCH</h2></div>
            <div style="flex:1; overflow-y: auto; padding: 20px;">
                ${items.length === 0 ? '<p class="text-center" style="color:#999;">Chưa có sản phẩm nào.</p>' : items.map(item => `
                    <div class="modal-p-item">
                        <img src="${item.image}" class="modal-p-img">
                        <div style="flex:1">
                            <h4>${item.name}</h4>
                            <p style="font-weight: bold; margin: 5px 0;">${item.price.toLocaleString()} ₫</p>
                            <button onclick="toggleWishlist(${item.id})" style="color: red; font-size: 12px; text-decoration: underline;">Xóa</button>
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

function toggleSizeGuide() {
    const guide = document.getElementById('size-guide');
    if(guide) guide.classList.toggle('hidden');
}

function login() {
    const name = document.getElementById('login-name').value;
    if(name) {
        currentState.user = name;
        localStorage.setItem('currentUser', name);
        showToast(`Welcome back, ${name}`);
        updateNavbar();
        closeModal();
    }
}

function logout() {
    currentState.user = null;
    localStorage.removeItem('currentUser');
    showToast('Goodbye!');
    updateNavbar();
    closeModal();
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<div class="toast-line"></div><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}