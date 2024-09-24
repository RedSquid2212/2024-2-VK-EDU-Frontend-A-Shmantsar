import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("js_ts_kek_lol")).toBe("Js ts kek lol.")
  expect(correctSentence("Kek_lol           javaScript Typescript")).toBe("Kek lol javascript typescript.")
  expect(correctSentence("    hello Guys      ")).toBe("Hello guys.")
  expect(correctSentence("__This_is  goose_")).toBe("This is goose.")
  expect(correctSentence("very_Long____And       complex Text     ")).toBe("Very long and complex text.")
})

test('returns "false" when input is not string or empty string', () => {
  expect(correctSentence(1)).toBe(false)
  expect(correctSentence(" ")).toBe(false)
  expect(correctSentence("")).toBe(false)
  expect(correctSentence("      ")).toBe(false)
})
