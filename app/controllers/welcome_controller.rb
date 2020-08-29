class WelcomeController < ApplicationController
  def index
    # by default renders welcome.html.erb
    # but can be overriden here
    # render :file => 'public/blah.html'
  end
end
