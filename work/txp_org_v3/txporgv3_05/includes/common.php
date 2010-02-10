<?php

	$plugins = array();

	class Plugin {
		public $title = 'Plugin Title';
		public $body = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
		<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
		public $summary = 'This is the summary of the Plugin';
		public $author = 'Author Name';
		public $releaseDate = '10 Oct 06';
		public $updateDate = '19 May 09';
		public $infoURL;
		public $authorURL;
		public $downloadURL = 'http://authorsite.com/info/download.txt';
		public $forumURL;
		public $tags;
		public $category1 = 'category1';
		public $category2;
		public $version = '1.0';
		public $state = 'current';
	}


	foreach ( glob('includes/content/*.php') as $content ) {
		include $content;
		
		$plugin = new Plugin();
		
		$plugin->title = $title;
		$plugin->body = $body;
		$plugin->summary = $summary;
		$plugin->author = $author;
		$plugin->releaseDate = $releaseDate;
		$plugin->updateDate = $updateDate;
		$plugin->infoURL = $infoURL;
		$plugin->authorURL = $authorURL;
		$plugin->downloadURL = $downloadURL;
		$plugin->forumURL = $forumURL;
		$plugin->tags = $tags;
		$plugin->category1 = $category1;
		$plugin->category2 = $category2;
		$plugin->version = $version;
		$plugin->state = $state;
		
		$plugins[ $title ] = $plugin;
		
	}

	
	
	function shortPluginArticle( $count ) {

		global $plugins;

		$count = (int) $count;
		$output;
		for ( $i=0; $i < $count; $i++ ) {
			shuffle($plugins);
			$plugin = $plugins[0];
			
			include('includes/templates/plugin_article_list.php');

		}
		

	
	}
	

?>




	
