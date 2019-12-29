## New API resource

`bin/rails generate controller Cards`

`bin/rails generate model Cards`

`bin/rails db:migrate`

Fill `seeds.rb` with initial values

`bin/rails db:seed`

curl http://localhost:3000/cards



## How to serve both view .erb templates and json based on request

https://stackoverflow.com/questions/20188047/rails-respond-to-json-and-html


```ruby
respond_to do |format|

  format.html # show.html.erb
  format.json { render json: @user }

 end
```