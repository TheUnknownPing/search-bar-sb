function search(){
    var i = document.getElementById('search').value;
    const search = "https://www.google.com/search?q=";
    console.log(i);
    window.open(search + i);
}