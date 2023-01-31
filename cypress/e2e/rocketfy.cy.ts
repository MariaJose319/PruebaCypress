import { LoginPage, ConfigLogo } from "./pageRocketfy/index";

const loginPage = new LoginPage();
const configLogo = new ConfigLogo();

describe ('chage Loge', ()=>{
    it('then logo is changed', () =>{
        loginPage.visitLogin();
        loginPage.login('qa2prulatam@testrocketfy.co','M1234567*');
        configLogo.irTienda();
        configLogo.changeLogo()
    })
})
