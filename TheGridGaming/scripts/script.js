// Tanner Winchester 11/30/2020

//jQuery for hero image to consume the header window space
$(document).ready(function() {
    $('.hero').height($(window).height());
});

//Popover enabler
$(function () {
    $('[data-toggle="popover"]').popover()
  })