function wordsUppercase(input) {
    let pattern=/[^A-Za-z0-9]+/;
    let words=input.split(pattern).map(a => a.toUpperCase()).filter(a => a.length>0).join(`, `);
    console.log(words);
}

wordsUppercase('Hi, how are you?')
wordsUppercase('hello?')
wordsUppercase(`Functions in JS can be nested, i.e. hold other functions`)