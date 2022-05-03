//____________________________________________________________________________________________________
//functions: getAge()   bestResult()   toString()  

class Athlete {
    constructor(name, surname, yob, sport, palmares, gender, isRetired){

this.name = name;
this.surname = surname;
this.yob = yob;
this.sport = sport;
this.palmares = palmares;
this.gender = gender;
this.isRetired = isRetired

    }


calculateAge() {
    const now = new Date();
    const year = now.getFullYear();
    const age = year - this.yob;
    return age;
}



bestResult(athlete){ 

  let result = 0;
                
  for (const max of this.palmares) {
                    
   if (result < max) {
       result = max;
  }
  } 
            
    return result;
}


toString(){

  const genere = this.gender === 'f' ? 'femmina' : 'maschio';
  const retired = this.isRetired === true ? 'yes' : 'no';
    
  const athleteString = 'Nome: ' + this.name + '\n' +
                        'Cognome: ' + this.surname + '\n' +
                        'Età: ' + this.calculateAge() + '\n' +
                        'Genere: ' + genere + '\n' +
                        'Sport: ' + this.sport + '\n' +
                        'Ritirato: ' + retired + '\n' +
                         'Best result: ' + this.bestResult();

  return athleteString;

  }
}
