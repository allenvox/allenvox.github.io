function copy (that) {
    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = that.id;
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
}