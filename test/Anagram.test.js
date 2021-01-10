const { isAnagram, getEmptyLetterProfile, getLettersProfile } = require('../src/Anagram');

test('finds that king and kins are not anagrams', () => {
    expect(isAnagram('king','kins')).toBe(false); 
});

test('returns empty letterProfile', () => {
    expect(getEmptyLetterProfile()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('letters profile for kinship is ()', () => {
    expect(getLettersProfile('kinship')).toEqual([0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
});

test('letters profile for kin ship is ()', () => {
    expect(getLettersProfile('kin ship')).toEqual([0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
});

test('finds that kinship and pinkish are anagrams', () => {
    expect(isAnagram('kinship','pinkish')).toBe(true); 
});