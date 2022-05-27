$(document).ready(function() {
    $(".box").on("click", function() {
    	var classNames = $(this).attr("class").split(" ");   /*When we click on an element that has a 'box' class, this event will be fired.*/
        $("." + classNames[1]).css("background-color", "red"); //trigger is .box, but target is 'this', but will also target the second class[1] 'this' shares

        var classNames = $(this).attr("class").split(" ");
    	var boxClass = classNames[0];
    	var className = classNames[1];
        
    	if ($(this).css("background-color") == "rgb(255, 0, 0)") {
    		$("." + className).css("background-color", "#000");     // If this object is already red, turn it black
    	} else {
    		$("." + boxClass).css("background-color", "#000");
    		$("." + className).css("background-color", "red");

            // Else turn all elements with a box class black
    		// and then change the color of all elements
    		// with the same class name as the clicked element
    		// to red.
    	}
    });
})
    