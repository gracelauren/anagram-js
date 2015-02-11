describe("isAnagram", function() {

  it('will return true if the word entered is an anagram of the first word entered', function() {
    expect(isAnagram("hat", "tha")).to.equal("tha");
  });
});
