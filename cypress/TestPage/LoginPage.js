class LoginPage
{

    txtuseremail="input[data-qa='login-email']"
    txtuserpsw="input[placeholder='Password']"
    btnlogin="button[data-qa='login-button']"




    visit()
    {
        cy.visit("https://www.automationexercise.com/login")
    }

    useremail()
    {
        return cy.get(this.txtuseremail)
    }

    userpsw()
    {
        return cy.get(this.txtuserpsw)
    }

    loginbutton()
    {
        return cy.get(this.btnlogin)
    }

 


}

export default new LoginPage