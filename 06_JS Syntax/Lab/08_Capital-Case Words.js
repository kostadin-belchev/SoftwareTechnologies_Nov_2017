function extractCapCaseWords(arr) {
    //let text = arr.join(","); to work in Judge you need this line
    let words = arr.split(/\W+/);
    let nonEmptyWords = words.filter(x => x.length > 0);
    let upWords = nonEmptyWords.filter(isUpperWord);
    console.log(upWords.join(", "));
    function isUpperWord(str) {
        return str === str.toUpperCase();
    }
}

let inputString = `We start by HTML, CSS, JavaScript, JSON and REST.
    Later we touch some PHP, MySQL and SQL.
    Later we play with C#, EF, SQL Server and ASP.NET MVC.
    Finally, we touch some Java, Hibernate and Spring.MVC.`;

extractCapCaseWords(inputString);
