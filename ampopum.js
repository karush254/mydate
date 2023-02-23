function Mydate(year, month, date, hours, minut, second,) {
    let s = new Date();
      this.year = year;
      if (this.year === undefined) {
        this.year = s.getFullYear();
      }else if (this.year === 0) {
        this.year = 1970
      }
      this.month = month
     
      if (this.year === s.getFullYear()) {
       let mymod = new Date();
       this.month = mymod.getMonth();
        if (this.month === 0 || this.month === 00){
         this.month = "Jan"
       }else if (this.month === 1 || this.month === 01){
         this.month = "Feb"
       }else if (this.month === 2 || this.month === 02){
         this.month = "Mar"
       }else if (this.month === 3 || this.month === 03){
         this.month = "Aprl"
       }else if (this.month === 4 || this.month === 04){
         this.month = "May"
       }else if (this.month === 5 || this.month === 05){
         this.month = "Jun"
       }else if (this.month === 6 || this.month === 06){
         this.month = "July"
       }else if (this.month === 7 || this.month === 07){
         this.month = "Ougostos"
       }else if (this.month === 8 || this.month === 08){
         this.month = "September"
       }else if (this.month === 9 || this.month === 09){
         this.month = "Ocember"
       }else if (this.month === 10){
         this.month = "November"
       }else if (this.month === 11){
         this.month = "December"
       }
     }
    
     else if (this.year !== undefined && this.month === undefined){
        this.month = "January"
     }
    else {
      let  year2 = Math.floor(this.month / 12);// qani tari plus exni
      this.year = this.year + year2;
      let  totalMonthsOfYear = year2 * 12;
      this.month = this.month - totalMonthsOfYear; // qani amis plus exni
           if (this.month === 0 || this.month === 00){a
            this.month = "Jan"
          }else if (this.month === 1 || this.month === 01){
            this.month = "Feb"
          }else if (this.month === 2 || this.month === 02){
            this.month = "Mar"
          }else if (this.month === 3 || this.month === 03){
            this.month = "Aprl"
          }else if (this.month === 4 || this.month === 04){
            this.month = "May"
          }else if (this.month === 5 || this.month === 05){
            this.month = "Jun"
          }else if (this.month === 6 || this.month === 06){
            this.month = "July"
          }else if (this.month === 7 || this.month === 07){
            this.month = "Ougostos"
          }else if (this.month === 8 || this.month === 08){
            this.month = "September"
          }else if (this.month === 9 || this.month === 09){
            this.month = "Ocember"
          }else if (this.month === 10){
            this.month = "November"
          }else if (this.month === 11){
            this.month = "December"
          }
    }
      this.date = date;
     
      
        if (this.date <= 31) {
        this.date;
      } else if (this.date > 31 && this.date < 63) {
        let mydo = this.date - 31;
        (this.month += 1), (this.date = mydo);
      } else if (this.date > 62) {
        let mydo = this.date - 62;
        (this.month += 2), (this.date = mydo);
      }else if (this.year === s.getFullYear()) {
        this.date = s.getDate();
    
      }else if (this.year != undefined && this.date === undefined) {
        this.date = 01
    }
      (this.hours = hours)
      if (this.year === s.getFullYear()) {
        this.hours = s.getHours()
      } else if (this.year != undefined && this.hours === undefined) {
        this.hours = 04
      } else if (this.hours < 24) {
        this.hours = hours
      } else if (this.hours > 23 && this <48) {
        let modul = this.hours - 24
        this.date ++, this.hours = modul
      }else if (this.hours > 47) {
         modul = this.hours - 48;
         this.date += 2, this.hours = modul 
      }
        (this.minut = minut)
        if (this.year === s.getFullYear()){
          this.minut === s.getMinutes()
        } else if (this.year != undefined && this.hours === undefined) {
            this.minut = 00
        } else if (this.year != undefined && this.month != undefined && this.date != undefined && this.hours != undefined && this.minut === undefined) {
          this.minut = 00
        } else if (this.minut < 60) {
          this.minut = minut
        } else if (this.minut > 59 && this.minut < 120) {
          let modulMinut = this.minut - 60;
          this.hours ++, this.minut = modulMinut
        }
        (this.second = second)
        if (this.year === s.getFullYear()) {
          this.second = s.getSeconds();
      } else if (this.year !== undefined && this.minut === undefined) {
          this.second = 00
      } else if (this.year !== undefined && this.month !== undefined && this.date !== undefined && this.hours !== undefined && this.minut !== undefined && this.second === undefined) {
          this.second = 00
      } else if (this.second < 60) {
          this.second = second
      } else if (this.second > 59 && this. second < 120) {
          let modulsecond = this.second - 60;
          this.minut++,this.second =modulsecond;
      }
        (this.milisecond = milisecond),
        (this.week = week),
        (this.getYear = function () {
          if (this.year === undefined) {
            let mydataner = new Date();
            mydataner.getFullYear();
          } else {
            return this.year;
          }
        }),
        (this.getmonth = function () {
          if (this.month === undefined && this.year === undefined) {
            let y = new Date();
            return y.getMonth();
          } else if (this.year != undefined && this.month === undefined) {
            return 0;
          } else {
            return this.month;
          }
        }),
        (this.getDate = function () {
          if (this.month === undefined && this.year === undefined) {
            let y = new Date();
            return y.date();
          } else if (this.year != undefined && this.month === undefined) {
            return 1;
          } else {
            return this.date;
          }
        });
        this.getHours = function() {
          if (this.year === undefined && this.month === undefined && this.date === undefined  ) {
            return s.getHours()
          } else  if (this.year !== undefined && this.month === undefined){
            return 4 
          } else if (this.year !== undefined && this.month != undefined && this.date != undefined){
            return 4 
          } else {
            return this.hours
        }
      },
      this.getMinutes = function () {
        if (this.month === undefined && this.year === undefined && this.date === undefined && this.hours === undefined) {
            let d = new Date();
            return d.getMinutes();
        }  else if (this.year !== undefined && this.month === undefined) {
            return 0
        } else {
            return this.minut
        }
    };
    this.getSeconds = function () {
        if (this.month === undefined && this.year === undefined && this.date === undefined && this.hours === undefined && this.minutes === undefined) {
            let q = new Date();
            return q.getSeconds();
        }  else if (this.year !== undefined && this.month === undefined) {
            return 0
        } else {
            return this.second
        }
    }
  }
    
  
    const mydate = new Mydate();
    console.log(mydate.getMinutes());
    
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  // let  plusmonth = Math.floor(this.date / 31);// qani tari plus exni
  // this.month = this.month + plusmonth;
  // let  totalMonthsOfYear = plusmonth * 31;
  // this.daste = this.date - totalMonthsOfYear; // qani amis plus exni