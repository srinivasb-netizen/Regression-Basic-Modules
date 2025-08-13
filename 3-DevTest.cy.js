describe("Employee Creation",()=>{

    it("DevTest Url Login click Reports",()=>{
       
        cy.visit('https://devtest.247hrmstaging.com:8452/#/login')
        cy.get('input[formcontrolname="employeeId"]').type('Hr001');
        cy.get('input[formcontrolname="password"]').type('sys');
        cy.xpath("//button[@aria-label='LOG IN']").click();
        cy.wait(4000);
        cy.get('button',{timeout:30000}).contains('span','menu').click({force:true})
        cy.wait(3000);
        cy.get('div',{timeout:30000}).contains('span','Reports').click({force:true})
        cy.wait(3000);
        
       })
    })