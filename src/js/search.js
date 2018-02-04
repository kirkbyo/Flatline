console.log('SEARCHJS LOADED -- This file is there to save you time when you implement a navbar');
//This file is there to save you time when you implement a universal search field

function searchNav() {

  var searchField = document.getElementById('search-field');
  var text = '';
  for (i = 0; i < searchField.length ;i++) {
          text += searchField.elements[i].value;
      };
      console.log(text);
      if (text.value !== '') {
        console.log(text);
        window.open("/search/" + text + '/1',"_self");
      } else if (text.value !== '') {
        return false;
      }
      return false;
};

function searchLanding() {

  var searchField = document.getElementById('landing-search-field');
  var text = '';
  for (i = 0; i < searchField.length ;i++) {
          text += searchField.elements[i].value;
      };
      console.log(text);
      if (text.value !== '') {
        console.log(text);
        window.open("/search/" + text + '/1',"_self");
      } else if (text.value !== '') {
        return false;
      }
      return false;
};

function searchNews() {

  var searchField = document.getElementById('news-search');
  console.log(searchField.value);
      if (searchField.value !== '') {
        window.open("/top-news/" + searchField.value,"_self");
        return false;
      } else if (searchField.value == '') {
        return false;
      }
      return false;
};

function searchMobile() {
  var searchFieldMedia = document.getElementById('search-field-media');
  var text = '';

  for (i = 0; i < searchFieldMedia.length ;i++) {
          text += searchFieldMedia.elements[i].value;
      };
      console.log(text);
      if (text.value !== '') {
        console.log(text);
        window.open("/search/" + text,"_self");
      }

  return false;
};
