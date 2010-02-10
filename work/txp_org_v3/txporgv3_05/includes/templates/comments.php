<?php

	$commentCount = rand(0,4);

?>

<div id="comments">

	<?php if($commentCount > 0): ?>
		<section id="comment_list">
	
			<h2>
				<?php if($commentCount == 1) { 
					echo 'One Comment';
				} else {
					echo $commentCount . ' Comments'; 
				} ?>
			
			</h2>
	
			<?php 
				for ($i=0; $i < $commentCount; $i++ ) {
					include('includes/templates/comment_single.php');
				} 
			?>
	
		</section><!-- #comments -->
	<?php endif; ?>

	<section id="comment_form">
	
		<h2>Add a comment</h2>
	
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
				<span>Required.  Will be kept private.</span>
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
				<p>
					Texile syntax supported:
					<strong>*bold*</strong><br />
					<em>_italic_</em><br />
					"link":http://URL<br />
					!http://imageURL!<br />
					bq. quote
				</p>
				
			</div><!-- .meta -->
			<div class="content">
				<textarea id="message_field" rows="8" cols="40"></textarea>
				<input type="button" name="comment_preview_button" value="Preview" id="comment_preview_button" />
				<input type="button" name="comment_preview_button" value="Submit" id="comment_preview_button" disabled="disabled" /> 
				<!-- <span>You&rsquo;ll need to preview your comment first before you can submit it.</span> -->
				<span>Comment must be previewed before it can be submitted.</span>
				
			</div><!-- .content -->
		</div><!-- .row -->	
	
	</section><!-- #comment_form -->
	
</div>	