<?php 
	include('includes/config.php'); 

	include('includes/templates/html_head.php');
	
	$pagename = 'Authors';
	
	include('includes/templates/quick_header.php');

?>

				<?php
					for ( $i=0; $i < 8; $i++ ):
						shuffle($plugins);
						$plugin = $plugins[0];
						$pluginCount = rand(1,3);
				?>
					<section>
						<h2><a href="#"><?= $plugin->author ?></a></h2>
						<?php 
							for ($j=0; $j < $pluginCount; $j++ ) {
								include('includes/templates/plugin_article_list.php');
							}
						
						?>
					</section>
				<?php endfor; ?>

				
				<?php include('includes/templates/pagination.php') ?>
				
			</div> <!-- /#main -->
			
			<aside id="sidebar" class="grid_3">
				
				<?php include('includes/templates/category_list.php'); ?>

			</aside> <!-- /#sidebar -->
			
		</div> <!-- /#page_content -->
		
		<?php include('includes/templates/footer.php'); ?>
		
	</div> <!-- /#wrap.container12 -->
	
	
</body>
</html>