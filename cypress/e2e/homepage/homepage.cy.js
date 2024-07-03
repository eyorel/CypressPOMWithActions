import homepageActions from '../../support/actions/homepageActions'
import productpageActions from '../../support/actions/productpageActions'
import checkoutActions from '../../support/actions/checkoutActions'
import loginActions from '../../support/actions/loginActions'
import signupActions from '../../support/actions/signupActions'
import paymentActions from '../../support/actions/paymentActions'
import contactusActions from '../../support/actions/contactusActions'

describe ('Complete checkout as new user', () => {
    const homepageAction = new homepageActions();
    const productAction = new productpageActions();
    const checkoutAction = new checkoutActions();
    const loginAction = new loginActions();
    const signupAction = new signupActions();
    const paymentAction = new paymentActions();
    const contactusAction = new contactusActions();

    beforeEach( function(){
        cy.fixture('userData').as('userData');
        cy.shouldRunTestBasedOnTags(Cypress.env('TAGS')).then(shouldRun => {
            if (!shouldRun) {
              this.skip(); // Skip the test if tags don't match
            }
          });
    })

    it('User is able to complete podruct purchase flow[smoke][regression]', function(){
        homepageAction.doScrollHomePage()
        homepageAction.clickOnRandomProduct();
        productAction.setProductQuantity(30)
        productAction.clickOnAddToCart()
        productAction.clickOnViewCart()
        checkoutAction.clickOnCheckout()
        checkoutAction.clickOnRegister()
        loginAction.DoValidSignUp(this.userData.newUser);
        signupAction.enterValidAccountInformation(this.userData.newUser)
        homepageAction.clickOnCartOnHeader()
        checkoutAction.clickOnCheckout()
        checkoutAction.clickOnPlaceOrder(this.userData.newUser)
        paymentAction.CompleteValidPayment(this.userData.newUser)
        loginAction.doLogOut()
        loginAction.doLoginWithStoredEmail()
        homepageAction.clickOnContactUs()
        contactusAction.sendContactUsMessage(this.userData.newUser)
        loginAction.doLogOut()
    })
})