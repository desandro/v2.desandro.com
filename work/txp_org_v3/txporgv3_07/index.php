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

		<h1>Textpattern.org Redesign</h1>

		<section>
			<h2>Demo Sitemap</h2>
			
			<ul>
				<li><a href="home.php">Homepage</a></li>
				<li>Plugins
					<ul>
						<li><a href="list.php?section=Newest">Newest</a></li>
						<li><a href="list.php?section=Recently Updated">Recently Updated</a></li>
						<li><a href="list.php?section=Featured">Featured</a></li>
						<li><a href="tags.php">Tags</a></li>
						<li>Categories (in sidebar)</li>
						<li><a href="authors.php">Authors</a></li>
						<li>Example Plugin Pages
							<ul>
								<li><a href="plugin.php?p=soo_plugin_pref">soo_plugin_pref</a></li>
								<li><a href="plugin.php?p=yab_email">yab_email</a></li>
								<li><a href="plugin.php?p=atb_customize_feeds">atb_customize_feeds</a></li>
								<li><a href="plugin.php?p=zem_contact_reborn">zem_contact_reborn</a></li>
								<li><a href="plugin.php?p=bot_admin_tooltips">bot_admin_tooltips</a></li>
								<li><a href="plugin.php?p=smd_horizon">smd_horizon</a></li>
								<li><a href="plugin.php?p=hhh_textile_title">hhh_textile_title</a></li>
								<li><a href="plugin.php?p=dds_admin_style">dds_admin_style</a></li>
								<li><a href="plugin.php?p=kff_txp_version">kff_txp_version</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li>Meta
					<ul>
						<li><a href="help.php">Help</a></li>
						<li><a href="notices.php">Notices</a></li>
						<li><a href="register.php">Register</a></li>
						<li>Comments</li>
						<li>State</li>
						<li><a href="contact.php">Contact</a></li>
						<li>Links (possibly)</li>
					</ul>
				</li>
				<li>Older Resources
					<ul>
						<li>Mods</li>
						<li>Tips</li>
						<li>Tutorials</li>
						<li>Templates</li>
					</ul>
				</li>
			</ul>
			
		</section>

	</div> <!-- /#wrap -->


</body>
</html>