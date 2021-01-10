const isAnagram = (firstWord, secondWord) => {
    firstWordLetterProfile = getLettersProfile(firstWord);
    secondWordLetterProfile = getLettersProfile(secondWord);
    return sameLetterProfiles(firstWordLetterProfile, secondWordLetterProfile);
};

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


module.exports = { isAnagram, getEmptyLetterProfile, getLettersProfile };
