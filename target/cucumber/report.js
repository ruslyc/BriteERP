$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/addNewCustomer.feature");
formatter.feature({
  "name": "Adding new Customer on the Invoicing module.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@newCustomer"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page and user enters valid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "Background_steps.the_user_is_on_the_login_page_and_user_enters_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be on Home page clicks Invoicing link on top left of the page",
  "keyword": "And "
});
formatter.match({
  "location": "Background_steps.user_should_be_on_Home_page_clicks_Invoicing_link_on_top_left_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on Invoicing page",
  "keyword": "Then "
});
formatter.match({
  "location": "Background_steps.user_should_land_on_Invoicing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing Create New Customer/Sales on Invoicing module",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@newCustomer"
    }
  ]
});
formatter.step({
  "name": "User clicks on Master Data button",
  "keyword": "When "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_clicks_on_Master_Data_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Customers button",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_clicks_on_Customers_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create button",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_clicks_on_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs a random name in the name field",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_inputs_a_random_name_in_the_name_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the new customer created under used name.",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_should_see_the_new_customer_created_under_used_name()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});