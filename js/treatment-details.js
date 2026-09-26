document.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     ALL TREATMENT DATA
  ============================================================ */

  const treatments = {

    /* ==========================================================
       1. LAPAROSCOPIC CANCER SURGERY
    ========================================================== */

    "laparoscopic-cancer-surgery": {

      title: "Laparoscopic Cancer Surgery",

      description:
        "Advanced minimally invasive cancer surgery using small incisions and specialised instruments for selected cancer procedures.",

      mainHeading:
        "Advanced Minimally Invasive Laparoscopic Cancer Surgery",

      image:
        "assets/images/treatments/laparoscopic-cancer-surgery.jpg",

      secondImage:
        "assets/images/treatments/laparoscopic-cancer-surgery-2.jpg",

      thirdImage:
        "assets/images/treatments/laparoscopic-cancer-surgery-3.jpg",

      aboutHeading:
        "What is Laparoscopic Cancer Surgery?",

      aboutContent: `

        <p>
          Laparoscopic cancer surgery is a modern, minimally invasive
          surgical technique in which selected cancer operations are
          performed through small incisions instead of a larger
          conventional surgical incision.
        </p>

        <p>
          A laparoscope containing a high-definition camera is inserted
          through one of the small incisions. The camera provides a
          magnified view of the operative area while specialised
          instruments are introduced through additional small access
          points.
        </p>

        <p>
          This allows the surgeon to carefully perform the planned cancer
          operation while following appropriate oncological principles.
          In appropriately selected patients, minimally invasive surgery
          may support smaller wounds, reduced tissue disruption and
          structured post-operative recovery.
        </p>

        <p>
          Laparoscopic techniques may be considered for selected
          colorectal, stomach, oesophageal, pancreatic, liver,
          gynaecological and other abdominal or pelvic cancer procedures.
        </p>

        <h3 class="content-subheading">
          Laparoscopic techniques may be considered for:
        </h3>

        <ul class="treatment-check-list">
          <li>Selected Colorectal Cancers</li>
          <li>Selected Stomach (Gastric) Cancers</li>
          <li>Selected Oesophageal Cancers</li>
          <li>Selected Pancreatic Procedures</li>
          <li>Selected Liver Tumours</li>
          <li>Selected Gynaecological Cancers</li>
        </ul>

      `,

      procedureHeading:
        "Laparoscopic Cancer Surgery Procedure",

      procedureContent: `

        <p>
          Before surgery, diagnostic imaging, pathology findings,
          previous medical records and the patient's general health are
          carefully reviewed to determine the most appropriate surgical
          approach.
        </p>

        <p>
          During the procedure, several small incisions are made to
          introduce the laparoscope and specialised surgical
          instruments. The camera provides a magnified view on a monitor
          and helps the surgeon visualise important anatomical
          structures.
        </p>

        <p>
          The tumour and appropriate surrounding tissue are removed
          according to the planned cancer operation and established
          oncological surgical principles.
        </p>

        <p>
          The exact number of incisions, duration of surgery and
          operative technique vary according to the organ involved,
          tumour location, disease extent and individual clinical
          situation.
        </p>

      `,

      benefitsHeading:
        "Benefits of Laparoscopic Cancer Surgery",

      benefits: [
        "Smaller surgical incisions compared with conventional open surgery in appropriately selected cases.",
        "Magnified visualisation of the operative field during surgery.",
        "Reduced disruption of surrounding tissues in selected minimally invasive procedures.",
        "Post-operative discomfort may be reduced for some patients compared with larger conventional incisions.",
        "Patients may begin safe mobilisation earlier depending on the procedure and individual recovery.",
        "Smaller access incisions generally result in smaller external scars.",
        "May support faster return to routine activities in selected patients.",
        "Cancer surgery continues to follow appropriate oncological principles regardless of the surgical access technique."
      ],

      recommendedHeading:
        "When is Laparoscopic Cancer Surgery Recommended?",

      recommended: [
        "When the cancer type and tumour location are suitable for a minimally invasive surgical approach.",
        "When imaging indicates that the planned cancer operation can be performed laparoscopically.",
        "For selected colorectal and gastrointestinal cancer procedures.",
        "For selected abdominal or pelvic tumours where adequate surgical access can be achieved.",
        "When the patient's general health permits the planned operation.",
        "When appropriate cancer clearance can be achieved using a minimally invasive technique."
      ],

      recoveryHeading:
        "Recovery After Laparoscopic Cancer Surgery",

      recoveryIntro:
        "Recovery depends on the type and extent of surgery, the patient's overall health and individual clinical factors. Each patient receives a personalised post-operative recovery plan.",

      recovery: [
        {
          title: "Post-Operative Comfort",
          text:
            "Smaller incisions may reduce wound-related discomfort for some patients compared with larger conventional surgical incisions."
        },
        {
          title: "Early Mobility",
          text:
            "Patients are generally encouraged to begin safe movement and walking according to their condition and surgical advice."
        },
        {
          title: "Wound Healing",
          text:
            "Small surgical wounds are monitored during recovery and appropriate wound-care instructions are provided."
        },
        {
          title: "Follow-Up Care",
          text:
            "Pathology results and post-operative assessment help determine the next stage of cancer treatment and surveillance."
        }
      ],

      whyChooseHeading:
        "Why Choose Dr. Deepak Koppaka for Laparoscopic Cancer Surgery?",

      whyChooseIntro: `

        <p>
          Laparoscopic cancer surgery requires careful patient selection,
          detailed pre-operative planning and adherence to established
          cancer surgery principles.
        </p>

        <p>
          Dr. Deepak Koppaka focuses on personalised surgical oncology
          planning and selection of an appropriate surgical approach
          according to the cancer diagnosis, tumour location, disease
          extent and individual patient requirements.
        </p>

      `,

      whyChoose: [
        "Personalised surgical oncology treatment planning.",
        "Focus on minimally invasive approaches when clinically appropriate.",
        "Detailed review of imaging and diagnostic findings before surgery.",
        "Attention to appropriate cancer clearance and surrounding normal structures.",
        "Individualised post-operative recovery planning.",
        "Structured follow-up after cancer surgery."
      ],

      faqs: [
        {
          question: "What is laparoscopic cancer surgery?",
          answer:
            "Laparoscopic cancer surgery is a minimally invasive approach in which selected cancer operations are performed through small incisions using a camera and specialised surgical instruments."
        },
        {
          question: "Is laparoscopic surgery suitable for every cancer patient?",
          answer:
            "No. Suitability depends on the cancer type, stage, tumour location, previous treatment, imaging findings and the patient's overall clinical condition."
        },
        {
          question: "What are the possible advantages of laparoscopic surgery?",
          answer:
            "For appropriately selected patients, possible advantages may include smaller incisions, magnified visualisation, reduced tissue disruption and a structured post-operative recovery."
        },
        {
          question: "How long does recovery take?",
          answer:
            "Recovery time varies according to the operation performed, disease extent, the patient's overall health and whether additional treatment is required."
        },
        {
          question: "Will there be scars after laparoscopic surgery?",
          answer:
            "Laparoscopic surgery uses small access incisions, so external scars are generally smaller than those associated with a larger conventional open incision."
        },
        {
          question: "Will I need additional treatment after surgery?",
          answer:
            "Additional treatment depends on final pathology, cancer stage and the multidisciplinary treatment plan."
        }
      ]
    },


    /* ==========================================================
       2. ROBOTIC CANCER SURGERY
    ========================================================== */

    "robotic-cancer-surgery": {

      title: "Robotic Cancer Surgery",

      description:
        "Advanced robot-assisted minimally invasive cancer surgery providing enhanced visualisation and precise instrument control for selected cancer procedures.",

      mainHeading:
        "Advanced Robotic Cancer Surgery for Precision & Modern Surgical Care",

      image:
        "assets/images/treatments/robotic-cancer-surgery.jpg",

      secondImage:
        "assets/images/treatments/robotic-cancer-surgery-2.jpg",

      thirdImage:
        "assets/images/treatments/robotic-cancer-surgery-3.jpg",

      aboutHeading:
        "What is Robotic Cancer Surgery?",

      aboutContent: `

        <p>
          Robotic cancer surgery is an advanced minimally invasive
          surgical approach in which the surgeon controls specialised
          robotic instruments from a surgical console.
        </p>

        <p>
          The robotic platform can provide a magnified three-dimensional
          view of the operative field together with articulated
          instruments that can support controlled movement within
          confined anatomical areas.
        </p>

        <p>
          The robotic system does not perform surgery automatically.
          Every instrument movement is directly controlled by the surgeon
          throughout the operation.
        </p>

        <p>
          Robotic surgery may be considered for selected colorectal,
          pelvic, gastrointestinal, gynaecological and other cancer
          procedures when the approach is clinically appropriate.
        </p>

        <h3 class="content-subheading">
          Robotic surgery may be considered for selected:
        </h3>

        <ul class="treatment-check-list">
          <li>Head & Neck Cancer Procedures</li>
          <li>Colorectal Cancer</li>
          <li>Selected Prostate or Pelvic Cancer Procedures</li>
          <li>Gynaecological Cancers</li>
          <li>Selected Stomach and Gastrointestinal Cancers</li>
          <li>Selected Oesophageal Cancer Procedures</li>
        </ul>

      `,

      procedureHeading:
        "Robotic Cancer Surgery Procedure",

      procedureContent: `

        <p>
          Treatment planning begins with a detailed review of imaging,
          pathology reports, cancer stage, previous treatment and the
          patient's general health.
        </p>

        <p>
          During surgery, small access points are created for a camera
          and specialised robotic instruments. The surgeon operates from
          a console and directly controls the movement of each
          instrument.
        </p>

        <p>
          The robotic platform provides enhanced visualisation and
          articulated instrument movement, which may assist during
          selected technically complex procedures.
        </p>

        <p>
          Appropriate tumour removal, protection of important anatomical
          structures and established cancer surgery principles remain the
          primary objectives of the operation.
        </p>

      `,

      benefitsHeading:
        "Benefits of Robotic Cancer Surgery",

      benefits: [
        "Enhanced three-dimensional visualisation of the operative field.",
        "Articulated instruments can support precise movement in confined anatomical areas.",
        "Selected procedures may be performed through smaller access incisions.",
        "May help reduce disruption of surrounding healthy tissues in appropriately selected cases.",
        "Can support careful dissection around important anatomical structures.",
        "Smaller access incisions may support post-operative recovery in selected patients.",
        "Can be useful for selected complex minimally invasive cancer procedures.",
        "The surgeon remains in direct control of the robotic system throughout the operation."
      ],

      recommendedHeading:
        "When is Robotic Cancer Surgery Recommended?",

      recommended: [
        "When the tumour location and planned procedure are suitable for robotic surgical access.",
        "For selected pelvic and colorectal cancer operations.",
        "For selected gastrointestinal and other complex minimally invasive procedures.",
        "When enhanced instrument articulation may be useful in a confined anatomical area.",
        "When the patient's general health permits the planned operation.",
        "When appropriate oncological surgery can be achieved using a robotic approach."
      ],

      recoveryHeading:
        "Recovery After Robotic Cancer Surgery",

      recoveryIntro:
        "Recovery varies according to the type of cancer operation, complexity of the procedure and individual patient factors.",

      recovery: [
        {
          title: "Post-Operative Comfort",
          text:
            "Pain control, wound care and clinical monitoring are provided according to the operation performed."
        },
        {
          title: "Early Recovery & Mobility",
          text:
            "Patients may begin safe mobilisation according to their clinical condition and advice from the surgical team."
        },
        {
          title: "Minimal Access Wounds",
          text:
            "Robotic procedures generally use several relatively small access incisions rather than one larger access incision."
        },
        {
          title: "Cancer Follow-Up",
          text:
            "Final pathology and post-operative assessment help guide further cancer treatment and surveillance."
        }
      ],

      whyChooseHeading:
        "Why Choose Dr. Deepak Koppaka for Robotic Cancer Surgery?",

      whyChooseIntro: `

        <p>
          Robotic cancer surgery requires careful selection of both the
          patient and the procedure. Technology is used as a surgical
          tool within a comprehensive cancer treatment plan.
        </p>

        <p>
          The surgical approach is selected according to the patient's
          diagnosis, disease extent, tumour location and individual
          clinical requirements.
        </p>

      `,

      whyChoose: [
        "Individual assessment before selecting robotic surgery.",
        "Detailed cancer surgery planning based on diagnostic findings.",
        "Focus on precise surgical technique and patient safety.",
        "Use of minimally invasive approaches when clinically suitable.",
        "Attention to preservation of important surrounding structures.",
        "Structured post-operative and cancer follow-up planning."
      ],

      faqs: [
        {
          question: "What is robotic cancer surgery?",
          answer:
            "Robotic cancer surgery is a minimally invasive approach in which a surgeon directly controls robotic instruments while performing selected cancer operations."
        },
        {
          question: "Does the robot perform surgery automatically?",
          answer:
            "No. The robotic system does not operate independently. The surgeon directly controls the instruments throughout the procedure."
        },
        {
          question: "Is robotic cancer surgery safe?",
          answer:
            "Robotic surgery is an established approach for selected procedures, but suitability, benefits and risks must be assessed individually."
        },
        {
          question: "Is robotic surgery suitable for all cancers?",
          answer:
            "No. The appropriate approach depends on cancer type, stage, tumour location, previous treatment and individual clinical circumstances."
        },
        {
          question: "How long does recovery take?",
          answer:
            "Recovery depends on the operation performed, disease extent and the patient's overall health."
        },
        {
          question: "Will I need further cancer treatment?",
          answer:
            "Further treatment is determined after reviewing final pathology, cancer stage and the overall treatment plan."
        }
      ]
    },


    /* ==========================================================
       3. HIPEC & PIPAC
    ========================================================== */

    "hipec-pipac": {

      title: "HIPEC & PIPAC",

      description:
        "Specialised treatment approaches for selected cancers involving the peritoneal surface or abdominal cavity, planned according to disease extent and individual patient needs.",

      mainHeading:
        "Advanced HIPEC & PIPAC Treatment for Peritoneal Surface Cancers",

      image:
        "assets/images/treatments/hipec-pipac.jpg",

      secondImage:
        "assets/images/treatments/hipec-pipac-2.jpg",

      thirdImage:
        "assets/images/treatments/hipec-pipac-3.jpg",

      aboutHeading:
        "What are HIPEC and PIPAC?",

      aboutContent: `

        <p>
          HIPEC (Hyperthermic Intraperitoneal Chemotherapy) and PIPAC
          (Pressurized Intraperitoneal Aerosol Chemotherapy) are
          specialised treatment techniques that may be considered for
          selected cancers involving the peritoneal surface or abdominal
          cavity.
        </p>

        <p>
          These approaches deliver chemotherapy directly within the
          abdominal cavity and may form part of an individualised cancer
          treatment strategy in appropriately selected patients.
        </p>

        <p>
          <strong>HIPEC</strong> is a specialised procedure in which
          heated chemotherapy is circulated within the abdominal cavity,
          usually after cytoreductive surgery has been performed to
          remove visible tumour deposits as completely as considered
          appropriate.
        </p>

        <p>
          <strong>PIPAC</strong> is a minimally invasive technique in
          which chemotherapy is delivered into the abdominal cavity as a
          pressurised aerosol during laparoscopy.
        </p>

        <p>
          HIPEC and PIPAC are different treatment approaches. Selection
          depends on the cancer type, extent and distribution of disease,
          previous treatment, overall health and multidisciplinary
          assessment.
        </p>

        <h3 class="content-subheading">
          HIPEC & PIPAC may be considered for selected:
        </h3>

        <ul class="treatment-check-list">
          <li>Peritoneal Surface Malignancies</li>
          <li>Selected Ovarian Cancers with abdominal spread</li>
          <li>Selected Colorectal Cancers with peritoneal involvement</li>
          <li>Selected Gastric Cancers involving the peritoneum</li>
          <li>Appendiceal Cancer</li>
          <li>Selected cases of Peritoneal Mesothelioma</li>
        </ul>

      `,

      procedureHeading:
        "HIPEC & PIPAC Procedure Overview",

      procedureContent: `

        <p>
          HIPEC and PIPAC use different methods of delivering treatment
          within the abdominal cavity. The appropriate approach is
          selected only after detailed clinical assessment.
        </p>

        <h3 class="content-subheading">
          HIPEC Procedure
        </h3>

        <p>
          In selected patients, cytoreductive surgery is first performed
          to remove visible tumour deposits within the abdominal cavity
          as completely as considered appropriate.
        </p>

        <p>
          After the surgical phase, heated chemotherapy is circulated
          within the abdominal cavity for a specified period according
          to the planned treatment protocol.
        </p>

        <p>
          The treatment is intended to expose microscopic or residual
          cancer cells within the peritoneal cavity to regional
          chemotherapy.
        </p>

        <h3 class="content-subheading">
          PIPAC Procedure
        </h3>

        <p>
          PIPAC is performed using a minimally invasive laparoscopic
          approach. Small access points are created to examine the
          abdominal cavity and deliver the planned treatment.
        </p>

        <p>
          Chemotherapy is introduced into the abdominal cavity as a
          pressurised aerosol under controlled conditions, allowing the
          medication to be distributed within the peritoneal cavity.
        </p>

        <p>
          The procedure may be considered as part of an ongoing
          treatment strategy in carefully selected patients.
        </p>

      `,

      benefitsHeading:
        "Benefits of HIPEC & PIPAC",

      benefits: [
        "Regional delivery of chemotherapy directly within the abdominal cavity.",
        "HIPEC can be combined with cytoreductive surgery in carefully selected patients.",
        "Provides a treatment approach directed toward selected peritoneal surface disease.",
        "PIPAC provides a minimally invasive method of intraperitoneal chemotherapy delivery.",
        "Treatment can be planned according to cancer type, disease distribution and previous therapy.",
        "May form part of a multidisciplinary strategy for selected abdominal and peritoneal cancers.",
        "Allows treatment to be individualised according to the patient's overall condition and treatment response.",
        "Provides an additional specialised treatment option for appropriately selected patients."
      ],

      recommendedHeading:
        "When are HIPEC & PIPAC Recommended?",

      recommended: [
        "For selected cancers involving the peritoneal surface or abdominal cavity.",
        "When cancer type and disease distribution are appropriate for a regional treatment approach.",
        "For selected patients with peritoneal involvement from colorectal, ovarian, gastric or appendiceal cancers.",
        "When the patient's general health permits the planned procedure.",
        "When cytoreductive surgery is considered appropriate in selected HIPEC candidates.",
        "After reviewing response to previous chemotherapy or other cancer treatments.",
        "When specialised intraperitoneal treatment forms an appropriate part of the overall cancer treatment plan.",
        "After multidisciplinary evaluation of potential benefits, risks and alternative treatment options."
      ],

      recoveryHeading:
        "Recovery After HIPEC & PIPAC",

      recoveryIntro:
        "Recovery differs between HIPEC and PIPAC because these are different procedures. Each patient receives an individual recovery and follow-up plan based on the treatment performed.",

      recovery: [
        {
          title: "Gradual Recovery After HIPEC",
          text:
            "Because HIPEC may be combined with major cytoreductive surgery, recovery can take longer and requires careful post-operative monitoring."
        },
        {
          title: "Minimally Invasive Recovery (PIPAC)",
          text:
            "PIPAC involves laparoscopic access and recovery is planned according to the patient's clinical condition and treatment response."
        },
        {
          title: "Symptom Management",
          text:
            "Treatment and supportive care may help manage symptoms associated with peritoneal disease in selected patients."
        },
        {
          title: "Ongoing Monitoring & Care",
          text:
            "Regular clinical review, imaging and oncology follow-up are used to assess response and plan further treatment when required."
        }
      ],

      whyChooseHeading:
        "Why Choose Dr. Deepak Koppaka for HIPEC & PIPAC?",

      whyChooseIntro: `

        <p>
          Cancers involving the peritoneal surface can require complex
          treatment planning. The appropriate treatment depends on
          cancer type, disease distribution, previous therapy and the
          patient's general condition.
        </p>

        <p>
          Dr. Deepak Koppaka focuses on personalised surgical oncology
          assessment and careful selection of patients for specialised
          treatment approaches when clinically appropriate.
        </p>

      `,

      whyChoose: [
        "Detailed evaluation of peritoneal surface disease.",
        "Individualised assessment for specialised treatment approaches.",
        "Careful surgical planning for selected cytoreductive procedures.",
        "Consideration of previous chemotherapy and cancer treatment.",
        "Focus on appropriate patient selection and treatment safety.",
        "Personalised planning based on cancer type and disease extent.",
        "Coordination of surgical and oncology treatment when required.",
        "Structured post-treatment monitoring and follow-up."
      ],

      faqs: [
        {
          question: "What is HIPEC?",
          answer:
            "HIPEC stands for Hyperthermic Intraperitoneal Chemotherapy. In selected patients, heated chemotherapy is circulated within the abdominal cavity after cytoreductive surgery."
        },
        {
          question: "What is PIPAC?",
          answer:
            "PIPAC stands for Pressurized Intraperitoneal Aerosol Chemotherapy. It is a laparoscopic technique in which chemotherapy is delivered into the abdominal cavity as a pressurised aerosol."
        },
        {
          question: "What is the difference between HIPEC and PIPAC?",
          answer:
            "HIPEC and PIPAC are different procedures with different techniques, indications and treatment objectives. HIPEC may be combined with cytoreductive surgery, while PIPAC uses laparoscopic aerosolised chemotherapy delivery."
        },
        {
          question: "Are HIPEC and PIPAC suitable for everyone?",
          answer:
            "No. Suitability depends on cancer type, distribution of disease, previous treatment, overall health and multidisciplinary assessment."
        },
        {
          question: "How long is recovery after HIPEC?",
          answer:
            "Recovery varies considerably because HIPEC may be combined with extensive cytoreductive surgery. An individual recovery plan is provided."
        },
        {
          question: "Will I need additional chemotherapy?",
          answer:
            "Additional systemic treatment may be required depending on cancer type, treatment response, pathology and the overall oncology plan."
        }
      ]
    },


    /* ==========================================================
       4. ORGAN PRESERVATION CANCER SURGERY
    ========================================================== */

    "organ-preservation": {

      title: "Organ Preservation Cancer Surgery",

      description:
        "Personalised cancer surgery focused on appropriate cancer control while preserving organ structure and function whenever clinically feasible.",

      mainHeading:
        "Organ Preservation Cancer Surgery for Cancer Control & Functional Preservation",

      image:
        "assets/images/treatments/organ-preservation.jpg",

      secondImage:
        "assets/images/treatments/organ-preservation-2.jpg",

      thirdImage:
        "assets/images/treatments/organ-preservation-3.jpg",

      aboutHeading:
        "What is Organ Preservation Cancer Surgery?",

      aboutContent: `

        <p>
          Organ preservation cancer surgery is a specialised approach
          that aims to achieve appropriate cancer treatment while
          preserving as much normal organ structure and function as
          safely possible.
        </p>

        <p>
          Traditional cancer surgery may sometimes require removal of an
          entire organ. Advances in imaging, surgical techniques,
          systemic therapy and radiation treatment have created
          organ-preserving options for selected patients.
        </p>

        <p>
          The primary objective remains adequate cancer control. Organ
          preservation is considered only when the treating team
          determines that it can be pursued without compromising the
          fundamental goals of cancer treatment.
        </p>

        <p>
          Depending on the cancer site, preservation may focus on
          swallowing, speech, bowel function, urinary function,
          appearance or other important functional outcomes.
        </p>

        <h3 class="content-subheading">
          Organ preservation may be considered in selected:
        </h3>

        <ul class="treatment-check-list">
          <li>Head & Neck Cancers</li>
          <li>Selected Breast Cancer Procedures</li>
          <li>Selected Rectal Cancers</li>
          <li>Selected Laryngeal Cancers</li>
          <li>Selected Gynaecological Cancers</li>
          <li>Selected Gastrointestinal Cancers</li>
        </ul>

      `,

      procedureHeading:
        "Organ Preservation Treatment Approach",

      procedureContent: `

        <p>
          Treatment begins with detailed imaging and pathology review to
          determine tumour size, location, stage and relationship to
          surrounding normal structures.
        </p>

        <p>
          When appropriate, surgery is carefully planned to remove the
          tumour while preserving uninvolved portions of the organ and
          protecting important nearby structures.
        </p>

        <p>
          Some organ-preservation strategies combine surgery with
          chemotherapy, radiation therapy or other treatments.
        </p>

        <p>
          Minimally invasive laparoscopic or robotic techniques may also
          be considered when appropriate for the cancer and the planned
          operation.
        </p>

      `,

      benefitsHeading:
        "Benefits of Organ Preservation Cancer Surgery",

      benefits: [
        "Focuses on appropriate cancer treatment while preserving function when safely possible.",
        "May help preserve important functions such as speech, swallowing or normal organ activity depending on the cancer site.",
        "Can reduce functional loss associated with complete organ removal in selected patients.",
        "Treatment can be combined with chemotherapy or radiation when clinically appropriate.",
        "Modern imaging and surgical planning support precise evaluation of tumour boundaries.",
        "Can form part of an individualised multidisciplinary cancer treatment plan.",
        "May support quality of life by preserving normal anatomical structures where oncologically appropriate."
      ],

      recommendedHeading:
        "When is Organ Preservation Recommended?",

      recommended: [
        "When tumour size and location permit preservation of part or all of the affected organ.",
        "When appropriate cancer control can still be achieved using an organ-preserving approach.",
        "When important surrounding structures can be safely preserved.",
        "When a combined treatment strategy may support organ preservation.",
        "When the patient's general condition permits the planned treatment.",
        "After careful discussion of cancer control, functional outcomes and alternative treatment options."
      ],

      recoveryHeading:
        "Recovery After Organ Preservation Cancer Surgery",

      recoveryIntro:
        "Recovery focuses on both healing after cancer treatment and preservation or restoration of important organ functions.",

      recovery: [
        {
          title: "Maintained Functional Ability",
          text:
            "Recovery planning may include measures aimed at maintaining or restoring the function of the treated organ."
        },
        {
          title: "Faster Physical Recovery",
          text:
            "Activity is gradually increased according to the type of operation and the patient's clinical progress."
        },
        {
          title: "Improved Quality of Life",
          text:
            "Preservation of appropriate organ function may help selected patients maintain important daily activities."
        },
        {
          title: "Ongoing Rehabilitation",
          text:
            "Some patients may benefit from nutrition support, physiotherapy, speech therapy or other rehabilitation."
        }
      ],

      whyChooseHeading:
        "Why Choose Dr. Deepak Koppaka for Organ Preservation Cancer Surgery?",

      whyChooseIntro: `

        <p>
          Organ preservation requires a careful balance between cancer
          control and functional outcomes. Treatment therefore needs to
          be individualised according to tumour characteristics and
          patient requirements.
        </p>

        <p>
          The focus remains appropriate cancer surgery while considering
          preservation of normal tissues and organ function whenever
          clinically feasible.
        </p>

      `,

      whyChoose: [
        "Individualised cancer surgery planning.",
        "Focus on appropriate tumour removal and cancer control.",
        "Consideration of organ and functional preservation where suitable.",
        "Use of minimally invasive approaches when clinically appropriate.",
        "Coordination with other cancer treatment modalities when required.",
        "Structured rehabilitation and follow-up planning."
      ],

      faqs: [
        {
          question: "What is organ preservation cancer surgery?",
          answer:
            "It is an approach that aims to achieve appropriate cancer control while preserving organ structure or function whenever clinically safe and feasible."
        },
        {
          question: "Can every cancer be treated with organ-preserving surgery?",
          answer:
            "No. Suitability depends on cancer type, tumour size, location, stage and involvement of surrounding structures."
        },
        {
          question: "Does organ preservation mean the cancer is not completely treated?",
          answer:
            "No. Appropriate cancer treatment remains the priority. Preservation is considered only when the planned strategy can meet oncological requirements."
        },
        {
          question: "Will I need chemotherapy or radiation?",
          answer:
            "Some organ-preservation strategies include chemotherapy, radiation therapy or both depending on the cancer type and treatment plan."
        },
        {
          question: "Will organ function return completely to normal?",
          answer:
            "Functional recovery varies according to the organ treated, extent of disease, procedure performed and individual patient factors."
        },
        {
          question: "Is regular follow-up required?",
          answer:
            "Yes. Cancer surveillance and assessment of organ function are important parts of ongoing follow-up."
        }
      ]
    },


    /* ==========================================================
       5. SENTINEL LYMPH NODE BIOPSY
    ========================================================== */

    "sentinel-lymph-node-biopsy": {

      title: "Sentinel Lymph Node Biopsy",

      description:
        "A targeted surgical technique used in selected cancers to evaluate the first lymph nodes most likely to receive cancer spread.",

      mainHeading:
        "Sentinel Lymph Node Biopsy for Accurate Cancer Staging & Treatment Planning",

      image:
        "assets/images/treatments/sentinel-lymph-node-biopsy.jpg",

      secondImage:
        "assets/images/treatments/sentinel-lymph-node-biopsy-2.jpg",

      thirdImage:
        "assets/images/treatments/sentinel-lymph-node-biopsy-3.jpg",

      aboutHeading:
        "What is Sentinel Lymph Node Biopsy?",

      aboutContent: `

        <p>
          Sentinel lymph node biopsy is a targeted surgical procedure
          used in selected cancers to determine whether cancer cells have
          reached the first lymph nodes that drain the area of the
          primary tumour.
        </p>

        <p>
          The sentinel lymph node is considered one of the first lymph
          nodes to which cancer cells may spread from a primary tumour.
        </p>

        <p>
          A mapping technique is used to identify the sentinel node or
          nodes. These nodes are then surgically removed and sent to the
          pathology laboratory for detailed examination.
        </p>

        <p>
          The result provides important staging information and may help
          determine whether additional lymph-node surgery or other
          cancer treatment is required.
        </p>

        <h3 class="content-subheading">
          Sentinel lymph node biopsy may be used in selected:
        </h3>

        <ul class="treatment-check-list">
          <li>Breast Cancer</li>
          <li>Melanoma</li>
          <li>Selected Head & Neck Cancers</li>
          <li>Selected Gynaecological Cancers</li>
          <li>Other cancers where sentinel node mapping is clinically appropriate</li>
        </ul>

      `,

      procedureHeading:
        "Sentinel Lymph Node Biopsy Procedure",

      procedureContent: `

        <p>
          Before or during the procedure, a mapping agent is used
          according to the planned technique to help identify the lymph
          nodes that first receive drainage from the tumour area.
        </p>

        <p>
          The surgeon identifies the sentinel lymph node or nodes and
          removes them through an appropriate surgical incision.
        </p>

        <p>
          The removed nodes are sent for pathological examination to
          determine whether cancer cells are present.
        </p>

        <p>
          Further management depends on the pathology result, cancer
          type, tumour characteristics, disease stage and overall
          treatment plan.
        </p>

      `,

      benefitsHeading:
        "Benefits of Sentinel Lymph Node Biopsy",

      benefits: [
        "Provides targeted evaluation of lymph nodes most likely to receive early cancer spread.",
        "Can provide important information for accurate cancer staging.",
        "May help avoid more extensive lymph-node surgery in appropriately selected patients.",
        "Provides pathology information that can influence further treatment planning.",
        "Generally involves removal of fewer lymph nodes than a complete lymph-node dissection.",
        "Can be integrated with surgery for the primary tumour depending on cancer type.",
        "Supports personalised decisions regarding additional treatment."
      ],

      recommendedHeading:
        "When is Sentinel Lymph Node Biopsy Recommended?",

      recommended: [
        "For selected cancers where sentinel lymph-node mapping is an established staging technique.",
        "When there is a need to assess possible spread to regional lymph nodes.",
        "In selected early-stage cancers according to individual clinical findings.",
        "When clinical and imaging assessment does not indicate obvious extensive lymph-node disease.",
        "When lymph-node status is important for staging and further treatment planning.",
        "After individual assessment of potential benefits and limitations."
      ],

      recoveryHeading:
        "Recovery After Sentinel Lymph Node Biopsy",

      recoveryIntro:
        "Recovery is generally influenced by whether the biopsy is performed alone or together with another cancer operation.",

      recovery: [
        {
          title: "Minimal Pain & Discomfort",
          text:
            "The biopsy is a limited surgical procedure, although discomfort varies according to the individual and any additional surgery performed."
        },
        {
          title: "Short Hospital Stay",
          text:
            "Hospital stay depends on whether the biopsy is performed alone or as part of a larger cancer operation."
        },
        {
          title: "Return to Normal Activities",
          text:
            "Activities are gradually resumed according to wound healing, the operation performed and medical advice."
        },
        {
          title: "Monitoring for Complications",
          text:
            "The surgical area is monitored for wound problems, swelling and other potential complications."
        }
      ],

      whyChooseHeading:
        "Why Choose Dr. Deepak Koppaka for Sentinel Lymph Node Biopsy?",

      whyChooseIntro: `

        <p>
          Lymph-node staging is an important component of cancer
          treatment planning. Sentinel lymph-node biopsy allows targeted
          evaluation in cancers where the technique is clinically
          appropriate.
        </p>

        <p>
          The focus is on accurate surgical staging and individualised
          treatment planning based on pathology and the overall cancer
          diagnosis.
        </p>

      `,

      whyChoose: [
        "Careful assessment before sentinel lymph-node biopsy.",
        "Targeted lymph-node staging when clinically appropriate.",
        "Focus on minimising unnecessary surgical intervention.",
        "Integration of pathology findings into treatment planning.",
        "Individualised surgical oncology care.",
        "Structured post-operative follow-up."
      ],

      faqs: [
        {
          question: "What is a sentinel lymph node?",
          answer:
            "A sentinel lymph node is one of the first lymph nodes to receive lymphatic drainage from the area of a primary tumour and may therefore be among the first nodes to contain cancer spread."
        },
        {
          question: "Why is sentinel lymph node biopsy performed?",
          answer:
            "It is performed in selected cancers to provide lymph-node staging information and help guide further treatment."
        },
        {
          question: "Does the procedure remove all lymph nodes?",
          answer:
            "No. Sentinel lymph node biopsy is designed to identify and remove selected sentinel nodes rather than routinely removing all regional lymph nodes."
        },
        {
          question: "What happens if cancer is found in a sentinel node?",
          answer:
            "Further management depends on cancer type, amount of lymph-node involvement, tumour characteristics and the overall treatment plan."
        },
        {
          question: "How long does recovery take?",
          answer:
            "Recovery depends on whether the biopsy is performed alone or together with another cancer operation."
        },
        {
          question: "Will I need additional treatment after the biopsy?",
          answer:
            "Additional treatment is determined by sentinel-node pathology, primary tumour findings, cancer stage and the overall treatment plan."
        }
      ]
    },


    /* ==========================================================
       6. FLUORESCENCE-GUIDED CANCER SURGERY
    ========================================================== */

    "fluorescence-guided-surgery": {

      title: "Fluorescence-Guided Cancer Surgery",

      description:
        "Advanced fluorescence imaging used during selected cancer procedures to provide additional real-time visual information to the surgeon.",

      mainHeading:
        "Fluorescence-Guided Cancer Surgery for Enhanced Surgical Visualisation",

      image:
        "assets/images/treatments/fluorescence-guided-surgery.jpg",

      secondImage:
        "assets/images/treatments/fluorescence-guided-surgery-2.jpg",

      thirdImage:
        "assets/images/treatments/fluorescence-guided-surgery-3.jpg",

      aboutHeading:
        "What is Fluorescence-Guided Cancer Surgery?",

      aboutContent: `

        <p>
          Fluorescence-guided surgery is an advanced image-guided
          surgical technique that provides additional visual information
          during selected cancer operations.
        </p>

        <p>
          Depending on the procedure, a fluorescent agent may be
          administered and viewed using a specialised imaging system.
          The technology can highlight selected tissues or anatomical
          structures that may be difficult to distinguish using normal
          visualisation alone.
        </p>

        <p>
          Fluorescence imaging may be used for different purposes,
          including assessment of tissue perfusion, identification of
          selected anatomical structures or lymphatic mapping depending
          on the planned operation.
        </p>

        <p>
          The technology is an additional surgical tool. It does not
          replace clinical judgement, standard surgical technique or
          established cancer surgery principles.
        </p>

        <h3 class="content-subheading">
          Fluorescence guidance may be used in selected:
        </h3>

        <ul class="treatment-check-list">
          <li>Head & Neck Cancer Procedures</li>
          <li>Breast Cancer Procedures</li>
          <li>Selected Gastrointestinal Cancer Surgery</li>
          <li>Selected Liver Tumour Procedures</li>
          <li>Selected Gynaecological Cancer Procedures</li>
          <li>Sentinel Lymph Node Mapping</li>
        </ul>

      `,

      procedureHeading:
        "Fluorescence-Guided Surgery Procedure",

      procedureContent: `

        <p>
          Before surgery, the surgical team determines whether
          fluorescence imaging has a useful role in the planned cancer
          procedure.
        </p>

        <p>
          When appropriate, a fluorescent agent is administered
          according to the specific clinical application and treatment
          protocol.
        </p>

        <p>
          A specialised imaging system is then used during the operation
          to detect the fluorescence signal and display additional
          visual information to the surgeon.
        </p>

        <p>
          This information is interpreted together with normal surgical
          visualisation, pre-operative imaging and the surgeon's
          clinical judgement.
        </p>

      `,

      benefitsHeading:
        "Benefits of Fluorescence-Guided Cancer Surgery",

      benefits: [
        "Provides additional real-time visual information during selected surgical procedures.",
        "May assist identification of specific tissues or anatomical structures depending on the clinical application.",
        "Can support assessment of tissue perfusion in selected procedures.",
        "May be useful for selected lymphatic mapping applications.",
        "Can complement minimally invasive laparoscopic or robotic surgery.",
        "Provides an additional imaging tool while the surgeon performs the operation.",
        "Can support precise surgical planning in appropriately selected cases."
      ],

      recommendedHeading:
        "When is Fluorescence-Guided Surgery Recommended?",

      recommended: [
        "When fluorescence imaging can provide useful additional information during the planned procedure.",
        "When assessment of tissue perfusion is relevant to the operation.",
        "For selected lymphatic mapping procedures.",
        "When identification of specific anatomical structures may benefit from additional image guidance.",
        "During selected laparoscopic or robotic cancer operations.",
        "When the surgeon determines that fluorescence technology is clinically appropriate."
      ],

      recoveryHeading:
        "Recovery After Fluorescence-Guided Cancer Surgery",

      recoveryIntro:
        "Recovery is determined primarily by the cancer operation performed rather than by fluorescence imaging itself.",

      recovery: [
        {
          title: "Improved Surgical Visualisation",
          text:
            "Fluorescence provides additional visual information during the operation while the underlying surgical procedure determines recovery."
        },
        {
          title: "Preservation of Healthy Tissue",
          text:
            "Additional image guidance may assist surgical decision-making around selected normal anatomical structures."
        },
        {
          title: "Post-Operative Monitoring",
          text:
            "Routine post-operative monitoring and wound care are provided according to the cancer operation performed."
        },
        {
          title: "Cancer Follow-Up",
          text:
            "Final pathology and post-operative assessment help determine ongoing treatment and cancer surveillance."
        }
      ],

      whyChooseHeading:
        "Why Choose Dr. Deepak Koppaka for Fluorescence-Guided Cancer Surgery?",

      whyChooseIntro: `

        <p>
          Advanced surgical imaging is most useful when applied
          selectively as part of a carefully planned cancer operation.
        </p>

        <p>
          The focus is on integrating appropriate surgical technology
          with personalised cancer treatment planning, established
          surgical principles and patient-centred care.
        </p>

      `,

      whyChoose: [
        "Individual assessment of the role of fluorescence imaging.",
        "Integration of advanced imaging with cancer surgery planning.",
        "Focus on precise surgical visualisation where clinically useful.",
        "Use of minimally invasive surgical approaches when appropriate.",
        "Attention to surrounding normal structures and patient safety.",
        "Individualised post-operative follow-up and cancer care."
      ],

      faqs: [
        {
          question: "What is fluorescence-guided cancer surgery?",
          answer:
            "It is an image-guided surgical technique in which fluorescence technology provides additional visual information during selected operations."
        },
        {
          question: "Does fluorescence replace normal surgical imaging?",
          answer:
            "No. Fluorescence is an additional imaging tool and is interpreted together with normal visualisation, pre-operative imaging and clinical judgement."
        },
        {
          question: "Is fluorescence-guided surgery used for every cancer operation?",
          answer:
            "No. Its usefulness depends on the type of operation, clinical objective and whether fluorescence can provide meaningful additional information."
        },
        {
          question: "Can fluorescence be used during minimally invasive surgery?",
          answer:
            "Yes. Depending on the available technology and clinical indication, fluorescence imaging may be integrated with selected laparoscopic or robotic procedures."
        },
        {
          question: "Does fluorescence imaging change recovery time?",
          answer:
            "Recovery is mainly determined by the cancer operation performed, extent of surgery and individual patient factors."
        },
        {
          question: "Will I need additional treatment after surgery?",
          answer:
            "Further cancer treatment depends on final pathology, cancer stage and the multidisciplinary treatment plan."
        }
      ]
    }
  };


  /* ============================================================
     URL PARAMETER
  ============================================================ */

  const params = new URLSearchParams(window.location.search);

  const treatmentKey =
    params.get("treatment") ||
    "laparoscopic-cancer-surgery";

  const data =
    treatments[treatmentKey] ||
    treatments["laparoscopic-cancer-surgery"];


  /* ============================================================
     HELPER FUNCTIONS
  ============================================================ */

  function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {
      element.textContent = value || "";
    }
  }


  function setHTML(id, value) {

    const element = document.getElementById(id);

    if (element) {
      element.innerHTML = value || "";
    }
  }


  function setImage(id, src, fallback, alt) {

    const img = document.getElementById(id);

    if (!img) return;

    img.alt = alt || data.title;

    img.src = src || fallback || "";

    img.onerror = function () {

      if (
        fallback &&
        this.getAttribute("data-fallback-used") !== "true"
      ) {

        this.setAttribute(
          "data-fallback-used",
          "true"
        );

        this.src = fallback;

      } else {

        this.style.display = "none";
      }
    };
  }


  /* ============================================================
     PAGE INFORMATION
  ============================================================ */

  document.title =
    `${data.title} | Dr. Deepak Koppaka`;

  setText(
    "breadcrumbTreatment",
    data.title
  );

  setText(
    "treatmentTitle",
    data.title
  );

  setText(
    "treatmentBannerDescription",
    data.description
  );


  /* ============================================================
     INTRO
  ============================================================ */

  setText(
    "mainHeading",
    data.mainHeading
  );

  setText(
    "mainDescription",
    data.description
  );


  /* ============================================================
     ABOUT
  ============================================================ */

  setText(
    "aboutHeading",
    data.aboutHeading
  );

  setHTML(
    "aboutContent",
    data.aboutContent
  );

  setImage(
    "mainTreatmentImage",
    data.image,
    data.image,
    data.title
  );


  /* ============================================================
     PROCEDURE
  ============================================================ */

  setText(
    "procedureHeading",
    data.procedureHeading
  );

  setHTML(
    "procedureContent",
    data.procedureContent
  );

  setImage(
    "secondTreatmentImage",
    data.secondImage,
    data.image,
    `${data.title} Procedure`
  );


  /* ============================================================
     BENEFITS
  ============================================================ */

  setText(
    "benefitsHeading",
    data.benefitsHeading
  );

  setHTML(
    "benefitsContent",
    `
      <ul>
        ${data.benefits
          .map(
            item => `<li>${item}</li>`
          )
          .join("")}
      </ul>
    `
  );


  /* ============================================================
     RECOMMENDED
  ============================================================ */

  setText(
    "recommendedHeading",
    data.recommendedHeading
  );

  setHTML(
    "recommendedContent",
    `
      <ul>
        ${data.recommended
          .map(
            item => `<li>${item}</li>`
          )
          .join("")}
      </ul>
    `
  );


  /* ============================================================
     RECOVERY
  ============================================================ */

  setText(
    "recoveryHeading",
    data.recoveryHeading
  );

  setText(
    "recoveryIntro",
    data.recoveryIntro
  );

  const recoveryContainer =
    document.getElementById("recoveryCards");

  const recoveryIcons = [
    "fa-heart-pulse",
    "fa-person-walking",
    "fa-bed-pulse",
    "fa-notes-medical"
  ];

  if (recoveryContainer) {

    recoveryContainer.innerHTML =
      data.recovery
        .map(
          (item, index) => `

            <article class="recovery-card">

              <div class="recovery-card-icon">

                <i
                  class="fa-solid
                  ${recoveryIcons[
                    index % recoveryIcons.length
                  ]}"
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
        .join("");
  }


  /* ============================================================
     WHY CHOOSE
  ============================================================ */

  setText(
    "whyChooseHeading",
    data.whyChooseHeading
  );

  setHTML(
    "whyChooseContent",
    `

      ${data.whyChooseIntro}

      <ul>

        ${data.whyChoose
          .map(
            item => `<li>${item}</li>`
          )
          .join("")}

      </ul>

    `
  );

  setImage(
    "thirdTreatmentImage",
    data.thirdImage,
    data.image,
    `${data.title} - Dr. Deepak Koppaka`
  );


  /* ============================================================
     FAQ HEADING
  ============================================================ */

  setText(
    "faqTreatmentName",
    data.title
  );


  /* ============================================================
     FAQ
  ============================================================ */

  const faqContainer =
    document.getElementById("treatmentFaqs");

  if (faqContainer) {

    faqContainer.innerHTML =
      data.faqs
        .map(
          (faq, index) => `

            <article
              class="treatment-faq-item
              ${index === 0 ? "active" : ""}"
            >

              <button
                type="button"
                class="treatment-faq-question"
                aria-expanded="${
                  index === 0
                    ? "true"
                    : "false"
                }"
              >

                <span>
                  ${faq.question}
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

              <div class="treatment-faq-answer">

                <p>
                  ${faq.answer}
                </p>

              </div>

            </article>

          `
        )
        .join("");


    /* ==========================================================
       FAQ CLICK
    ========================================================== */

    const faqButtons =
      faqContainer.querySelectorAll(
        ".treatment-faq-question"
      );

    faqButtons.forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const currentItem =
            button.closest(
              ".treatment-faq-item"
            );

          const isActive =
            currentItem.classList.contains(
              "active"
            );


          /* Close all */
          faqContainer
            .querySelectorAll(
              ".treatment-faq-item"
            )
            .forEach(item => {

              item.classList.remove(
                "active"
              );

              const itemButton =
                item.querySelector(
                  ".treatment-faq-question"
                );

              const itemIcon =
                item.querySelector(
                  ".treatment-faq-question i"
                );

              if (itemButton) {

                itemButton.setAttribute(
                  "aria-expanded",
                  "false"
                );
              }

              if (itemIcon) {

                itemIcon.classList.remove(
                  "fa-minus"
                );

                itemIcon.classList.add(
                  "fa-plus"
                );
              }
            });


          /* Open clicked */
          if (!isActive) {

            currentItem.classList.add(
              "active"
            );

            button.setAttribute(
              "aria-expanded",
              "true"
            );

            const icon =
              button.querySelector("i");

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

});