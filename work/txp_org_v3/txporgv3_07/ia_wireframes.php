 <?php 
	include('includes/config.php'); 
	include('includes/templates/html_head.php'); 


?>

	<link rel="stylesheet" href="css/ia_pages.css" type="text/css" media="screen" charset="utf-8" />

	<title><?= $sitename ?> &rsaquo; IA &rsaquo; Wireframes</title>


</head>
<body class="page_home">

	<div id="wrap" class="content">

		<section>
			<ul>
				<li><a href="./">index</a></li>
				<?php foreach ( glob('ia_*.php') as $page ): ?>
					<li><a href="<?= $page ?>"><?= $page ?></a></li>
				<?php endforeach; ?>
			</ul>
		</section>


		<section>
			<h1>Wireframes</h1>

			<h2>Homepage</h2>
			<img src="ia_img/homepage_wireframe03.png" alt="Homepage wireframe" />

			<h2>Section Page</h2>
			<img src="ia_img/section_wireframe01.png" alt="Section page wireframe" />

		</section>

	</div> <!-- /#wrap -->


</body>
</html>