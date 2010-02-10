<?php 
	include('includes/config.php'); 


	// get the var from ?s=, it's the section title
	$section = $_GET['section'];
	$category = $_GET['cat'];
	$tag = $_GET['tag'];
	
	if ( isset($section) ) {
		$listTitle = $section;
	} elseif ( isset($category) ) {
		$listTitle = '<span class="lead_in">Categorized as</span> ' . $category;
	} elseif ( isset($tag) ) {
		$listTitle = '<span class="lead_in">Tagged with</span> ' . $tag;
	} else  {
		$listTitle = 'Plugins';
	}
	
	
	include('includes/templates/html_head.php'); 
?>

	<title><?= strip_tags($listTitle) ?> | <?= $sitename ?></title>


</head>
<body class="page_list page_<?= cleanURL($section . $category . $tag) ?>">


	<div id="wrap" class="container_12">
		
		<?php include('includes/templates/header.php'); ?>
		
		<div id="page_content" class="clearfix">

			<div id="main">

				<h1><?= $listTitle ?></h1>

				<?php pluginArticleList( 20, 'list' ); ?>
				
				<?php include('includes/templates/pagination.php') ?>
				
			</div> <!-- /#main -->
			
			<aside id="sidebar" class="grid_3">
				
				<?php include('includes/templates/category_list.php'); ?>

			</aside> <!-- /#sidebar -->
			
		</div> <!-- /#page_content -->
		
		<?php include('includes/templates/footer.php'); ?>
		
	</div> <!-- /#wrap.container12 -->
	
	
</body>
</html>