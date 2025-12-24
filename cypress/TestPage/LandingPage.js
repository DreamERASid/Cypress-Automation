class LandingPage
{
    uservalid="ul[class='nav navbar-nav'] li a b"
    btnlogout="a[href='/logout']"

       loggedinuser()
    {
        return cy.get(this.uservalid)
    }

      logoutbutton()
    {
        return cy.get(this.btnlogout)
    }
}

export default new LandingPage