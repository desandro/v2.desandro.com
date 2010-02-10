<?php

	$title = 'zem_contact_reborn';
	$body = '
		<p>Zem_contact_reborn is a further developed fork of the zem_contact plugin. It is maintained by the Textpattern Community. </p>

		<p>Requires: <a href="http://textpattern.org/plugins/702/zem_contact_lang">zem_contact_lang</a> </p>

		<p>Zem_contact_reborn produces a flexible, customizable and secure email feedback form / email contact form for Textpattern. It’s intended for use as an enquiry form for commercial sites, and includes several features to help reduce common problems with such forms (invalid email addresses, missing information).</p>

		<p>Features:
		</p><ul>
			<li>Arbitrary text fields can be specified, with min/max/required settings for validation</li>
			<li>Support for checkboxes, drop-down lists and radio buttons</li>
			<li>Nonce-based script spam prevention</li>
			<li>Email address validation, including a check for a valid MX record (Unix only)</li>
			<li>Safe escaping of input data</li>
			<li>Automatically generates an accessible form layout using valid <span class="caps">XHTML</span>, including tags</li>
			<li>Rejects faulty <span class="caps">UTF</span>-8 and is aware of the multibyte nature of the <span class="caps">UTF</span>-8 charset</li>
			<li>Errors can be displayed in a different part of the page than the contact form itself.</li>
			<li>‘Send article’ functionality</li>
			<li>Copy sender, allows you to send an article to a friend</li>
			<li>External language plugin, zem_contact_lang, which makes it easy to localize the contact form messages</li>
			<li><span class="caps">API</span> that can be used by anti-spam plugins like <a href="http://textpattern.org/plugins/703/pap_contact_cleaner">pap_contact_cleaner</a></li>
		</ul>



	';

	$summary = 'Zem_contact_reborn produces a flexible, customizable and secure email feedback form / email contact form for Textpattern. It’s intended for use as an enquiry form for commercial sites, and includes several features to help reduce common problems with such forms (invalid email addresses, missing information).';
	$author = 'Textpattern Community';
	$releaseDate = '06 Nov 2006';
	$updateDate = '11 Feb 2008';
	$infoURL = 'http://vanmelick.com/txp/';
	$authorURL = null;
	$downloadURL = 'http://vanmelick.com/txp/';
	$forumURL = 'http://forum.textpattern.com/viewtopic.php?id=23728';
	$category1 = 'email/contact';
	$category2 = null;
	$tags = null;
	$version = '4.0.3.20';


?>