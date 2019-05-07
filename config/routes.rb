Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resources :groups, only: :new
  resources :users, only: [:edit, :update, :new]
  resources :messages
end

