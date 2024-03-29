import page from '../node_modules/page/page.mjs'
import { render } from '../node_modules/lit-html/lit-html.js'
import { showDashboardView } from "./views/dashboard.js";
import { showRegisterView } from './views/register.js';
import { userDataHelper } from './utility/userHelper.js';
import { showLoginView } from './views/login.js';
import { showLogout } from './views/logout.js';
import { showDetails } from './views/details.js';
import { showCreateView } from './views/create.js';
import { showMyFurnitureView } from './views/myFurniture.js';
import { deleteItem } from './views/delete.js';
import { showEditView } from './views/edit.js';

const root = document.querySelector("div[data-id='root']")
const userNav = document.getElementById('user')
const guestNav = document.getElementById('guest')

page(updateCTX)
page("/", showDashboardView)
page("/dashboard", showDashboardView)
page("/create", showCreateView)
page("/details/:id", showDetails)
page("/edit/:id",showEditView)
page("/delete/:id", deleteItem)
page("/myFurniture", showMyFurnitureView)
page("/login", showLoginView)
page("/register", showRegisterView)
page("/logout", showLogout)


page.start()
updateNav()

function renderer(temp) {
    render(temp, root)
}

function updateCTX(ctx, next) {
    ctx.render = renderer
    ctx.updateNav = updateNav
    ctx.goTo = goTo
    next()
}


function updateNav() {
    const user = userDataHelper.getUserData()
    if (user) {
        userNav.style.display = 'block'
        guestNav.style.display = 'none'
    } else {
        userNav.style.display = 'none'
        guestNav.style.display = 'block'
    }
}

function goTo(path) {
    page.redirect(path)
}