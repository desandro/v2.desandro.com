<?php

	$title = 'soo_plugin_pref';
	$body = '<p>This one is aimed at plugin authors. If you want to provide preference settings for your plugin, but would rather avoid the chore of coding the plugin_prefs and plugin_lifecycle callbacks, soo_plugin_pref provides a simple alternative.</p>

	<p>For background, <a href="#">see this thread</a>.</p>

	<a href="#">Information and download.</a>

	<h3>Version 0.2.2 (9/28/2009)</h3>

	    <ul>
			<li>Fixed bug in preference position re-indexing (determines position in preference setting user interface)</li>
		</ul>

	<h3>Version 0.2.1 (9/26/2009)</h3>
		<ul>
	    	<li>Plugin installation order is no longer important: a plugin’s preferences will be installed the first time it is activated or its “Options” link clicked while soo_plugin_pref is active</li>
	    	<li>Preferences are now assigned a meaningful position value, so that the order preferences are declared in your plugin is the order they appear in the pref admin</li>
		</ul>
	
			<p><strong>Version 0.2 (9/17/2009)</strong></p>

			<p>This version uses a different identifying scheme for preferences and hence is not compatible with the previous version. The plugin name is no longer stored in the <code>event</code> column, so there is no longer any restriction on plugin name length.</p>

			<p><strong>Known compatible plugins</strong>:</p>

			<p><a href="http://forum.textpattern.com/viewtopic.php?id=30613">soo_image</a><br/>
		<a href="http://forum.textpattern.com/viewtopic.php?id=29676">soo_multidoc</a><br/>
		<a href="http://forum.textpattern.com/viewtopic.php?id=30720">soo_required_files</a><br/>
		<a href="http://forum.textpattern.com/viewtopic.php?id=31866">soo_plugin_display</a></p>
		
	
	';
	$summary = 'This one is aimed at plugin authors. If you want to provide preference settings for your plugin, but would rather avoid the chore of coding the plugin_prefs and plugin_lifecycle callbacks, soo_plugin_pref provides a simple alternative.';
	$author = 'Jeff Soo';
	$releaseDate = '28 Sep 2009';
	$updateDate = '28 Sep 2009';
	$infoURL = 'http://ipsedixit.net/txp/92/soo_plugin_pref';
	$authorURL = 'http://ipsedixit.net/txp/';
	$downloadURL = 'http://ipsedixit.net/?rah_plugin_download=soo_plugin_pref';
	$forumURL = 'http://forum.textpattern.com/viewtopic.php?id=31732';
	$tags = array('developer', 'plugins');
	$category1 = 'plugins';
	$category2 = 'developer';
	$version = '0.2.2';



?>