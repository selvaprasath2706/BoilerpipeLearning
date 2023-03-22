var Boilerpipe = require("boilerpipe");
var boilerpipe = new Boilerpipe({
  // extractor: Boilerpipe.Extractor.NumWordsRulesExtractor,
  // extractor: Boilerpipe.Extractor.Article,
  // extractor: Boilerpipe.Extractor.ArticleSentences,
  extractor: Boilerpipe.Extractor.Canola,
});

boilerpipe.setUrl(
  "https://stackoverflow.com/questions/7021260/how-can-i-extract-only-the-main-textual-content-from-an-html-page/"
);

boilerpipe.getText(function (err, text) {
  console.log(
    "--------------------------TEXT data ---------------------------"
  );
  console.log(text);
});

boilerpipe.getHtml(function (err, html) {
  console.log(
    "--------------------------HTML data ---------------------------"
  );
  console.log(html);
});

boilerpipe.getImages(function (err, images) {
  console.log(
    "--------------------------Image data ---------------------------"
  );
  console.log(images);
});
