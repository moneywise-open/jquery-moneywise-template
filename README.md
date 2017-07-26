# jquery-moneywise-template

Small, Fast, mixed mode javascript / html template used in an jquery environment

## Getting Started

Just copy the moneywise-template.js to your project and make a script reference to it.
Also a reference to one of the JQuery versions must be included.

Template can be a mixture of javascript / jquery / html

Script begin seperator is {{ and script end seperator is }}

Shortcut to direct output is the begin seperator postfixed by = character.  {{=

```
<script type="text/template">
  {{ var i = 123; }}
  <div>
    Testing {{=i}}
    {{ if(i>100) { }}
       <span>Greather than 100</span>
    {{ } else { }}
       <span>Lesser than 100</span>
    {{ } }}
   </div>
</script>
```

Using jquery

```
<script type="text/template">
  {{ var ar = [ "red" , "green" , "yellow" ]; }}
  <div>Many colors</div>
  {{ $.each(ar, function(index,item) { }}
     <div style="background-color:{{=item}}">{{=item}}</div>
  {{ }); }}
</script>



## Example template and html

```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<title>Template Example</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href="css/pure-min.css" rel="stylesheet" />
	<script src="Scripts/jquery-3.1.1.min.js"></script>
	<script src="Scripts/moneywise-template.js"></script>
	<script src="Default.js"></script>
	<link href="Default.css" rel="stylesheet" />
</head>
<body class="pure-g">

	<script id="TemplateId" type="text/template">
		<div class="pure-u-1-1">Name: {{=this.name}} (Age {{=this.age}})</div>
		{{ $.each(this.cars, function (index,item) { }}
			<div  class="pure-u-1-3">
				<div id="car-{{=item.carid}}">Car: {{=item.name}}</div>
				{{ $.each(item.models, function (indx,m) { }}
					<div class="C{{=indx}}">Nr: {{=indx}} Model: {{=m}}</div>
				{{ }); }}
			</div>
		{{ }); }}
	</script>

	<div id="OutputId"></div>

</body>
</html>
```


## Example usage

For emptying the output and inserting template result use false as a last argument.

```
var data = 
{
	"name":"John",
	"age":30,
	"cars": 
	[
		{ "carid": 1, "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
		{ "carid": 2, "name":"BMW",  "models":[ "320", "X3", "X5" ] },
		{ "carid": 3, "name":"Fiat", "models":[ "500", "Panda" ] }
	]
};

$("#SelectorToOutput").Template("#TemplateId", data, false);
```

For adding the result of the template to the output element use true as a last argument.
This situation is for lazy loading and/or paging your data.

```
$("#SelectorToOutput").Template("#TemplateId", data, true);
```



## Authors

* **Alphons van der Heijden** - *Initial work* - [alphons](https://github.com/alphons)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Moneywise (https://www.moneywise.nl/)
