<?php

	$title = 'kff_txp_version';
	$body = '
			<p>This extremely simple and tiny plugin displays the version number of Textpattern running on your site. It outputs plaintext which can be linkified if desired. Typically, its output is “Textpattern 4.2.0”, or whatever your version is.</p>

			<h1><strong>Syntax & Attributes</strong></h1>

			<p>The plugin creates a new tag <code>&lt;txp:kff_txp_version /></code>, which has the following attributes:</p>

			<p><strong>link=“boolean”</strong><br/>
		Whether or not to make the word “Textpattern” link to the <span class="caps">TXP</span> website.<br/>
		Values: 1 (yes) or 0 (no)<br/>
		Default: 1</p>

			<p><strong>wraptag=“tag”</strong><br/>
		(X)HTML tag (without brackets) to wrap around output.<br/>
		Default: unset</p>

			<p><strong>class=“class_name”</strong><br/>
		(X)HTML class attribute to be applied to wraptag. Used for styling purpose.<br/>
		Default: unset</p>

			<h1><strong>Examples</strong></h1>

			<p><strong>Default tag</strong><br/>
		The default tag <code>&lt;txp:kff_txp_version /></code> without attributes produces the linkified output:<br/>
		<code><a href="http://textpattern.com/">Textpattern</a> 4.2.0</code></p>

			<p><strong>Plaintext output</strong><br/>
		The tag <code>&lt;txp:kff_txp_version link="0" /></code> produces plaintext output:<br/>
		<code>Textpattern 4.2.0</code></p>



	';

	$summary = 'This extremely simple and tiny plugin displays the version number of Textpattern running on your site. It outputs plaintext which can be linkified if desired. Typically, its output is “Textpattern 4.2.0”, or whatever your version is.';
	$author = 'Karl Francisco Fernandes';
	$releaseDate = '09 Sep 2009';
	$updateDate = '09 Sep 2009';
	$infoURL = 'http://mesonprojekt.com/blog/kff_txp_version';
	$authorURL = 'http://mesonprojekt.com/';
	$forumURL = null;
	$downloadURL = 'http://mesonprojekt.com/files/plugins/kff_txp_version_0.1.txt';
	$tags = array( 'display', 'number', 'show', 'textpattern', 'version', );
	$category1 = 'stats/count';
	$category1 = null;
	$version = '0.1';



?>