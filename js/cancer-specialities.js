document.addEventListener("DOMContentLoaded", () => {

  const specialties = [

    {
      slug: "head-neck-cancer",

      title: "Head & Neck Cancer",

      image:
        "assets/images/cancer/head-neck-cancer.jpg",

      description:
        "Advanced diagnosis and surgical care for cancers affecting the mouth, throat, voice box, nasal cavity, sinuses and salivary glands."
    },


    {
      slug: "thyroid-cancer",

      title: "Thyroid Cancer",

      image:
        "assets/images/cancer/thyroid-cancer.jpg",

      description:
        "Personalised thyroid cancer care with accurate diagnosis, modern surgical techniques and structured follow-up."
    },


    {
      slug: "breast-cancer",

      title: "Breast Cancer",

      image:
        "assets/images/cancer/breast-cancer.jpg",

      description:
        "Comprehensive breast cancer treatment with emphasis on early diagnosis, personalised surgery and multidisciplinary care."
    },


    {
      slug: "esophageal-cancer",

      title: "Esophageal Cancer",

      image:
        "assets/images/cancer/esophageal-cancer.jpg",

      description:
        "Advanced care for cancers of the food pipe with personalised surgical and multidisciplinary treatment planning."
    },


    {
      slug: "stomach-cancer",

      title: "Stomach Cancer",

      image:
        "assets/images/cancer/stomach-cancer.jpg",

      description:
        "Specialised gastric cancer care using modern diagnostic methods, surgical techniques and personalised treatment planning."
    },


    {
      slug: "pancreatic-cancer",

      title: "Pancreatic Cancer",

      image:
        "assets/images/cancer/pancreatic-cancer.jpg",

      description:
        "Comprehensive pancreatic cancer care focused on accurate evaluation, complex surgical treatment and multidisciplinary planning."
    },


    {
      slug: "colorectal-cancer",

      title: "Colorectal & Rectal Cancer",

      image:
        "assets/images/cancer/colorectal-cancer.jpg",

      description:
        "Personalised colorectal and rectal cancer care with advanced surgical techniques and organ-preserving approaches where appropriate."
    },


    {
      slug: "gynecological-cancer",

      title: "Uterine / Gynecological Cancers",

      image:
        "assets/images/cancer/gynecological-cancer.jpg",

      description:
        "Advanced care for cancers affecting the uterus, ovaries, cervix and related female reproductive organs."
    }

  ];


  const grid =
    document.getElementById(
      "cancerSpecialtiesGrid"
    );


  if (!grid) return;


  grid.innerHTML =
    specialties
      .map(item => `

        <article class="specialty-card">

          <div class="specialty-card-image">

            <img
              src="${item.image}"
              alt="${item.title}"
            >

          </div>


          <div class="specialty-card-content">

            <h3>
              ${item.title}
            </h3>

            <p>
              ${item.description}
            </p>

            <a
              href="cancer-details.html?cancer=${item.slug}"
              class="specialty-card-link"
            >

              Know More

              <i
                class="fa-solid fa-arrow-right"
              ></i>

            </a>

          </div>

        </article>

      `)
      .join("");

});