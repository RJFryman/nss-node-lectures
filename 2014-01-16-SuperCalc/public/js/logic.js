function parseTags($tags){
  return $.map($tags, function(tag){
    return parseFloat(tag.textContent);
  });
}
