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



      bestResult (){
      
      
       
      }


      toString(){

        const genere = this.gender === 'f' ? 'femmina' : 'maschio';
        const retired = this.isRetired === 'y' ? 'yes' : 'no';
    
          const athleteString = 'Nome: ' + this.name + '\n' +
                                'Cognome: ' + this.surname + '\n' +
                                'Età: ' + this.calculateAge() + '\n' +
                                'Genere: ' + genere + '\n' +
                                'Sport: ' + this.sport + '\n' +
                                'Ritirato: ' + retired + '\n' +
                                'Palmares: ' + this.palmares;

        return athleteString;
      }
}
