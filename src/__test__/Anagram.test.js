import {
    isAnagram,
    getEmptyLetterProfile,
    getLettersProfile,
    addWord,
    buildStoreOfLetterProfiles,
    addToStoreOfLetterProfiles
} from '../../src/Anagram.js';

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

test('if two words are the same, return true', () => {
    expect(isAnagram('kinship','kinship')).toBe(true); 
});

test('if one word is null, return false', () => {
    expect(isAnagram('kinship',null)).toBe(false); 
});

test('if both words are null, return false', () => {
    expect(isAnagram(null,null)).toBe(false); 
});

test('finds that king and kings are not anagrams', () => {
    expect(isAnagram('king','kings')).toBe(false); 
});

test('finds that kinship and kinshi, words of different length, are not anagrams', () => {
    expect(isAnagram('kinship','kinshi')).toBe(false); 
});

test('letters profile for pinkish is same as for kinship', () => {
    expect(getLettersProfile('pinkish')).toEqual([0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
});

test('finds that kinship and pinkish are anagrams', () => {
    expect(isAnagram('kinship','pinkish')).toBe(true); 
});

test('attemp to make a letterProfile a field in an object', () => {
    expect(addWord('kinship')).toEqual({"0,0,0,0,0,0,0,1,2,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0": "kinship"});
});

test('attemp to add a letterProfile and a word in an array in an object', () => {
    expect(buildStoreOfLetterProfiles()).toEqual({"0,0,0,0,0,0,0,1,2,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0": ["kinship"]});
});

test('attemp to add multiple words to an array in an object', () => {
    expect(addToStoreOfLetterProfiles()).toEqual({"0,0,0,0,0,0,0,1,2,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0": ["kinship","pinkish"]});
});

// remove unneeded funtions
// determine logic to query and object for a specific letterProfile
test('', () => {
    expect(false).toEqual(true);
});

