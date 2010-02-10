<?php

	$sitename = 'Txp.org v3 07';

	function cleanURL($str) {
		$clean = preg_replace("/[^a-zA-Z0-9\/_|+ -]/", '', $str);
		$clean = strtolower(trim($clean, '-'));
		$clean = preg_replace("/[\/_|+ -]+/", '_', $clean);

		return $clean;
	}

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



	foreach ( glob('includes/content/plugins/*.php') as $content ) {
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

	
	
	function pluginArticleList( $count, $template ) {

		global $plugins;

		$count = (int) $count;
		$output;
		for ( $i=0; $i < $count; $i++ ) {
			shuffle($plugins);
			$plugin = $plugins[0];

			if ( $template == 'list') {
				include('includes/templates/plugin_article_list.php');
			} elseif ( $template == 'column' ) {
				include('includes/templates/plugin_article_column.php');
			}
		}
	
	}
	

	$eloquence = array(
		'Make your <a href="http://textpattern.com">Textpattern</a> magnificent.',
		'Take <a href="http://textpattern.com">Textpattern</a> to triumph.',
		'Build your <a href="http://textpattern.com">Textpattern</a> beautiful.',
		'Architech an amazing <a href="http://textpattern.com">Textpattern</a>.',
		'Devise a <a href="http://textpattern.com">Textpattern</a> devine.',
		'Perfect your <a href="http://textpattern.com">Textpattern</a> product.'
	);




	class Notice {
		public $title;
		public $body;
		public $date;
	}

	$notices = array();

	foreach ( glob('includes/content/notices/*.php') as $content ) {
		include $content;
		
		$notice = new Notice();
		
		$notice->title = $title;
		$notice->body = $body;
		$notice->date = $date;
		
		$notices[] = $notice;
		
	}

	class HelpArticle {
		public $title;
		public $body;
		public $date;
	}

	$helpArticles = array();

	foreach ( glob('includes/content/help/*.php') as $content ) {
		include $content;
		
		$helpArticle = new HelpArticle();
		
		$helpArticle->title = $title;
		$helpArticle->body = $body;
		$helpArticle->date = $date;
		
		$helpArticles[] = $helpArticle;
		
	}



?>




	
