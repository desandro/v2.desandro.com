<article class="plugin full clearfix">
	
	<header>
		<h1><?= $plugin->title; ?></h1>

		<p class="utility_links">
			<!-- <a id="flag_scroll" href="#"><em>!!!</em> <span>Flag this plugin</span></a>	
			<a href="#"><em>&sect;</em>  <span>Short URL</span></a> -->
			<a href=""><em>&para;</em> <span>Permalink</span></a>
		</p>
	</header>

	<div class="article_body clearfix">
		<div class="meta">

			<div class="download">
				<a href="<?= $plugin->downloadURL ?>">Download Plugin</a>
			</div>

			<div>
				<h5>Last Updated</h5>
				<date><?= $plugin->updateDate; ?></date>
			</div>

			<div>
				<h5>Originally Released</h5>
				<date><?= $plugin->releaseDate; ?></date>
			</div>

			<div>
				<h5>Author</h5>
				<p class="author">
					<?php 
						if ( isset($plugin->authorURL) ) {
							echo '<a href="' . $plugin->authorURL . '">' . $plugin->author . '</a>';
						} else {
							echo $plugin->author;
						}
					?>
				</p>
			</div>

			<?php if ( isset( $plugin->infoURL, $plugin->forumURL ) ): ?>
				<div>
					<h5>More Information</h5>
					<?php
					
						if( isset( $plugin->infoURL ) ) {
							echo '<p><a href="' . $plugin->infoURL .'">Author&rsquo;s Documentation</a></p>';
						}
						
						if( isset( $plugin->forumURL ) ) {
							echo '<p><a href="' . $plugin->forumURL .'">Forum Thread</a></p>';
						}
					
					?>
				</div>
			<?php endif; ?>

			<div>
				<h5>Current Version</h5>
				<p><?= $plugin->version ?></p>
			</div>

			<div>
				<h5>Categories</h5>
				<p><a class="category" href="list.php"><?= $plugin->category1; ?></a></p>
				<?php if ( isset($plugin->category2) ): ?>
					<p><a class="category" href="list.php"><?= $plugin->category2; ?></a></p>
				<?php endif; ?>
			</div>

			<?php if( !empty($plugin->tags)): ?>
				<div>
					<h5>Tags</h5>
					<p>
						<?php foreach( $plugin->tags as $tag ): ?>
							<a href="list.php?tag=<?= $tag ?>"><?= $tag; ?></a> 
						<?php endforeach; ?>
					</p>
				</div>
			<?php endif; ?>

		</div> <!-- /.meta -->
		
		<div class="content">	
			<?= $plugin->body; ?>
		</div> <!-- /.article_content -->
		
	</div> <!-- /.article_body -->
	

</article>
