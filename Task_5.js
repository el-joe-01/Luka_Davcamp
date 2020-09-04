function replaceSpace(str) {
    var find = ' ';
    var regExp = new RegExp(find, 'g');
    return str.replace(regExp, '%20');
}

console.log(replaceSpace('Mr John Smith'));