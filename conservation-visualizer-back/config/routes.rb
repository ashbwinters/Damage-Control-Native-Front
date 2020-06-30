Rails.application.routes.draw do
  resources :tampers
  resources :flashes, only: [:create, :show, :index]
  resources :bumps, only: [:create, :show, :index]
  resources :breaths, only: [:create, :show, :index]
  resources :touches, only: [:create, :show, :index]
  resources :art_tampers, only: [:create, :show, :index]
  resources :paintings, only: [:create, :show, :index]
  resources :admins
  post 'login', to: 'authentication#login'
end
