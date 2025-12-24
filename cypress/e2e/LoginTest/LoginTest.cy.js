import LandingPage from "../../TestPage/LandingPage"
import data1 from '../../fixtures/data.json'

describe('Login Tests', () => {

 data1.forEach((userdata) => {

  it('Login Test - ${userdata.user}', () => {

    cy.login(userdata.user,userdata.psw);

    cy.url().then((currentUrl) => {

        if (currentUrl === 'https://www.automationexercise.com/') {

          cy.log("------- Valid User ------------")

          LandingPage.loggedinuser().should("contain", userdata.Name)
          LandingPage.logoutbutton().click(); 
          

        } else {

          cy.log("------- Invalid User ------------")

          cy.contains("Your email or password is incorrect!")
            .should("be.visible")
        }
      })

    
    
  })

  })

})