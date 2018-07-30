	
    var allItems = [];
    var fruits =
        '[{"name" : "Orange", "type" : "fruit", "price": 100},{"name" : "Mango", "type" : "fruit", "price": 60},{"name" : "Banana", "type" : "fruit", "price": 40},{"name" : "Guava", "type" : "fruit", "price": 70},{"name" : "Pomergranate", "type" : "fruit", "price" : 120},{"name" : "Apple", "type" : "fruit", "price": 200},{"name" : "Chiku", "type" : "fruit", "price": 30},{"name" : "Custard Apple", "type" : "fruit", "price": 60}]';
    var object1 = JSON.parse(fruits);//Parse converts JSON string into object array
    //RenderObject4(object1);

    for (var l = 0; l < object1.length; l++) {
        allItems.push(object1[l]);
    }

    var vegetables =
        '[{"name" : "Lettuce", "type" : "vegetable", "price": 100},{"name" : "Spinach", "type" : "vegetable", "price": 60},{"name" : "Cabbage", "type" : "vegetable", "price": 40},{"name" : "Cucumber", "type" : "vegetable", "price": 70},{"name" : "Zuchini", "type" : "vegetable", "price": 120},{"name" : "Cauliflower", "type" : "vegetable", "price": 200},{"name" : "Potato", "type" : "vegetable", "price": 30},{"name" : "Yam", "type" : "vegetable", "price": 60}]';
    var object2 = JSON.parse(vegetables);
    //RenderObject4(object2);
    for (var l = 0; l < object2.length; l++) {
        allItems.push(object2[l]);
    }
    //allItems.push(object2);
    var biscuits =
        '[{"name" : "Marie", "type" : "biscuit", "price": 100},{"name" : "Crack", "type" : "biscuit", "price": 60},{"name" : "Hide and Seek", "type" : "biscuit", "price": 40},{"name" : "Treat", "type" : "biscuit", "price": 70},{"name" : "Jim Jam", "type" : "biscuit", "price": 120},{"name" : "Gold", "type" : "biscuit", "price": 200},{"name" : "Orio", "type" : "biscuit", "price": 30},{"name" : "Parle-G", "type" : "biscuit", "price": 60}]';
    var object3 = JSON.parse(biscuits);
    //RenderObject4(object3);
    //allItems.push(object3);
    for (var l = 0; l < object3.length; l++) {
        allItems.push(object3[l]);
    }
    var chocolates =
        '[{"name" : "Perk", "type" : "chocolate", "price": 100},{"name" : "Munch", "type" : "chocolate", "price": 60},{"name" : "Kit-Kat", "type" : "chocolate", "price": 40},{"name" : "Gems", "type" : "chocolate", "price": 70},{"name" : "Five star", "type" : "chocolate", "price": 120},{"name" : "Bar one", "type" : "chocolate", "price": 200},{"name" : "Dairy Milk", "type" : "chocolate", "price": 30},{"name" : "Ferraro Rochers", "type" : "chocolate", "price": 60}]';
    var object4 = JSON.parse(chocolates);
    //allItems.push(object4);
    for (var l = 0; l < object4.length; l++) {
        allItems.push(object4[l]);
    }
    //RenderObject4(allItems);
    var text = "";
    var newObject = [];

    function search() {
		//resetTab();
		newObject = [];  //if we wont reset, when we click on find, it will show the previous search results as well when we search something new in find.
        var demo = document.getElementById("myInput").value;
        var k;
        for (k = 0; k < allItems.length; k++) {
            if (allItems[k]["name"].toLowerCase().includes(demo.toLowerCase())) //includes basically shows all the results, eg, if you search 'a' it will show all the results having 'a'.
			{
                newObject.push(allItems[k]);

            }
        }
        RenderObject4(newObject);
    }
        
	/*function resetTab()
	{
	var obj=[];
	RenderObject4(obj);
	document.getElementById("pw").innerHTML = "";
	}*/
    function RenderObject4(objectnew) {
        var i;
		text="";
        text = "<table><th>Name</th><th>Category</th><th>Price</th><th>Quantity</th>";
        for (i = 0; i < objectnew.length; i++) {
            text += "<tr><td>" + objectnew[i]["name"] + "</td>";
            text += "<td>" + objectnew[i]["type"] + "</td>";
            text += "<td>" + objectnew[i]["price"] + "</td>"
			text +="<td> <input id='txt"+i+"' type='number'>"
			
			+ "</td></tr>";
			
        }
        text += "</table>";
		
        document.getElementById("pw").innerHTML = text;
    }
	
	function RenderQuantiyTab(obj, showAllFields)  //showAllFields acts as an indiactor(If we wouldnt have used it, we would have to create 2 render functions). Here we have separated it into if and else according to our the number of fields we want to display.
	{
        var i;
		text="";
		var sum=0;
        
		if(showAllFields == false)
		{
			text = "<table><th>Name</th><th>Quantity</th>";
			for (i = 0; i < obj.length; i++) {
				//alert(obj[i]);
				text += "<tr><td>" + obj[i]["name"] + "</td>";
				text += "<td>" + obj[i]["quantity"] + "</td>";
				
				
				+ "</td></tr>";
				
			}
			text += "</table>";
			document.getElementById("quant").innerHTML = text;
		}
		else
		{
			text = "<table><th>Name</th><th>Category</th><th>MRP</th><th>Quantity</th><th>Price</th>";
			for (i = 0; i < obj.length; i++) {
				//alert(obj[i]);
				text += "<tr><td>" + obj[i]["name"] + "</td>";
				text += "<td>" + obj[i]["type"] + "</td>";
				text += "<td>" + obj[i]["price"] + "</td>";				
				text += "<td>" + obj[i]["quantity"] + "</td>";
				text += "<td>" + obj[i]["total"] + "</td>";
				+ "</td></tr>";
				sum = sum + obj[i]["total"];
				//alert(sum);
			}
			
			text += "</table>";
			document.getElementById("total").innerHTML="Total is Rs: " + sum;
			document.getElementById("quant1").innerHTML = text;
		}
    }
	var newAddObject = [];
	var newAddObject1 = [];
	function add() 
	{
		for(var w = 0; w < newAddObject.length; w++)   //To prevent adding the same product again and again
		{
			for(var q = 0;q < newObject.length; q++)
			{
				if (newObject[q]["name"] == newAddObject[w]["name"])
				{
					alert(newObject[q]["name"]+" already added");
					return; 
				}
			}
		}
		var i;
		//alert(newObject.length);
		for (i = 0; i < newObject.length; i++)
		{
			var newobj=new Object();
			newobj.name=newObject[i]["name"];
			newobj.type=newObject[i]["type"];
			newobj.price=newObject[i]["price"];
			newobj.quantity=document.getElementById("txt"+i).value;
			newobj.total=newobj.price*newobj.quantity;
			if(newobj.quantity>0)
			{
				newAddObject.push(newobj); //to keep on adding the object after clicking add button
				newAddObject1.push(newobj); // to keep on adding the object after clicking checkout button.
			}
		}
		//alert(newAddObject);
		RenderQuantiyTab(newAddObject, false);	//false value added cause we want to deal with the else part of the RenderQuantiyTab so as to display 5 fields
    }


	function checkout()         //only used to display purpose cause the real value has already been added above in newaddobject1.
	{
		
		/*var i;
		alert(newAddObject1.length);
		alert(newAddObject.length);
		for (i = 0; i < newObject.length; i++)
		{
			var newobj=new Object();
			newobj.name=newObject[i]["name"];
			newobj.type=newObject[i]["type"];
			newobj.price=newObject[i]["price"];
			newobj.quantity=document.getElementById("txt"+i).value;
			newobj.total=newobj.price*newobj.quantity;
			if(newobj.quantity>0)
			{
				newAddObject1.push(newobj);
			}
			
		}*/
		
		//alert(newAddObject);
		RenderQuantiyTab(newAddObject1, true);	//true value added cause we want to deal with the if part of the RenderQuantiyTab so as to display only 2 fields
    }
	
	function reset()     // the function which gets called when reset button is clicked. It resets all the fields 
	{
		
		var newAddObject2=[];
		RenderObject4(newAddObject2);
		RenderQuantiyTab(newAddObject2, false);
		document.getElementById("pw").innerHTML = "";
		document.getElementById("myInput").value=""; //to reset the search field
		RenderQuantiyTab(newAddObject2, true);
		
		newObject=[];//restted both the arrays
		newAddObject=[];//restted both the arrays
		newAddObject1=[];
	}
