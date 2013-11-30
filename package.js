Package.describe({
  summary: "This plugin expands capabilities of MediumEditor which is a clone of medium.com WYSIWYG editor."
});
/*
 git submodule add https://github.com/acidsound/medium-editor-images-plugin.git medium-editor-images-plugin
 */
Package.on_use(function (api) {
  api.add_files([
    'medium-editor-images-plugin/src/medium-editor/css/medium-editor.css',
    'medium-editor-images-plugin/src/medium-editor/js/medium-editor.js',
    'medium-editor-images-plugin/src/medium-editor-images-plugin/images/remove.png',
    'medium-editor-images-plugin/src/medium-editor-images-plugin/images/resize-bigger.png',
    'medium-editor-images-plugin/src/medium-editor-images-plugin/images/resize-smaller.png',
    'medium-editor-images-plugin/src/medium-editor-images-plugin/css/medium-editor-images-plugin.css',
    'medium-editor-images-plugin/src/medium-editor-images-plugin/js/medium-editor-images-plugin.js',
    'clientWrapper.js'
  ], 'client');
  api.export('MediumEditor');

});
