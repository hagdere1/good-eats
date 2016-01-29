Rails.application.routes.draw do
  root to: 'sessions#new'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :static_pages, only: :index

  namespace :api, defaults: {format: :json} do
    resources :edibles, only: [:show, :index]
    resources :lists, except: :new
    resources :list_items, except: :new
  end
end
