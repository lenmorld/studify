Edit

`edit.html.erb`

```ruby
<%= form_with(model: @lesson, local: true) do |form| %>
```
-> lessons#update


`new.html.erb`

```ruby
<%= form_with scope: :lesson, url: lessons_path, local: true do |form| %>
```

-> lessons#create