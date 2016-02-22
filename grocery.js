$(document).ready(function() {

  var groceries = [
  {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
  {name: "Onions", status: "needed", price: "1.85", quantity: 2},
  {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
  {name: "Limes", status: "complete", price: ".33", quantity: 3},
  {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];

$(".btn-success").click(function(){
	
	var addItem = $("#addItem").val();
  	var addPrice = $("#addPrice").val();
  	var addQuan = $("#addQuantity").val();

  	if (addItem == "" || addPrice == "" || addQuan == "")
  	{
  		alert("Enter all the items!");
  	}

  	else
  	{
  		groceries.unshift({name: addItem, price: addPrice, quantity: addQuan});
  		update(groceries[0]);
  	}

  	displayTotal();
});

$('<div class="btn btn-danger">Remove Item</div>').insertAfter(".btn-success");

$(".btn-danger").click(function(){

	groceries.shift();
	
	console.log(groceries);
	$('ul#list li:first-child').remove();
	displayTotal();

});

// Before we start anything, string up the css file, this javascript file, and
// the jQuery CDN to grocery.html file.

//1. Display the existing list of grocery items (from the grocery array)
// in an unordered list in the "list" id that already exists in grocery.html.
// Display each item's name, price, and quantity.
// Ex: Tomatoes (5) @ $3.99

//2. Use the inputs and add button to add grocery items to the beginning of the list.
// Default status should be "needed". The item should appear above the existing grocery items.

//3. Make sure that the grocery list displayed updates when you add an item to the list.

//3. Display the total cost of the groceries. Make sure this updates as you add items to the list.

//4. Put a check in to make sure users aren't adding items without a name, price, or quatity.

for (i=0; i<groceries.length; i++)
{
	var item = groceries[i];

	$("ul#list").append("<li>" + item.name + " (" + item.quantity + ") " + " @ " + item.price + "</li>");

	function update(item)
	{
		$("<li>" + item.name + " (" + item.quantity + ") " + " @ " + item.price + "</li>").insertBefore('ul#list li:first-child');
	}
}

function displayTotal()
{
	var total = 0;

	for (i=0; i<groceries.length; i++)
	{
		total += (groceries[i].quantity * groceries[i].price)
	}
	$(".totalCost h4 span").text("$" + total.toFixed(2));
}

displayTotal();
});