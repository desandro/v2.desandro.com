<?php

Class AssetFactory {

  static $store;
  static $asset_subclasses = array();

  static function &create($file_path) {
    #
    # a little bit of magic here to find any classes which extend 'Asset'
    #
    self::get_asset_subclasses();

    # if the file path isn't passed through as a string, return an empty data array
    $data = array();
    if(!is_string($file_path)) return $data;

    # split by file extension
    preg_match('/\.([\w\d]+?)$/', $file_path, $split_path);

    if(isset($split_path[1]) && !is_dir($file_path)) {
      # set the default asset type
      $asset = 'Asset';
      # loop through our asset_subclasses to see if this filetype should be handled in a special way
      foreach(self::$asset_subclasses as $asset_type => $identifiers) {
        # if a match is found, set $asset to be the name of the matching class
        if(in_array(strtolower($split_path[1]), $identifiers)) $asset = $asset_type;
      }

      # create a new asset and return its data
      $asset = new $asset($file_path);
      return $asset->data;

    } else {
      # new page
      $page = new Page(Helpers::file_path_to_url($file_path));
      return $page->data;
    }
  }

  static function &get($key) {
    # if object doesn't exist, create it
    if(!isset(self::$store[$key])) self::$store[$key] =& self::create($key);
    return self::$store[$key];
  }

  static function get_asset_subclasses() {
    # if asset_subclasses hasn't been filled yet
    if(empty(self::$asset_subclasses)) {
      # loop through each declared class
      foreach(get_declared_classes() as $class) {
        # if the class extends 'Asset', then push it into our asset_subclasses hash
        if(strtolower(get_parent_class($class)) == 'asset') self::$asset_subclasses[$class] = eval('return '.$class.'::$identifiers;');
      }
    }
  }

}

?>