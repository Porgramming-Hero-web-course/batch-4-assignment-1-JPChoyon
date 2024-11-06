{
  //

  // find word function
  function countWordOccurrences(sentence: string, word: string): number {
    
    // make lowercase the sentence and word for case insensitive
    const lowSentence: string = sentence.toLocaleLowerCase();
    const lowWord: string = word.toLocaleLowerCase();

    // split sentence into word
    const eachWord: string[] = lowSentence.split(" ");

    // console.log(eachWord); //its show this [ 'typescript', 'is', 'great.', 'i', 'love', 'typescript!' ]

    // clean up the word with RegExp
    const cleanUp: string[] = eachWord.map((cleanWord: string) =>
      cleanWord.replace(/[^\w\s]|_/g, " ").replace(/\s+/g, " ")
    );
    // console.log(cleanUp);

    // initial found the word
    let counter: number = 0;
    for (let i = 0; i < cleanUp.length; i++) {
      if (cleanUp[i] === lowWord) {
        counter++;
      }
    }
    return counter;
  }

  const output: number = countWordOccurrences(
    "TypeScript is great. I love TypeScript!",
    "typescript"
  );

  console.log(output);

  //
}
