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
			<h1>Site Architecture</h1>
			
			<h2>Current</h2>
			<p>
				Textpattern.org currently 21 sections.  These sections can be compiled into three groups: Content, Taxonomy/Search, and Meta.
			</p>
			
			<h3>Content</h3>
			<ul>
				<li>Mods</li>
				<li>Plugins</li>
				<li>Templates</li>
				<li>Tips</li>
				<li>Tutorials</li>
			</ul>
			
			<p>These sections hold the primary content of Textpattern Resources. Each article in these sections is actual content. For example, an article in the Plugin section has a full description of what the plug in does, how to use it, pertinent download and information links.  This is the meat of the site.</p>
			
			<h3>Filters</h3>
			<ul>
				<li>archives</li>
				<li>authorarchive</li>
				<li>categoryarchive</li>
				<li>datearchive</li>
				<li>search</li>
				<li>tags</li>
			</ul>
			
			<p>These sections are comprised of lists Content-section articles.  Each provides a way a different way to filter content - whether by date, author, category, tag.  The search section is not a section for search results, but just a simple page with two search input fields.</p>

			<h3>Meta</h3>
			<ul>
				<li>About</li>
				<li>help</li>
				<li>misc</li>
				<li>contact</li>
				<li>notices</li>
				<li>comments</li>
				<li>state</li>
				<li>links</li>
				<li>register</li>
			</ul>
			<p>The Meta sections have content about the site of Textpattern.org itself. Notices is a blog about last happenings on the site worth mention:  upgrades, or requests to the readership.</p>
			
		</section>

		<section>
			<h2>Proposal</h2>
			
			<h3>Hide all Content sections other than Plugins</h3>

			<p>Submission of content to the Tips, Tutorials, Mods, and Templates sections has dwindled over the past several years.  This is not necessarily a bad thing, as this content has made its way on to other sites across the Textpattern community.  <a href="http://txptips.com">TXP Tips</a> has tips and tutorials. <a href="http://textgarden.org">Textgarden.org</a> has templates. Mods may be found in the <a href="http://forum.textpattern.com">Textpattern.com forum</a>.</p>
			
		
			<p>Articles from Tips, Tutorials, Mods, and Templates will not be removed completely.  Search results that link to these articles will still properly function, perhaps using a 301 redirect.  The only way to navigate to these will be through an 'Older Resources' section.</p>
			

			<h3>Limit Filter sections to show only Plugin content</h3>

			<p>Moving forward, the primary content of Textpattern Resources will be soley as a repository for Plugins.  All filter sections will only display Plugin content, and not content from other sections.  These filter sections can then be brought under the the Plugins section of the sitemap</p>
			
			<h3>Eliminate or hide duplicative/unnecessary Meta sections</h3>
			
			<p>Remove Links altogether. This section is unnecessary as the links it provides are the standard Textpattern community links.</p>
			
			<p>Combine misc, about and help into 'help' or 'Frequently Asked Questions.' This content is all similar and can all be presented in one section cohesively.</p>
			
			<h3>Add Recently Updated filter section</h3>
			
			<p>Adding a Recently Updated filter could provide some value as there is no way to see Plugins which have been recently modified.  The danger is that this filter works by checking the last time the <em>article</em>, not the plugin file itself, was modifed.  However, this could still be useful as visitors would be able to see what changes have been made. </p>
			
			<h3>Add Featured Plugins</h3>
			
			<p>This is a major addition to the site.  Featured Plugins will be selected by the Textpattern community.  This section is focused on new users, who don't know what plugins to start with.  It will also be useful for returning visitors, who frequently have to download the same set of standard plugins.  The goal is to provide a short list of valuable plugins - ranging from simple (rvm_maintenance, perhaps) to more complex.</p>
			
			<h3>Develop Author filter</h3>
			
			<p>The end goal is provide a page for each other, which will list all plugins by that author.</p>
			
			<h3>Revised Site Map</h3>
			
			<ul>
				<li>Plugins
					<ul>
						<li>Newest</li>
						<li>Recently Updated</li>
						<li>Featured</li>
						<li>Tags</li>
						<li>Categories</li>
						<li>Authors</li>
					</ul>
				</li>
				<li>Meta
					<ul>
						<li>Help</li>
						<li>Notices</li>
						<li>Register</li>
						<li>Comments</li>
						<li>State</li>
						<li>Contact</li>
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
			
			<p>It's important to consider how navigation to these sections will be presented, as some sections might still exist, but are not presented in any navigation</p>
			
			<ul>
				<li>Primary
					<ul>
						<li>Newest</li>
						<li>Recently Updated</li>
						<li>Featured</li>
						<li>Tags</li>
						<li>Authors</li>
						<li>Categories (as sidebar in Plugin sections)</li>
					</ul>
				</li>
				<li>Secondary
					<ul>
						<li>Help</li>
						<li>Notices</li>
						<li>Older Resources</li>
						<li>Register</li>
						<li>Sign in (to textpattern admin)</li>
					</ul>
				</li>
				<li>Footer
					<ul>
						<li>Contact</li>
						<li>Textpattern.com</li>
					</ul>
				</li>
				<li>Hidden
					<ul>
						<li>Comments</li>
						<li>State</li>
					</ul>
				</li>
			</ul>
		</section>
		
	</div> <!-- /#wrap -->
	
	
</body>
</html>