"use strict";

// SLIDER
const slider = function () {
  const slides = document.querySelectorAll(".fig");
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
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

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

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

  setInterval(nextSlide, 8000);
};
slider();

//////////////////////////////////////////////////////////////////////////////////////////////

// NAVIGATIONS

const hamburger = document.querySelector(".menu");
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
const toggleFAQ = function () {
  const faqHeading = document.querySelectorAll(".question");
  faqHeading.forEach((el, i) => {
    el.addEventListener("click", function (e) {
      const id = e.target.closest(".faq-item");
      const answer = id.querySelector(".answer");
      const arr = id.querySelector(".arr-down");
      answer.classList.toggle("visible");
      arr.classList.toggle("arr-up");

      setTimeout(() => {
        answer.classList.toggle("anim");
      }, 30);
    });
  });
};

toggleFAQ();

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
const started = document.querySelector(".started");
const header = document.querySelector(".htext-cont");
const fig1 = document.querySelector(".fig-1");
const fig2 = document.querySelector(".fig-2");
const fig3 = document.querySelector(".fig-3");
const setText = document.querySelector(".set-text");
const textBlock1 = document.querySelector(".txtb-1");
const textBlock2 = document.querySelector(".txtb-2");
const textBlock3 = document.querySelector(".txtb-3");
const faq1 = document.querySelector(".faq-1");
const faq2 = document.querySelector(".faq-2");
const faq3 = document.querySelector(".faq-3");
const faq4 = document.querySelector(".faq-4");
const faq5 = document.querySelector(".faq-5");
const faq6 = document.querySelector(".faq-6");
const faq7 = document.querySelector(".faq-7");
const footerText = document.querySelector(".foot-text");

translateBtn.addEventListener("click", function () {
  header.innerHTML =
    fig1.innerHTML =
    fig2.innerHTML =
    fig3.innerHTML =
    setText.innerHTML =
    textBlock1.innerHTML =
    textBlock2.innerHTML =
    textBlock3.innerHTML =
    faq1.innerHTML =
    faq2.innerHTML =
    faq3.innerHTML =
    faq4.innerHTML =
    faq5.innerHTML =
    faq6.innerHTML =
    faq7.innerHTML =
    footerText.innerHTML =
      "";

  if (state) {
    // HEADER SECTION
    translateBtn.textContent = "Tiếng Anh";
    serviceDesk.textContent = serviceMob.textContent = "Dịch vụ";
    guidesDesk.textContent = guidesMob.textContent = "Hướng dẫn";
    started.textContent = "Bắt đầu";

    // ELEMENTS BLOCK
    header.innerHTML = `
    <h1 class="title">
    Dữ liệu phân tích cơ bản, hành động giá và phân tích kỹ thuật
            </h1>
            <p class="desc">
            Bằng cách tận dụng giao diện trực quan của Cài đặt và Ghi lại
            trang, bạn có thể tối ưu hóa chiến lược giao dịch của mình, cập nhật thông tin
            về xu hướng thị trường và đưa ra quyết định dựa trên dữ liệu cho
            hành trình giao dịch thành công.
            </p>`;
    document.querySelector(".learn").textContent = "Tìm hiểu thêm";

    // SERVICES SECTION
    document.querySelector(".serv-desc").textContent =
      "Chúng tôi cung cấp các dịch vụ này trong thời gian thực";

    fig1.innerHTML = `<h3>Phân tích cơ bản</h3>
    <p class="module-desc">
    Sử dụng mô-đun Phân tích cơ bản toàn diện của chúng tôi để đạt được
    hiểu biết sâu sắc về các số liệu thị trường quan trọng. Theo dõi vốn hóa thị trường,
    khối lượng, tỷ lệ cấp vốn và tỷ lệ vị thế mua bán trong
    thị trường tương lai một cách dễ dàng. Đưa ra quyết định đầu tư sáng suốt
    dựa trên phân tích dữ liệu thời gian thực và luôn dẫn đầu thị trường
    xu hướng.
    </p>`;

    fig2.innerHTML = `<h3>Thay đổi giá Theo dõi thời gian thực</h3>
    <p class="module-desc">
    Đi trước sự biến động của thị trường với tính năng Thay đổi giá năng động của chúng tôi
    Giám sát thời gian thực. Theo dõi biến động giá trên 11
    các khung thời gian khác nhau, đảm bảo bạn không bao giờ bỏ lỡ thị trường bất ngờ
    sự di chuyển. Biểu đồ tương tác của chúng tôi cung cấp cái nhìn toàn diện
    xu hướng giá cả, cho phép bạn đưa ra quyết định kịp thời và
    tối đa hóa tiềm năng đầu tư của bạn.
    </p>`;

    fig3.innerHTML = `<h3>Phân tích kỹ thuật</h3>
    <p class="module-desc">
    Tinh chỉnh chiến lược giao dịch của bạn với Kỹ thuật nâng cao của chúng tôi
    Mô-đun phân tích. Đạt được những hiểu biết sâu sắc từ các biểu diễn số hóa
    của các chỉ báo kỹ thuật chính, bao gồm RSI, dải Bollinger,
    và mức thoái lui Fibonacci. Trực quan hóa xu hướng thị trường với
    chính xác và đưa ra quyết định dựa trên dữ liệu để tối ưu hóa
    hiệu suất giao dịch.
    </p>`;

    // GUIDES SECTION
    document.querySelector(".guides-desc").textContent = "Hướng dẫn sử dụng";
    setText.innerHTML = `<h3 class="settings-heading">Tùy chỉnh trải nghiệm giao dịch của bạn</h3>
    <p class="heading-desc">
    Tại Tradie, chúng tôi ưu tiên các ưu tiên giao dịch của bạn. Với chúng tôi
    trang Cài đặt thân thiện với người dùng, bạn có thể cá nhân hóa tiền điện tử của mình
    kinh nghiệm giám sát.
    </p>`;

    textBlock1.innerHTML = `
    <h4>Bước 1: Định cấu hình sự hiện diện của bạn</h4>
          <p class="config-desc">
          Dễ dàng truy cập trang Cài đặt và điều chỉnh các điều kiện mong muốn của bạn.
          Chọn từ một loạt các chiến lược phân tích kỹ thuật và cơ bản
          thông số phân tích để điều chỉnh phương pháp đầu tư của bạn.
          </p>
          <h5>Cấu hình nâng cao</h5>
          <p class="sub-desc">
          Sử dụng cài đặt nâng cao của chúng tôi để có chiến lược giao dịch đa sắc thái hơn.
          Tạo các nhóm logic và chỉ định nhiều điều kiện để tinh chỉnh
          lọc dữ liệu và đạt được kết quả chính xác.
          </p>`;

    textBlock2.innerHTML = `
    <h4>Bước 2: Truy cập kết quả tùy chỉnh của bạn</h4>
          <p class="config-desc">
          Kiểm tra trang Bản ghi để xem danh sách các loại tiền điện tử phù hợp
          tiêu chí được chỉ định của bạn. Tradie tính toán và liệt kê nhiều nhất
          nội dung có liên quan, cung cấp cho bạn thông tin chi tiết có giá trị cho
          các quyết định giao dịch.
          </p>`;

    textBlock3.innerHTML = `
    <h4>Bước 3: Thiết lập thông báo Telegram</h4>
          <p class="config-desc">
          Trường hợp trang Record không hiển thị kết quả nào thì bạn có
          tùy chọn để định cấu hình thông báo Telegram. Bằng cách này, bất cứ khi nào một
          tiền điện tử đáp ứng tất cả các điều kiện được chỉ định, Tradie sẽ nhanh chóng
          gửi cho bạn một cảnh báo.
          </p>`;

    document.querySelector(".block-4").textContent =
      "Mở khóa tiềm năng giao dịch của bạn";
    document.querySelector(
      ".text-4"
    ).textContent = `Bằng cách tận dụng giao diện trực quan của Cài đặt và Ghi lại trang, bạn có thể tối ưu hóa chiến lược giao dịch của mình, cập nhật thông tin về xu hướng thị trường và đưa ra quyết định dựa trên dữ liệu để giao dịch thành công
    hành trình.`;

    // FAQ SECTION
    faq1.innerHTML = `
    <h4 class="question">
    Tradie là gì và nó mang lại lợi ích như thế nào cho các nhà đầu tư tiền điện tử
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
          Tradie là một ứng dụng giám sát tiền điện tử toàn diện cung cấp
          Dữ liệu phân tích cơ bản, hành động giá và phân tích kỹ thuật. Nó
          mang lại lợi ích cho các nhà đầu tư bằng cách cung cấp những hiểu biết kịp thời để đưa ra thông tin đầy đủ
          các quyết định giao dịch.
          </p>`;

    faq2.innerHTML = `
    <h4 class="question">
    Tôi có thể sử dụng Tradie bằng các ngôn ngữ khác nhau không
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
          Tradie hỗ trợ nhiều ngôn ngữ, bao gồm tiếng Anh và
          Tiếng Việt. Người dùng có thể chuyển đổi giữa các ngôn ngữ này dựa trên
          sự ưa thích.
          </p>`;

    faq3.innerHTML = `
    <h4 class="question">
    Tradie cung cấp những gì
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
          Tradie cung cấp Phân tích cơ bản, Thay đổi giá theo thời gian thực
          Giám sát và phân tích kỹ thuật.
          </p>`;

    faq4.innerHTML = `
    <h4 class="question">
    Tradie xử lý những biến động đột ngột của thị trường như thế nào
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
          Tradie xác định những biến động đột ngột và thông báo kịp thời cho người dùng,
          cho phép họ cập nhật thông tin về những thay đổi của thị trường.
          </p>`;

    faq5.innerHTML = `
    <h4 class="question">
    Làm cách nào tôi có thể tùy chỉnh tùy chọn dữ liệu tiền điện tử của mình trên Tradie
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
          Người dùng có thể định cấu hình các điều kiện mong muốn của mình trên trang Cài đặt.
          Ví dụ: kết hợp Dải RSI và Dải Bollinger trong phần Kỹ thuật
          chiến lược phân tích bao gồm việc đi tới "Cài đặt" -> "Nâng cao" và
          thiết lập các điều kiện dựa trên sở thích của người dùng.
          </p>`;

    faq6.innerHTML = `
    <h4 class="question">
    Thông tin nào có sẵn trên trang Bản ghi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
          Trang Record hiển thị kết quả cấu hình của người dùng
          điều kiện. Nếu người dùng đặt điều kiện liên quan đến các chỉ báo như RSI
          và Dải Bollinger, Tradie tính toán và liệt kê các đồng tiền rơi vào
          khu vực cụ thể, cung cấp một cái nhìn tổng quan rõ ràng về điều kiện thị trường.
          </p>`;

    faq7.innerHTML = `
    <h4 class="question">
    Tradie giúp người dùng tìm được điểm vào tốt nhất trên thị trường như thế nào
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
          Các giải pháp toàn diện và mô-đun giám sát thời gian thực của Tradie
          cho phép người dùng xác định điểm vào tối ưu sớm nhất
          thời gian có thể, hỗ trợ việc ra quyết định chiến lược.
          </p>`;

    // FOOTER SECTION
    footerText.innerHTML = `
          <h2 class="footer-heading">TRADIE</h2>
          <p class="footer-desc">
          Tradie là một ứng dụng giám sát tiền điện tử tiên tiến được thiết kế để
          trao quyền cho các nhà đầu tư tiền điện tử chuyên nghiệp với toàn diện
          công cụ phân tích cơ bản và kỹ thuật. Nền tảng thân thiện với người dùng của chúng tôi
          cung cấp thông tin chi tiết về thị trường theo thời gian thực, cài đặt có thể tùy chỉnh và kịp thời
          thông báo, cho phép các nhà giao dịch thực hiện đầu tư sáng suốt
          quyết định một cách tự tin. Luôn đón đầu những biến động của thị trường và
          tối đa hóa tiềm năng giao dịch của bạn với Tradie.
          </p>`;

    document.querySelector(".copyrights").textContent = "Đã đăng ký Bản quyền.";
    document.querySelector(".mob-action").textContent = "Bắt đầu";

    toggleFAQ();
    // Flip state
    state = !state;
  } else {
    // HEADER SECTION
    translateBtn.textContent = "Vietnamese";
    serviceDesk.textContent = serviceMob.textContent = "Services";
    guidesDesk.textContent = guidesMob.textContent = "Guides";
    started.textContent = "Get Started";

    header.innerHTML = `
    <h1 class="title">
              Fundamental analysis, Price action and Technical analysis data
            </h1>
            <p class="desc">
              By leveraging the intuitive interface of the Settings and Record
              pages, you can optimize your trading strategies, stay informed
              about market trends, and make data-driven decisions for a
              successful trading journey.
            </p>`;
    document.querySelector(".learn").textContent = "Learn More";

    // SERVICES SECTION
    document.querySelector(".serv-desc").textContent =
      "We deliver these services in real-time";

    fig1.innerHTML = `<h3>Fundamental Analysis</h3>
      <p class="module-desc">
        Utilize our comprehensive Fundamental Analysis module to gain
        insights into key market metrics. Monitor the market cap,
        volume, funding rate, and long-short positions ratio in the
        future market effortlessly. Make informed investment decisions
        based on real-time data analysis and stay ahead of market
        trends.
      </p>`;

    fig2.innerHTML = `<h3>Price change Real-time monitoring</h3>
    <p class="module-desc">
      Stay ahead of market volatility with our dynamic Price Change
      Real-Time Monitoring. Monitor price fluctuations across 11
      different time frames, ensuring you never miss sudden market
      movements. Our interactive charts provide a comprehensive view
      of price trends, allowing you to make timely decisions and
      maximize your investment potential.
    </p>`;

    fig3.innerHTML = `<h3>Technical Analysis</h3>
    <p class="module-desc">
      Refine your trading strategies with our advanced Technical
      Analysis module. Gain insights from digitized representations
      of key technical indicators, including RSI, Bollinger bands,
      and Fibonacci Retracement. Visualize market trends with
      precision and make data-driven decisions to optimize your
      trading performance
    </p>`;

    // GUIDES SECTION
    document.querySelector(".guides-desc").textContent = "User Guides";
    setText.innerHTML = `<h3 class="settings-heading">Customise Your Trading Experience</h3>
    <p class="heading-desc">
      At Tradie, we prioritize your trading preferences. With our
      user-friendly Settings page, you can personalize your crypto
      monitoring experience.
    </p>`;

    textBlock1.innerHTML = `
    <h4>Step 1: Configure your presence</h4>
          <p class="config-desc">
            Easily access the Settings page and adjust your desired conditions.
            Choose from a range of technical analysis strategies and fundamental
            analysis parameters to tailor your investment approach.
          </p>
          <h5>Advanced Configuration</h5>
          <p class="sub-desc">
            Utilize our advanced settings for a more nuanced trading strategy.
            Create logical groups and specify multiple conditions to refine your
            data filtering and achieve precise results.
          </p>`;

    textBlock2.innerHTML = `
    <h4>Step 2: Access Your Customized Results</h4>
          <p class="config-desc">
            Check the Record page to view a list of cryptocurrencies that match
            your specified criteria. Tradie calculates and lists the most
            relevant assets, providing you with valuable insights for your
            trading decisions.
          </p>`;

    textBlock3.innerHTML = `
    <h4>Step 3: Set Up Telegram Notification</h4>
          <p class="config-desc">
            In case the Record page does not display any results, you have the
            option to configure Telegram notifications. This way, whenever a
            cryptocurrency meets all specified conditions, Tradie will promptly
            send you an alert.
          </p>`;

    document.querySelector(".block-4").textContent =
      "Unlock Your trading Potentials";
    document.querySelector(
      ".text-4"
    ).textContent = `By leveraging the intuitive interface of the Settings and Record pages, you can optimize your trading strategies, stay informed about market trends, and make data-driven decisions for a successful trading
    journey.`;

    // FAQS SECTION
    faq1.innerHTML = `
    <h4 class="question">
            What is Tradie, and how does it benefit cryptocurrency investors
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
            Tradie is a comprehensive crypto monitoring app that provides
            Fundamental analysis, Price action, and Technical analysis data. It
            benefits investors by offering timely insights for making informed
            trading decisions.
          </p>`;

    faq2.innerHTML = `
    <h4 class="question">
            Can I use Tradie in different languages
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
            Tradie supports multiple languages, including English and
            Vietnamese. Users can switch between these languages based on their
            preference.
          </p>`;

    faq3.innerHTML = `
    <h4 class="question">
            What does Tradie offer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
            Tradie offers Fundamental Analysis, Price Change Real-time
            Monitoring and Technical Analysis.
          </p>`;

    faq4.innerHTML = `
    <h4 class="question">
            How does Tradie handle sudden market fluctuations
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
            Tradie identifies sudden fluctuations and promptly notifies users,
            allowing them to stay informed about market changes.
          </p>`;

    faq5.innerHTML = `
    <h4 class="question">
            How can I customize my crypto data preferences on Tradie
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
            Users can configure their desired conditions on the Settings page.
            For example, combining RSI and Bollinger Bands in the Technical
            analysis strategy involves going to "Settings" -> "Advanced" and
            setting conditions based on user preferences.
          </p>`;

    faq6.innerHTML = `
    <h4 class="question">
            What information is available on the Record page
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
            The Record page displays the results of users' configured
            conditions. If users set conditions related to indicators like RSI
            and Bollinger Bands, Tradie calculates and lists coins falling into
            specified zones, providing a clear overview of market conditions.
          </p>`;

    faq7.innerHTML = `
    <h4 class="question">
            How does Tradie help users find the best entry points in the market
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="arr-down"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h4>
          <p class="answer">
            Tradie's comprehensive solutions and real-time monitoring modules
            enable users to identify optimal entry points at the earliest
            possible time, aiding in strategic decision-making.
          </p>`;

    // FOOTER SECTION
    footerText.innerHTML = `
          <h2 class="footer-heading">TRADIE</h2>
          <p class="footer-desc">
            Tradie is a cutting-edge crypto monitoring application designed to
            empower professional cryptocurrency investors with comprehensive
            fundamental and technical analysis tools. Our user-friendly platform
            offers real-time market insights, customizable settings, and timely
            notifications, enabling traders to make informed investment
            decisions with confidence. Stay ahead of market fluctuations and
            maximize your trading potential with Tradie.
          </p>`;

    document.querySelector(".copyrights").textContent = "All rights reserved.";
    document.querySelector(".mob-action").textContent = "Get Started";

    toggleFAQ();
    // Flip state
    state = !state;
  }
});
