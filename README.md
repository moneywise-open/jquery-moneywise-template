# jquery-moneywise-template

Small, Fast, mixed mode javascript / html template used in an jquery environment

## Getting Started

Just copy the moneywise-template.js to your project and make a script reference to it.
Als a reference to one of the JQuery versions must be included.

## Example template

```
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
