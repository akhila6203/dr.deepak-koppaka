document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================
     CANCER DATA
  ========================================================== */

  const cancers = {


    /* ========================================================
       HEAD & NECK CANCER
    ======================================================== */

    "head-neck-cancer": {

      title: "Head & Neck Cancer",

      mainHeading:
        "Advanced Diagnosis & Surgical Care for Head and Neck Cancers",

      intro:
        "Head and neck cancers involve a group of conditions affecting the mouth, throat, voice box, nasal cavity, sinuses and salivary glands. Early detection plays a crucial role in successful treatment and recovery. With accurate diagnosis and timely intervention, many of these cancers can be effectively treated while preserving essential functions such as speech and swallowing.",

      image:
        "assets/images/cancer/head-neck-detail.jpg",

      surgeryImage:
        "assets/images/cancer/head-neck-surgery.jpg",

      whatHeading:
        "What is Head and Neck Cancer?",

      whatContent: `
        <p>
          Head and neck cancer refers to abnormal growth of cells
          in the regions of the head and neck. Most of these cancers
          arise from the lining of the mouth, nose and throat.
        </p>

        <p>
          The exact treatment depends on the location of the tumour,
          cancer stage, pathology findings and the patient's overall
          health.
        </p>
      `,

      keyPoints: [
        "Oral cavity including mouth, lips and tongue",
        "Pharynx or throat",
        "Larynx or voice box",
        "Nasal cavity and sinuses",
        "Salivary glands"
      ],

      symptomsIntro:
        "Early symptoms may be mild but should not be ignored. Common signs include:",

      symptoms: [
        "Persistent sore throat",
        "Difficulty in swallowing",
        "Hoarseness or voice changes",
        "Lump or swelling in the neck"
      ],

      riskIntro:
        "Several factors can increase the risk of developing head and neck cancer:",

      risks: [
        "Tobacco use including smoking or chewing",
        "Excessive alcohol consumption",
        "Human Papillomavirus (HPV) infection",
        "Poor oral hygiene"
      ],

      diagnosisIntro:
        "Accurate diagnosis is essential for effective treatment. Evaluation may include:",

      diagnosis: [
        "Physical examination",
        "Endoscopy",
        "CT scan / MRI / PET scan",
        "Biopsy for confirmation and staging"
      ],

      treatmentIntro:
        "Treatment depends on the type, location and stage of cancer and is personalised for each patient.",

      treatments: [
        {
          title: "Surgical Treatment",
          text:
            "Removal of the tumour using appropriate surgical techniques while preserving function whenever possible.",
          icon: "fa-user-doctor"
        },
        {
          title: "Minimally Invasive Surgery",
          text:
            "Selected cancers may be treated using minimally invasive surgical approaches.",
          icon: "fa-microscope"
        },
        {
          title: "Robotic Cancer Surgery",
          text:
            "Robot-assisted surgery may be considered for selected procedures requiring enhanced visualisation and precision.",
          icon: "fa-robot"
        },
        {
          title: "Radiation Therapy",
          text:
            "Radiation may be used alone or in combination with surgery and systemic treatment.",
          icon: "fa-radiation"
        }
      ],

      whyHeading:
        "Personalised Head & Neck Cancer Treatment",

      whyIntro:
        "Head and neck cancer treatment requires careful planning because treatment may affect speech, swallowing, appearance and other important functions. The treatment approach therefore focuses on cancer control together with preservation of important normal structures whenever clinically appropriate.",

      why: [
        "Detailed evaluation of tumour location and disease extent",
        "Individualised surgical treatment planning",
        "Minimally invasive techniques when appropriate",
        "Focus on organ and functional preservation",
        "Coordination with radiation and medical oncology when required",
        "Structured post-treatment follow-up"
      ],

      faqs: [
        {
          q: "What is head and neck cancer?",
          a:
            "Head and neck cancer refers to cancers that develop in areas such as the mouth, throat, voice box, nasal cavity, sinuses and salivary glands."
        },
        {
          q: "What are the early symptoms of head and neck cancer?",
          a:
            "Possible symptoms include a persistent sore throat, difficulty swallowing, voice changes, mouth lesions or a lump in the neck."
        },
        {
          q: "What causes head and neck cancer?",
          a:
            "Risk factors include tobacco use, heavy alcohol consumption and certain HPV infections, although individual risk varies."
        },
        {
          q: "How is head and neck cancer diagnosed?",
          a:
            "Diagnosis may involve physical examination, endoscopy, imaging and biopsy."
        },
        {
          q: "What treatment options are available?",
          a:
            "Treatment may include surgery, radiation therapy, chemotherapy or combinations of these depending on the diagnosis and stage."
        },
        {
          q: "Can head and neck cancer be treated successfully?",
          a:
            "Treatment outcomes depend on cancer type, stage, location and individual clinical factors. Early diagnosis can improve treatment options."
        }
      ]
    },


    /* ========================================================
       THYROID CANCER
    ======================================================== */

    "thyroid-cancer": {

      title: "Thyroid Cancer",

      mainHeading:
        "Advanced Thyroid Cancer Care with Precision & Expertise",

      intro:
        "Thyroid cancer develops in the thyroid gland, which plays an important role in the body's metabolism. Many thyroid cancers grow slowly and can have favourable treatment outcomes when appropriately diagnosed and treated.",

      image:
        "assets/images/cancer/thyroid-detail.jpg",

      surgeryImage:
        "assets/images/cancer/thyroid-surgery.jpg",

      whatHeading:
        "What is Thyroid Cancer?",

      whatContent: `
        <p>
          Thyroid cancer occurs when abnormal cells in the thyroid
          gland begin to grow uncontrollably and form a tumour.
        </p>

        <p>
          The thyroid is a small butterfly-shaped gland located at
          the base of the neck that regulates metabolism through
          hormone production.
        </p>

        <p>
          Most thyroid cancers grow slowly and can be highly
          treatable, particularly when detected at an appropriate
          stage.
        </p>
      `,

      keyPoints: [
        "Develops in the thyroid gland located in the neck",
        "Papillary thyroid cancer is a common type",
        "Many thyroid cancers grow slowly",
        "Can affect thyroid hormone-related function",
        "Early diagnosis supports appropriate treatment planning"
      ],

      symptomsIntro:
        "In many cases thyroid cancer may not cause symptoms in its early stages. Possible symptoms include:",

      symptoms: [
        "Lump or swelling in the neck",
        "Difficulty swallowing",
        "Hoarseness or voice changes",
        "Pain in the neck or throat"
      ],

      riskIntro:
        "Factors associated with an increased risk may include:",

      risks: [
        "Family history of thyroid cancer",
        "Previous radiation exposure",
        "Certain inherited genetic conditions",
        "Age and other individual clinical factors"
      ],

      diagnosisIntro:
        "Diagnostic evaluation for suspected thyroid cancer may include:",

      diagnosis: [
        "Physical examination",
        "Ultrasound of the thyroid gland",
        "Fine Needle Aspiration (FNA) biopsy",
        "Blood tests",
        "CT scan / MRI when required"
      ],

      treatmentIntro:
        "Treatment depends on the type and stage of thyroid cancer and individual patient factors.",

      treatments: [
        {
          title: "Thyroid Surgery",
          text:
            "Removal of part or all of the thyroid gland depending on the cancer and treatment plan.",
          icon: "fa-user-doctor"
        },
        {
          title: "Minimally Invasive Surgery",
          text:
            "Selected procedures may use modern surgical techniques where clinically appropriate.",
          icon: "fa-microscope"
        },
        {
          title: "Radioactive Iodine Therapy",
          text:
            "May be used after surgery for selected differentiated thyroid cancers.",
          icon: "fa-radiation"
        },
        {
          title: "Hormone Therapy",
          text:
            "Thyroid hormone replacement and suppression may form part of long-term management.",
          icon: "fa-capsules"
        }
      ],

      whyHeading:
        "Personalised Thyroid Cancer Treatment",

      whyIntro:
        "Thyroid cancer care requires accurate diagnosis, appropriate surgical planning and long-term follow-up. Treatment is individualised according to the tumour type, stage, imaging findings and patient needs.",

      why: [
        "Detailed assessment of thyroid nodules and cancer",
        "Individualised thyroid surgery planning",
        "Consideration of minimally invasive techniques where suitable",
        "Focus on safety and preservation of important neck structures",
        "Personalised post-operative treatment planning",
        "Structured long-term follow-up"
      ],

      faqs: [
        {
          q: "What is thyroid cancer?",
          a:
            "Thyroid cancer is a cancer that develops from abnormal cells within the thyroid gland."
        },
        {
          q: "What are common symptoms of thyroid cancer?",
          a:
            "Possible symptoms include a neck lump, difficulty swallowing, voice changes or neck discomfort, although some cancers cause no early symptoms."
        },
        {
          q: "What causes thyroid cancer?",
          a:
            "The exact cause is often unknown. Risk may be influenced by family history, radiation exposure and certain genetic factors."
        },
        {
          q: "How is thyroid cancer diagnosed?",
          a:
            "Evaluation commonly includes ultrasound, fine needle aspiration biopsy and other tests when clinically required."
        },
        {
          q: "What are the treatment options?",
          a:
            "Treatment may include thyroid surgery, radioactive iodine for selected cancers and thyroid hormone treatment."
        },
        {
          q: "Is thyroid cancer treatable?",
          a:
            "Many thyroid cancers can have favourable outcomes, but treatment and prognosis depend on the specific cancer type and stage."
        }
      ]
    },


    /* ========================================================
       BREAST CANCER
    ======================================================== */

    "breast-cancer": {

      title: "Breast Cancer",

      mainHeading:
        "Advanced Breast Cancer Care with Precision & Compassion",

      intro:
        "Breast cancer is one of the most common cancers and early detection plays an important role in successful treatment. Modern treatment combines accurate diagnosis, personalised surgery and multidisciplinary cancer care.",

      image:
        "assets/images/cancer/breast-detail.jpg",

      surgeryImage:
        "assets/images/cancer/breast-surgery.jpg",

      whatHeading:
        "What is Breast Cancer?",

      whatContent: `
        <p>
          Breast cancer is a condition in which abnormal cells in
          the breast grow uncontrollably and form a tumour.
        </p>

        <p>
          It commonly begins in the milk ducts or lobules and can
          spread to nearby lymph nodes or other parts of the body
          when untreated.
        </p>

        <p>
          Breast cancer can affect both women and men, although it
          is much more common in women.
        </p>
      `,

      keyPoints: [
        "Develops in breast tissue, commonly in ducts or lobules",
        "One of the most common cancers worldwide",
        "Can affect both women and men",
        "May spread to lymph nodes if untreated",
        "Early detection can improve treatment options"
      ],

      symptomsIntro:
        "Early-stage breast cancer may not cause obvious symptoms. Possible signs include:",

      symptoms: [
        "Lump in the breast or underarm",
        "Change in breast size or shape",
        "Skin dimpling or redness",
        "Nipple discharge or inversion"
      ],

      riskIntro:
        "Several factors may influence breast cancer risk:",

      risks: [
        "Family history of breast cancer",
        "Certain genetic mutations such as BRCA1/BRCA2",
        "Hormonal and reproductive factors",
        "Age and lifestyle-related factors"
      ],

      diagnosisIntro:
        "Early and accurate diagnosis may include:",

      diagnosis: [
        "Clinical breast examination",
        "Mammography",
        "Ultrasound / MRI",
        "Biopsy",
        "Hormone receptor and biomarker testing"
      ],

      treatmentIntro:
        "Treatment is selected according to cancer type, stage, receptor status and individual patient needs.",

      treatments: [
        {
          title: "Breast-Conserving Surgery",
          text:
            "Removal of the tumour while preserving as much normal breast tissue as appropriately possible.",
          icon: "fa-user-doctor"
        },
        {
          title: "Minimally Invasive Techniques",
          text:
            "Modern surgical and image-guided approaches may be used where clinically appropriate.",
          icon: "fa-microscope"
        },
        {
          title: "Radiation Therapy",
          text:
            "Radiation may be recommended after breast-conserving surgery or in other selected situations.",
          icon: "fa-radiation"
        },
        {
          title: "Systemic Therapy",
          text:
            "Chemotherapy, hormone therapy, targeted therapy or immunotherapy may be used depending on tumour biology.",
          icon: "fa-capsules"
        }
      ],

      whyHeading:
        "Personalised Breast Cancer Treatment",

      whyIntro:
        "Breast cancer treatment is increasingly personalised according to tumour biology, stage and patient preferences. Surgical planning considers both cancer control and breast preservation whenever clinically appropriate.",

      why: [
        "Detailed breast cancer evaluation",
        "Breast-conserving approaches where appropriate",
        "Personalised surgery according to tumour characteristics",
        "Sentinel lymph-node assessment when clinically indicated",
        "Coordination with medical and radiation oncology",
        "Structured post-treatment surveillance"
      ],

      faqs: [
        {
          q: "What is breast cancer?",
          a:
            "Breast cancer occurs when abnormal breast cells grow uncontrollably and form a malignant tumour."
        },
        {
          q: "What are early signs of breast cancer?",
          a:
            "Possible signs include a breast lump, underarm lump, skin or nipple changes and changes in breast shape."
        },
        {
          q: "What causes breast cancer?",
          a:
            "There is usually no single cause. Age, genetics, family history, hormonal factors and lifestyle may influence risk."
        },
        {
          q: "How is breast cancer diagnosed?",
          a:
            "Diagnosis commonly involves breast examination, imaging such as mammography or ultrasound and biopsy."
        },
        {
          q: "What treatment options are available?",
          a:
            "Treatment may involve surgery, radiation, chemotherapy, hormone therapy, targeted therapy or immunotherapy depending on the cancer."
        },
        {
          q: "Can breast cancer be treated successfully?",
          a:
            "Many breast cancers can be treated effectively, particularly when diagnosed early. Outcomes depend on cancer subtype and stage."
        }
      ]
    },


    /* ========================================================
       ESOPHAGEAL CANCER
    ======================================================== */

    "esophageal-cancer": {

      title: "Esophageal Cancer",

      mainHeading:
        "Advanced Esophageal Cancer Care with Precision & Expertise",

      intro:
        "Esophageal cancer affects the food pipe that carries food from the mouth to the stomach. Early detection and appropriate treatment planning are important because the condition can affect swallowing and nutrition.",

      image:
        "assets/images/cancer/esophageal-detail.jpg",

      surgeryImage:
        "assets/images/cancer/esophageal-surgery.jpg",

      whatHeading:
        "What is Esophageal Cancer?",

      whatContent: `
        <p>
          Esophageal cancer develops when abnormal cells in the
          lining of the esophagus grow uncontrollably and form a
          tumour.
        </p>

        <p>
          The disease may interfere with swallowing and can spread
          to surrounding tissues or other parts of the body when
          untreated.
        </p>

        <p>
          Treatment depends on tumour location, cancer stage,
          pathology and the patient's general condition.
        </p>
      `,

      keyPoints: [
        "Develops in the lining of the esophagus or food pipe",
        "Includes squamous cell carcinoma and adenocarcinoma",
        "Frequently associated with swallowing difficulty",
        "Can spread to nearby lymph nodes",
        "Treatment is determined by tumour location and stage"
      ],

      symptomsIntro:
        "Early stages may cause few symptoms. As the disease progresses, possible symptoms include:",

      symptoms: [
        "Difficulty swallowing",
        "Unexplained weight loss",
        "Chest pain or discomfort",
        "Persistent cough or hoarseness"
      ],

      riskIntro:
        "Risk can be influenced by several factors including:",

      risks: [
        "Tobacco use",
        "Heavy alcohol consumption",
        "Chronic acid reflux and Barrett's esophagus",
        "Obesity and other individual factors"
      ],

      diagnosisIntro:
        "Evaluation of suspected esophageal cancer may include:",

      diagnosis: [
        "Upper GI endoscopy",
        "Biopsy",
        "CT scan / PET scan",
        "Endoscopic ultrasound",
        "Additional staging investigations when required"
      ],

      treatmentIntro:
        "Treatment depends on cancer stage, tumour location, pathology and overall health.",

      treatments: [
        {
          title: "Esophageal Cancer Surgery",
          text:
            "Selected patients may undergo removal of the affected portion of the esophagus with reconstruction.",
          icon: "fa-user-doctor"
        },
        {
          title: "Minimally Invasive Surgery",
          text:
            "Laparoscopic or robotic approaches may be considered for selected operations.",
          icon: "fa-microscope"
        },
        {
          title: "Radiation Therapy",
          text:
            "Radiation can form part of combined treatment for selected esophageal cancers.",
          icon: "fa-radiation"
        },
        {
          title: "Systemic Therapy",
          text:
            "Chemotherapy, targeted therapy or immunotherapy may be considered depending on cancer characteristics.",
          icon: "fa-capsules"
        }
      ],

      whyHeading:
        "Personalised Esophageal Cancer Treatment",

      whyIntro:
        "Esophageal cancer can require complex multimodality treatment. Careful staging helps determine the role of surgery, chemotherapy, radiation and other treatments.",

      why: [
        "Detailed staging before treatment",
        "Individualised surgical planning",
        "Minimally invasive surgery when clinically suitable",
        "Attention to nutrition before and after treatment",
        "Coordination of surgery and oncology treatment",
        "Structured recovery and surveillance"
      ],

      faqs: [
        {
          q: "What is esophageal cancer?",
          a:
            "Esophageal cancer occurs when malignant cells develop within the esophagus, the tube that carries food to the stomach."
        },
        {
          q: "What are early symptoms?",
          a:
            "Possible symptoms include progressive difficulty swallowing, unexplained weight loss and chest discomfort."
        },
        {
          q: "What causes esophageal cancer?",
          a:
            "Risk factors vary by cancer type and may include tobacco, alcohol, chronic reflux and Barrett's esophagus."
        },
        {
          q: "How is it diagnosed?",
          a:
            "Diagnosis usually requires endoscopy and biopsy, followed by imaging and other tests for staging."
        },
        {
          q: "What treatments are available?",
          a:
            "Treatment can include surgery, chemotherapy, radiation, targeted treatment or immunotherapy depending on stage and tumour characteristics."
        },
        {
          q: "Can esophageal cancer be treated?",
          a:
            "Treatment depends strongly on stage and individual clinical factors. Earlier disease generally provides more treatment options."
        }
      ]
    },


    /* ========================================================
       STOMACH CANCER
    ======================================================== */

    "stomach-cancer": {

      title: "Stomach Cancer",

      mainHeading:
        "Advanced Stomach Cancer Care with Precision & Expertise",

      intro:
        "Stomach cancer, also known as gastric cancer, develops in the lining of the stomach and can affect digestion and overall health. Accurate staging is important for selecting the most appropriate treatment.",

      image:
        "assets/images/cancer/stomach-detail.jpg",

      surgeryImage:
        "assets/images/cancer/stomach-surgery.jpg",

      whatHeading:
        "What is Stomach Cancer?",

      whatContent: `
        <p>
          Stomach cancer is a condition in which abnormal cells grow
          uncontrollably in the lining of the stomach and form a
          tumour.
        </p>

        <p>
          It may develop slowly and can spread to nearby organs or
          lymph nodes if it is not treated.
        </p>

        <p>
          Timely diagnosis, accurate staging and appropriate
          multidisciplinary treatment are important for patient care.
        </p>
      `,

      keyPoints: [
        "Develops in the lining of the stomach",
        "Also known as gastric cancer",
        "Can affect digestion and nutrition",
        "May spread to nearby organs and lymph nodes",
        "Treatment depends on stage and tumour characteristics"
      ],

      symptomsIntro:
        "Early stomach cancer may cause few or non-specific symptoms. Possible symptoms include:",

      symptoms: [
        "Persistent stomach discomfort",
        "Indigestion or acidity",
        "Loss of appetite",
        "Unexplained weight loss"
      ],

      riskIntro:
        "Factors associated with increased risk can include:",

      risks: [
        "Helicobacter pylori infection",
        "Smoking and tobacco use",
        "Certain dietary patterns",
        "Family history and genetic factors"
      ],

      diagnosisIntro:
        "Evaluation may include:",

      diagnosis: [
        "Upper GI endoscopy",
        "Biopsy",
        "CT scan / PET scan",
        "Endoscopic ultrasound when required",
        "Laboratory and staging tests"
      ],

      treatmentIntro:
        "Treatment depends on tumour location, cancer stage, pathology and patient condition.",

      treatments: [
        {
          title: "Stomach Cancer Surgery",
          text:
            "Removal of part or all of the stomach may be considered depending on tumour location and stage.",
          icon: "fa-user-doctor"
        },
        {
          title: "Minimally Invasive Surgery",
          text:
            "Laparoscopic or robotic techniques may be appropriate for selected gastric cancer operations.",
          icon: "fa-microscope"
        },
        {
          title: "Radiation Therapy",
          text:
            "Radiation may be used in selected treatment plans depending on individual clinical circumstances.",
          icon: "fa-radiation"
        },
        {
          title: "Systemic Therapy",
          text:
            "Chemotherapy and other systemic treatments may be used before or after surgery or for advanced disease.",
          icon: "fa-capsules"
        }
      ],

      whyHeading:
        "Personalised Stomach Cancer Treatment",

      whyIntro:
        "Stomach cancer treatment requires accurate staging and careful planning of surgery and systemic treatment. Nutritional assessment is also an important component of care.",

      why: [
        "Detailed gastric cancer staging",
        "Individualised surgical treatment planning",
        "Minimally invasive techniques where suitable",
        "Attention to nutrition and recovery",
        "Multidisciplinary treatment coordination",
        "Structured cancer surveillance"
      ],

      faqs: [
        {
          q: "What is stomach cancer?",
          a:
            "Stomach cancer develops when malignant cells form in the tissues of the stomach."
        },
        {
          q: "What are common symptoms?",
          a:
            "Symptoms may include persistent abdominal discomfort, poor appetite, indigestion, early fullness or unexplained weight loss."
        },
        {
          q: "What causes stomach cancer?",
          a:
            "Risk may be influenced by H. pylori infection, smoking, diet, genetics and other factors."
        },
        {
          q: "How is stomach cancer diagnosed?",
          a:
            "Diagnosis usually involves endoscopy and biopsy, followed by imaging and staging investigations."
        },
        {
          q: "What treatment options are available?",
          a:
            "Treatment can include surgery, chemotherapy, targeted treatments and radiation in selected circumstances."
        },
        {
          q: "Can stomach cancer be treated successfully?",
          a:
            "Outcomes depend on stage, tumour biology and individual clinical factors. Early-stage disease generally offers more treatment options."
        }
      ]
    },


    /* ========================================================
       PANCREATIC CANCER
    ======================================================== */

    "pancreatic-cancer": {

      title: "Pancreatic Cancer",

      mainHeading:
        "Advanced Pancreatic Cancer Care with Precision & Expertise",

      intro:
        "Pancreatic cancer develops in the pancreas, an organ involved in digestion and blood sugar regulation. Because symptoms can be subtle in the early stages, detailed imaging and staging are particularly important.",

      image:
        "assets/images/cancer/pancreatic-detail.jpg",

      surgeryImage:
        "assets/images/cancer/pancreatic-surgery.jpg",

      whatHeading:
        "What is Pancreatic Cancer?",

      whatContent: `
        <p>
          Pancreatic cancer occurs when abnormal cells in the
          pancreas grow uncontrollably and form a tumour.
        </p>

        <p>
          The pancreas is located behind the stomach and plays an
          important role in digestion and blood glucose regulation.
        </p>

        <p>
          Treatment planning depends on the location of the tumour,
          involvement of nearby blood vessels, disease stage and the
          patient's general health.
        </p>
      `,

      keyPoints: [
        "Develops in the pancreas behind the stomach",
        "Can affect digestion and blood sugar regulation",
        "Symptoms may appear only after the disease has progressed",
        "Accurate staging is particularly important",
        "Treatment requires multidisciplinary planning"
      ],

      symptomsIntro:
        "Pancreatic cancer may not cause clear early symptoms. Possible symptoms include:",

      symptoms: [
        "Abdominal or back pain",
        "Unexplained weight loss",
        "Loss of appetite",
        "Jaundice"
      ],

      riskIntro:
        "Factors associated with increased pancreatic cancer risk may include:",

      risks: [
        "Smoking and tobacco use",
        "Chronic pancreatitis",
        "Family history or inherited syndromes",
        "Diabetes and other individual factors"
      ],

      diagnosisIntro:
        "Detailed diagnostic evaluation may include:",

      diagnosis: [
        "Pancreatic protocol CT scan / MRI",
        "Endoscopic ultrasound",
        "Biopsy when required",
        "Blood tests including selected tumour markers",
        "Additional staging investigations"
      ],

      treatmentIntro:
        "Treatment depends on whether the tumour is resectable, its stage and the patient's overall clinical condition.",

      treatments: [
        {
          title: "Pancreatic Cancer Surgery",
          text:
            "Selected patients may undergo procedures such as pancreaticoduodenectomy or other pancreatic resections.",
          icon: "fa-user-doctor"
        },
        {
          title: "Minimally Invasive Surgery",
          text:
            "Selected pancreatic operations may be performed using minimally invasive techniques.",
          icon: "fa-microscope"
        },
        {
          title: "Radiation Therapy",
          text:
            "Radiation may have a role in selected treatment strategies.",
          icon: "fa-radiation"
        },
        {
          title: "Systemic Therapy",
          text:
            "Chemotherapy and other systemic treatments are important components of pancreatic cancer care.",
          icon: "fa-capsules"
        }
      ],

      whyHeading:
        "Personalised Pancreatic Cancer Treatment",

      whyIntro:
        "Pancreatic cancer surgery is complex and requires detailed assessment of the tumour and nearby major blood vessels. Treatment planning frequently combines surgery with systemic therapy.",

      why: [
        "Detailed review of pancreatic imaging",
        "Assessment of tumour resectability",
        "Individualised complex surgical planning",
        "Minimally invasive approaches where appropriate",
        "Coordination with medical oncology",
        "Nutrition and recovery support"
      ],

      faqs: [
        {
          q: "What is pancreatic cancer?",
          a:
            "Pancreatic cancer occurs when malignant cells develop within the pancreas."
        },
        {
          q: "What are common symptoms?",
          a:
            "Symptoms can include jaundice, weight loss, abdominal or back pain and loss of appetite."
        },
        {
          q: "What causes pancreatic cancer?",
          a:
            "The exact cause is often unknown. Smoking, chronic pancreatitis, age, diabetes and inherited factors may influence risk."
        },
        {
          q: "How is pancreatic cancer diagnosed?",
          a:
            "Diagnosis and staging commonly use CT or MRI, endoscopic ultrasound and biopsy when required."
        },
        {
          q: "What treatment options are available?",
          a:
            "Treatment may include surgery, chemotherapy and radiation depending on tumour stage and resectability."
        },
        {
          q: "Can pancreatic cancer be treated surgically?",
          a:
            "Surgery can be considered when the tumour is resectable and the patient is medically suitable. Detailed staging is required."
        }
      ]
    },


    /* ========================================================
       COLORECTAL
    ======================================================== */

    "colorectal-cancer": {

      title: "Colorectal & Rectal Cancer",

      mainHeading:
        "Advanced Colorectal & Rectal Cancer Care with Precision & Expertise",

      intro:
        "Colorectal and rectal cancers affect the large intestine and rectum. Screening and early detection can identify some cancers at an earlier stage, while modern treatment combines surgery, systemic therapy and radiation when appropriate.",

      image:
        "assets/images/cancer/colorectal-detail.jpg",

      surgeryImage:
        "assets/images/cancer/colorectal-surgery.jpg",

      whatHeading:
        "What is Colorectal & Rectal Cancer?",

      whatContent: `
        <p>
          Colorectal cancer begins in the colon or rectum, which
          form part of the large intestine.
        </p>

        <p>
          It commonly develops from abnormal growths called polyps
          that can become cancerous over time.
        </p>

        <p>
          Treatment varies according to whether the tumour is in the
          colon or rectum, its stage and its relationship to nearby
          structures.
        </p>
      `,

      keyPoints: [
        "Develops in the colon or rectum",
        "May begin from pre-cancerous polyps",
        "One of the common gastrointestinal cancers",
        "Can spread to lymph nodes and distant organs",
        "Screening can identify polyps and some cancers earlier"
      ],

      symptomsIntro:
        "Colorectal cancer may initially cause few symptoms. Possible symptoms include:",

      symptoms: [
        "Changes in bowel habits",
        "Blood in stool or rectal bleeding",
        "Abdominal pain or discomfort",
        "Unexplained weight loss"
      ],

      riskIntro:
        "Risk may be influenced by:",

      risks: [
        "Family history of colorectal cancer",
        "Increasing age",
        "Inflammatory bowel disease and inherited syndromes",
        "Lifestyle and dietary factors"
      ],

      diagnosisIntro:
        "Diagnostic and staging tests may include:",

      diagnosis: [
        "Colonoscopy",
        "Biopsy",
        "CT scan / MRI",
        "Blood tests including selected tumour markers",
        "PET scan in selected situations"
      ],

      treatmentIntro:
        "Treatment is personalised according to tumour location, stage and individual patient factors.",

      treatments: [
        {
          title: "Minimally Invasive Surgery",
          text:
            "Laparoscopic or robotic colorectal surgery may be considered for suitable patients.",
          icon: "fa-microscope"
        },
        {
          title: "Sphincter-Preserving Surgery",
          text:
            "Selected rectal cancers may be treated with techniques aimed at preserving normal bowel function when oncologically appropriate.",
          icon: "fa-user-doctor"
        },
        {
          title: "Radiation Therapy",
          text:
            "Radiation is particularly important in selected rectal cancer treatment plans.",
          icon: "fa-radiation"
        },
        {
          title: "Chemotherapy / Targeted Therapy",
          text:
            "Systemic therapy may be used before or after surgery or for advanced disease.",
          icon: "fa-capsules"
        }
      ],

      whyHeading:
        "Personalised Colorectal & Rectal Cancer Treatment",

      whyIntro:
        "Colorectal cancer treatment focuses on complete cancer surgery while preserving bowel and pelvic function whenever safely possible. Rectal cancer in particular may require coordinated chemotherapy and radiation before surgery.",

      why: [
        "Detailed colorectal cancer staging",
        "Minimally invasive surgical approaches",
        "Sphincter-preserving strategies when appropriate",
        "Individualised rectal cancer treatment planning",
        "Coordination of surgery, chemotherapy and radiation",
        "Structured surveillance after treatment"
      ],

      faqs: [
        {
          q: "What is colorectal cancer?",
          a:
            "Colorectal cancer is cancer arising in the colon or rectum, often developing from abnormal growths known as polyps."
        },
        {
          q: "What are early symptoms?",
          a:
            "Possible symptoms include bowel habit changes, blood in stool, abdominal discomfort and unexplained weight loss."
        },
        {
          q: "What causes colorectal cancer?",
          a:
            "Risk is influenced by age, genetics, family history, inflammatory bowel disease and lifestyle factors."
        },
        {
          q: "How is colorectal cancer diagnosed?",
          a:
            "Colonoscopy and biopsy are important diagnostic tests, followed by imaging for staging."
        },
        {
          q: "What treatment options are available?",
          a:
            "Treatment may include surgery, chemotherapy, radiation for selected rectal cancers and targeted or immune-based treatment in appropriate cases."
        },
        {
          q: "Can colorectal cancer be treated successfully?",
          a:
            "Many colorectal cancers can be treated effectively, particularly when diagnosed before extensive spread. Outcomes vary by stage and tumour biology."
        }
      ]
    },


    /* ========================================================
       GYNECOLOGICAL
    ======================================================== */

    "gynecological-cancer": {

      title: "Uterine / Gynecological Cancers",

      mainHeading:
        "Advanced Uterine & Gynecological Cancer Care with Precision & Compassion",

      intro:
        "Gynecological cancers include cancers affecting the female reproductive system such as the uterus, ovaries and cervix. Treatment requires accurate diagnosis and personalised planning according to the cancer type, stage and individual patient needs.",

      image:
        "assets/images/cancer/gynecological-detail.jpg",

      surgeryImage:
        "assets/images/cancer/gynecological-surgery.jpg",

      whatHeading:
        "What are Uterine & Gynecological Cancers?",

      whatContent: `
        <p>
          Gynecological cancers develop in organs of the female
          reproductive system including the uterus, ovaries,
          cervix and related structures.
        </p>

        <p>
          Different gynecological cancers have different risk
          factors, symptoms, patterns of spread and treatment
          strategies.
        </p>

        <p>
          Accurate diagnosis and staging are therefore essential
          for selecting an appropriate personalised treatment plan.
        </p>
      `,

      keyPoints: [
        "Affect female reproductive organs",
        "Include uterine, ovarian and cervical cancers",
        "Symptoms differ according to the organ involved",
        "Some cancers may spread to nearby or distant organs",
        "Treatment is personalised according to cancer type and stage"
      ],

      symptomsIntro:
        "Symptoms vary according to cancer type. Possible warning signs include:",

      symptoms: [
        "Abnormal vaginal bleeding",
        "Pelvic pain or pressure",
        "Unusual vaginal discharge",
        "Abdominal bloating or persistent pelvic symptoms"
      ],

      riskIntro:
        "Risk factors differ between gynecological cancers and may include:",

      risks: [
        "Hormonal and reproductive factors",
        "Family history or inherited genetic conditions",
        "Obesity for selected cancers",
        "HPV infection for cervical cancer"
      ],

      diagnosisIntro:
        "Evaluation depends on the suspected cancer and may include:",

      diagnosis: [
        "Pelvic examination",
        "Ultrasound / MRI",
        "Pap smear / HPV testing when relevant",
        "Biopsy",
        "Blood tests and staging investigations"
      ],

      treatmentIntro:
        "Treatment depends on the cancer type, disease stage, patient age and individual clinical factors.",

      treatments: [
        {
          title: "Gynecological Cancer Surgery",
          text:
            "Surgery is individualised according to the organ involved and extent of disease.",
          icon: "fa-user-doctor"
        },
        {
          title: "Minimally Invasive Surgery",
          text:
            "Laparoscopic or robotic surgery may be appropriate for selected gynecological cancers.",
          icon: "fa-microscope"
        },
        {
          title: "Radiation Therapy",
          text:
            "Radiation plays an important role in selected uterine and cervical cancer treatment plans.",
          icon: "fa-radiation"
        },
        {
          title: "Systemic Therapy",
          text:
            "Chemotherapy, targeted therapy, hormone therapy or immunotherapy may be used according to cancer type.",
          icon: "fa-capsules"
        }
      ],

      whyHeading:
        "Personalised Gynecological Cancer Treatment",

      whyIntro:
        "Gynecological cancer care requires careful evaluation of cancer stage, reproductive organs involved and overall patient needs. Minimally invasive and organ-preserving strategies may be considered when oncologically appropriate.",

      why: [
        "Individualised gynecological cancer assessment",
        "Advanced minimally invasive surgical techniques when appropriate",
        "Personalised treatment planning",
        "Consideration of organ and function preservation where suitable",
        "Coordination with medical and radiation oncology",
        "Compassionate follow-up and supportive care"
      ],

      faqs: [
        {
          q: "What are gynecological cancers?",
          a:
            "Gynecological cancers are cancers affecting female reproductive organs such as the uterus, ovaries and cervix."
        },
        {
          q: "What are common warning symptoms?",
          a:
            "Possible symptoms include abnormal bleeding, pelvic pain, persistent bloating and unusual vaginal discharge."
        },
        {
          q: "What causes gynecological cancers?",
          a:
            "Risk factors vary by cancer type and can include hormonal factors, inherited genetic changes, HPV infection and other individual factors."
        },
        {
          q: "How are these cancers diagnosed?",
          a:
            "Diagnosis may include examination, imaging, cervical screening where relevant, biopsy and additional staging tests."
        },
        {
          q: "What treatment options are available?",
          a:
            "Treatment may include surgery, chemotherapy, radiation, targeted therapy, hormone therapy or immunotherapy depending on the specific cancer."
        },
        {
          q: "Can gynecological cancers be treated successfully?",
          a:
            "Treatment outcomes vary by cancer type and stage. Earlier diagnosis can provide more treatment options for several gynecological cancers."
        }
      ]
    }

  };


  /* ==========================================================
     URL
  ========================================================== */

  const params =
    new URLSearchParams(
      window.location.search
    );


  const cancerKey =
    params.get("cancer") ||
    "head-neck-cancer";


  const data =
    cancers[cancerKey] ||
    cancers["head-neck-cancer"];


  /* ==========================================================
     HELPERS
  ========================================================== */

  function text(id, value) {

    const element =
      document.getElementById(id);

    if (element) {
      element.textContent =
        value || "";
    }

  }


  function html(id, value) {

    const element =
      document.getElementById(id);

    if (element) {
      element.innerHTML =
        value || "";
    }

  }


  function setImage(id, src) {

    const image =
      document.getElementById(id);

    if (!image) return;

    image.src = src;

    image.alt = data.title;

    image.onerror = function () {

      this.style.display = "none";

    };

  }


  /* ==========================================================
     BASIC DATA
  ========================================================== */

  document.title =
    `${data.title} | Dr. Deepak Koppaka`;


  text(
    "breadcrumbTitle",
    data.title
  );


  text(
    "breadcrumbName",
    data.title
  );


  text(
    "mainHeading",
    data.mainHeading
  );


  text(
    "mainIntro",
    data.intro
  );


  /* ==========================================================
     WHAT
  ========================================================== */

  text(
    "whatHeading",
    data.whatHeading
  );


  html(
    "whatContent",
    data.whatContent
  );


  html(
    "keyPoints",
    data.keyPoints
      .map(
        item =>
          `<li>${item}</li>`
      )
      .join("")
  );


  setImage(
    "cancerImage",
    data.image
  );


  /* ==========================================================
     SYMPTOMS
  ========================================================== */

  text(
    "symptomsIntro",
    data.symptomsIntro
  );


  html(
    "symptomsList",
    data.symptoms
      .map(
        item =>
          `<li>${item}</li>`
      )
      .join("")
  );


  /* ==========================================================
     RISKS
  ========================================================== */

  text(
    "riskIntro",
    data.riskIntro
  );


  html(
    "riskList",
    data.risks
      .map(
        item =>
          `<li>${item}</li>`
      )
      .join("")
  );


  /* ==========================================================
     DIAGNOSIS
  ========================================================== */

  text(
    "diagnosisIntro",
    data.diagnosisIntro
  );


  html(
    "diagnosisGrid",
    data.diagnosis
      .map(
        item => `

          <div class="diagnosis-item">

            <div class="diagnosis-icon">

              <i
                class="fa-solid fa-check"
              ></i>

            </div>

            <span>
              ${item}
            </span>

          </div>

        `
      )
      .join("")
  );


  /* ==========================================================
     TREATMENTS
  ========================================================== */

  text(
    "treatmentCancerName",
    data.title
  );


  text(
    "treatmentIntro",
    data.treatmentIntro
  );


  html(
    "treatmentOptions",
    data.treatments
      .map(
        item => `

          <article
            class="cancer-treatment-card"
          >

            <div
              class="cancer-treatment-icon"
            >

              <i
                class="fa-solid ${item.icon}"
              ></i>

            </div>


            <div>

              <h3>
                ${item.title}
              </h3>

              <p>
                ${item.text}
              </p>

            </div>

          </article>

        `
      )
      .join("")
  );


  /* ==========================================================
     WHY CHOOSE
  ========================================================== */

  text(
    "whyHeading",
    data.whyHeading
  );


  text(
    "whyIntro",
    data.whyIntro
  );


  html(
    "whyList",
    data.why
      .map(
        item =>
          `<li>${item}</li>`
      )
      .join("")
  );


  setImage(
    "surgeryImage",
    data.surgeryImage
  );


  /* ==========================================================
     FAQ
  ========================================================== */

  text(
    "faqCancerName",
    data.title
  );


  const faqList =
    document.getElementById(
      "faqList"
    );


  if (faqList) {

    faqList.innerHTML =
      data.faqs
        .map(
          (item, index) => `

            <article
              class="faq-item
              ${index === 0 ? "active" : ""}"
            >

              <button
                class="faq-question"
                type="button"
              >

                <span>
                  ${item.q}
                </span>

                <i
                  class="fa-solid
                  ${
                    index === 0
                      ? "fa-minus"
                      : "fa-plus"
                  }"
                ></i>

              </button>


              <div class="faq-answer">

                <p>
                  ${item.a}
                </p>

              </div>

            </article>

          `
        )
        .join("");


    const buttons =
      faqList.querySelectorAll(
        ".faq-question"
      );


    buttons.forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const current =
            button.closest(
              ".faq-item"
            );


          const wasOpen =
            current.classList.contains(
              "active"
            );


          faqList
            .querySelectorAll(
              ".faq-item"
            )
            .forEach(item => {

              item.classList.remove(
                "active"
              );


              const icon =
                item.querySelector(
                  ".faq-question i"
                );


              if (icon) {

                icon.classList.remove(
                  "fa-minus"
                );

                icon.classList.add(
                  "fa-plus"
                );

              }

            });


          if (!wasOpen) {

            current.classList.add(
              "active"
            );


            const icon =
              current.querySelector(
                ".faq-question i"
              );


            if (icon) {

              icon.classList.remove(
                "fa-plus"
              );

              icon.classList.add(
                "fa-minus"
              );

            }

          }

        }
      );

    });

  }


  /* ==========================================================
     BREADCRUMB BACKGROUND
  ========================================================== */

  const breadcrumb =
    document.getElementById(
      "cancerBreadcrumb"
    );


  if (breadcrumb) {

    breadcrumb.style.backgroundImage =
      `
        linear-gradient(
          105deg,
          rgba(10,42,88,.88),
          rgba(46,52,110,.83)
        ),
        url("${data.image}")
      `;

  }

});