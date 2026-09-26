document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =====================================================
       DATA
    ===================================================== */

    const data =
      window.GALLERY_DATA || {
        photos: [],
        videos: []
      };


    /* =====================================================
       GRID ELEMENTS
    ===================================================== */

    const photoGrid =
      document.getElementById(
        "galleryPhotoGrid"
      );


    const videoGrid =
      document.getElementById(
        "galleryVideoGrid"
      );



    /* =====================================================
       RENDER PHOTOS
    ===================================================== */

    function renderPhotos() {

      if (!photoGrid) {
        return;
      }


      photoGrid.innerHTML =
        data.photos
          .map(function (photo) {

            return `

              <article
                class="gallery-photo-card"
                data-image="${photo.image}"
                data-title="${photo.title}"
              >

                <div class="gallery-photo-image">

                  <img
                    src="${photo.image}"
                    alt="${photo.title}"
                    loading="lazy"
                  >


                  <div class="gallery-photo-overlay">

                    <span class="gallery-photo-view">

                      <i
                        class="fa-solid
                        fa-magnifying-glass-plus"
                      ></i>

                    </span>

                  </div>

                </div>


                <div class="gallery-card-title">

                  <h3>
                    ${photo.title}
                  </h3>

                </div>

              </article>

            `;

          })
          .join("");

    }



    /* =====================================================
       RENDER YOUTUBE VIDEOS
    ===================================================== */

    function renderVideos() {

      if (!videoGrid) {
        return;
      }


      videoGrid.innerHTML =
        data.videos
          .map(function (video) {

            const thumbnail =
              window.getYouTubeThumbnail(
                video.url
              );


            return `

              <article
                class="gallery-video-card"
                data-video-url="${video.url}"
              >

                <div class="gallery-video-thumbnail">

                  <img
                    src="${thumbnail}"
                    alt="${video.title}"
                    loading="lazy"
                  >


                  <div
                    class="gallery-video-overlay"
                  ></div>


                  <span
                    class="gallery-play-button"
                  >

                    <i
                      class="fa-solid fa-play"
                    ></i>

                  </span>

                </div>


                <div class="gallery-card-title">

                  <h3>
                    ${video.title}
                  </h3>

                </div>

              </article>

            `;

          })
          .join("");

    }



    /* =====================================================
       RENDER
    ===================================================== */

    renderPhotos();

    renderVideos();



    /* =====================================================
       TABS
    ===================================================== */

    const tabs =
      document.querySelectorAll(
        ".gallery-tab"
      );


    const photosContent =
      document.getElementById(
        "photosContent"
      );


    const videosContent =
      document.getElementById(
        "videosContent"
      );


    tabs.forEach(function (tab) {

      tab.addEventListener(
        "click",
        function () {


          const selected =
            this.dataset.tab;


          tabs.forEach(
            function (button) {

              button.classList.remove(
                "active"
              );

            }
          );


          this.classList.add(
            "active"
          );


          photosContent
            ?.classList
            .remove("active");


          videosContent
            ?.classList
            .remove("active");


          if (
            selected === "photos"
          ) {

            photosContent
              ?.classList
              .add("active");

          }


          if (
            selected === "videos"
          ) {

            videosContent
              ?.classList
              .add("active");

          }

        }
      );

    });



    /* =====================================================
       PHOTO MODAL
    ===================================================== */

    const photoModal =
      document.getElementById(
        "photoModal"
      );


    const modalPhoto =
      document.getElementById(
        "modalPhoto"
      );


    const modalPhotoTitle =
      document.getElementById(
        "modalPhotoTitle"
      );


    const photoClose =
      document.querySelector(
        ".photo-modal-close"
      );


    const photoBackdrop =
      document.querySelector(
        ".photo-modal-backdrop"
      );



    function openPhoto(card) {

      if (
        !photoModal ||
        !modalPhoto
      ) {
        return;
      }


      const image =
        card.dataset.image;


      const title =
        card.dataset.title || "";


      modalPhoto.src =
        image;


      modalPhoto.alt =
        title;


      if (modalPhotoTitle) {

        modalPhotoTitle.textContent =
          title;

      }


      photoModal.classList.add(
        "active"
      );


      photoModal.setAttribute(
        "aria-hidden",
        "false"
      );


      document.body.classList.add(
        "gallery-modal-open"
      );

    }



    function closePhoto() {

      if (!photoModal) {
        return;
      }


      photoModal.classList.remove(
        "active"
      );


      photoModal.setAttribute(
        "aria-hidden",
        "true"
      );


      document.body.classList.remove(
        "gallery-modal-open"
      );


      setTimeout(
        function () {

          if (modalPhoto) {

            modalPhoto.src = "";

          }

        },
        200
      );

    }



    if (photoGrid) {

      photoGrid.addEventListener(
        "click",
        function (event) {

          const card =
            event.target.closest(
              ".gallery-photo-card"
            );


          if (!card) {
            return;
          }


          openPhoto(card);

        }
      );

    }



    photoClose?.addEventListener(
      "click",
      closePhoto
    );


    photoBackdrop?.addEventListener(
      "click",
      closePhoto
    );



    /* =====================================================
       VIDEO MODAL
    ===================================================== */

    const videoModal =
      document.getElementById(
        "videoModal"
      );


    const videoFrame =
      document.getElementById(
        "galleryVideoFrame"
      );


    const videoClose =
      document.querySelector(
        ".video-modal-close"
      );


    const videoBackdrop =
      document.querySelector(
        ".video-modal-backdrop"
      );



    function openVideo(url) {

      if (
        !videoModal ||
        !videoFrame
      ) {
        return;
      }


      const embedURL =
        window.getYouTubeEmbedUrl(
          url
        );


      if (!embedURL) {

        console.warn(
          "Invalid YouTube URL:",
          url
        );

        return;

      }


      videoFrame.src =
        embedURL;


      videoModal.classList.add(
        "active"
      );


      videoModal.setAttribute(
        "aria-hidden",
        "false"
      );


      document.body.classList.add(
        "gallery-modal-open"
      );

    }



    function closeVideo() {

      if (!videoModal) {
        return;
      }


      videoModal.classList.remove(
        "active"
      );


      videoModal.setAttribute(
        "aria-hidden",
        "true"
      );


      document.body.classList.remove(
        "gallery-modal-open"
      );


      if (videoFrame) {

        videoFrame.src = "";

      }

    }



    if (videoGrid) {

      videoGrid.addEventListener(
        "click",
        function (event) {


          const card =
            event.target.closest(
              ".gallery-video-card"
            );


          if (!card) {
            return;
          }


          openVideo(
            card.dataset.videoUrl
          );

        }
      );

    }



    videoClose?.addEventListener(
      "click",
      closeVideo
    );


    videoBackdrop?.addEventListener(
      "click",
      closeVideo
    );



    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
      "keydown",
      function (event) {


        if (
          event.key !== "Escape"
        ) {
          return;
        }


        if (
          photoModal?.classList
            .contains("active")
        ) {

          closePhoto();

        }


        if (
          videoModal?.classList
            .contains("active")
        ) {

          closeVideo();

        }

      }
    );


  }
);