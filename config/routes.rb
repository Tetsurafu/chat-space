Rails.application.routes.draw do
  root 'messages#index'
  get 'groups' => 'groups#new'
  get 'users' => 'users#edit'
end

