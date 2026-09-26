/* =========================================================
   DR. DEEPAK KOPPAKA
   REUSABLE GALLERY DATA

   Used in:
   - gallery.html
   - index.html

   Photos  -> assets folder
   Videos  -> Direct YouTube URL
========================================================= */

window.GALLERY_DATA = {

  /* =====================================================
     PHOTOS
  ===================================================== */

  photos: [

    {
      image: "assets/images/gallery/gallery-1.jpg",
      title: "Medical Oncology Conference"
    },

    {
      image: "assets/images/gallery/gallery-2.jpg",
      title: "Cancer Awareness Programme"
    },

    {
      image: "assets/images/gallery/gallery-3.jpg",
      title: "Cancer Care Awareness"
    },

    {
      image: "assets/images/gallery/gallery-4.jpg",
      title: "Medical Conference"
    },

    {
      image: "assets/images/gallery/gallery-5.jpg",
      title: "Patient Awareness Session"
    },

    {
      image: "assets/images/gallery/gallery-6.jpg",
      title: "Oncology Interaction"
    }

  ],


  /* =====================================================
     YOUTUBE VIDEOS

     IMPORTANT:
     Full YouTube URL direct ga ikkada paste cheyyandi.

     Example:
     https://youtu.be/rK3CwjjC_94?si=WNbgJCbhr0Ge8rth
  ===================================================== */

  videos: [

    {
      url: "https://youtu.be/ewocQ8VDg5c?si=1Bk2BALB1-0iBOVJ",
      title: "పెద్దప్రేగు క్యాన్సర్: ఈ 5 లక్షణాలను అస్సలు నిర్లక్ష్యం చేయకండి! | Signs of Colon Cancer | Kaizen"
    },
    {
      url: "https://youtu.be/Ospfd6Rrjnc?si=n67IIG9GvTjWVlMA",
      title: "క్యాన్సర్ తో పోరాడే శరీర రహస్యం ఇదే! | How does our body naturally fight cancer telugu | Kaizen"
    },
    {
      url: "https://youtu.be/YNuFN5kH_lQ?si=PCFIxvMVp8DJH8-p",
      title: "మలం రంగు మారడాన్ని నిర్లక్ష్యం చేయొద్దు! క్యాన్సర్ కావచ్చు? | Cancer | Colon cancer | Kaizen"
    },
    
    {
      url: "https://youtu.be/D_TI9CI8tts?si=4_BmTuNFSoCimaWM",
      title: "Cancer treatment వల్ల సంతానం కలగదా? అసలు నిజం ఏంటి? | Chemotherapy | Infertility telugu | Kaizen"
    },
    {
      url: "https://youtu.be/rK3CwjjC_94?si=bZq_zam56WvJn-u9",
      title: "క్యాన్సర్ వస్తే chemotherapy తప్పనిసరిగా చేయాలా? | Chemotherapy | Cancer treatment options | Kaizen"
    },

   
  ]

};


/* =========================================================
   YOUTUBE HELPER FUNCTIONS
========================================================= */


/*
  Accepts:

  https://youtu.be/VIDEO_ID
  https://youtu.be/VIDEO_ID?si=xxxx

  https://www.youtube.com/watch?v=VIDEO_ID

  https://youtube.com/shorts/VIDEO_ID

  https://www.youtube.com/embed/VIDEO_ID
*/

window.getYouTubeVideoId = function (url) {

  if (!url) {
    return "";
  }


  try {

    const parsedURL =
      new URL(url);


    /* youtu.be/VIDEO_ID */

    if (
      parsedURL.hostname === "youtu.be" ||
      parsedURL.hostname === "www.youtu.be"
    ) {

      return parsedURL.pathname
        .replace("/", "")
        .split("/")[0];

    }


    /* youtube.com */

    if (
      parsedURL.hostname.includes("youtube.com")
    ) {

      /* watch?v= */

      if (
        parsedURL.pathname === "/watch"
      ) {

        return (
          parsedURL.searchParams.get("v") ||
          ""
        );

      }


      /* /shorts/VIDEO_ID */

      if (
        parsedURL.pathname.startsWith(
          "/shorts/"
        )
      ) {

        return (
          parsedURL.pathname
            .split("/shorts/")[1]
            ?.split("/")[0] ||
          ""
        );

      }


      /* /embed/VIDEO_ID */

      if (
        parsedURL.pathname.startsWith(
          "/embed/"
        )
      ) {

        return (
          parsedURL.pathname
            .split("/embed/")[1]
            ?.split("/")[0] ||
          ""
        );

      }

    }

  } catch (error) {

    console.warn(
      "Invalid YouTube URL:",
      url
    );

  }


  return "";

};


/* =========================================================
   YOUTUBE THUMBNAIL
========================================================= */

window.getYouTubeThumbnail =
  function (url) {

    const videoId =
      window.getYouTubeVideoId(url);


    if (!videoId) {
      return "";
    }


    return (
      "https://img.youtube.com/vi/" +
      videoId +
      "/hqdefault.jpg"
    );

  };


/* =========================================================
   YOUTUBE EMBED URL
========================================================= */

window.getYouTubeEmbedUrl =
  function (url) {

    const videoId =
      window.getYouTubeVideoId(url);


    if (!videoId) {
      return "";
    }


    return (
      "https://www.youtube-nocookie.com/embed/" +
      videoId +
      "?autoplay=1&rel=0"
    );

  };