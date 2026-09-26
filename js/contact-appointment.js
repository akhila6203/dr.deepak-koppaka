/* ==========================================================
   DR. DEEPAK KOPPAKA
   CONTACT + APPOINTMENT
========================================================== */


document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* ======================================================
       APPOINTMENT DATE
       Past dates disable
    ====================================================== */

    const appointmentDate =
      document.getElementById(
        "appointmentDate"
      );


    if (appointmentDate) {

      const today =
        new Date();


      const year =
        today.getFullYear();


      const month =
        String(
          today.getMonth() + 1
        ).padStart(2, "0");


      const day =
        String(
          today.getDate()
        ).padStart(2, "0");


      appointmentDate.min =
        `${year}-${month}-${day}`;

    }



    /* ======================================================
       ALL MEDICAL FORMS
    ====================================================== */

    const forms =
      document.querySelectorAll(
        ".medical-form"
      );


    forms.forEach(
      function (form) {


        form.addEventListener(
          "submit",
          async function (event) {


            event.preventDefault();



            /* ==============================================
               ELEMENTS
            ============================================== */

            const status =
              form.querySelector(
                ".form-status"
              );


            const submitButton =
              form.querySelector(
                ".medical-submit-btn"
              );


            if (
              !status ||
              !submitButton
            ) {

              return;

            }



            const originalButtonHTML =
              submitButton.innerHTML;



            /* ==============================================
               RESET STATUS
            ============================================== */

            status.className =
              "form-status";


            status.textContent =
              "";



            /* ==============================================
               DISABLE BUTTON
            ============================================== */

            submitButton.disabled =
              true;


            submitButton.innerHTML = `

              <span>
                Sending...
              </span>

              <i
                class="fa-solid fa-spinner fa-spin"
              ></i>

            `;



            try {


              /* ============================================
                 FORM DATA
              ============================================ */

              const formData =
                new FormData(form);



              /* ============================================
                 PHP REQUEST
              ============================================ */

              const response =
                await fetch(
                  form.action,
                  {

                    method: "POST",

                    body: formData

                  }
                );



              /* ============================================
                 GET RESPONSE AS TEXT FIRST

                 This prevents JS crash if PHP outputs
                 an error instead of JSON.
              ============================================ */

              const responseText =
                await response.text();


              let data;


              try {

                data =
                  JSON.parse(
                    responseText
                  );

              }
              catch (jsonError) {

                throw new Error(
                  "Server returned an invalid response. Please check PHP mail configuration."
                );

              }



              /* ============================================
                 SUCCESS
              ============================================ */

              if (
                response.ok &&
                data.success
              ) {


                status.className =
                  "form-status success";


                status.textContent =
                  data.message ||
                  "Your details have been submitted successfully.";



                /* RESET FORM */

                form.reset();



                /* Reset appointment minimum date */

                if (
                  appointmentDate
                ) {

                  const today =
                    new Date();


                  const year =
                    today.getFullYear();


                  const month =
                    String(
                      today.getMonth() + 1
                    ).padStart(2, "0");


                  const day =
                    String(
                      today.getDate()
                    ).padStart(2, "0");


                  appointmentDate.min =
                    `${year}-${month}-${day}`;

                }


              }


              /* ============================================
                 SERVER ERROR
              ============================================ */

              else {


                throw new Error(

                  data.message ||

                  "Unable to submit the form. Please try again."

                );


              }


            }


            /* ==============================================
               ERROR
            ============================================== */

            catch (error) {


              console.error(
                "Form submission error:",
                error
              );


              status.className =
                "form-status error";


              status.textContent =
                error.message ||
                "Something went wrong. Please try again.";


            }


            /* ==============================================
               RESTORE BUTTON
            ============================================== */

            finally {


              submitButton.disabled =
                false;


              submitButton.innerHTML =
                originalButtonHTML;


            }


          }
        );


      }
    );


  }
);