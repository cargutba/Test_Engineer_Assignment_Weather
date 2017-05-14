describe ("Sign Up new user", function() {
	
	beforeEach(function(){
		//test code
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
		browser.sleep(500); 
		browser.get("https://weather.com/profile/signup");
	});
	
	it ("should able on correct page", function() {
		expect(browser.getCurrentUrl()).toContain("signup");
	});	
	
	describe ("fill in mandatory form fields", function() {		
	
		var email;
		var pass; 
	
		beforeEach(function(){
			email = "carlosgutierr40@hotmail.com";
			pass = "!23456789";		
		});
		
		it ("should enter mandatory text fields", function(){		
			element(by.name("id")).sendKeys(email);
			element(by.name("token")).sendKeys(pass).then(function() {
				CheckboxSpan = element(by.css("span[class='glyphicon glyphicon-ok checkbox-component-tick']"));
				CheckboxSpan.click();
			});
		});
		
//		it ("should select terms of use check box ", function(){		
//			CheckboxSpan = element(by.css("span[class='glyphicon glyphicon-ok checkbox-component-tick']"));
//			CheckboxSpan.click();	
//		});	
		
		it ("should able to click button", function() {
			element(by.buttonText("Sign Up with Email")).click();
		});				
	});
	
	it ("should check user is on the confirmation page", function() {
		expect(browser.getCurrentUrl()).toContain("confirmation");
	});	
		
});