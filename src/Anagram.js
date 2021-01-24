const isAnagram = (firstWord, secondWord) => {
    if (firstWord == null || secondWord == null) {
        return false;
    }
    if (firstWord === secondWord) {
        return true;
    }
    if (firstWord.length !== secondWord.length) {
        return false
    }
    const firstWordLetterProfile = getLettersProfile(firstWord);
    const secondWordLetterProfile = getLettersProfile(secondWord);
    return sameLetterProfiles(firstWordLetterProfile, secondWordLetterProfile);
}

const getEmptyLetterProfile = () => {
    const templateEmptyProfile = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return [...templateEmptyProfile];
};

const alphaVal = (inputString) => inputString.toLowerCase().charCodeAt(0) - 97;

const getLettersProfile = (word) => {
    let letterProfile = getEmptyLetterProfile();
    let letterNumber = 0;
    for (let letter of word) {
        letterNumber = alphaVal(letter);
        if(0 <= letterNumber && letterNumber <= 26) {
            letterProfile[letterNumber]++;
        }
    }
    return letterProfile;
}

function sameLetterProfiles(firstLetterProfile, secondLetterProfile) {
    if (firstLetterProfile === secondLetterProfile) return true;
    if (firstLetterProfile == null || secondLetterProfile == null) return false;
    if (firstLetterProfile.length !== secondLetterProfile.length) return false;
  
    for (var index = 0; index < firstLetterProfile.length; ++index) {
      if (firstLetterProfile[index] !== secondLetterProfile[index]) return false;
    }
    return true;
}

function addWord(aWord) {
    let storeOfLetterProfiles = {};
    const aLetterProfile = getLettersProfile(aWord);
    storeOfLetterProfiles[aLetterProfile] = aWord;
    return storeOfLetterProfiles;
}

function buildStoreOfLetterProfiles() {
    let storeOfLetterProfiles = {};
    const aLetterProfile = getLettersProfile('kinship');
    storeOfLetterProfiles[aLetterProfile] = ['kinship'];
    return storeOfLetterProfiles;
}

function addToStoreOfLetterProfiles() {
    let storeOfLetterProfiles = {};
    let aLetterProfile = getLettersProfile('kinship');
    storeOfLetterProfiles[aLetterProfile] = ['kinship'];

    let bLetterProfile = getLettersProfile('pinkish');
    if (sameLetterProfiles(aLetterProfile, bLetterProfile)) {
        storeOfLetterProfiles[aLetterProfile].push('pinkish');
    }
    return storeOfLetterProfiles;
}

export {
    isAnagram,
    getEmptyLetterProfile,
    getLettersProfile,
    addWord,
    buildStoreOfLetterProfiles,
    addToStoreOfLetterProfiles
};
