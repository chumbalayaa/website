(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['draftLeague'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    	<div class='form-control'>\n    		<label>"
    + escapeExpression(lambda(depth0, depth0))
    + ": Selection 1</label>\n			<input type='text' class='form-control' name='name'>\n    	</div>\n    	<div class='form-control'>\n    		<label>"
    + escapeExpression(lambda(depth0, depth0))
    + ": Selection 2</label>\n			<input type='text' class='form-control' name='name'>\n    	</div>\n    	<div class='form-control'>\n    		<label>"
    + escapeExpression(lambda(depth0, depth0))
    + ": Selection 3</label>\n			<input type='text' class='form-control' name='name'>\n    	</div>\n    	<div class='form-control'>\n    		<label>"
    + escapeExpression(lambda(depth0, depth0))
    + ": Selection 4</label>\n			<input type='text' class='form-control' name='name'>\n    	</div>\n    	<div class='form-control'>\n    		<label>"
    + escapeExpression(lambda(depth0, depth0))
    + ": Selection 5</label>\n			<input type='text' class='form-control' name='name'>\n    	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<form role=\"form\" id=\"draftLeague\">\n    \n    <form method='post' action='/league/draft'>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.members : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </form>\n    <button type=\"submit\" class=\"btn btn-default\">Finish Draft</button>\n</form>";
},"useData":true});
templates['draftLeagueTitle'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<h3>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>";
},"useData":true});
templates['login'] = template({"1":function(depth0,helpers,partials,data) {
  return "      <div class=\"alert alert-danger\">All fields were not filled or username already exists.</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <div class=\"well text-center\">\n      <h1>Welcome to StockExchange</h1>\n    </div><hr>  \n  </div>\n  <div id=\"loginbox\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\"> \n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <div class=\"panel panel-info\" >\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">Sign In</div>\n      </div>\n      <div style=\"padding-top:30px\" class=\"panel-body\" >\n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div> \n          <form id=\"loginform\" action=\"/users/login\" method=\"post\"> \n            <div style=\"margin-bottom: 25px\" class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n              <input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\" placeholder=\"Username\">\n            </div>\n                  \n            <div style=\"margin-bottom: 25px\" class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n              <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n            </div>\n\n            <div style=\"margin-top:10px\" class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-success\">Login</button>\n            </div>\n            <hr>\n            <div class=\"form-group\">\n              <div class=\"col-md-12 control\">\n                <div style=\"font-size:85%\" >\n                  New to StockExchange? \n                  <button type='button' id='tosignup' class=\"btn btn-link btn-sm\">Sign Up</button>\n                </div>\n              </div>\n            </div>    \n        </form>     \n      </div>                     \n    </div>  \n  </div>\n</div>";
},"useData":true});
templates['portfolioError'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p id='error'>"
    + escapeExpression(lambda((depth0 != null ? depth0.message : depth0), depth0))
    + "<p>";
},"useData":true});
templates['portfolioSuccess'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p id='success'>"
    + escapeExpression(lambda((depth0 != null ? depth0.message : depth0), depth0))
    + "</p>";
},"useData":true});
templates['signup'] = template({"1":function(depth0,helpers,partials,data) {
  return "      <div class=\"alert alert-danger\">All fields were not filled or username already exists.</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\"> \n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <div class=\"well text-center\">\n      <h1>Welcome to StockExchange</h1>\n    </div><hr>  \n  </div>\n  <div id=\"signupbox\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">Sign Up</div>\n      </div> \n      <div class=\"panel-body\" style=\"padding-top:30px\">\n        <form id=\"signupform\" action=\"/users/signup\" method=\"post\"> \n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Username\">\n          </div>\n\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n            <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n          </div>\n\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n            <input type=\"password\" class=\"form-control\" id=\"reenter\" placeholder=\"Confirm Password\">\n          </div>\n\n          <button id='signup_button' type=\"submit\" class=\"btn btn-info\">Register</button>\n          <hr>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 control\">\n              <div style=\"font-size:85%\" >\n                Already have an account? \n                <button type='button' id='tologin' class=\"btn btn-link btn-sm\">Log In</button>\n              </div>\n            </div>\n          </div>                    \n        </form>\n      </div>\n    </div>           \n  </div> \n</div>   ";
},"useData":true});
})();
