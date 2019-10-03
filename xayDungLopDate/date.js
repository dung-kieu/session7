let MyDate = function (day, month, year) {

    this.day = day;

    this.month = month;

    this.year = year;

this.getDay = function () {
    return this.day;
};
this.getMonth = function () {
    return this.month;
};
this.getYear = function () {
    return this.year;
};

this.setDay = function (day) {
    this.day = day;
};
this.setMonth = function (month) {
    this.month = month;
};
this.setYear = function (year) {
    this.year = year;
};

this.setDate = function (day,month,year) {
    this.setDay(day);
    this.setMonth(month);
    this.setYear(year);
};

/**
 * @return {string}
 */
this.ToString = function () {
    return (date.getDay() + "/" + date.getMonth() + "/" +date.getYear());
}
};

let date = new MyDate(7,7,2007);

date.setDate(6,9,1969);


alert(date.ToString());