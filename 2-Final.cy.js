describe("Employee Creation",()=>{

    it("Final Url Login click Uploads",()=>{
       
        cy.visit('https://qa-final.247hrmstaging.com:8452/#/login')
        cy.get('input[formcontrolname="employeeId"]').type('hr001');
        cy.get('input[formcontrolname="password"]').type('sys');
        cy.xpath("//button[@aria-label='LOG IN']").click();
        cy.wait(4000);
        cy.get('button',{timeout:30000}).contains('span','menu').click({force:true})
        cy.wait(3000);
        cy.get('div',{timeout:30000}).contains('span','Uploads').click({force:true})
        cy.wait(3000);
        
       })
    })