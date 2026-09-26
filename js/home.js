document.addEventListener("DOMContentLoaded", () => {


  /* =========================================================
     HOME DATA
  ========================================================= */


  /* =========================================================
     CANCER SPECIALITIES
     Same slugs as cancer-specialities.js
  ========================================================= */

  const homeSpecialities = [

    {
      slug: "head-neck-cancer",

      title: "Head & Neck Cancer",

      image:
        "assets/images/cancer/head-neck-cancer.jpg",

      description:
        "Advanced diagnosis and personalised care for cancers affecting the mouth, throat, voice box, nasal cavity, sinuses and salivary glands."
    },

    {
      slug: "thyroid-cancer",

      title: "Thyroid Cancer",

      image:
        "assets/images/cancer/thyroid-cancer.jpg",

      description:
        "Personalised thyroid cancer care with accurate evaluation, appropriate treatment planning and structured follow-up."
    },

    {
      slug: "breast-cancer",

      title: "Breast Cancer",

      image:
        "assets/images/cancer/breast-cancer.jpg",

      description:
        "Comprehensive breast cancer care with emphasis on diagnosis, tumour biology and personalised multidisciplinary treatment."
    },

    {
      slug: "esophageal-cancer",

      title: "Esophageal Cancer",

      image:
        "assets/images/cancer/esophageal-cancer.jpg",

      description:
        "Comprehensive care for cancers of the food pipe with personalised multidisciplinary evaluation and treatment planning."
    },

    {
      slug: "stomach-cancer",

      title: "Stomach Cancer",

      image:
        "assets/images/cancer/stomach-cancer.jpg",

      description:
        "Specialised gastric cancer care using appropriate diagnostic evaluation and personalised oncology treatment planning."
    },

    {
      slug: "pancreatic-cancer",

      title: "Pancreatic Cancer",

      image:
        "assets/images/cancer/pancreatic-cancer.jpg",

      description:
        "Comprehensive pancreatic cancer care focused on accurate evaluation and coordinated multidisciplinary treatment planning."
    },

    {
      slug: "colorectal-cancer",

      title: "Colorectal & Rectal Cancer",

      image:
        "assets/images/cancer/colorectal-cancer.jpg",

      description:
        "Personalised colorectal and rectal cancer care with appropriate systemic and multidisciplinary treatment approaches."
    },

    {
      slug: "gynecological-cancer",

      title: "Uterine / Gynecological Cancers",

      image:
        "assets/images/cancer/gynecological-cancer.jpg",

      description:
        "Specialised care for cancers affecting the uterus, ovaries, cervix and related female reproductive organs."
    }

  ];



  /* =========================================================
     TREATMENTS
     Same links as treatments.html
  ========================================================= */

  const homeTreatments = [

    {
      slug: "laparoscopic-cancer-surgery",

      title: "Laparoscopic Cancer Surgery",

      image:
        "assets/images/treatments/laparoscopic-cancer-surgery.jpg",

      description:
        "A minimally invasive surgical approach using small incisions, specialised instruments and camera-guided visualisation."
    },

    {
      slug: "robotic-cancer-surgery",

      title: "Robotic Cancer Surgery",

      image:
        "assets/images/treatments/robotic-cancer-surgery.jpg",

      description:
        "Robot-assisted minimally invasive surgery offering enhanced visualisation and controlled instrument movement in selected procedures."
    },

    {
      slug: "hipec-pipac",

      title: "HIPEC & PIPAC",

      image:
        "assets/images/treatments/hipec-pipac.jpg",

      description:
        "Specialised treatment approaches that may be considered for selected cancers involving the peritoneum or abdominal cavity."
    },

    {
      slug: "organ-preservation",

      title: "Organ Preservation Cancer Surgery",

      image:
        "assets/images/treatments/organ-preservation.jpg",

      description:
        "Treatment planning focused on appropriate cancer control while preserving organ structure and function when clinically suitable."
    },

    {
      slug: "sentinel-lymph-node-biopsy",

      title: "Sentinel Lymph Node Biopsy",

      image:
        "assets/images/treatments/sentinel-lymph-node-biopsy.jpg",

      description:
        "A targeted technique used in selected cancers to assess the first lymph nodes most likely to receive cancer spread."
    },

    {
      slug: "fluorescence-guided-surgery",

      title: "Fluorescence-Guided Cancer Surgery",

      image:
        "assets/images/treatments/fluorescence-guided-surgery.jpg",

      description:
        "Advanced fluorescence imaging can provide additional visual information during selected cancer procedures."
    }

  ];



  /* =========================================================
     GALLERY
     Matches the existing gallery.html content.
  ========================================================= */

  // const homeGalleryPhotos = [
  //   { image: "assets/images/gallery/gallery-1.jpg", title: "Medical Oncology Conference", category: "MEDICAL EVENT" },
  //   { image: "assets/images/gallery/gallery-2.jpg", title: "Cancer Awareness Programme", category: "AWARENESS" },
  //   { image: "assets/images/gallery/gallery-3.jpg", title: "Medical Education Session", category: "EDUCATION" },
  //   { image: "assets/images/gallery/gallery-4.jpg", title: "Cancer Care Awareness", category: "AWARENESS" },
  //   { image: "assets/images/gallery/gallery-5.jpg", title: "Oncology Academic Meet", category: "ACADEMIC" },
  //   { image: "assets/images/gallery/gallery-6.jpg", title: "Cancer Awareness Campaign", category: "AWARENESS" }
  // ];

  // const homeGalleryVideos = [
  //   { image: "assets/images/gallery/video-1.jpg", title: "Understanding Cancer Treatment", category: "CANCER EDUCATION" },
  //   { image: "assets/images/gallery/video-2.jpg", title: "Medical Oncology Explained", category: "MEDICAL ONCOLOGY" },
  //   { image: "assets/images/gallery/video-3.jpg", title: "Cancer Awareness Session", category: "AWARENESS" },
  //   { image: "assets/images/gallery/video-4.jpg", title: "Patient Education Session", category: "PATIENT EDUCATION" },
  //   { image: "assets/images/gallery/video-5.jpg", title: "Oncology Discussion", category: "ONCOLOGY" },
  //   { image: "assets/images/gallery/video-6.jpg", title: "Cancer Care Information", category: "CANCER CARE" }
  // ];



  /* =========================================================
     TESTIMONIALS

     NOTE:
     These are neutral placeholder display entries.
     Replace text with verified patient testimonials
     before publishing.
  ========================================================= */

  const homeTestimonials = [

    {
      name: "Patient Experience",

      text:
        "The consultation process was explained clearly and the treatment discussion helped us understand the next steps with greater confidence."
    },

    {
      name: "Patient Experience",

      text:
        "We appreciated the time taken to review the reports, explain the available options and answer our questions about the treatment plan."
    },

    {
      name: "Patient Experience",

      text:
        "The guidance throughout the consultation was structured and easy to understand, which helped our family prepare for the treatment journey."
    },

    {
      name: "Patient Experience",

      text:
        "Our questions were addressed patiently and the clinical plan was discussed in a clear and organised manner."
    },

    {
      name: "Patient Experience",

      text:
        "The consultation helped us better understand the diagnosis, investigations and the reasons behind the recommended treatment approach."
    }

  ];



  /* =========================================================
     RENDER SPECIALITIES
  ========================================================= */

  const specialityTrack =
    document.getElementById(
      "homeSpecialitiesTrack"
    );


  if (specialityTrack) {

    specialityTrack.innerHTML =
      homeSpecialities
        .map((item) => {

          return `

            <article class="home-service-card slider-card">

              <a
                href="cancer-details.html?cancer=${item.slug}"
                class="home-card-image"
              >

                <img
                  src="${item.image}"
                  alt="${item.title}"
                  loading="lazy"
                >

              </a>


              <div class="home-card-content">

                <h3>
                  ${item.title}
                </h3>

                <p>
                  ${item.description}
                </p>


                <a
                  href="cancer-details.html?cancer=${item.slug}"
                  class="home-card-link"
                >

                  Read More

                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>

                </a>

              </div>

            </article>

          `;

        })
        .join("");

  }



  /* =========================================================
     RENDER TREATMENTS
  ========================================================= */

  const treatmentTrack =
    document.getElementById(
      "homeTreatmentsTrack"
    );


  if (treatmentTrack) {

    treatmentTrack.innerHTML =
      homeTreatments
        .map((item) => {

          return `

            <article class="home-service-card slider-card">

              <a
                href="treatment-details.html?treatment=${item.slug}"
                class="home-card-image"
              >

                <img
                  src="${item.image}"
                  alt="${item.title}"
                  loading="lazy"
                >

              </a>


              <div class="home-card-content">

                <h3>
                  ${item.title}
                </h3>

                <p>
                  ${item.description}
                </p>


                <a
                  href="treatment-details.html?treatment=${item.slug}"
                  class="home-card-link"
                >

                  Read More

                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>

                </a>

              </div>

            </article>

          `;

        })
        .join("");

  }



  /* =========================================================
     HOME BLOGS
     Reuses existing blogData from js/blog.js
  ========================================================= */

  const homeBlogGrid =
    document.getElementById(
      "homeBlogGrid"
    );


  if (
    homeBlogGrid &&
    typeof blogData !== "undefined"
  ) {

    const latestBlogs =
      blogData.slice(0, 3);


    homeBlogGrid.innerHTML =
      latestBlogs
        .map((blog) => {

          return `

            <article class="home-blog-card">

              <a
                href="blog-details.html?id=${blog.id}"
                class="home-blog-image"
              >

                <img
                  src="${blog.image}"
                  alt="${blog.title}"
                  loading="lazy"
                >

                <span class="home-blog-category">
                  ${blog.category}
                </span>

              </a>


              <div class="home-blog-content">

                <div class="home-blog-meta">

                  <span>
                    <i class="fa-regular fa-calendar"></i>

                    ${blog.date}
                  </span>

                  <span>
                    <i class="fa-regular fa-clock"></i>

                    ${blog.readTime}
                  </span>

                </div>


                <h3>
                  ${blog.title}
                </h3>


                <p>
                  ${blog.excerpt}
                </p>


                <a
                  href="blog-details.html?id=${blog.id}"
                  class="home-card-link"
                >

                  Read More

                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>

                </a>

              </div>

            </article>

          `;

        })
        .join("");

  }



  /* =========================================================
     HOME GALLERY - PHOTOS / VIDEOS
  ========================================================= */
/* =========================================================
   HOME GALLERY - PHOTOS / YOUTUBE VIDEOS
   Data comes from js/gallery-data.js
========================================================= */


/* =========================================================
   GET COMMON GALLERY DATA
========================================================= */

const homeGalleryData =
  window.GALLERY_DATA || {
    photos: [],
    videos: []
  };


/* =========================================================
   GET HOME GALLERY ELEMENTS
========================================================= */

const homePhotoGrid =
  document.getElementById(
    "homePhotoGrid"
  );


const homeVideoGrid =
  document.getElementById(
    "homeVideoGrid"
  );



/* =========================================================
   HOME PHOTOS
   First 6 photos from gallery-data.js
========================================================= */

if (homePhotoGrid) {

  homePhotoGrid.innerHTML =
    homeGalleryData.photos
      .slice(0, 6)
      .map(function (photo) {

        return `

          <a
            href="gallery.html"
            class="home-gallery-card"
          >

            <img
              src="${photo.image}"
              alt="${photo.title}"
              loading="lazy"
            >


            <div class="home-gallery-overlay">

              <div>

                <h3>
                  ${photo.title}
                </h3>

              </div>

            </div>

          </a>

        `;

      })
      .join("");

}



/* =========================================================
   HOME YOUTUBE VIDEOS
   First 6 videos from gallery-data.js
========================================================= */

if (homeVideoGrid) {

  homeVideoGrid.innerHTML =
    homeGalleryData.videos
      .slice(0, 6)
      .map(function (video) {


        const thumbnail =
          window.getYouTubeThumbnail(
            video.url
          );


        return `

          <a
            href="gallery.html"
            class="
              home-gallery-card
              home-video-card
            "
          >

            <img
              src="${thumbnail}"
              alt="${video.title}"
              loading="lazy"
            >


            <span class="home-video-play">

              <i class="fa-solid fa-play"></i>

            </span>


            <div class="home-gallery-overlay">

              <div>

                <h3>
                  ${video.title}
                </h3>

              </div>

            </div>

          </a>

        `;

      })
      .join("");

}



/* =========================================================
   HOME GALLERY TABS
========================================================= */

const homeGalleryTabs =
  document.querySelectorAll(
    "[data-home-gallery-tab]"
  );


const homePhotosPanel =
  document.getElementById(
    "homePhotosPanel"
  );


const homeVideosPanel =
  document.getElementById(
    "homeVideosPanel"
  );


homeGalleryTabs.forEach(
  function (tab) {

    tab.addEventListener(
      "click",
      function () {


        const target =
          this.dataset.homeGalleryTab;


        /* Remove active from all tabs */

        homeGalleryTabs.forEach(
          function (button) {

            button.classList.remove(
              "active"
            );

          }
        );


        /* Current tab active */

        this.classList.add(
          "active"
        );


        /* Hide both */

        homePhotosPanel
          ?.classList
          .remove("active");


        homeVideosPanel
          ?.classList
          .remove("active");


        /* Show Photos */

        if (target === "photos") {

          homePhotosPanel
            ?.classList
            .add("active");

        }


        /* Show Videos */

        if (target === "videos") {

          homeVideosPanel
            ?.classList
            .add("active");

        }

      }
    );

  }
);

  /* =========================================================
     TESTIMONIALS
  ========================================================= */

  const testimonialTrack =
    document.getElementById(
      "homeTestimonialsTrack"
    );


  if (testimonialTrack) {

    testimonialTrack.innerHTML =
      homeTestimonials
        .map((item) => {

          return `

            <article class="home-testimonial-card slider-card">

              <div class="testimonial-quote">
                <i class="fa-solid fa-quote-left"></i>
              </div>


              <div class="testimonial-stars">

                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>

              </div>


              <p>
                ${item.text}
              </p>


              <div class="testimonial-user">

                <span class="testimonial-avatar">
                  <i class="fa-solid fa-user"></i>
                </span>

                <div>

                  <strong>
                    ${item.name}
                  </strong>

                  <span>
                    Oncology Care
                  </span>

                </div>

              </div>

            </article>

          `;

        })
        .join("");

  }



  /* =========================================================
     HERO SLIDER
  ========================================================= */

  const hero =
    document.querySelector(".home-hero");

  const heroSlides =
    document.querySelectorAll(
      ".home-hero-slide"
    );

  const heroDots =
    document.querySelectorAll(
      ".hero-dot"
    );

  const heroPrev =
    document.querySelector(
      ".hero-prev"
    );

  const heroNext =
    document.querySelector(
      ".hero-next"
    );


  let heroIndex = 0;

  let heroTimer = null;


  function showHero(index) {

    if (!heroSlides.length) return;


    if (index >= heroSlides.length) {

      heroIndex = 0;

    }

    else if (index < 0) {

      heroIndex =
        heroSlides.length - 1;

    }

    else {

      heroIndex = index;

    }


    heroSlides.forEach(
      (slide, slideIndex) => {

        slide.classList.toggle(
          "active",
          slideIndex === heroIndex
        );

      }
    );


    heroDots.forEach(
      (dot, dotIndex) => {

        dot.classList.toggle(
          "active",
          dotIndex === heroIndex
        );

      }
    );

  }


  function nextHero() {

    showHero(heroIndex + 1);

  }


  function previousHero() {

    showHero(heroIndex - 1);

  }


  function stopHeroAutoPlay() {

    if (heroTimer) {

      clearInterval(heroTimer);

      heroTimer = null;

    }

  }


  function startHeroAutoPlay() {

    stopHeroAutoPlay();


    heroTimer =
      setInterval(() => {

        nextHero();

      }, 5000);

  }


  heroNext?.addEventListener(
    "click",
    () => {

      nextHero();

      startHeroAutoPlay();

    }
  );


  heroPrev?.addEventListener(
    "click",
    () => {

      previousHero();

      startHeroAutoPlay();

    }
  );


  heroDots.forEach(
    (dot, index) => {

      dot.addEventListener(
        "click",
        () => {

          showHero(index);

          startHeroAutoPlay();

        }
      );

    }
  );


  if (hero) {

    hero.addEventListener(
      "mouseenter",
      stopHeroAutoPlay
    );


    hero.addEventListener(
      "mouseleave",
      startHeroAutoPlay
    );

  }


  showHero(0);

  startHeroAutoPlay();



  /* =========================================================
     REUSABLE INFINITE CARD SLIDER

     Desktop = 4 cards
     Tablet  = 2 cards
     Mobile  = 1 card

     Continuous:
     1,2,3,4,5...1,2,3,4...
  ========================================================= */

  function createInfiniteSlider(
    sliderElement,
    options = {}
  ) {

    if (!sliderElement) return;


    const viewport =
      sliderElement.querySelector(
        ".card-slider-viewport"
      );

    const track =
      sliderElement.querySelector(
        ".card-slider-track"
      );

    const prev =
      sliderElement.querySelector(
        ".slider-prev"
      );

    const next =
      sliderElement.querySelector(
        ".slider-next"
      );


    if (
      !viewport ||
      !track
    ) {
      return;
    }


    const originalCards =
      Array.from(track.children);


    if (!originalCards.length) {
      return;
    }


    const delay =
      options.delay || 3500;


    let visibleCards = 4;

    let cardWidth = 0;

    let gap = 22;

    let currentIndex = 0;

    let timer = null;

    let moving = false;

    let cloneCount = 0;



    /* =====================================
       GET VISIBLE CARD COUNT
    ====================================== */

    function getVisibleCards() {

      if (
        window.matchMedia(
          "(max-width: 767px)"
        ).matches
      ) {

        return 1;

      }


      if (
        window.matchMedia(
          "(max-width: 1100px)"
        ).matches
      ) {

        return 2;

      }


      return 4;

    }



    /* =====================================
       BUILD CLONES
    ====================================== */

    function buildSlider() {

      stopAuto();


      visibleCards =
        getVisibleCards();


      cloneCount =
        Math.min(
          visibleCards,
          originalCards.length
        );


      track.innerHTML = "";


      const beforeClones =
        originalCards
          .slice(-cloneCount)
          .map(card =>
            card.cloneNode(true)
          );


      const originals =
        originalCards
          .map(card =>
            card.cloneNode(true)
          );


      const afterClones =
        originalCards
          .slice(0, cloneCount)
          .map(card =>
            card.cloneNode(true)
          );


      [
        ...beforeClones,
        ...originals,
        ...afterClones
      ].forEach(card => {

        track.appendChild(card);

      });


      currentIndex =
        cloneCount;


      requestAnimationFrame(() => {

        calculateSize();

        moveWithoutAnimation(
          currentIndex
        );

        startAuto();

      });

    }



    /* =====================================
       CALCULATE WIDTH
    ====================================== */

    function calculateSize() {

      const styles =
        window.getComputedStyle(track);


      gap =
        parseFloat(
          styles.columnGap ||
          styles.gap
        ) || 22;


      cardWidth =
        (
          viewport.clientWidth -
          gap * (visibleCards - 1)
        ) /
        visibleCards;


      Array
        .from(track.children)
        .forEach(card => {

          card.style.flex =
            `0 0 ${cardWidth}px`;

        });

    }



    /* =====================================
       TRANSLATE
    ====================================== */

    function translate(index) {

      const offset =
        index *
        (cardWidth + gap);


      track.style.transform =
        `translate3d(-${offset}px, 0, 0)`;

    }



    function moveWithoutAnimation(index) {

      track.style.transition =
        "none";


      translate(index);


      track.offsetHeight;


      track.style.transition =
        "transform 0.55s ease";

    }



    /* =====================================
       NEXT
    ====================================== */

    function nextSlide() {

      if (moving) return;


      moving = true;

      currentIndex++;

      translate(currentIndex);

    }



    /* =====================================
       PREVIOUS
    ====================================== */

    function previousSlide() {

      if (moving) return;


      moving = true;

      currentIndex--;

      translate(currentIndex);

    }



    /* =====================================
       LOOP RESET
    ====================================== */

    track.addEventListener(
      "transitionend",
      () => {

        const originalLength =
          originalCards.length;


        if (
          currentIndex >=
          cloneCount + originalLength
        ) {

          currentIndex =
            cloneCount;

          moveWithoutAnimation(
            currentIndex
          );

        }


        else if (
          currentIndex < cloneCount
        ) {

          currentIndex =
            cloneCount +
            originalLength -
            1;

          moveWithoutAnimation(
            currentIndex
          );

        }


        moving = false;

      }
    );



    /* =====================================
       AUTO LOOP
    ====================================== */

    function startAuto() {

      stopAuto();


      timer =
        setInterval(() => {

          nextSlide();

        }, delay);

    }


    function stopAuto() {

      if (timer) {

        clearInterval(timer);

        timer = null;

      }

    }



    /* =====================================
       ARROWS
    ====================================== */

    next?.addEventListener(
      "click",
      () => {

        nextSlide();

        startAuto();

      }
    );


    prev?.addEventListener(
      "click",
      () => {

        previousSlide();

        startAuto();

      }
    );



    /* =====================================
       PAUSE ON HOVER
    ====================================== */

    sliderElement.addEventListener(
      "mouseenter",
      stopAuto
    );


    sliderElement.addEventListener(
      "mouseleave",
      startAuto
    );



    /* =====================================
       TOUCH
    ====================================== */

    let startX = 0;


    viewport.addEventListener(
      "touchstart",
      event => {

        startX =
          event.changedTouches[0]
            .clientX;

        stopAuto();

      },
      {
        passive: true
      }
    );


    viewport.addEventListener(
      "touchend",
      event => {

        const endX =
          event.changedTouches[0]
            .clientX;


        const distance =
          startX - endX;


        if (distance > 45) {

          nextSlide();

        }

        else if (distance < -45) {

          previousSlide();

        }


        startAuto();

      },
      {
        passive: true
      }
    );



    /* =====================================
       RESIZE
    ====================================== */

    let resizeTimer;


    window.addEventListener(
      "resize",
      () => {

        clearTimeout(resizeTimer);


        resizeTimer =
          setTimeout(() => {

            buildSlider();

          }, 180);

      }
    );


    buildSlider();

  }



  /* =========================================================
     INITIALIZE CARD SLIDERS
  ========================================================= */

  document
    .querySelectorAll(
      ".infinite-slider"
    )
    .forEach(slider => {

      createInfiniteSlider(
        slider,
        {
          delay: 3500
        }
      );

    });



  /* =========================================================
     FAQ
  ========================================================= */

  const faqItems =
    document.querySelectorAll(
      ".home-faq-item"
    );


  faqItems.forEach(item => {

    const button =
      item.querySelector(
        ".home-faq-question"
      );


    button?.addEventListener(
      "click",
      () => {

        const alreadyOpen =
          item.classList.contains(
            "active"
          );


        faqItems.forEach(
          faq => {

            faq.classList.remove(
              "active"
            );


            const icon =
              faq.querySelector(
                ".home-faq-question i"
              );


            if (icon) {

              icon.className =
                "fa-solid fa-plus";

            }

          }
        );


        if (!alreadyOpen) {

          item.classList.add(
            "active"
          );


          const icon =
            item.querySelector(
              ".home-faq-question i"
            );


          if (icon) {

            icon.className =
              "fa-solid fa-minus";

          }

        }

      }
    );

  });


});