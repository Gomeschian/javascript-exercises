const findTheOldest = function(people) {
    const ages = Array.from(people);
    ages.forEach(function(person)
    {
        if (!person.yearOfDeath) {person.yearOfDeath = new Date().getFullYear()};
    });
     
    const sortedAges = ages.sort(function(person1,person2)
    {
        if (person1.yearOfDeath - person1.yearOfBirth > person2.yearOfDeath - person2.yearOfBirth) 
            {return 1}
        else {return -1}
    });
    return sortedAges[sortedAges.length - 1];

    };
//const ages = Array.from(people).reduce(function(oldest,person)
//{
//  
//    if (person.yearOfDeath - person.yearOfBirth > oldest)
//        {
//            oldest = person.yearOfDeath - person.yearOfBirth;
//        }
//    return oldest;
//},people[0].yearOfDeath - people[0].yearOfBirth);
//console.log(ages);
//return ages;
//
//

// Do not edit below this line
module.exports = findTheOldest;
