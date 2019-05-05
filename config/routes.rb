Rails.application.routes.draw do
  root 'messages#index'
  resources :groups, only: :new
  resources :users, only: :edit
end

