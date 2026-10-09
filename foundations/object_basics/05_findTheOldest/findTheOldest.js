const findTheOldest = function (peopleArray) {
    let oldestPerson = peopleArray.reduce((oldest, person) => {
        const oldestDeath = oldest.yearOfDeath === undefined ?
            (new Date()).getFullYear() : oldest.yearOfDeath;
        const personDeath = person.yearOfDeath === undefined ?
            (new Date()).getFullYear() : person.yearOfDeath;
        const oldestAge = oldestDeath - oldest.yearOfBirth;
        const personAge = personDeath - person.yearOfBirth;
        if (oldestAge < personAge)
            oldest = person;
        return oldest;

    }, peopleArray[0]);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
