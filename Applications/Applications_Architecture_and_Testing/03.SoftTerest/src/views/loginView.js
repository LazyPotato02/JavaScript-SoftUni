import { setUser } from "../utils/userUtils.js"
import { login } from '../api/userService.js'
const loginSection = document.querySelector('div[data-view-name="login"]')
const form = loginSection.querySelector('form').addEventListener('submit', onSubmit)



let context = null

export function showLoginView(ctx) {
    context = ctx
    context.render(loginSection)
}

async function onSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const { email, password } = Object.fromEntries(formData)

    if (!email || !password) {
        return alert('Error login')
    }

    const userData = await login({ email, password })
    setUser(userData)
    context.updateNav()
    context.goTo('/')
}