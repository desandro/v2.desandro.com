<?php 
	include('includes/config.php'); 

	include('includes/templates/html_head.php'); 
	
	$pagename = 'Notices';
	include('includes/templates/quick_header.php');
?>

				<h2>Here&rsquo;s what&rsquo;s happening at the Textpattern Plugin Directory.</h2>
				
				<?php foreach($notices as $notice): ?>
					<article class="notice list clearfix">

						<div class="article_body clearfix">
							<date class="meta">
								<?= $notice->date; ?>
							</date>

							<div class="content">	

								<h3><a href="#"><?= $notice->title ?></a></h3>

								<?= $notice->body ?>
							</div> <!-- /.content -->

						</div> <!-- /.article_body -->

					</article>
					
				<?php endforeach; ?>
				
				<?php include('includes/templates/pagination.php') ?>
				
			</div> <!-- /#main -->
			
		
		</div> <!-- /#page_content -->
		
		<?php include('includes/templates/footer.php'); ?>
		
	</div> <!-- /#wrap.container12 -->
	
	
</body>
</html>