 <?php 
	include('includes/config.php'); 
	include('includes/templates/html_head.php'); 


?>

	<link rel="stylesheet" href="css/ia_pages.css" type="text/css" media="screen" charset="utf-8" />

	<title><?= $sitename ?> &rsaquo; IA &rsaquo; Plugin Article Datapoints</title>


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
			<h1>Plugin Article Datapoints</h1>
			<ul>
				<li>title</li>
				<li>copy</li>
				<li>Descriptive title</li>
				<li>Author name</li>
				<li>external information page</li>
				<li>external author's site</li>
				<li>external URL to download plugin</li>
				<li>initial release date</li>
				<li>forum thread</li>
				<li>current version</li>
				<li>state</li>
				<li>keywords / tags</li>
				<li>categories</li>
				<li>last updated</li>
			</ul>

		</section>

	</div> <!-- /#wrap -->


</body>
</html>