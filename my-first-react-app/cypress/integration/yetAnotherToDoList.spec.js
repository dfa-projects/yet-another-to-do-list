describe("Checking functionality of YetAnotherToDoList", function(){
    beforeEach(function(){
       cy.visit("/")
    })

   it("Shows a header of Yet Another To Do List", function(){
       cy.contains('Yet Another Todo List!')
    })

    it("Can add task to todo list", function(){
       cy.get("#ToDo").type("start news summary challenge")
       cy.get("#save-button").click()
       cy.contains("start news summary challenge")
    })

    it("Can clear tasks", function(){
      cy.get("#ToDo").type("start news summary challenge")
      cy.get("#save-button").click()
      cy.get("#clear-link").click()
      cy.get("#task0").should("not.exist")
   })

   it("Strikes through text when checkbox is ticked", function(){
      cy.get("#ToDo").type("start news summary challenge")
      cy.get("#save-button").click()
      cy.get("#task0").should("have.css", "text-decoration", "none solid rgb(255, 255, 255)")
      cy.get("#checkboxtask0").click()
      cy.get("#task0").should("have.css", "text-decoration", "line-through solid rgb(255, 255, 255)")
   })
})