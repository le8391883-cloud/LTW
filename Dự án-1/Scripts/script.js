// Đảm bảo code chỉ chạy sau khi toàn bộ HTML được tải.
// Đây là một thực hành tốt, đặc biệt trong môi trường MVC.
document.addEventListener('DOMContentLoaded', function () {

    // Logic Address Form
    // Cần phải dùng querySelector để lấy đúng thẻ có class/id
    const adressbtn = document.querySelector('#adress-form');
    const adressclose = document.querySelector('#adress-close');
    const adressFormModal = document.querySelector('.adress-form'); // Lấy modal chính

    if (adressbtn && adressclose && adressFormModal) {
        adressbtn.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chặn thẻ <a> nhảy trang/scroll
            adressFormModal.style.display = "flex";
        });

        adressclose.addEventListener("click", function () {
            adressFormModal.style.display = "none";
        });
    }

    // Logic Slider 1 (Ảnh lớn)
    const rightbtn = document.querySelector('.fa-chevron-right');
    const leftbtn = document.querySelector('.fa-chevron-left');
    // Lấy tất cả các ảnh trong slider.
    const imgNumber = document.querySelectorAll('.slider-content-left-top-container .slider-content-left-top img');

    let index = 0;

    // Kiểm tra xem các nút và ảnh có tồn tại không trước khi gán sự kiện
    if (rightbtn && leftbtn && imgNumber.length > 0) {
        rightbtn.addEventListener("click", function () {
            index = index + 1;
            if (index > imgNumber.length - 1) {
                index = 0;
            }
            // Dùng transform thay vì right vì nó mượt hơn và đúng với logic CSS bạn tạo
            document.querySelector(".slider-content-left-top").style.transform = `translateX(-${index * 100}%)`;
        });

        leftbtn.addEventListener("click", function () {
            index = index - 1;
            if (index < 0) { // Sửa lỗi logic: phải là < 0
                index = imgNumber.length - 1;
            }
            // Dùng transform thay vì left
            document.querySelector(".slider-content-left-top").style.transform = `translateX(-${index * 100}%)`;
        });
    }

    // Logic Slider 1 (Navigation dots/li)
    const imgNumbeLi = document.querySelectorAll('.slider-content-left-bottom li');

    if (imgNumbeLi.length > 0) {
        imgNumbeLi.forEach(function (image, idx) {
            image.addEventListener("click", function () {
                // Cập nhật index khi người dùng click
                index = idx;

                // Di chuyển slider
                document.querySelector(".slider-content-left-top").style.transform = `translateX(-${index * 100}%)`;

                // Cập nhật class 'active'
                const currentActive = document.querySelector('.slider-content-left-bottom li.active');
                if (currentActive) {
                    currentActive.classList.remove("active");
                }
                image.classList.add("active");
            });
        });
    }

    // Logic Slider 2 (Auto Slide)
    function imgAuto() {
        index = index + 1;
        if (index > imgNumber.length - 1) {
            index = 0;
        }

        // Cập nhật active cho li/dot
        imgNumbeLi.forEach(li => li.classList.remove("active"));
        if (imgNumbeLi[index]) {
            imgNumbeLi[index].classList.add("active");
        }

        // Di chuyển slider
        document.querySelector(".slider-content-left-top").style.transform = `translateX(-${index * 100}%)`;
    }

    // Chỉ chạy auto slide nếu có ảnh
    if (imgNumber.length > 1) {
        setInterval(imgAuto, 5000); // 5 giây
    }

    // Logic Slider Product (Product-one)
    let productIndex = 0; // Dùng biến index riêng cho slider này
    const rightbtntwo = document.querySelector('.fa-chevron-right-two');
    const leftbtntwo = document.querySelector('.fa-chevron-left-two');
    const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items');
    const productSliderContainer = document.querySelector(".slider-product-one-content-items-content");


    if (rightbtntwo && leftbtntwo && imgNumbertwo.length > 0 && productSliderContainer) {
        rightbtntwo.addEventListener("click", function () {
            productIndex = productIndex + 1;
            if (productIndex > imgNumbertwo.length - 1) {
                productIndex = 0;
            }
            productSliderContainer.style.transform = `translateX(-${productIndex * 100}%)`;
        });

        leftbtntwo.addEventListener("click", function () {
            productIndex = productIndex - 1;
            if (productIndex < 0) {
                productIndex = imgNumbertwo.length - 1;
            }
            productSliderContainer.style.transform = `translateX(-${productIndex * 100}%)`;
        });
    }
});