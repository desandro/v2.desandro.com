 <?php 
	include('includes/config.php'); 
	include('includes/templates/html_head.php'); 


?>

	<link rel="stylesheet" href="css/ia_pages.css" type="text/css" media="screen" charset="utf-8" />

	<title><?= $sitename ?> &rsaquo; IA &rsaquo; Section Analysis</title>


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
			<h1>Section Analysis</h1>
			<dl>
				<dt>about</dt>
					<dd>About articles</dd>
					<dd>links to notices</dd>
					<dd>Disclaimer - textpattern is not official</dd>
					<dd>Contact form</dd>
				<dt>archives</dt>	
					<dd>List of every Content article ordered by Section (Mod, Plugin, Template, Tutorials, Tips)</dd>
					<dd>Content section links</dd>
					<dd>category links</dd>
					<dd>links to other archives</dd>
				<dt>article</dt>
					<dd>legacy article section - can be removed?</dd>
				<dt>authorarchive</dt>
					<dd>List of every Content article ordered by author</dd>
				<dt>categoryarchive</dt>
				<dt>comments</dt>
					<dd>Recent comments, ordered chronologically</dd>
				<dt>contact</dt>
					<dd>Contact form, same as used in the about section</dd>
				<dt>datearchive</dt>
					<dd>List of every Content article arranged by date</dd>
				<dt>help</dt>
					<dd>FAQ section</dd>
				<dt>links</dt>
					<dd>list of other Textpattern resource sites</dd>
				<dt>misc</dt>
					<dd>Contains several articles of the Q/A variety.  Visitor stats, V1 vs V2</dd>
				<dt>mods</dt>
					<dd>CONTENT - ordered chronologically</dd>
					<dd>Mod Categories</dd>
				<dt>notices</dt>
					<dd>blog of site-happenings</dd>
				<dt>plugins</dt>
					<dd>CONTENT - ordered chronologically</dd>
					<dd>Plugin Categories</dd>
				<dt>register</dt>
					<dd>Page where you register so you can post articles</dd>
				<dt>search</dt>
					<dd>Just a search field</dd>
				<dt>state</dt>
					<dd>List of plugins that are  either orphaned</dd>
				<dt>tags</dt>
					<dd>Tag cloud</dd>
					<dd>sidebar - category cloud</dd>
				<dt>templates</dt>
					<dd>CONTENT - ordered chronologically</dd>
					<dd>Template Categories</dd>
				<dt>tips</dt>
					<dd>CONTENT - ordered chronologically</dd>
					<dd>Tips Categories</dd>
				<dt>tutorials</dt>
					<dd>CONTENT	 - ordered chronologically</dd>
					<dd>Tutorial Categories</dd>
				<dt>Search results</dt>
					<dd>Category list in sidebar</dd>
			</dl>

			<h2>Original Sitemap</h2>
			<img src="ia_img/sitemap01.png" alt="Original sitemap" />

		</section>

	</div> <!-- /#wrap -->


</body>
</html>