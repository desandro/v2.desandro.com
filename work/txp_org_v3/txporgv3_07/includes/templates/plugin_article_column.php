<article class="plugin list clearfix">
	
	<h3><a href="plugin.php?p=<?= $plugin->title ?>"><?= $plugin->title ?></a></h3>

	<div class="meta">

		<date><?= $plugin->updateDate; ?></date>
		<p><a class="category" href="list.php?cat=<?= $plugin->category1; ?>"><?= $plugin->category1; ?></a></p>
		<?php if ( isset($plugin->category2) ): ?>
			<p><a class="category" href="list.php?cat=<?= $plugin->category2; ?>"><?= $plugin->category2; ?></a></p>
		<?php endif; ?>


	</div> <!-- /.meta -->

	<div class="content">
		<?= $plugin->summary ?>
	</div> <!-- /.content -->
	
</article>
