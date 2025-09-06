function use_callback(a, func) {
    var neee = a + " debayon";
    func(neee);  // `func` is called here with `neee` as an argument
}

function name(para) {
    console.log(para);  // Logs the value of `neee`
}

use_callback("hi", name);  // Pass `name` as a reference (without parentheses)

