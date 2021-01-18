const { isAnagram } = require('../src/Anagram');

test('finds that king and kins are not anagrams', () => {
    expect(isAnagram('king','kins')).toBe(false); 
});
