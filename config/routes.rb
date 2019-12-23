Rails.application.routes.draw do
  get 'welcome/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # add resource
  # resources :lessons
  resources :lessons do
    resources :comments
  end

  root 'welcome#index'
end
