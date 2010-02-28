<?php

Class PageData {
	
	static function extract_closest_siblings($siblings, $file_path) {
		$neighbors = array();
		# flip keys/values
		$siblings = array_flip($siblings);
		# store keys as array
		$keys = array_keys($siblings);
		$keyIndexes = array_flip($keys);
		
		if(!empty($siblings) && isset($siblings[$file_path])) {
			# previous sibling
			if(isset($keys[$keyIndexes[$file_path] - 1])) $neighbors[] = $keys[$keyIndexes[$file_path] - 1];
			else $neighbors[] = $keys[count($keys) - 1];
			# next sibling
			if(isset($keys[$keyIndexes[$file_path] + 1])) $neighbors[] = $keys[$keyIndexes[$file_path] + 1];
			else $neighbors[] = $keys[0];
		}
		return !empty($neighbors) ? $neighbors : array(false, false);
	}
	
	static function get_parent($file_path, $url) {

	  # split file path by slashes
		$split_path = explode('/', $file_path);
		# drop the last folder from the file path
		array_pop($split_path);
		$parent_path = array(implode('/', $split_path));
		
		return $parent_path[0] == './content' ? array() : $parent_path;
	}
	
	static function get_parents($file_path, $url) {
	  
	  # split file path by slashes
		$split_path = explode('/', $file_path);
		$parents = array();
		# drop the last folder from split file path and push it into the $parents array
		while(count($split_path) > 2) {
		  array_pop($split_path);
		  $parents[] = implode('/', $split_path);
		}
		# reverse array to emulate anchestor structure
		$parents = array_reverse($parents);
		
		return (count($parents) < 2) ? array() : $parents;
	}
	
	static function get_thumbnail($file_path) {
		$thumbnails = array_keys(Helpers::list_files($file_path, '/thumb\.(gif|jpg|png|jpeg)$/i', false));
		# replace './content' with relative path back to the root of the app
		$relative_path = preg_replace('/^\.\//', Helpers::relative_root_path(), $file_path);
		return (!empty($thumbnails)) ? $relative_path.'/'.$thumbnails[0] : false;
	}
	
	static function get_index($siblings, $file_path) {
		$count = 0;
		if(!empty($siblings)) {
			foreach($siblings as $sibling) {
				$count++;
				# return current count value
				if($sibling == $file_path) return strval($count);
			}
		}
		return strval($count);
	}
	
	static function is_current_page($base_url, $permalink) {
	  $base_path = preg_replace('/^[^\/]+/', '', $base_url);
  	if($permalink == 'index') {
  	  return ('/' == $_SERVER['REQUEST_URI']);
  	} else {
  	  return ($base_path.'/'.$permalink.'/' == $_SERVER['REQUEST_URI']);
  	}
	}
	
	static function get_file_types($file_path) {
	  $file_types = array();
		# create an array for each file extension
		foreach(Helpers::list_files($file_path, '/\.[\w\d]+?$/', false) as $filename => $file_path) {
		  preg_match('/(?<!thumb|_lge|_sml)\.(?!txt)([\w\d]+?)$/', $filename, $ext);
		  # return an hash containing arrays grouped by file extension
		  if(isset($ext[1]) && !is_dir($file_path)) $file_types[$ext[1]][$filename] = $file_path;
		}
		return $file_types;
	}
	
	static function get_asset_collections($file_path) {
	  $asset_collections = array();
	  # create an array of files for each folder named _*
	  foreach(Helpers::list_files($file_path, '/_.+$/', true) as $filename => $file_path) {
	    # select all files from within the folder
	    foreach(Helpers::list_files($file_path, '/\.[\w\d]+?$/', false) as $asset_name => $asset_path) {
	      # if the returned file is not a folder, push it into the appropriate asset key
	      if(!is_dir($asset_path)) $asset_collections[$filename][$asset_name] = $asset_path;
	    }
    }
    
	  return $asset_collections;
	}
	
	static function create_vars($page) {
		# @url
		$page->url = Helpers::relative_root_path().$page->url_path.'/';
		# @permalink
		$page->permalink = $page->url_path;
		# @slug
			$split_url = explode("/", $page->url_path);
		$page->slug = $split_url[count($split_url) - 1];
		# @page_name
		$page->page_name = ucfirst(preg_replace('/[-_](.)/e', "' '.strtoupper('\\1')", $page->data['@slug']));
		# @root_path
		$page->root_path = Helpers::relative_root_path();
		# @thumb
		$page->thumb = self::get_thumbnail($page->file_path);
		# @current_year
		$page->current_year = date('Y');
		
		# @stacey_version
		$page->stacey_version = Stacey::$version;
		# @domain_name
		$page->domain_name = $_SERVER['HTTP_HOST'];
		# @base_url
		$page->base_url = $_SERVER['HTTP_HOST'].str_replace('/index.php', '', $_SERVER['PHP_SELF']);
		# @site_updated
		$page->site_updated = strval(date('c'));
        # @updated
        $page->updated = strval(date('c', Helpers::last_modified($page->file_path)));
		
		# @is_current_page
		$page->is_current_page = self::is_current_page($page->data['@base_url'], $page->data['@permalink']);
		
		# @siblings_count
		$page->siblings_count = strval(count($page->data['$siblings']));
		# @index
		$page->index = self::get_index($page->data['$siblings'], $page->file_path);
		
	}
	
	static function create_collections($page) {
	  # $root
		$page->root = Helpers::list_files('./content', '/^\d+?\./', true);
		# $parent
			$parent_path = self::get_parent($page->file_path, $page->url_path);
		$page->parent = $parent_path;
		# $parents
		$page->parents = self::get_parents($page->file_path, $page->url_path);
		# $siblings
		$parent_path = !empty($parent_path[0]) ? $parent_path[0] : './content';
		$page->siblings = Helpers::list_files($parent_path, '/^\d+?\./', true);
		# $next_sibling / $previous_sibling
			$neighboring_siblings = self::extract_closest_siblings($page->data['$siblings'], $page->file_path);
		$page->previous_sibling = array($neighboring_siblings[0]);
		$page->next_sibling = array($neighboring_siblings[1]);
		
		# $children
		$page->children = Helpers::list_files($page->file_path, '/^\d+?\./', true);
	}
	
	static function create_asset_collections($page) {
	  # $images
		$page->images = Helpers::list_files($page->file_path, '/(?<!thumb|_lge|_sml)\.(gif|jpg|png|jpeg)$/i', false);
		# $video
		$page->video = Helpers::list_files($page->file_path, '/\.(mov|mp4|m4v)$/i', false);

		# $swf, $html, $doc, $pdf, $mp3, etc.
		# create a variable for each file type included within the page's folder (excluding .txt files)
		$assets = self::get_file_types($page->file_path);
		foreach($assets as $asset_type => $asset_files) eval('$page->'.$asset_type.' = $asset_files;');
		
		# create asset collections (any assets within a folder beginning with an underscore)
		$asset_collections = self::get_asset_collections($page->file_path);
		foreach($asset_collections as $collection_name => $collection_files) eval('$page->'.$collection_name.' = $collection_files;');
		
	}
	
	static function create_textfile_vars($page) {
	  # store contents of content file (if it exists, otherwise, pass back an empty string)
		$content_file_path = $page->file_path.'/'.$page->template_name.'.txt';
		$text = (file_exists($content_file_path)) ? file_get_contents($content_file_path) : '';
    
		# include shared variables for each page
		$shared = (file_exists('./content/_shared.txt')) ? file_get_contents('./content/_shared.txt') : '';

		# remove UTF-8 BOM and marker character in input, if present
    $merged_text = preg_replace('/^\xEF\xBB\xBF|\x1A/', '', array($shared, $text));

    # merge shared content into text
		$text = "\n".$merged_text[0]."\n-\n".$merged_text[1]."\n-\n";
		
		# standardize line endings
		$text = preg_replace('/\r\n?/', "\n", $text);
		
		# pull out each key/value pair from the content file
		preg_match_all('/(?<=\n)([a-z\d_\-]+?:[\S\s]*?)\n\s*?-\s*?\n/', $text, $matches);
		
		foreach($matches[1] as $match) {
			# split the string by the first colon
			$colon_split = explode(':', $match, 2);
			# set a variable with a name of 'key' on the page with a value of 'value' 
			$page->$colon_split[0] = trim($colon_split[1]);
			  # if the 'value' contains a newline character, parse it as markdown
			  # (strpos($colon_split[1], "\n") === false) ? trim($colon_split[1]) : Markdown(trim($colon_split[1]));
		}
	}
	
	static function create($page) {
		# set vars created within the text file
		self::create_textfile_vars($page);
		
		# create each of the page-specfic helper variables
		self::create_collections($page);
		self::create_vars($page);
		self::create_asset_collections($page);
		
	}
	
}

?>