import $ from "jquery";
import _ from "lodash";
import "../css/body.css";

$('body').append('<p>Dashboard data for the students</p>');
$('body').append("<div id='counter'><button>Click here to get started</button><p id='count'></p></div>");

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
