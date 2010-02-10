<?php

	$category_list = array('admin', 'admin-extensions', 'archive', 'articles', 'authors', 'category', 'comments', 'conditionals', 'custom fields', 'date/time', 'developer', 'e-commerce', 'email/contact', 'excerpts', 'export/import', 'files', 'galleries', 'images', 'integrations', 'keywords/tags', 'links', 'lists', 'media', 'meta', 'migrating', 'miscellaneous', 'navigation', 'non-english', 'passwords', 'plugins', 'resources', 'search', 'section', 'stats/count', 'style', 'subscription', 'syntax/textile', 'templates', 'URLs');

?>


<h4>Plugin Categories</h4>
<ul id="category_list">

	<?php foreach( $category_list as $cat ): ?>
		<li><a class="category" href="list.php?cat=<?= $cat ?>"><?= $cat; ?></a></li>
	<?php endforeach; ?>

</ul> 