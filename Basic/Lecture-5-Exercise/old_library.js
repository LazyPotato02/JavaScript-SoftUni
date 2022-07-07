function old_library(input) {
    let book = input[0]
    let search = input[1]
    let index = 1
    let counter = 0
    let isFound = false
    while (1 === 1) {

        if (search === undefined || search === "No More Books") {
            break
        }
        if (book === search) {
            isFound = true
            break
        }
        counter++

        index++;
        search = input[index];
    }

    if (isFound === true) {
        console.log(`You checked ${counter} books and found it.`)
    } else {
        console.log("The book you search is not here!")
        console.log(`You checked ${counter} books.`)
    }

}
old_library(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])