<?php 
	include('includes/config.php'); 

	include('includes/templates/html_head.php'); 
	
	$pagename = 'Contact';
	include('includes/templates/quick_header.php');
?>

				<p>Questions, comments, and inquiries about participating with the site are very welcome. Before submitting any correspondence, we encourage you to view the <a href="#">help</a> section to see if your question has already been addressed.</p>

				<p>Your Email address is private information and will be treated that way &mdash; it will not be sold or shared.</p>

				<section id="contact_form">

					<div class="row clearfix">
						<h5 class="meta"><label for="name_field">Name</label></h5>
						<div class="content">
							<input type="text" name="name_field" value="" id="name_field" />
							<span>Required.</span>
						</div><!-- .content -->
					</div><!-- .row -->

					<div class="row clearfix">
						<h5 class="meta"><label for="email_field">Email</label></h5>
						<div class="content">
							<input type="text" name="email_field" value="" id="email_field" />
							<span>Required.</span>
						</div><!-- .content -->
					</div><!-- .row -->

					<div class="row clearfix">
						<h5 class="meta"><label for="website_field">Subject</label></h5>
						<div class="content">
							<input type="text" name="website_field" value="" id="website_field" />
							<span>Required.</span>
						</div><!-- .content -->
					</div><!-- .row -->

					<div class="row clearfix">
						<h5 class="meta"><label for="website_field">Website</label></h5>
						<div class="content">
							<input type="text" name="website_field" value="" id="website_field" />
							<span>Optional.</span>
						</div><!-- .content -->
					</div><!-- .row -->


					<div class="row clearfix">
						<div class="meta">
							<h5><label for="message_field">Message</label></h5>

						</div><!-- .meta -->
						<div class="content">
							<textarea id="message_field" rows="8" cols="40"></textarea>
							<input type="button" name="comment_preview_button" value="Send" id="comment_preview_button" />
						</div><!-- .content -->
					</div><!-- .row -->	

				</section><!-- #contact_form -->
				

				
			</div> <!-- /#main -->
			
			
		</div> <!-- /#page_content -->
		
		<?php include('includes/templates/footer.php'); ?>
		
	</div> <!-- /#wrap.container12 -->
	
	
</body>
</html>