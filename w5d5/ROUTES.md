# White page syndrome

# Writer's block

Node skeleton

# Phase 1: STATIC LAND

HTML -> EJS

```jsx
app.get("/urls", (req, res) => {
  res.render("urls");
});

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});
app.get("/urls/:url_id/", (req, res) => {
  res.render("urls_show");
});
```

# Phase 2: Dynamic Frontend

```jsx
app.get("/urls", (req, res) => {
  const urls = [{}, {}, {}, {}, {}];
  const templateVars = { urls };
  res.render("urls", template);
});
```

# Phase 3: Replace static data -> db helper

```jsx


app.get("/urls", (req,res) => {

database.getAllUrls()
.then(urls => {
  const templateVars = {urls}
  res.render("urls", template)
})

```

})
