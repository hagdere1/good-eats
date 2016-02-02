Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :edibles, only: [:show, :index]
    resources :reviews, except: :new
    resources :lists, except: :new
    resources :list_items, except: :new
    resources :users, only: [:index, :show]
    resource :session, only: [:create, :destroy, :show]
  end
end
