class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this.numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length - 1))]
    }
};

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name);
        super(numberOfStudents);
        this._level = 'primary';
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
};

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name);
        super(numberOfStudents);
        this._level = 'high';
        this._sportsTeams = sportsTeams;
    }
    
    get sportsTeams() {
        console.log(this._sportsTeams);
    }
}