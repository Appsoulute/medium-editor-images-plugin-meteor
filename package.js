Package.describe({
  summary: "This plugin expands capabilities of MediumEditor which is a clone of medium.com WYSIWYG editor."
});
/*
 git submodule add https://github.com/acidsound/medium-editor-images-plugin.git medium-editor-images-plugin
 */
Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'medium-editor-images-plugin/src/medium-editor/css/medium-editor.css',
    'medium-editor-images-plugin/src/medium-editor/js/medium-editor.js',
    'medium-editor-images-plugin/src/medium-editor-images-plugin/js/jquery-1.10.2.min.js',
    'medium-editor-images-plugin/src/medium-editor-images-plugin/css/medium-editor-images-plugin.css',
    'medium-editor-images-plugin/src/medium-editor-images-plugin/js/medium-editor-images-plugin.js',
    'clientWrapper.js'
  ], 'client');
  api.export('MediumEditor');

});
