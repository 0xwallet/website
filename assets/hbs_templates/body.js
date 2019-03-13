define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!DOCTYPE html>\n<html>\n	<head>\n		  <title>0xWallet - "
    + container.escapeExpression((helpers["default"] || (depth0 && depth0["default"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0)," Secure, Simple & Extensible Bitcoin Wallet",{"name":"default","hash":{},"data":data}))
    + "</title>\n\n		<link rel=\"stylesheet\" href=\"/assets/css/main.css\">\n		<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/zenburn.min.css\">\n		<link href='https://fonts.googleapis.com/css?family=Lato:400,300,100' rel='stylesheet' type='text/css'>\n		<link href=\"https://fonts.googleapis.com/css?family=Source+Code+Pro\" rel=\"stylesheet\">\n\n"
    + ((stack1 = container.invokePartial(partials.favicon,depth0,{"name":"favicon","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.keywords,depth0,{"name":"keywords","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n		<script src=\"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/highlight.min.js\"></script>\n\n		<script>\n			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n			ga('create', 'UA-81822746-2', 'auto');\n			ga('send', 'pageview');\n		</script>\n\n	</head>\n	<body>\n		<header>\n			<div class=\"logo\" >\n				<a href=\"/\">"
    + ((stack1 = container.invokePartial(partials.logo_juste,depth0,{"name":"logo_juste","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a>\n			</div>\n"
    + ((stack1 = container.invokePartial(partials.mainmenu,depth0,{"name":"mainmenu","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "			<div class=\"clearfix\"></div>\n		</header>\n\n"
    + ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		<script data-main=\"/assets/js/main.js\" src=\"/assets/vendor/requirejs/require.js\"></script>\n	</body>\n</html>\n";
},"usePartial":true,"useData":true}); });