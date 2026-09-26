/* =========================================================
   BLOG DETAILS PAGE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =====================================================
       GET ID FROM URL
    ===================================================== */

    const params =
      new URLSearchParams(
        window.location.search
      );


    const blogId =
      Number(
        params.get("id")
      );



    /* =====================================================
       FIND CURRENT BLOG
    ===================================================== */

    const currentBlog =
      blogData.find(
        (blog) => blog.id === blogId
      );



    /* =====================================================
       INVALID BLOG
    ===================================================== */

    if (!currentBlog) {

      window.location.href =
        "blog.html";

      return;

    }



    /* =====================================================
       ELEMENTS
    ===================================================== */

    const bannerTitle =
      document.getElementById(
        "detailBannerTitle"
      );


    const breadcrumbCategory =
      document.getElementById(
        "breadcrumbCategory"
      );


    const detailImage =
      document.getElementById(
        "detailImage"
      );


    const detailCategory =
      document.getElementById(
        "detailCategory"
      );


    const detailDate =
      document.getElementById(
        "detailDate"
      );


    const detailReadTime =
      document.getElementById(
        "detailReadTime"
      );


    const detailTitle =
      document.getElementById(
        "detailTitle"
      );


    const detailContent =
      document.getElementById(
        "detailContent"
      );


    const relatedBlogs =
      document.getElementById(
        "relatedBlogs"
      );



    /* =====================================================
       PAGE TITLE
    ===================================================== */

    document.title =
      currentBlog.title +
      " | Dr. Deepak Koppaka";



    /* =====================================================
       BREADCRUMB
    ===================================================== */

    breadcrumbCategory.textContent =
      currentBlog.category;



    /* =====================================================
       BANNER
    ===================================================== */

    bannerTitle.textContent =
      currentBlog.category;



    /* =====================================================
       IMAGE
    ===================================================== */

    detailImage.src =
      currentBlog.image;


    detailImage.alt =
      currentBlog.title;



    /* =====================================================
       META
    ===================================================== */

    detailCategory.textContent =
      currentBlog.category;


    detailDate.textContent =
      currentBlog.date;


    detailReadTime.textContent =
      currentBlog.readTime;



    /* =====================================================
       TITLE
    ===================================================== */

    detailTitle.textContent =
      currentBlog.title;



    /* =====================================================
       FULL CONTENT
    ===================================================== */

    detailContent.innerHTML =
      currentBlog.content;



    /* =====================================================
       RELATED BLOGS

       Current blog ni remove chesi
       remaining 4 blogs chupistham.
    ===================================================== */

    const related =
      blogData
        .filter(
          (blog) =>
            blog.id !== currentBlog.id
        )
        .slice(0, 4);



    relatedBlogs.innerHTML =
      related
        .map(
          (blog) => `

            <a
              href="blog-details.html?id=${blog.id}"
              class="related-blog-item"
            >

              <img
                src="${blog.image}"
                alt="${blog.title}"
                loading="lazy"
              >


              <div>

                <span>
                  ${blog.category}
                </span>

                <h4>
                  ${blog.shortTitle}
                </h4>

              </div>

            </a>

          `
        )
        .join("");


  }
);