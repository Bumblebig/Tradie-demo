"use strict";

// SLIDER
const slider = function () {
  const slides = document.querySelectorAll(".fig");
  const subSlide = document.querySelectorAll(".fig-back");
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    subSlide.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  let interval;

  const startSlider = function () {
    interval = setInterval(nextSlide, 8000);
  };

  const stopSlider = function () {
    clearInterval(interval);
  };

  // Event handlers
  btnRight.addEventListener("click", function () {
    nextSlide();
    stopSlider();
    startSlider();
  });
  btnLeft.addEventListener("click", function () {
    prevSlide();
    stopSlider();
    startSlider();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  startSlider();
};
slider();

const faqSlider = function () {
  const faqSlides = document.querySelectorAll(".faq-slide");
  const btnLeft = document.querySelector(".faq-btn-left");
  const btnRight = document.querySelector(".faq-btn-right");

  let curSlide = 0;
  const maxSlide = faqSlides.length;

  const goToSlide = function (slide) {
    faqSlides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  btnRight.addEventListener("click", function () {
    nextSlide();
  });

  btnLeft.addEventListener("click", function () {
    prevSlide();
  });
};

faqSlider();

//////////////////////////////////////////////////////////////////////////////////////////////

// NAVIGATIONS

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const mobNavs = document.querySelectorAll(".mobile");

hamburger.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  mobileNav.classList.remove("hidden");
  setTimeout(() => {
    mobileNav.style.opacity = 1;
  }, 50);
});

overlay.addEventListener("click", function () {
  setTimeout(() => {
    mobileNav.style.opacity = 0;
  }, 20);

  setTimeout(() => {
    mobileNav.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 80);
});

mobNavs.forEach((el) => {
  el.addEventListener("click", () => {
    setTimeout(() => {
      mobileNav.style.opacity = 0;
    }, 5);

    setTimeout(() => {
      mobileNav.classList.add("hidden");
      overlay.classList.add("hidden");
    }, 10);
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SMOOTH SCROLLING
const serviceDesk = document.querySelector(".service-desk");
const guidesDesk = document.querySelector(".guides-desk");
const faqDesk = document.querySelector(".faq-desk");
const serviceMob = document.querySelector(".service-mobile");
const guidesMob = document.querySelector(".guides-mobile");
const faqMob = document.querySelector(".faq-mobile");

const scroll = function (id) {
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
};

serviceDesk.addEventListener("click", () => {
  scroll(".values");
});
serviceMob.addEventListener("click", () => {
  scroll(".values");
});

guidesDesk.addEventListener("click", () => {
  scroll(".settings");
});
guidesMob.addEventListener("click", () => {
  scroll(".settings");
});

faqDesk.addEventListener("click", () => {
  scroll(".faqs");
});
faqMob.addEventListener("click", () => {
  scroll(".faqs");
});

document.querySelector(".learn").addEventListener("click", function () {
  scroll(".values");
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// REVEAL SECTIONS ON THRESHOLD
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
//////////////////////////////////////////////////////////////////////////

// FAQS
let faqState1 = true;
let faqState2 = true;
const faq1 = document.querySelector(".h-5");
const faq2 = document.querySelector(".fh-7");
faq1.addEventListener("click", function () {
  const ans1 = document.querySelector(".faq-ans-1");
  const arr1 = document.querySelector(".faq-6-arr");
  if (faqState1) {
    ans1.classList.remove("hidden");
    arr1.classList.add("arr-up");

    setTimeout(() => {
      ans1.classList.add("anim");
    }, 50);

    faqState1 = !faqState1;
  } else {
    ans1.classList.remove("anim");
    arr1.classList.remove("arr-up");
    setTimeout(() => {
      ans1.classList.add("hidden");
    }, 50);
    faqState1 = !faqState1;
  }
});

faq2.addEventListener("click", function () {
  const ans2 = document.querySelector(".faq-ans-2");
  const arr2 = document.querySelector(".faq-7-arr");

  if (faqState2) {
    ans2.classList.remove("hidden");
    arr2.classList.add("arr-up");

    setTimeout(() => {
      ans2.classList.add("anim");
    }, 50);
    faqState2 = !faqState2;
  } else {
    ans2.classList.remove("anim");
    arr2.classList.remove("arr-up");
    setTimeout(() => {
      ans2.classList.add("hidden");
    }, 50);
    faqState2 = !faqState2;
  }
});

//////////////////////////////////////////////////////////////////////////////////
// STICKY NAV
const headSection = document.querySelector("header");
const navigate = document.querySelector(".navigations");

const navHeight = navigate.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) navigate.classList.add("sticky");
  else navigate.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(headSection);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TRANSLATION
let state = true;
const translateBtn = document.querySelector(".translate");
const translateMobile = document.querySelector(".translate-mob");
const docDesk = document.querySelector(".doc-desk");
const docMob = document.querySelector(".doc-mob");
const started = document.querySelector(".started");
const header = document.querySelector(".htext-cont");
const fig1 = document.querySelector(".fig-1");
const fig2 = document.querySelector(".fig-2");
const fig3 = document.querySelector(".fig-3");
const setText = document.querySelector(".set-text");
const textBlock1 = document.querySelector(".txtb-1");
const textBlock2 = document.querySelector(".txtb-2");
const textBlock3 = document.querySelector(".txtb-3");

const translate = function () {
  header.innerHTML =
    fig1.innerHTML =
    fig2.innerHTML =
    fig3.innerHTML =
    setText.innerHTML =
    textBlock1.innerHTML =
    textBlock2.innerHTML =
    textBlock3.innerHTML =
      "";

  if (state) {
    // STYLES
    document.querySelector(".mob-action").style.width = "85px";

    // HEADER SECTION
    translateBtn.textContent = translateMobile.textContent = "English";
    docDesk.textContent = docMob.textContent = "Tài liệu";
    serviceDesk.textContent = serviceMob.textContent = "Dịch vụ";
    guidesDesk.textContent = guidesMob.textContent = "Hướng dẫn";
    started.textContent = "Bắt đầu";

    // ELEMENTS BLOCK
    header.innerHTML = `
    <h1 class="title">
    Phân tích, theo dõi và đầu tư crypto một cách dễ dàng và hiệu quả.
            </h1>
            <p class="desc">
            Theo dõi và nhận thông báo bất cứ khi nào phát hiện tín hiệu thị trường quan trọng bao gồm phân tích kỹ thuật, phân tích cơ bản và biến động giá bất thường.
            </p>`;
    document.querySelector(".learn").textContent = "Tìm hiểu thêm";

    // SERVICES SECTION
    document.querySelector(".serv-desc").textContent =
      "Chúng tôi cung cấp các dịch vụ này trong thời gian thực";

    fig1.innerHTML = `<h3>Phân tích cơ bản</h3>
    <p class="module-desc">
    Sử dụng các cột: <strong>Market cap</strong> - Vốn hóa thị trường, <strong>Volume 24H</strong> - khối lượng giao dịch trong ngày, <strong>Volume change 24H</strong> - khối lượng giao dịch thay đổi so với 24H trước, <strong>Funding rate</strong>, và tỷ lệ vị thế mua trên bán trong thị trường tương lai - <strong>Long Short ratio</strong> sẽ giúp bạn đưa ra quyết định đầu tư chính xác những crypto bạn đang hướng đến.
    </p>`;

    fig2.innerHTML = `<h3>Biến động giá theo thời gian thực</h3>
    <p class="module-desc">
    Theo dõi biến động giá trên 11 khung thời gian khác nhau, đảm bảo bạn không bao giờ bỏ lỡ các biến động bất ngờ của thị trường. Biểu đồ tương tác của chúng tôi cung cấp cái nhìn toàn diện xu hướng giá cả, cho phép bạn đưa ra quyết định kịp thời và tối đa hóa tiềm năng đầu tư của bạn.
    </p>`;

    fig3.innerHTML = `<h3>Phân tích kỹ thuật</h3>
    <p class="module-desc">
    Ngay lập tức tìm kiếm và hiển thị danh sách Crypto thỏa mãn các điều kiện của các chỉ báo kỹ thuật đang được các trader sử dụng thông dụng nhất bao gồm <strong>RSI</strong> , <strong>Bollinger Band</strong>  và <strong>Fibonacci retracement</strong> .
    </p>`;

    // GUIDES SECTION
    document.querySelector(".guides-desc").textContent = "Hướng dẫn sử dụng";
    setText.innerHTML = `<h3 class="settings-heading">Cá nhân hóa trải nghiệm giao dịch của bạn</h3>`;

    textBlock1.innerHTML = `
    <h4>Bước 1: Cài đặt các chỉ báo của bạn</h4>
          <p class="config-desc">
          Truy cập trang <strong>Setting</strong>  và điều chỉnh các chỉ báo mong muốn của bạn. Khi cài đặt tại trang <strong>Simple</strong>. Trang kết quả <strong>Record</strong> sẽ hiển thị tất cả các crypto thỏa mãn một hoặc nhiều các chỉ báo bạn đã cài đặt.
          </p>
          <h5>Cài đặt nâng cao</h5>
          <p class="sub-desc">
          Sử dụng cài đặt nâng cao <strong>Advanced</strong> để có thể theo dõi nhiều chiến lược giao dịch cùng 1 lúc. Tạo các nhóm logic gồm nhiều tùy chỉnh để bao quát toàn bộ thị trường.
          </p>`;

    textBlock2.innerHTML = `
    <h4>Bước 2: Truy cập kết quả tùy chỉnh của bạn</h4>
          <p class="config-desc">
          Tradie tính toán và liệt kê tất cả crypto phù hợp một hoặc nhiều tiêu chí của bạn, càng đạt được nhiều tiêu chí sẽ càng được đẩy lên đầu. Kiểm tra trang <strong>Record</strong> để xem danh sách các crypto đó.
          </p>`;

    textBlock3.innerHTML = `
    <h4>Bước 3: Thiết lập thông báo Telegram</h4>
          <p class="config-desc">
          Trường hợp chưa có crypto nào thỏa mãn các cài đặt của bạn và trang <strong>Record</strong> không hiển thị kết quả nào. Bạn có thể cài đặt chức năng gửi thông báo về Telegram. Bằng cách này, bất cứ khi nào có crypto đáp ứng tất cả các điều kiện được chỉ định trong trang <strong>Simple</strong> hoặc <strong>Advanced</strong>. Tradie sẽ nhanh chóng gửi cho bạn một thông báo.
          </p>`;

    document.querySelector(".block-4").textContent =
      "Mở khóa tiềm năng giao dịch của bạn";
    document.querySelector(
      ".text-4"
    ).textContent = `Tradie giúp bạn cá nhân hóa chiến thuật giao dịch của bản thân, cập nhật thông tin về xu hướng và giá toàn bộ thị trường, cung cấp cho bạn một góc nhìn toàn diện về biến động của thị trường.`;

    // FAQ SECTION

    // FAQ 5
    document.querySelector(".h-5").innerHTML = "";
    document.querySelector(
      ".h-5"
    ).innerHTML = `Tôi nên tùy chỉnh cài đặt của mình như thế nào?
    <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down faq-6-arr"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          `;

    document.querySelector(".f5-1").innerHTML = "";

    document.querySelector(
      ".f5-1"
    ).innerHTML = `Ví dụ nếu bạn giao dịch theo phương pháp phân tích kỹ thuật, bạn có thể kết hợp <strong>RSI</strong> và <strong>Bollinger Band</strong> trong phần <strong>Settings</strong> -> <strong>Advanced</strong> như sau:`;

    document.querySelector(".f5-2").innerHTML = "";
    document.querySelector(
      ".f5-2"
    ).innerHTML = `Quay lại trang <strong>“Record”</strong>, Tradie sẽ tính toán và liệt kê tất cả các crypto nằm trong vùng “Quá mua” và “Quá bán” giống như bạn đã đặt.`;

    // FAQ 7
    document.querySelector(".l-1").textContent =
      "- Trước đó sideway hoặc downtrend dài, giá và volume biến động rất ít.";
    document.querySelector(".l-2").textContent =
      "- Khi bắt đầu được pump, Volume/Giá bỗng nhiên tăng đột biến trong khoảng thời gian ngắn ( cùng với đó tin tức tốt có thể được tung ra ).";
    document.querySelector(".l-3").textContent =
      "- Đường giá đi độc lập với BTC.";

    document.querySelector(
      ".h-7"
    ).textContent = `Tradie giúp người dùng tìm được điểm vào tốt nhất trên thị trường như thế nào?`;

    document.querySelector(
      ".q-7-1"
    ).textContent = `Bất kể thị trường đang sideway, down hay uptrend thì vẫn luôn lặp lại trong vài tuần/tháng một số đồng coin sẽ được chọn để thực hiện cuộc chơi pump and dump và khi mà chúng ta biết đến sự tồn tại của nó thì thường lúc đó đã là đỉnh rồi. Tất cả các trường hợp pump and dump như thế đều tuân theo chung các quy luật như sau:`;

    document.querySelector(
      ".q-7-2"
    ).textContent = `Bằng các cài đặt hợp lý, trader có thể theo dõi các tín hiệu bên trên mọi lúc mọi nơi đón đầu các xu hướng 1 cách nhanh chóng nhất.`;
    // toggleFAQ();

    // FOOTER SECTION

    document.querySelector(".copyrights").textContent = "Đã đăng ký Bản quyền.";
    document.querySelector(".mob-action").textContent = "Bắt đầu";

    // toggleFAQ();
    // Flip state
    state = !state;
    // toggleFAQ();
  } else {
    // STYLES
    document.querySelector(".mob-action").style.width = "110px";

    // HEADER SECTION
    translateBtn.textContent = translateMobile.textContent = "Tiếng Việt";
    docDesk.textContent = docMob.textContent = "Document";
    serviceDesk.textContent = serviceMob.textContent = "Services";
    guidesDesk.textContent = guidesMob.textContent = "Guides";
    started.textContent = "Get Started";

    header.innerHTML = `
    <h1 class="title">
    Examine, monitor, and engage in cryptocurrency with simplicity and efficiency.
            </h1>
            <p class="desc">
            Monitor the market and receive alerts for crucial signals, encompassing technical analysis, fundamental analysis, and unusual price movements.
            </p>`;
    document.querySelector(".learn").textContent = "Learn More";

    // SERVICES SECTION
    document.querySelector(".serv-desc").textContent =
      "We deliver these services in real-time";

    fig1.innerHTML = `<h3>Fundamental Analysis</h3>
      <p class="module-desc">
      Leverage the insights provided by the columns—
                    <strong>Market Cap</strong>,
                    <strong>24H Volume</strong> (Trading Volume during the day),
                    <strong>Volume Change 24H</strong> (Trading Volume change
                    compared to the previous 24H),
                    <strong>Funding Rate</strong>, and
                    <strong>Long-Short Ratio</strong> in the Future Market.
                    These metrics will guide you in making informed investment
                    decisions for your targeted cryptocurrencies.
      </p>`;

    fig2.innerHTML = `<h3>Price change Real-time monitoring</h3>
    <p class="module-desc">
    Track price movements across 11 different time frames, ensuring you never miss unexpected market movements. Our interactive charts provide a comprehensive view of price trends, allowing you to make timely decisions and maximize your investment potential.
    </p>`;

    fig3.innerHTML = `<h3>Technical Analysis</h3>
    <p class="module-desc">
    Instantly search and display Crypto lists that meet the
                    conditions of the most commonly used technical indicators by
                    traders including <strong>RSI</strong>, <strong>Bollinger Band</strong> and <strong>Fibonacci
                    retracement</strong>.
    </p>`;

    // GUIDES SECTION
    document.querySelector(".guides-desc").textContent = "User Guides";
    setText.innerHTML = `<h3 class="settings-heading">Customise Your Trading Experience</h3>
    `;

    textBlock1.innerHTML = `
    <h4>Step 1: Set up your indicators</h4>
          <p class="config-desc">
              Easily access the <strong>Settings</strong> page and adjust your
              desired conditions. Choose from a range of technical analysis
              strategies and fundamental analysis parameters to tailor your
              investment approach.
            </p>
            <h5>Advanced Configuration</h5>
            <p class="sub-desc">
              Utilize our <strong>Advanced</strong> settings to monitor multiple
              trading strategies simultaneously. Create logical groups with
              multiple customizations to cover the entire market.
            </p>`;

    textBlock2.innerHTML = `
    <h4>Step 2: Access Your Customized Results</h4>
          <p class="config-desc">
              Check the <strong>Record</strong> page to view a list of
              cryptocurrencies that match your specified criteria. Tradie
              calculates and lists the most relevant assets, providing you with
              valuable insights for your trading decisions.
            </p>`;

    textBlock3.innerHTML = `
    <h4>Step 3: Set Up Telegram Notification</h4>
          <p class="config-desc">
              In case the <strong>Record</strong> page does not display any
              results, you have the option to
              <strong>configure</strong> Telegram notifications. This way,
              whenever a cryptocurrency meets all specified conditions, Tradie
              will promptly send you an alert.
            </p>`;

    document.querySelector(".block-4").textContent =
      "Unlock Your trading Potentials";
    document.querySelector(
      ".text-4"
    ).textContent = `Tradie helps you personalize your trading strategy, stay updated on market trends and prices across the entire market, providing you with a comprehensive view of market fluctuations.`;

    // FAQS SECTION

    // FAQ 5
    document.querySelector(".h-5").innerHTML = "";
    document.querySelector(
      ".h-5"
    ).innerHTML = `How should I customize my settings?
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="arr-down faq-6-arr"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
          `;

    document.querySelector(".f5-1").innerHTML = "";

    document.querySelector(
      ".f5-1"
    ).innerHTML = `If you trade using technical analysis, you can combine
              <strong>RSI</strong> and <strong>Bollinger Band</strong> in the
              <strong>Settings</strong> -> <strong>Advanced</strong> section as
              follows:`;

    document.querySelector(".f5-2").innerHTML = "";
    document.querySelector(
      ".f5-2"
    ).innerHTML = `Go back to the <strong>"Record"</strong> page, and Tradie will
              calculate and list all cryptocurrencies in the "Overbought" and
              "Oversold" zones as you have set.`;

    // FAQ 7
    document.querySelector(
      ".l-1"
    ).textContent = `- Prior to the pump, there is a long period of sideways or
      downtrend with minimal price and volume fluctuations.`;
    document.querySelector(
      ".l-2"
    ).textContent = `- When the pump starts, the volume/price suddenly surges within a
    short period (accompanied by potentially positive news).`;
    document.querySelector(
      ".l-3"
    ).textContent = `- The price movement becomes independent of BTC.`;

    document.querySelector(
      ".h-7"
    ).textContent = `How does Tradie help users find the best entry points in the
    market?`;

    document.querySelector(
      ".q-7-1"
    ).textContent = `Regardless of whether the market is sideways, down, or in an
    uptrend, there is often a repeating pattern where certain coins are
    chosen for pump and dump schemes every few weeks/months. By the time
    we become aware of it, it's usually at its peak. All pump and dump
    cases tend to follow these common patterns:`;

    document.querySelector(
      ".q-7-2"
    ).textContent = `With appropriate settings, traders can monitor these signals
    anytime, anywhere, staying ahead of trends as quickly as possible.`;

    // FOOTER SECTION

    document.querySelector(".copyrights").textContent = "All rights reserved.";
    document.querySelector(".mob-action").textContent = "Get Started";

    // toggleFAQ();
    // Flip state
    state = !state;
    // toggleFAQ();
  }
};

translateBtn.addEventListener("click", translate);
translateMobile.addEventListener("click", translate);
translate();
