const findTheOldest = function(people) {
    const sorted = people.sort((a,b) => {
        aDeath = a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear();
        bDeath = b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear();
        const aAge = aDeath - a.yearOfBirth;
        const bAge = bDeath - b.yearOfBirth;
        return aAge > bAge ? -1 : 1
    })
    console.table(sorted);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
