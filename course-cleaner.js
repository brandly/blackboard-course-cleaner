(function () {
  // Can't be too safe
  if (window.confirm('Are you sure you want to delete all course menu items?')) {
    var key = 'delete it all';
    var response = window.prompt('If you really want to delete ALL OF THEM, type the following: ' + key);
    if (response === key) {
      var listElements = document.getElementById('courseMenuPalette_contents').children;

      for (var i = 0; i < listElements.length; i++) {
        var li = listElements[i];

        var tocId = li.id.split(':')[1];
        theCourseMenu.removeToc(tocId);
      }
    } else if (response) {
      window.alert('Not deleting anything. You typed "' + response + '" instead of "' + key + '"');
    }
  }
}());
