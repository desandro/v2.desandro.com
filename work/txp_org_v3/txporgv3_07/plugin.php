<?php 
	include('includes/config.php'); 

	// get the var from ?p=, pass it thru the array
	$getPlugin = $plugins[ $_GET['p'] ];
	
	if ( isset($getPlugin) ) {
		// if the array returns a valid plugin, then set it
		$plugin = $getPlugin;
	} else {
		// otherwise, get a random plugin
		shuffle($plugins);
		$plugin = $plugins[0];	
	}
	
	include('includes/templates/html_head.php'); 


?>

	<title><?= $plugin->title; ?> | <?= $sitename ?></title>


</head>
<body class="page_plugin">

	<div id="wrap">
		
		<?php include('includes/templates/header.php'); ?>
		
		<div id="page_content" class="clearfix">

			<div id="main">

				<?php include('includes/templates/plugin_article_full.php'); ?>

				<?php include('includes/templates/flag.php'); ?>

				<?php include('includes/templates/comments.php'); ?>
				
			</div> <!-- /#main -->
			
			<aside id="sidebar">
				
				<?php include('includes/templates/submitted_by_author.php'); ?>
				
				<?php include('includes/templates/category_list.php'); ?>

			</aside> <!-- /#sidebar -->
			
		</div> <!-- /#content -->
		
		<?php include('includes/templates/footer.php'); ?>
		
	</div> <!-- /#wrap.container12 -->
	
	
</body>
</html>