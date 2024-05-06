class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates) {
        for (let currentCandidateInfo of candidates) {
            let [name, education, yearsExperience] = currentCandidateInfo.split('-');
            let isAlreadyPresent = this.jobCandidates.find(p => p.name == name);
            if (isAlreadyPresent) {
                if (isAlreadyPresent.yearsExperience < yearsExperience) {
                    isAlreadyPresent.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
            }
        }
        let resultArray = [];
        for (let currentCandidate of this.jobCandidates) {
            resultArray.push(currentCandidate.name);
        }
        return `You successfully added candidates: ${resultArray.join(', ')}.`;
    }
    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        let isInTheList = this.jobCandidates.find(p => p.name == name);
        if (isInTheList) {
            if (isInTheList.yearsExperience < minimalExperience) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            } else {
                isInTheList.yearsExperience = 'hired';
            }
        } else {
            throw new Error(`${name} is not in the candidates list!`);
        }
        return `Welcome aboard, our newest employee is ${name}.`
    }
    salaryBonus(name) {
        let person = this.jobCandidates.find(p => p.name == name);
        if (person) {
            if (person.education == 'Bachelor') {
                return `${person.name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
            } else if (person.education == 'Master') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
            } else {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
            }
        } else {
            throw new Error(`${name} is not in the candidates list!`);
        }
    }
    candidatesDatabase() {
        let result = [];
        if (this.jobCandidates.length == 0) {
            throw new Error('Candidate Database is empty!')
        }
        result.push("Candidates list:");
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name)).map(e => result.push(`${e.name}-${e.yearsExperience}`));
        return result.join("\n");
    }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.salaryBonus("Peter Parker"));

