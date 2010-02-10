<?php 
	include('includes/config.php'); 

	include('includes/templates/html_head.php'); 
	
	$pagename = 'Help';
	include('includes/templates/quick_header.php');
	
?>

		
				<div class="clearfix">
					<h5 class="meta">Questions</h5>

					<div class="content">

						<ul>
							<?php 
						
								$helpArticleCount = 1;
								foreach($helpArticles as $helpArticle): ?>
								<li><a href="#help<?= $helpArticleCount ?>">
									<?= $helpArticle->title ?>
								</a></li>

							<?php 
								$helpArticleCount ++; 
								endforeach; 
							?>					
						</ul>

						<p>Have a question you don't see here? You can submit your inquiry via the <a href="contact.php">contact page.</a></p>
					</div>
				</div>
				
				<?php 
					$helpArticleCount = 1;
					foreach($helpArticles as $helpArticle): 
				?>
					<article id="help<?= $helpArticleCount ?>" class="help list clearfix">

						<div class="article_body clearfix">
							<div class="meta">
								<date><?= $helpArticle->date; ?></date>
								<p><a href="#">Permalink</a></p>
							</div>

							<div class="content">	

								<h3><?= $helpArticle->title ?></h3>

								<?= $helpArticle->body ?>
							</div> <!-- /.content -->

						</div> <!-- /.article_body -->

					</article>
					
				<?php 
					$helpArticleCount ++; 
					endforeach; 
				?>
				
				
			</div> <!-- /#main -->
			
		</div> <!-- /#page_content -->
		
		<?php include('includes/templates/footer.php'); ?>
		
	</div> <!-- /#wrap.container12 -->
	
	
</body>
</html>