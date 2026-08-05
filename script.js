// script.js — show non-blocking toasts on button clicks
document.addEventListener('DOMContentLoaded', function () {
    const toastEl = document.getElementById('toast');

    function showToast(message) {
        if (!toastEl) return;
        toastEl.textContent = message;
        toastEl.classList.add('show');
        // auto hide after 1.5s
        clearTimeout(showToast._t);
        showToast._t = setTimeout(() => toastEl.classList.remove('show'), 1500);
    }

    // map class -> message
    const map = [
        {selector: '.call', msg: 'جاري فتح تطبيق الهاتف...'},
        {selector: '.whatsapp', msg: 'جاري فتح واتساب...'},
        {selector: '.facebook', msg: 'جاري فتح فيسبوك...'},
        {selector: '.location', msg: 'جاري فتح خرائط Google...'}
    ];

    map.forEach(item => {
        document.querySelectorAll(item.selector).forEach(el => {
            el.addEventListener('click', () => showToast(item.msg), {passive: true});
            // keyboard activation for accessibility
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') showToast(item.msg);
            });
        });
    });
});
