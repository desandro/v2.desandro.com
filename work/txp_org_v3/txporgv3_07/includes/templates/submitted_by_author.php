<?php

	$count = rand(0,8);

	function fakePlugin($plugin) {
		
		$prefix = substr( $plugin->title, 0, 3);
		
		$randPluginWords = array('date', 'article', 'live', 'search', 'rss', 'preview', 'fast', 'switch', 'text', 'form', 'addon', 'tag', 'if', 'image');
		shuffle($randPluginWords);
		$word1 = $randPluginWords[0];
		shuffle($randPluginWords);
		$word2 = $randPluginWords[0];

		return $prefix . '_' . $word1 . '_' . $word2;
	}

?>

<?php if($count > 0): ?>
	<div id="submitted_by_author" class="sidebar_section">

		<h4>Submitted by <br /><?= $plugin->author ?></h4>
			<ul>
				<?php for ($i=0; $i < $count; $i++): ?>
					<li><a href="#"><?= fakePlugin($plugin) ?></a></li>
				<?php endfor; ?>
			</ul>
	</div> <!-- /.sidebar_section -->
<?php endif; ?>
