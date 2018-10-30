function insertLangs(inTagClass) {
    var languages = `
    <option value="1">English</option>
    <option value="1169">French</option>
    <option value="1690">Hungarian</option>
    <option value="1973">Japanese</option>
    <option value="4828">Russian</option>
    <option value="5158">Spanish</option>
    <option value="5481">Tagalog</option>
    <option value="5909">Ukrainian</option>
  `
    $("." + inTagClass).append(languages);
}