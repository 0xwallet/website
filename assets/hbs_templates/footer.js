define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "										              <li><a href=\"/blog/"
    + alias1(((helper = (helper = helpers.page_slug || (depth0 != null ? depth0.page_slug : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"page_slug","hash":{},"data":data}) : helper)))
    + "\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.title : stack1), depth0))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "\n<footer class=\"page-wrapper dark\">\n	<div class=\"page-container padded\">\n\n		<div class=\"row\">\n\n			<div class=\"col-md-3\">\n				<nav class=\"footer-menu\">\n					<ul>\n\n						<li>\n							<div class=\"footer_menu_category\">Downloads</div>\n							<ul>\n								  <li><a href=\"/press\">Releases</a></li>\n							</ul>\n\n						</li>\n\n						<li>\n							<div class=\"footer_menu_category\">Open source</div>\n							<ul>\n								  <li><a href=\"https://github.com/0xwallet\" target=\"_blank\"><i class=\"fa fa-github small\"></i>Github</a></li>\n							</ul>\n						</li>\n\n						<li>\n							<div class=\"footer_menu_category\">Social</div>\n							<ul>\n								<li><a href=\"https://twitter.com/OWAF\" target=\"_blank\"><i class=\"fa fa-twitter small\"></i>Twitter</a></li>\n							</ul>\n						</li>\n\n					</ul>\n				</nav>\n			</div>\n\n\n			<div class=\"col-md-3\">\n				  <nav class=\"footer-menu\">\n					    <ul>\n\n						      <li>\n							        <div class=\"footer_menu_category\"> Company </div>\n							        <ul>\n								          <li><a href=\"/press\">About Us</a></li>\n								          <li><a href=\"/press\">Contacts</a></li>\n								          <li><a href=\"/press\">Privacy & Terms</a></li>\n							        </ul>\n\n						      </li>\n\n\n					    </ul>\n				  </nav>\n			</div>\n\n			<div class=\"col-md-3\">\n				  <nav class=\"footer-menu\">\n					    <ul>\n\n						      <li>\n							        <div class=\"footer_menu_category\"> Language </div>\n							        <ul>\n								          <li><a href=\"/cn\">中文</a></li>\n								          <li><a href=\"/en\">English</a></li>\n							        </ul>\n\n						      </li>\n\n\n					    </ul>\n				  </nav>\n			</div>\n\n			<div class=\"col-md-3\">\n				  <nav class=\"footer-menu\">\n					    <ul>\n\n						      <li>\n							        <div class=\"footer_menu_category\">Blog</div>\n							        <ul>\n";
  stack1 = ((helper = (helper = helpers.blog || (depth0 != null ? depth0.blog : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"blog","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.blog) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "							        </ul>\n\n						      </li>\n\n					    </ul>\n				  </nav>\n			</div>\n		</div>\n\n		<div class=\"row\">\n			<div class=\"col-md-12 logo text-center\">\n				<div class=\"wedge-6x\"></div>\n"
    + ((stack1 = container.invokePartial(partials.logo_owaf,depth0,{"name":"logo_owaf","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "				<p>Open Wallet Alliance © 2019. All Rights Reserved.</p>\n			</div>\n		</div>\n\n	</div>\n</footer>\n";
},"usePartial":true,"useData":true}); });