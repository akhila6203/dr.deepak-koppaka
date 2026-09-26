document.addEventListener("DOMContentLoaded", () => {


  const PHONE_DISPLAY = "+91 9XXXXXXXXX";
  const PHONE_LINK = "+919XXXXXXXXX";

  const EMAIL = "info@drdeepakkoppaka.com";
  const ADDRESS = "Hyderabad, Telangana, India";


  /* =====================================================
     HEADER
  ===================================================== */

  const headerHTML = `
    <div class="site-header-wrapper">

      <!-- ==========================================
           TOP HEADER
      =========================================== -->
      <div class="top-header">

        <div class="header-wide-container top-header-inner">

          <!-- LEFT -->
          <div class="top-left">

            <a
              href="mailto:${EMAIL}"
              class="top-contact-item top-email"
            >
              <i class="fa-regular fa-envelope"></i>

              <span>${EMAIL}</span>
            </a>


            <span class="top-divider"></span>


            <a
              href="tel:${PHONE_LINK}"
              class="top-contact-item top-phone"
            >
              <i class="fa-solid fa-phone"></i>

              <span>${PHONE_DISPLAY}</span>
            </a>

          </div>


          <!-- RIGHT -->
          <div class="top-right">

            <div class="top-address">

              <i class="fa-solid fa-location-dot"></i>

              <span>${ADDRESS}</span>

            </div>


            <span class="top-divider top-address-divider"></span>


            <div class="top-socials">

              <a
                href="#"
                aria-label="Facebook"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="#"
                aria-label="Instagram"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="#"
                aria-label="YouTube"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>

            </div>

          </div>

        </div>

      </div>


      <!-- ==========================================
           MAIN HEADER
      =========================================== -->

      <header class="main-header">

        <div class="header-wide-container main-header-inner">

          <!-- LOGO -->
          <a
            href="index.html"
            class="site-logo"
            aria-label="Dr. Deepak Koppaka Home"
          >

            <img
              src="assets/images/logo.png"
              alt="Dr. Deepak Koppaka - Medical Oncologist"
            >

          </a>


          <!-- ======================================
               DESKTOP NAVIGATION
          ======================================= -->

          <nav class="desktop-nav">

            <a href="index.html" class="nav-link">
              Home
            </a>


            <a href="about.html" class="nav-link">
              About
            </a>


            <!-- CANCER SPECIALITIES -->
            <div class="nav-dropdown">

              <a
                href="cancer-specialities.html"
                class="nav-link dropdown-parent-link"
              >
                Cancer Specialities

                <i class="fa-solid fa-chevron-down"></i>
              </a>


        <div class="dropdown-menu cancer-speciality-dropdown">

  <a href="cancer-details.html?cancer=head-neck-cancer">
    <span></span>
    Head &amp; Neck Cancer
  </a>

  <a href="cancer-details.html?cancer=thyroid-cancer">
    <span></span>
    Thyroid Cancer
  </a>

  <a href="cancer-details.html?cancer=breast-cancer">
    <span></span>
    Breast Cancer
  </a>

  <a href="cancer-details.html?cancer=esophageal-cancer">
    <span></span>
    Esophageal Cancer
  </a>

  <a href="cancer-details.html?cancer=stomach-cancer">
    <span></span>
    Stomach Cancer
  </a>

  <a href="cancer-details.html?cancer=pancreatic-cancer">
    <span></span>
    Pancreatic Cancer
  </a>

  <a href="cancer-details.html?cancer=colorectal-cancer">
    <span></span>
    Colorectal &amp; Rectal Cancer
  </a>

  <a href="cancer-details.html?cancer=gynecological-cancer">
    <span></span>
    Uterine / Gynecological Cancers
  </a>

</div>

            </div>

           <!-- TREATMENTS -->
<div class="nav-dropdown">

  <a
    href="treatments.html"
    class="nav-link dropdown-parent-link"
  >
    Treatments

    <i class="fa-solid fa-chevron-down"></i>
  </a>


  <div class="dropdown-menu">

    <a href="treatment-details.html?treatment=laparoscopic-cancer-surgery">
      <span></span>
      Laparoscopic Cancer Surgery
    </a>

    <a href="treatment-details.html?treatment=robotic-cancer-surgery">
      <span></span>
      Robotic Cancer Surgery
    </a>

    <a href="treatment-details.html?treatment=hipec-pipac">
      <span></span>
      HIPEC and PIPAC
    </a>

    <a href="treatment-details.html?treatment=organ-preservation">
      <span></span>
      Organ Preservation Cancer Surgery
    </a>

    <a href="treatment-details.html?treatment=sentinel-lymph-node-biopsy">
      <span></span>
      Sentinel Lymph Node Biopsy
    </a>

    <a href="treatment-details.html?treatment=fluorescence-guided-surgery">
      <span></span>
      Fluorescence Guided Cancer Surgery
    </a>

    

  </div>

</div>

            <a href="gallery.html" class="nav-link">
              Gallery
            </a>

            <a href="blog.html" class="nav-link">
              Blogs
            </a>


            <!-- CONTACT + LINE + CALL -->
            <div class="desktop-contact-actions">

              <a
                href="contact.html"
                class="nav-link contact-nav-link"
              >
                Contact Us
              </a>


              <span class="header-action-divider"></span>


              <a
                href="tel:${PHONE_LINK}"
                class="header-call-btn"
              >
                <i class="fa-solid fa-phone"></i>

                <span>Call Us</span>
              </a>

            </div>

          </nav>


          <!-- BOOK APPOINTMENT -->
          <div class="header-book-area">

            <a
              href="appointment.html"
              class="header-book-btn"
            >
              <i class="fa-regular fa-calendar-check"></i>

              <span>Book Appointment</span>
            </a>

          </div>


          <!-- MOBILE / TABLET MENU BUTTON -->
          <button
            type="button"
            class="mobile-menu-btn"
            aria-label="Open menu"
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>

      </header>

    </div>


    <!-- ==========================================
         MOBILE OVERLAY
    =========================================== -->

    <div class="mobile-menu-overlay"></div>


    <!-- ==========================================
         MOBILE / TABLET SIDE MENU
    =========================================== -->

    <aside class="mobile-side-menu">

      <!-- MOBILE MENU HEADER -->
      <div class="mobile-menu-header">

        <a
          href="index.html"
          class="mobile-menu-logo"
        >

          <img
            src="assets/images/logo.png"
            alt="Dr. Deepak Koppaka"
          >

        </a>


        <button
          type="button"
          class="mobile-menu-close"
          aria-label="Close menu"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>

      </div>


      <!-- MOBILE LINKS -->
      <div class="mobile-menu-content">

        <nav class="mobile-nav">

          <a
            href="index.html"
            class="mobile-nav-link"
          >
            Home
          </a>


          <a
            href="about.html"
            class="mobile-nav-link"
          >
            About
          </a>

              <!-- ==========================================
               MOBILE CANCER SPECIALITIES
          =========================================== -->

          <div class="mobile-dropdown">

            <button
              type="button"
              class="mobile-dropdown-toggle"
            >
              <span>Cancer Specialities</span>

              <i class="fa-solid fa-chevron-down"></i>
            </button>


            <div class="mobile-dropdown-menu">

              <a href="cancer-specialities.html">
                All Cancer Specialities
              </a>

              <a href="cancer-details.html?cancer=head-neck-cancer">
                Head &amp; Neck Cancer
              </a>

              <a href="cancer-details.html?cancer=thyroid-cancer">
                Thyroid Cancer
              </a>

              <a href="cancer-details.html?cancer=breast-cancer">
                Breast Cancer
              </a>

              <a href="cancer-details.html?cancer=esophageal-cancer">
                Esophageal Cancer
              </a>

              <a href="cancer-details.html?cancer=stomach-cancer">
                Stomach Cancer
              </a>

              <a href="cancer-details.html?cancer=pancreatic-cancer">
                Pancreatic Cancer
              </a>

              <a href="cancer-details.html?cancer=colorectal-cancer">
                Colorectal &amp; Rectal Cancer
              </a>

              <a href="cancer-details.html?cancer=gynecological-cancer">
                Uterine / Gynecological Cancers
              </a>

            </div>

          </div>


         <!-- ==========================================
     MOBILE TREATMENTS
=========================================== -->

<div class="mobile-dropdown">

  <button
    type="button"
    class="mobile-dropdown-toggle"
  >
    <span>Treatments</span>

    <i class="fa-solid fa-chevron-down"></i>
  </button>


  <div class="mobile-dropdown-menu">

    <a href="treatments.html">
      All Treatments
    </a>

    <a href="treatment-details.html?treatment=laparoscopic-cancer-surgery">
      Laparoscopic Cancer Surgery
    </a>

    <a href="treatment-details.html?treatment=robotic-cancer-surgery">
      Robotic Cancer Surgery
    </a>

    <a href="treatment-details.html?treatment=hipec-pipac">
      HIPEC and PIPAC
    </a>

    <a href="treatment-details.html?treatment=organ-preservation">
      Organ Preservation Cancer Surgery
    </a>

    <a href="treatment-details.html?treatment=sentinel-lymph-node-biopsy">
      Sentinel Lymph Node Biopsy
    </a>

    <a href="treatment-details.html?treatment=fluorescence-guided-surgery">
      Fluorescence Guided Cancer Surgery
    </a>


  </div>

</div>

          <a
            href="gallery.html"
            class="mobile-nav-link"
          >
            Gallery
          </a>

          <a
            href="blog.html"
            class="mobile-nav-link"
          >
            Blogs
          </a>


          <a
            href="contact.html"
            class="mobile-nav-link"
          >
            Contact Us
          </a>

        </nav>


        <!-- MOBILE ACTION BUTTONS -->

        <div class="mobile-menu-actions">

          <a
            href="tel:${PHONE_LINK}"
            class="mobile-call-button"
          >
            <i class="fa-solid fa-phone"></i>

            Call Us
          </a>


          <a
            href="appointment.html"
            class="mobile-book-button"
          >
            <i class="fa-regular fa-calendar-check"></i>

            Book Appointment
          </a>

        </div>

      </div>


      <!-- MOBILE BOTTOM CONTACT -->

      <div class="mobile-menu-bottom">

        <a href="mailto:${EMAIL}">

          <i class="fa-regular fa-envelope"></i>

          <span>
            ${EMAIL}
          </span>

        </a>


        <div class="mobile-address">

          <i class="fa-solid fa-location-dot"></i>

          <span>
            ${ADDRESS}
          </span>

        </div>

      </div>

    </aside>
  `;


  /* =====================================================
     FOOTER
  ===================================================== */

  const footerHTML = `

    <footer class="site-footer">

      <div class="footer-wide-container">

        <!-- ==========================================
             MAIN FOOTER GRID
        =========================================== -->

        <div class="footer-main-grid">


          <!-- COLUMN 1 -->
          <div class="footer-about-column">

            <a
              href="index.html"
              class="footer-logo"
            >
              <img
                src="assets/images/logo.png"
                alt="Dr. Deepak Koppaka - Medical Oncologist"
              >
            </a>


            <p class="footer-description">
              Comprehensive and compassionate medical oncology
              care focused on evidence-based cancer treatment,
              personalised therapy and continuous patient support.
            </p>


            <div class="footer-socials">

              <a
                href="#"
                aria-label="Facebook"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>


              <a
                href="#"
                aria-label="Instagram"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>


              <a
                href="#"
                aria-label="LinkedIn"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>


              <a
                href="#"
                aria-label="YouTube"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>

            </div>

          </div>


          <!-- COLUMN 2 -->
          <div class="footer-links-column">

            <h3>
              Quick Links
            </h3>

            <ul>

              <li>
                <a href="index.html">
                  Home
                </a>
              </li>

              <li>
                <a href="about.html">
                  About Dr. Deepak Koppaka
                </a>
              </li>

              <li>
                <a href="gallery.html">
                  Gallery
                </a>
              </li>


              <li>
                <a href="blog.html">
                  Blogs
                </a>
              </li>

              <li>
                <a href="contact.html">
                  Contact Us
                </a>
              </li>

            </ul>
          </div>

          <!-- COLUMN 3 -->
<div class="footer-links-column">

  <h3>
    Cancer Specialities
  </h3>

  <ul>

    <li>
      <a href="cancer-details.html?cancer=head-neck-cancer">
        Head &amp; Neck Cancer
      </a>
    </li>

    <li>
      <a href="cancer-details.html?cancer=thyroid-cancer">
        Thyroid Cancer
      </a>
    </li>

    <li>
      <a href="cancer-details.html?cancer=breast-cancer">
        Breast Cancer
      </a>
    </li>

    <li>
      <a href="cancer-details.html?cancer=esophageal-cancer">
        Esophageal Cancer
      </a>
    </li>

    <li>
      <a href="cancer-details.html?cancer=stomach-cancer">
        Stomach Cancer
      </a>
    </li>

    <li>
      <a href="cancer-details.html?cancer=pancreatic-cancer">
        Pancreatic Cancer
      </a>
    </li>

    <li>
      <a href="cancer-details.html?cancer=colorectal-cancer">
        Colorectal &amp; Rectal Cancer
      </a>
    </li>

    <li>
      <a href="cancer-details.html?cancer=gynecological-cancer">
        Uterine / Gynecological Cancers
      </a>
    </li>

  </ul>

</div>


         
         <!-- COLUMN 4 -->
<div class="footer-links-column">

  <h3>
    Treatments
  </h3>

  <ul>

    <li>
      <a href="treatment-details.html?treatment=laparoscopic-cancer-surgery">
        Laparoscopic Cancer Surgery
      </a>
    </li>

    <li>
      <a href="treatment-details.html?treatment=robotic-cancer-surgery">
        Robotic Cancer Surgery
      </a>
    </li>

    <li>
      <a href="treatment-details.html?treatment=hipec-pipac">
        HIPEC and PIPAC
      </a>
    </li>

    <li>
      <a href="treatment-details.html?treatment=organ-preservation">
        Organ Preservation Cancer Surgery
      </a>
    </li>

    <li>
      <a href="treatment-details.html?treatment=sentinel-lymph-node-biopsy">
        Sentinel Lymph Node Biopsy
      </a>
    </li>

    <li>
      <a href="treatment-details.html?treatment=fluorescence-guided-surgery">
        Fluorescence Guided Cancer Surgery
      </a>
    </li>

  </ul>

</div>
        </div>


        <!-- ==========================================
             CONTACT STRIP
        =========================================== -->

        <div class="footer-contact-strip">


          <!-- ADDRESS -->
          <div class="footer-contact-box">

            <div class="footer-contact-icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>

            <div>

              <span class="footer-contact-label">
                Visit Us
              </span>

              <p>
                ${ADDRESS}
              </p>

            </div>

          </div>


          <!-- EMAIL -->
          <a
            href="mailto:${EMAIL}"
            class="footer-contact-box"
          >

            <div class="footer-contact-icon">
              <i class="fa-regular fa-envelope"></i>
            </div>

            <div>

              <span class="footer-contact-label">
                Email Us
              </span>

              <p>
                ${EMAIL}
              </p>

            </div>

          </a>


          <!-- PHONE -->
          <a
            href="tel:${PHONE_LINK}"
            class="footer-contact-box"
          >

            <div class="footer-contact-icon">
              <i class="fa-solid fa-phone"></i>
            </div>

            <div>

              <span class="footer-contact-label">
                Call Us
              </span>

              <p>
                ${PHONE_DISPLAY}
              </p>

            </div>

          </a>

        </div>


        <!-- ==========================================
             FOOTER BOTTOM
        =========================================== -->

        <div class="footer-bottom">

          <p>
            © <span id="currentYear"></span>
            Dr. Deepak Koppaka.
            All Rights Reserved.
          </p>


          <p class="footer-speciality-text">
            Medical Oncologist
          </p>

        </div>

      </div>

    </footer>


    <!-- ==========================================
         FLOATING CONTACT BUTTONS
    =========================================== -->

    <div class="floating-contact-buttons">


      <!-- WHATSAPP -->

      <a
        href="https://wa.me/${PHONE_LINK.replace("+", "")}"
        target="_blank"
        rel="noopener noreferrer"
        class="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >

        <i class="fa-brands fa-whatsapp"></i>

      </a>


      <!-- CALL -->

      <a
        href="tel:${PHONE_LINK}"
        class="floating-phone"
        aria-label="Call Dr. Deepak Koppaka"
      >

        <i class="fa-solid fa-phone"></i>

      </a>

    </div>
  `;


  /* =====================================================
     INJECT HEADER + FOOTER
  ===================================================== */

  const headerTarget =
    document.querySelector(".shared-header");

  const footerTarget =
    document.querySelector(".shared-footer");


  if (headerTarget) {
    headerTarget.innerHTML = headerHTML;
  }


  if (footerTarget) {
    footerTarget.innerHTML = footerHTML;
  }


  /* =====================================================
     CURRENT YEAR
  ===================================================== */

  const currentYear =
    document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent =
      new Date().getFullYear();
  }


  /* =====================================================
     FIXED HEADER HEIGHT
     Automatically adds correct body top spacing
  ===================================================== */

  const siteHeader =
    document.querySelector(".site-header-wrapper");


  function updateHeaderHeight() {

    if (!siteHeader) return;

    const headerHeight =
      siteHeader.offsetHeight;

    document.documentElement.style.setProperty(
      "--site-header-height",
      `${headerHeight}px`
    );

  }


  updateHeaderHeight();


  window.addEventListener(
    "resize",
    updateHeaderHeight
  );


  /* =====================================================
     HEADER SCROLL EFFECT
  ===================================================== */

  function handleHeaderScroll() {

    if (!siteHeader) return;


    if (window.scrollY > 20) {

      siteHeader.classList.add(
        "header-scrolled"
      );

    } else {

      siteHeader.classList.remove(
        "header-scrolled"
      );

    }

  }


  handleHeaderScroll();


  window.addEventListener(
    "scroll",
    handleHeaderScroll
  );


  /* =====================================================
     MOBILE MENU
  ===================================================== */

  const menuButton =
    document.querySelector(".mobile-menu-btn");

  const sideMenu =
    document.querySelector(".mobile-side-menu");

  const menuOverlay =
    document.querySelector(".mobile-menu-overlay");

  const closeButton =
    document.querySelector(".mobile-menu-close");


  function openMobileMenu() {

    if (!sideMenu || !menuOverlay) return;

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

    document.body.classList.add(
      "mobile-menu-open"
    );

  }


  function closeMobileMenu() {

    if (!sideMenu || !menuOverlay) return;

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    document.body.classList.remove(
      "mobile-menu-open"
    );


    document
      .querySelectorAll(".mobile-dropdown")
      .forEach((dropdown) => {

        dropdown.classList.remove("active");

      });

  }


  if (menuButton) {

    menuButton.addEventListener(
      "click",
      openMobileMenu
    );

  }


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeMobileMenu
    );

  }


  if (menuOverlay) {

    menuOverlay.addEventListener(
      "click",
      closeMobileMenu
    );

  }


  /* =====================================================
     MOBILE DROPDOWNS
     ONLY ONE DROPDOWN OPEN
  ===================================================== */

  const mobileDropdowns =
    document.querySelectorAll(
      ".mobile-dropdown"
    );


  mobileDropdowns.forEach((dropdown) => {

    const toggle =
      dropdown.querySelector(
        ".mobile-dropdown-toggle"
      );


    if (!toggle) return;


    toggle.addEventListener(
      "click",
      () => {

        const isOpen =
          dropdown.classList.contains(
            "active"
          );


        /* Close all */

        mobileDropdowns.forEach(
          (otherDropdown) => {

            otherDropdown.classList.remove(
              "active"
            );

          }
        );


        /* Open selected */

        if (!isOpen) {

          dropdown.classList.add(
            "active"
          );

        }

      }
    );

  });


  /* =====================================================
     CLOSE MOBILE MENU AFTER NORMAL LINK CLICK
  ===================================================== */

  document
    .querySelectorAll(
      ".mobile-side-menu a"
    )
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          closeMobileMenu();

        }
      );

    });


  /* =====================================================
     ESC KEY CLOSE
  ===================================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        closeMobileMenu();

      }

    }
  );


  /* =====================================================
     IF RESIZED TO DESKTOP, CLOSE MOBILE MENU
  ===================================================== */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 1180) {

        closeMobileMenu();

      }

    }
  );


  /* =====================================================
     ACTIVE DESKTOP / MOBILE NAVIGATION
  ===================================================== */

  const currentPath =
    window.location.pathname;

  const currentFile =
    currentPath.split("/").pop() ||
    "index.html";


  document
    .querySelectorAll(
      ".desktop-nav > a, .mobile-nav > a"
    )
    .forEach((link) => {

      const href =
        link.getAttribute("href");


      if (!href) return;


      const linkFile =
        href.split("/").pop();


      if (linkFile === currentFile) {

        link.classList.add("current");

      }

    });


  /* =====================================================
     IMPORTANT:
     Desktop dropdowns require NO JS click event.

     They open ONLY using CSS :hover / :focus-within.
  ===================================================== */

});