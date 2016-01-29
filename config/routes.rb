Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :edibles, only: [:show, :index]
    resources :lists, except: :new
    resources :list_items, except: :new
  end
end
