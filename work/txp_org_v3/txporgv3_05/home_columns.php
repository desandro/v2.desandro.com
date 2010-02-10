<?php 
	include('includes/config.php'); 
	include('includes/templates/html_head.php'); 
	
	
?>


	<link rel="stylesheet" href="css/home_columns.css" type="text/css" media="screen" />

	<title><?= $sitename ?></title>


</head>
<body class="page_home">

	<div id="wrap">
		
		<?php include('includes/templates/header.php'); ?>
		
		<div id="page_content" class="clearfix">

			<div id="intro">
				<h1> Make your <a href="http://textpattern.com">Textpattern</a> magnificent. </h1>
				With a plethora of plugins to chose from, you can customize Textpattern exactly to meet your needs. 
				<br />Don&rsquo;t know where to begin? We have some <a href="#">recommended featured plugins</a> to get you started.
			</div>
			
			<div id="main">

				<section>
					<h2>Featured Plugins</h2>

					<?php pluginArticleList( 5, 'column' ); ?>
				</section>

				<section>
					<h2>Newest Plugins</h2>

					<?php pluginArticleList( 5, 'column' ); ?>
				</section>
			</div> <!-- /#main -->
			
			<aside id="sidebar">
				
				<?php include('includes/templates/category_list.php'); ?>

			</aside> <!-- /#sidebar -->
			
		</div> <!-- /#page_content -->
		
		<?php include('includes/templates/footer.php'); ?>
		
	</div> <!-- /#wrap -->
	
	
</body>
</html>