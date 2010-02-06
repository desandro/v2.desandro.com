<?php
    define('ROOT','../');
    // include(ROOT.'_base/includes/config.php');

    function partial($file) {
        $output = include(ROOT.'templates/partials/'.$file);
    }

    function cleanPOST($post) {
        foreach ($post as $key => $value) {
            $value = trim($value);
            $value = stripslashes($value);
            $value = htmlspecialchars($value);
        }
        return $post;
    }

    if(isset($_POST)) $post = cleanPOST($_POST);

    function validateContactForm() {
        global $post;
    
        // check normal text fields
        $checkVals = array('name', 'verification', 'message');
        foreach ($checkVals as $key => $value) {
            if(!isset($post[$value]) || $post[$value] == '' ) {
                $errors[] = $value;
            }
        }
    
        //validate email
        $pattern = '/^([a-z0-9])(([-a-z0-9._])*([a-z0-9]))*\@([a-z0-9])' . '(([a-z0-9-])*([a-z0-9]))+' . '(\.([a-z0-9])([-a-z0-9_-])?([a-z0-9])+)+$/i';
        $emailValidation = preg_match($pattern, $post['email']);
        if($emailValidation == 0) {
            $errors[] = 'valid email';
        }
        
        // go through checks and output an error message
        if ( isset($errors) ) {
            $errorCount = count($errors);
            $errorMessage = '<p>I&rsquo;ll need a ';
            foreach ($errors as $i => $error) {
                if ($errorCount > 1 && $i == $errorCount-1) {
                    $errorMessage .= ' and ';
                }                                
                $errorMessage .=  ' <strong>'.$error.'</strong>' ;
                if ($i < $errorCount-1) {
                    $errorMessage .= ',';
                }
            }
            $errorMessage .= ' in order to receive your correspondence.</p>';
            echo $errorMessage;
            // include('contact_form.php');
        } else {
            // if no errors are set
            echo '<p><strong>Your message has been sent.</strong> Since I do receive a fair amount of email, I ask for your patience, as it might take me a couple days to get back to you. Thanks for getting in touch!</p>';
    
            $headers  = 
                 "MIME-Version: 1.0\r\nContent-type: text/html; charset=iso-8859-1\r\n"
                .'From: '.$post['name'].' <'.$post['email'].'>'."\r\n"
                .'Reply-To: '.$post['email']."\r\n"
            ;
            $subject = isset($post['subject']) ? $post['subject'] : '';
            $subject .= ' [desandro.com inquiry]';
    
            mail( 'dwdesandro@gmail.com', $subject , $post['message'], $headers );
    
        }
        
    }

?>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>About &amp; Contact | desandro.com stacey</title>
    <link rel="stylesheet" href="../_base/css/desandro.css" type="text/css" media="screen" />
    <!--[if lte IE 7]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    <script type="text/javascript" src="http://use.typekit.com/bqa1ehi.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

    <script type="text/javascript" src="../_base/js/jquery-1.4.min.js"></script>
    <!-- <script type="text/javascript" src="_base/js/application.js"></script> -->
    <script src="/mint/?js" type="text/javascript"></script>

    <link rel="stylesheet" href="about.css" type="text/css" media="screen" />
    <script type="text/javascript" src="about.js"></script>
    

</head>
<body class="about tk_proxima_nova">
    
     <section id="site_header" class="tk_proxima_nova"> 
        <div id="branding"> 
            <p><a href="../"><span>David</span> DeSandro</a>  / </p> 
        </div> 
        <ol> 
            <li class="articles"><a href="../articles">Articles</a></li> 
            <li class="resources"><a href="../resources">Resources</a> 

            </li> 
            <li class="portfolio"><a href="../portfolio">Portfolio</a> 

            </li> 
            <li class="about"><a href="../about">About &amp; Contact</a></li> 
        </ol>    
    </section>
    
    <section id="about">
        <div class="wrap12">
            <div class="col6">
                <h1>About</h1>
                <p class="blurb">David DeSandro revels in the creative process. Building from the foundations of art, math, and logic, he produces elegant, inspiring interfaces. Exploring uncharted waters in the medium, he innovates to find new ways to design for the web.</p>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="wrap12">
            <div class="col6">
                <h1>Contact</h1>
                <?php
                    if(!isset($_POST['send'])) {
                        // if nothing has been posted
                        include('contact_form.php');
                    } else {
                        // if something has been posted
                       validateContactForm();
                    }
                ?>
            </div>
            
            <div id="socialize" class="col6">
                <h2>Let&rsquo;s be friends</h2>
                <ul>
                    <li><a href="http://twitter.com/desandro">Twitter</a></li>
                    <li><a href="http://www.flickr.com/photos/nemoorange/">Flickr</a></li>
                    <li><a href="http://www.facebook.com/dave.desandro">Facebook</a></li>
                    <li><a href="http://fontstruct.fontshop.com/fontstructors/nemoorange">Fontstruct</a></li>
                    <li><a href="http://readernaut.com/desandro/">Readernaut</a></li>
                    <li><a href="http://github.com/desandro">GitHub</a></li>
                    <li><a href="http://delicious.com/desandro">Delicious</a></li>
                    <li><a href="http://vimeo.com/desandro">Vimeo</a></li>
                    <li><a href="http://www.last.fm/user/nemoorange">Last.fm</a></li>
                    <!-- <li><a href="#">Dribbble</a></li> -->
                    <li><a href="http://www.linkedin.com/in/desandro">LinkedIn</a></li>
                    <li><a href="http://userstyles.org/users/16958">Userstyles</li>
                    <li><a href="http://stackoverflow.com/users/182183/desandro">StackOverflow</a></li>
                </ul>
            </div>
        </div>
    </section>

    <section id="site_footer" class="tk_proxima_nova">
        <div class="wrap12">
            <div class="made_this col4">
                <p class="who_did">

                    <span class="david">David</span>
                    <span class="desandro">DeSandro</span>
                    made this.
                </p>
                <p class="copyright">&copy; 2009 &ndash; @current_year</p>                
            </div>

            <p class="where_what col4">
                <span class="heisa">He is a graphic &amp;</span>
                <span class="designer">web designer</span>
                <span class="living">living in Arlington, VA,</span>
                <span class="working">working at <a href="http://nclud.com">nclud</a> in Washington, DC.</span>

                <span class="happy">Being creative and making stuff keeps him happy.</span>
            </p>
            <div class="also_made col4">
                <h3>Dave also made</h3>
                <ul>
                    <li class="jqmsnry"><a href="<?= ROOT ?>resources/jquery-masonry">jQuery Masonry</a></li>
                    <li class="curtis"><a href="<?= ROOT ?>resources/curtis-css-typeface">Curtis CSS Typeface</a></li>

                    <li class="speechbub"><a href="<?= ROOT ?>resources/css-speech-bubble-icon">CSS Speech Bubble</a></li>
                </ul>
            </div>
        </div>
    </section> <!-- #site_footer -->
</body>
</html>
