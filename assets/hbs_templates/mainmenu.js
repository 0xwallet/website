define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li>\n				<a "
    + ((stack1 = (helpers.ternary || (depth0 && depth0.ternary) || alias2).call(alias1,(depth0 != null ? depth0.new_window : depth0),"target=\"_blank\"",{"name":"ternary","hash":{},"data":data})) != null ? stack1 : "")
    + " href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</a>\n			</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"screen-menu\">\n	<label for=\"endrjs_collapsed_menu\" class=\"collapsed-menu\">\n		<i class=\"fa fa-bars\"></i>\n	</label>\n	<input id=\"endrjs_collapsed_menu\" type=\"checkbox\">\n	<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.mainmenu : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</nav>";
},"useData":true}); });