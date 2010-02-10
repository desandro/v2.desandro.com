<?php 
	include('includes/config.php'); 

	include('includes/templates/html_head.php');
?>

	<title>Tags | <?= $sitename ?></title>

</head>
<body class="page_tags">

	<div id="wrap">
		
		<?php include('includes/templates/header.php'); ?>
		
		<div id="page_content">

			<div id="main">

				<h1>Tags</h1>
				
				<ul id="tag_list" class="clearfix">

					<?php include('includes/templates/tag_list.php'); ?>

				</ul> <!-- /#tag_list -->
				
			</div> <!-- /#main -->


			
			<aside id="sidebar">
				
				<?php include('includes/templates/category_list.php'); ?>

			</aside> <!-- /#sidebar -->


			
		</div> <!-- /#page_content -->


		<?php include('includes/templates/footer.php'); ?>		
		
	</div> <!-- /#wrap -->
	
	
</body>
</html>