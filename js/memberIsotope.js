(function() {
    'use strict';
    var qsRegex;

    var $teams = $('.teams');
    $teams.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',

        getSortData: {
            name: '.name',

        }
    })






    // bind the sort button
    $('#sorts').on('click', 'button', function() {
        // alert("I am working")
        var sortByValue = $(this).attr('data-sort-by');
        $teams.isotope({ sortBy: sortByValue })
    })




    $('ul.filters > li').on('click', function(e) {
        e.preventDefault();
        var filter = $(this).attr('data-filter')
        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');
        $teams.isotope({ filter: filter })
    });
    $('.card').click(function() {
        $(this).find('.card-overlay').css({ 'top': '-100%' });
        $(this).find('.card-hover').css({ 'top': '0' })
    }).mouseleave(function() {
        $(this).find('.card-overlay').css({ 'top': '0' });
        $(this).find('.card-hover').css({ 'top': '100%' })

    });

})(jQuery);




// Create a function called getReply(command). The function should return a response that corresponds to the command!


// Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48


// let getReply = function(num1, calcType, num2) {
//     if (calcType === "+") {
//         return num1 + num2;
//     } else if (calcType === "-") {
//         return num1 - num2;
//     } else if (calcType === "*") {
//         return num1 * num2;
//     } else if (calcType === "/") {
//         return num1 / num2;
//     }
// }
// console.log(getReply('What is ' + +(10, "+", 7)))



// // Stephen

// let names = [];
// let whoAmI = 'What is my name';
// let day = 'What day is it today'
// let todo =[];
// let myTodoList = 'What is on my todo'
// let favDish = [];
// let event = [];
// let eventList = 'What am I doing this week'


// function getReply(command) {

// //Saving the person's name and returning nice to meet you plus the person's name
// if (command.startsWith('Hello') && command.includes('name')) {
// let commandArray = command.split(' ')
// let name = commandArray[commandArray.length -1]
// names.push(name)

// return `Nice to meet you ${names[names.length -1]}`;
// }

// //If you ask for your name and you have introduced yourself you'll get your name
// if(command === whoAmI && names.length !== 0) {
// return `Your name is ${names[names.length -1]}`;

// }
// //If you ask for your name without introducing yourself
// if (command === whoAmI && names.length === 0) {
// return `Please tell me your name and I'll remember it for next time`
// }

// //Logging out what day today is in format 30. August 2020

// if (command === day) {
// let monthsOfTheYear = ["January","February","March","April","May","June","July","August", "September","October","November", "December"];
// const today = new Date();
// const day = today.getDate();
// const month = today.getMonth();
// const year = today.getFullYear();

// return `Today is ${day}. of ${monthsOfTheYear[month]} ${year}`;

// }
// if (command.includes('what is') && command.split(' ')[command.split(' ').length-1] === Number) {

// let mathEquation = command.split(' ')
// console.log(mathEquation)
// }

// //Adding things to todo
// if (command.startsWith("Add") && command.endsWith("todo")){
// let addTodoWord = command.split(' ');
// let wordToAdd = addTodoWord[1]
// todo.push(wordToAdd);

// return `${wordToAdd} added to your todo`;
// }
// //Removing things from todo
// if (command.startsWith('Remove') && command.endsWith('todo')) {
// let removeTodoWord = command.split(' ');
// let wordToRemove = removeTodoWord[1]

// return`${wordToRemove} removed from your todo`
// }
// //Logging out todo
// if (command === myTodoList) {

// return `You have ${todo.join(" and ")} in your todo`;
// }
// //Saving favorite dish
// if (command.startsWith('My favorite') && command.includes('dish')) {
// let dishWordArray = command.split(' ')
// let dishWord = dishWordArray[dishWordArray.length -1]
// favDish.push(dishWord)

// }
// //Logging out favorite dish
// if (command.startsWith('What is') && command.endsWith('favorite dish') && favDish.length !== 0) {

// return `Your favorite dish is ${favDish.join( " and ")}`
// }
// //Setting timer
// if (command.startsWith('Set a timer')) {
// let timerArray = command.split(' ')
// let counter = timerArray[5]
// let timeForAlarm = timerArray[4]
// let timeToMillisecond = timeForAlarm*60*1000

// //Giving out alarm when time is up

// setTimeout(function(){ alert("Timer done"); }, timeToMillisecond);

// return `Timer set for ${timeForAlarm} ${counter}`
// }
// //Adding things to calendar
// if (command.startsWith('Add') && command.endsWith('calendar')) {
// let thingsOnCalendarArray = command.split(' ')
// let thingsToAddTOCalendar = thingsOnCalendarArray[1]
// let thingsToAddTOCalendarDate = thingsOnCalendarArray[3]
// event.push({name: thingsToAddTOCalendar, date: thingsToAddTOCalendarDate})

// return `${thingsToAddTOCalendar} on ${thingsToAddTOCalendarDate} added to your calendar `

// }
// //Loggging out event in calendar
// if (command === eventList && event.length !== 0) {

// return `You have ${event.length} event in your calendar : ${event[0].name} on ${event[0].date}`
// }

// }


// console.log(getReply('What is my name'))
// console.log(getReply('Hello my name is Benjamin'))
// console.log(getReply('Hello my name is Benjamin'))
// console.log(getReply('What is my name'))
// console.log(names)
// console.log(getReply('What day is it today'))
// console.log(getReply('Add football to my todo'))
// console.log(getReply('Add fishing to my todo'))
// console.log(getReply('Remove fishing from my todo'))
// console.log(todo)
// console.log(getReply('Add gym to my todo'))
// console.log(getReply('What is on my todo'))
// console.log(getReply('My favorite dish is Rissoto'))
// console.log(favDish)
// console.log(getReply('What is my favorite dish'))
// console.log(getReply('Set a timer for 5 minute'))
// console.log(getReply('Add conference the 3/5/2019 to my calendar'))
// console.log(getReply('What am I doing this week'))
// console.log(event)
// console.log(getReply('what is 3 + 3'))