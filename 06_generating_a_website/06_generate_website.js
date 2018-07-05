// Background: Dan created a list of things he wants in a country.
// In this exercise, he will turn the list he wrote into an html document, aka a website.

var start  = '<html><head><style>.red{color: red;} .blue{color: blue}</style></head><body>'
var title  = '<h1>Traits of a Cool Country</h1><ul>'
var middle = 'the middle is the part you will generate in (1) below'
var finish = '</ul></body></html>'

// 1. Generate Website Content as "middle"
//
// For each line in 06_lines.txt, print the following strings of valid html:
//
//   "    <li class='red_or_blue_or_blank'>"
//   "       (the_content_of_the_line_without_the_color)"
//   "    </li>"
//
//
// 2. Change the title to something you think appropriate, keeping all the <tags> as they are.
//
// 3. Print first the start, then the title, then the "middle" that you printed in (1), then the finish
//    Make sure all the pieces show up.
//
// 4. From bash, send the output of your program to a file named index.html using the ">" operator
//
//     node myfile.js > index.html
//
// 5. Open index.html in your favorite browser
