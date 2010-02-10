<?php

	$title = 'hhh_textile_title';
	$body = '

			<p>This plugin provides a single tag, <code>&lt;txp:hhh_textile_title/></code>. The tag works much like the standard <code>&lt;txp:title/></code> tag. However, it can employ Textile in processing of article titles. The extent of Textile capabilities is controlled by attributes.</p>

			<h2>Why upm_textile Does Not Help</h2>

			<p>A recommended solution to the issue targeted by this plugin used to be</p>

		<pre>&lt;txp:upm_textile>&lt;txp:title/>&lt;/txp:upm_textile>
		</pre>

			<p>However, <code>txp:title</code> converts plain single and double quotes to character entities to avoid collisions with attribute delimiters. Thus, Textile does not convert them to proper openning and closing quotes and apostrophes. Moreover, <a href=\'":http://textpattern.org/plugins/630/upm_textile\'>upm_textile</a> does not offer control fine enough to allow nice glyphs in attributes without potentially breaking validity of resulting documents.</p>

			<h2>Compatibility Attributes</h2>

			<h3><code>no_widow = "boolean"</code></h3>

			<p>Setting this attribute to ‘true’ inhibits a line break at the last space of a title.</p>

			<p>The default value comes from <span class="caps">TXP</span> preferences (<em>Prevent widowed words in article titles</em>).</p>

			<h3><code>no_textile = "boolean"</code></h3>

			<p>Default value: false</p>

			<p>Setting this attribute to ‘true’ makes the tag immitate a <code>&lt;txp:title/></code> tag regardless of any Textile attributes.</p>

			<h2>Textile Attributes</h2>

			<h3><code>multicaps = "boolean"</code></h3>

			<p>Default value: false</p>

			<p>Setting this attribute to true enables acronyms in the form of ABC(Always Be Closing) and extra markup of multi-caps words for styling (<code>span class="caps"</code>).</p>

			<p>Do not set to ‘true’ when producing a <span class="caps">HTML</span> head or the value of an attribute of an <span class="caps">HTML</span> element.</p>

			<h3><code>phrase_mods = "boolean"</code></h3>

			<p>Default value: false</p>

			<p>Setting this attribute to ‘true’ enables inline markup (aka phrase modifiers), i.e. _emphasis_, ??citation??, %span%, etc. It does not enable @code@, though.</p>

			<p>Do not set to ‘true’ when producing a <span class="caps">HTML</span> head or the value of an attribute of an <span class="caps">HTML</span> element.</p>

			<h3><code>punctuation = "boolean"</code></h3>

			<p>Default value: true</p>

			<p>Setting this attribute to ‘true’ enables enhanced punctuation glyphs, i.e. proper openning and closing quotes, apostrophes, dashes, etc. It leaves acronyms and multi-caps intact – see the <code>multicaps</code> attribute.</p>

			<p>You can enable this even if producing <span class="caps">HTML</span> heads and attributes of <span class="caps">HTML</span> elements.</p>

			<h2>Bugs</h2>

			<p>The <code>phrase_mods</code> attribute does not include @code@ mark-up. I somehow cannot make it work :(. Help appreciated.</p>


	';

	$summary = 'This plugin provides a single tag, <code>&lt;txp:hhh_textile_title/></code>. The tag works much like the standard <code>&lt;txp:title/></code> tag. However, it can employ Textile in processing of article titles. The extent of Textile capabilities is controlled by attributes.';
	$author = 'Jan Holeček';
	$releaseDate = '06 Sep 2009';
	$updateDate = '06 Sep 2009';
	$authorURL = 'http://www.fi.muni.cz/~xholecek/';
	$downloadURL = 'http://stefdawson.com/?rah_plugin_download=hhh_textile_title';
	$forumURL = 'http://forum.textpattern.com/viewtopic.php?id=31739';
	$tags = array( 'article', 'articles', 'parse', 'style', 'styling titles', 'textile', 'title', 'titles');
	$category1 = 'syntax/textile';
	$category2 = 'articles';
	$version = '0.2';



?>