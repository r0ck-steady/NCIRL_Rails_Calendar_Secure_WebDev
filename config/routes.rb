Rails.application.routes.draw do
  devise_for :users
  resources :friends
  #get 'home/index'
  get 'home/about'
  #root 'home#index' this is where you define what controller to go to, this was the original. The below change says: go to the friends controller and then to the index page
  root 'friends#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
