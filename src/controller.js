export const home = (req, res) => {
    return res.render("home.pug");
}

export const submit = (req, res) => {
    return res.render("submit.pug");
}

export const postSubmit = (req, res) => {
    return res.redirect("/");
}

export const rank = (req, res) => {
    return res.render("rank.pug");
}