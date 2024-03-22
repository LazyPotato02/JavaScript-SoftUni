import {userService} from '../service/userService.js'
import { userDataHelper } from '../utility/userHelper.js'

export async function showLogout(ctx) {
    await userService.logout()
    userDataHelper.clearUserData()
    ctx.updateNav()
    ctx.goTo('/dashboard')
}