<?php

/* ==========================================================
   DR. DEEPAK KOPPAKA
   REUSABLE CONTACT + APPOINTMENT EMAIL HANDLER
========================================================== */


header(
    'Content-Type: application/json; charset=UTF-8'
);



/* ==========================================================
   POST REQUEST ONLY
========================================================== */

if (
    $_SERVER['REQUEST_METHOD'] !== 'POST'
) {

    http_response_code(405);

    echo json_encode([

        'success' => false,

        'message' =>
            'Invalid request method.'

    ]);

    exit;

}



/* ==========================================================
   CONFIGURATION

   CHANGE THESE TWO EMAILS
========================================================== */


/*
   Email where enquiries should arrive
*/

$toEmail =
    'YOUR_EMAIL@gmail.com';



/*
   Prefer email from your own domain.

   Example:
   noreply@drdeepakkoppaka.com
*/

$fromEmail =
    'noreply@drdeepakkoppaka.com';



/* ==========================================================
   HELPER FUNCTION
========================================================== */

function cleanValue($value)
{

    return trim(

        strip_tags(

            $value ?? ''

        )

    );

}



/* ==========================================================
   GET VALUES
========================================================== */

$formType =
    cleanValue(
        $_POST['form_type'] ?? ''
    );


$name =
    cleanValue(
        $_POST['name'] ?? ''
    );


$email =
    trim(
        $_POST['email'] ?? ''
    );


$phone =
    cleanValue(
        $_POST['phone'] ?? ''
    );


$message =
    cleanValue(
        $_POST['message'] ?? ''
    );



/* ==========================================================
   VALIDATE COMMON FIELDS
========================================================== */

if (
    empty($name) ||
    empty($email) ||
    empty($phone)
) {

    http_response_code(422);


    echo json_encode([

        'success' => false,

        'message' =>
            'Please fill in all required fields.'

    ]);


    exit;

}



/* ==========================================================
   EMAIL VALIDATION
========================================================== */

if (
    !filter_var(
        $email,
        FILTER_VALIDATE_EMAIL
    )
) {

    http_response_code(422);


    echo json_encode([

        'success' => false,

        'message' =>
            'Please enter a valid email address.'

    ]);


    exit;

}



/* ==========================================================
   BASIC HEADER INJECTION PROTECTION
========================================================== */

if (
    preg_match(
        '/[\r\n]/',
        $email
    )
) {

    http_response_code(422);


    echo json_encode([

        'success' => false,

        'message' =>
            'Invalid email address.'

    ]);


    exit;

}



/* ==========================================================
   COMMON EMAIL HEADERS
========================================================== */

$headers =
    "MIME-Version: 1.0\r\n";


$headers .=
    "Content-Type: text/html; charset=UTF-8\r\n";


$headers .=
    "From: Dr. Deepak Koppaka Website <"
    . $fromEmail .
    ">\r\n";


$headers .=
    "Reply-To: "
    . $email .
    "\r\n";



/* ==========================================================
   CONTACT FORM
========================================================== */

if (
    $formType === 'contact'
) {


    $subject =
        cleanValue(
            $_POST['subject'] ?? ''
        );



    if (
        empty($subject) ||
        empty($message)
    ) {


        http_response_code(422);


        echo json_encode([

            'success' => false,

            'message' =>
                'Please enter the subject and message.'

        ]);


        exit;

    }



    $mailSubject =
        'New Website Contact Enquiry - '
        . $name;



    $mailBody = '

    <!DOCTYPE html>

    <html>

    <head>

      <meta charset="UTF-8">

    </head>


    <body
      style="
        margin:0;
        padding:30px;
        background:#f5f7fa;
        font-family:Arial,Helvetica,sans-serif;
        color:#17263a;
      "
    >


      <div
        style="
          max-width:680px;
          margin:0 auto;
          background:#ffffff;
          border-radius:14px;
          overflow:hidden;
          border:1px solid #e1e6eb;
        "
      >


        <div
          style="
            padding:25px 28px;
            background:#064d80;
            color:#ffffff;
          "
        >


          <h2
            style="
              margin:0;
              font-size:23px;
            "
          >

            New Contact Enquiry

          </h2>


          <p
            style="
              margin:7px 0 0;
              font-size:14px;
              color:#e5eef5;
            "
          >

            Dr. Deepak Koppaka Website

          </p>


        </div>



        <div
          style="
            padding:28px;
            font-size:15px;
            line-height:1.7;
          "
        >


          <p>

            <strong>
              Name:
            </strong>

            '
            . htmlspecialchars(
                $name,
                ENT_QUOTES,
                'UTF-8'
            )
            . '

          </p>



          <p>

            <strong>
              Email:
            </strong>

            '
            . htmlspecialchars(
                $email,
                ENT_QUOTES,
                'UTF-8'
            )
            . '

          </p>



          <p>

            <strong>
              Phone:
            </strong>

            '
            . htmlspecialchars(
                $phone,
                ENT_QUOTES,
                'UTF-8'
            )
            . '

          </p>



          <p>

            <strong>
              Subject:
            </strong>

            '
            . htmlspecialchars(
                $subject,
                ENT_QUOTES,
                'UTF-8'
            )
            . '

          </p>



          <div
            style="
              margin-top:20px;
              padding-top:20px;
              border-top:1px solid #e5e8ec;
            "
          >


            <strong>
              Message:
            </strong>


            <p
              style="
                margin-bottom:0;
              "
            >

              '
              . nl2br(
                  htmlspecialchars(
                      $message,
                      ENT_QUOTES,
                      'UTF-8'
                  )
              )
              . '

            </p>


          </div>


        </div>


      </div>


    </body>

    </html>

    ';



    $successMessage =
        'Thank you for contacting us. Our team will get back to you shortly.';

}



/* ==========================================================
   APPOINTMENT FORM
========================================================== */

elseif (
    $formType === 'appointment'
) {


    $appointmentDate =
        cleanValue(
            $_POST['appointment_date'] ?? ''
        );


    $service =
        cleanValue(
            $_POST['service'] ?? ''
        );



    if (
        empty($appointmentDate) ||
        empty($service)
    ) {


        http_response_code(422);


        echo json_encode([

            'success' => false,

            'message' =>
                'Please select your preferred date and service.'

        ]);


        exit;

    }



    /*
       Validate appointment date format
    */

    $dateObject =
        DateTime::createFromFormat(
            'Y-m-d',
            $appointmentDate
        );


    if (
        !$dateObject ||
        $dateObject->format('Y-m-d')
            !== $appointmentDate
    ) {


        http_response_code(422);


        echo json_encode([

            'success' => false,

            'message' =>
                'Please select a valid appointment date.'

        ]);


        exit;

    }



    $formattedDate =
        $dateObject->format(
            'd M Y'
        );



    $mailSubject =
        'New Appointment Request - '
        . $name;



    $mailBody = '

    <!DOCTYPE html>

    <html>

    <head>

      <meta charset="UTF-8">

    </head>


    <body
      style="
        margin:0;
        padding:30px;
        background:#f5f7fa;
        font-family:Arial,Helvetica,sans-serif;
        color:#17263a;
      "
    >


      <div
        style="
          max-width:680px;
          margin:0 auto;
          background:#ffffff;
          border-radius:14px;
          overflow:hidden;
          border:1px solid #e1e6eb;
        "
      >


        <div
          style="
            padding:25px 28px;
            background:#54357b;
            color:#ffffff;
          "
        >


          <h2
            style="
              margin:0;
              font-size:23px;
            "
          >

            New Appointment Request

          </h2>


          <p
            style="
              margin:7px 0 0;
              color:#eee7f4;
              font-size:14px;
            "
          >

            Dr. Deepak Koppaka Website

          </p>


        </div>



        <div
          style="
            padding:28px;
            font-size:15px;
            line-height:1.7;
          "
        >


          <p>

            <strong>
              Patient Name:
            </strong>

            '
            . htmlspecialchars(
                $name,
                ENT_QUOTES,
                'UTF-8'
            )
            . '

          </p>



          <p>

            <strong>
              Email:
            </strong>

            '
            . htmlspecialchars(
                $email,
                ENT_QUOTES,
                'UTF-8'
            )
            . '

          </p>



          <p>

            <strong>
              Phone:
            </strong>

            '
            . htmlspecialchars(
                $phone,
                ENT_QUOTES,
                'UTF-8'
            )
            . '

          </p>



          <p>

            <strong>
              Preferred Date:
            </strong>

            '
            . htmlspecialchars(
                $formattedDate,
                ENT_QUOTES,
                'UTF-8'
            )
            . '

          </p>



          <p>

            <strong>
              Service:
            </strong>

            '
            . htmlspecialchars(
                $service,
                ENT_QUOTES,
                'UTF-8'
            )
            . '

          </p>



          <div
            style="
              margin-top:20px;
              padding-top:20px;
              border-top:1px solid #e5e8ec;
            "
          >


            <strong>
              Message:
            </strong>


            <p
              style="
                margin-bottom:0;
              "
            >

              '
              . nl2br(
                  htmlspecialchars(
                      $message,
                      ENT_QUOTES,
                      'UTF-8'
                  )
              )
              . '

            </p>


          </div>


        </div>


      </div>


    </body>

    </html>

    ';



    $successMessage =
        'Thank you. Your appointment request has been submitted successfully. Our team will contact you shortly.';

}



/* ==========================================================
   INVALID FORM TYPE
========================================================== */

else {


    http_response_code(400);


    echo json_encode([

        'success' => false,

        'message' =>
            'Invalid form submission.'

    ]);


    exit;

}



/* ==========================================================
   SEND MAIL
========================================================== */

$mailSent =
    mail(
        $toEmail,
        $mailSubject,
        $mailBody,
        $headers
    );



/* ==========================================================
   RESPONSE
========================================================== */

if (
    $mailSent
) {


    echo json_encode([

        'success' => true,

        'message' =>
            $successMessage

    ]);


}

else {


    http_response_code(500);


    echo json_encode([

        'success' => false,

        'message' =>
            'Unable to send your request right now. Please try again later.'

    ]);


}

?>