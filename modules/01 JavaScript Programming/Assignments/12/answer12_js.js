

function evenWords(st) {

    var splintWords = st.split(" ");


    for (var i = 1; i < splintWords.length; i++) {

        if (i % 2 != 0)
            console.log(splintWords[i]);

    }

}
