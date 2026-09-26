document.addEventListener("DOMContentLoaded", () => {


  /* =====================================================
     ABOUT PAGE TABS
  ===================================================== */

  const tabButtons =
    document.querySelectorAll(".profile-tab");

  const tabContents =
    document.querySelectorAll(".profile-tab-content");


  tabButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const targetId =
        button.dataset.tab;


      /* Remove current active tab */

      tabButtons.forEach((item) => {

        item.classList.remove("active");

      });


      /* Hide current content */

      tabContents.forEach((content) => {

        content.classList.remove("active");

      });


      /* Activate clicked tab */

      button.classList.add("active");


      const targetContent =
        document.getElementById(targetId);


      if (targetContent) {

        targetContent.classList.add("active");

      }

    });

  });



  /* =====================================================
     ABOUT FAQ
  ===================================================== */

  const faqItems =
    document.querySelectorAll(".about-faq-item");


  faqItems.forEach((item) => {

    const question =
      item.querySelector(".about-faq-question");

    const icon =
      question?.querySelector("i");


    if (!question) return;


    question.addEventListener("click", () => {

      const wasActive =
        item.classList.contains("active");


      /* Close all FAQ items */

      faqItems.forEach((faq) => {

        faq.classList.remove("active");


        const faqIcon =
          faq.querySelector(
            ".about-faq-question i"
          );


        if (faqIcon) {

          faqIcon.classList.remove(
            "fa-minus"
          );

          faqIcon.classList.add(
            "fa-plus"
          );

        }

      });


      /* Open selected item */

      if (!wasActive) {

        item.classList.add("active");


        if (icon) {

          icon.classList.remove(
            "fa-plus"
          );

          icon.classList.add(
            "fa-minus"
          );

        }

      }

    });

  });


});