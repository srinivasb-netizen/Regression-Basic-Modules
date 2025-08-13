describe("Employee Creation",()=>{

    it("UAT Url Login click HR",()=>{
       
        cy.visit('https://qa-uat.247hrmstaging.com:8452/#/login')
        cy.get('input[formcontrolname="employeeId"]').type('hr001');
        cy.get('input[formcontrolname="password"]').type('sys');
        cy.xpath("//button[@aria-label='LOG IN']").click();
        cy.wait(4000);
        cy.get('button',{timeout:30000}).contains('span','menu').click({force:true})
        cy.wait(3000);
        cy.get('div',{timeout:30000}).contains('span','HR').click({force:true})
        cy.wait(3000);
        
       })
    })