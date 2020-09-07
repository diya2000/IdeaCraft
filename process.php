<?php
    $Msg = "";
    if(isset($_GET['error']))
    {
        $Msg = "Please Fill in the Blanks";
        echo '<div class="alert alert-danger">'.$Msg.'</div>';
    }

    if(isset($_GET['success']))
    {
        $Msg = " Your Message Has Been Sent ";
        echo '<div class="alert alert-success">'.$Msg.'</div>';
    }
    console.log

?>
