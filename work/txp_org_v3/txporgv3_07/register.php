<?php 
	include('includes/config.php'); 

	include('includes/templates/html_head.php'); 
	
	$pagename = 'Register';
	include('includes/templates/quick_header.php');
?>

				<p>Register to submit and edit your own articles at Textpattern Resources.</p>

				<p>Your Email address is private information and will be treated that way &mdash; it will not be sold or shared.</p>

				<section id="contact_form">

					<div class="row clearfix">
						<h5 class="meta"><label for="name_field">Full name</label></h5>
						<div class="content">
							<input type="text" name="name_field" value="" id="name_field" />
							<span>Required.</span>
						</div><!-- .content -->
					</div><!-- .row -->

					<div class="row clearfix">
						<h5 class="meta"><label for="email_field">Username</label></h5>
						<div class="content">
							<input type="text" name="email_field" value="" id="email_field" />
							<span>Required.</span>
						</div><!-- .content -->
					</div><!-- .row -->

					<div class="row clearfix">
						<h5 class="meta"><label for="website_field">Email</label></h5>
						<div class="content">
							<input type="text" name="website_field" value="" id="website_field" />
							<span>Required.</span>
						</div><!-- .content -->
					</div><!-- .row -->

					<div class="row clearfix">
						<div class="meta">&nbsp;
						</div><!-- .meta -->
						<div class="content">
							<input type="button" name="comment_preview_button" value="Submit" id="comment_preview_button" />
						</div><!-- .content -->
					</div><!-- .row -->	

				</section><!-- #contact_form -->
				

				
			</div> <!-- /#main -->
			
			
		</div> <!-- /#page_content -->
		
		<?php include('includes/templates/footer.php'); ?>
		
	</div> <!-- /#wrap.container12 -->
	
	
</body>
</html>