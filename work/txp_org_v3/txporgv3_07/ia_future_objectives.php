 <?php 
	include('includes/config.php'); 
	include('includes/templates/html_head.php'); 


?>

	<link rel="stylesheet" href="css/ia_pages.css" type="text/css" media="screen" charset="utf-8" />

	<title><?= $sitename ?> &rsaquo; IA &rsaquo; Intro</title>


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
			<h1>Future Objectives</h1>

			<ul>
				<li>Host plugin files on the site</li>
				<li>Display previous versions of older plugins</li>
				<li>filter by supported version of TXP</li>
				<li>Other plugins by this author</li>
				<li>Short URL's</li>
				<li>Tally download counts</li>
			</ul>

		</section>

	</div> <!-- /#wrap -->


</body>
</html>