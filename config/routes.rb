Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy, :new]
    resources :books, only: [:index, :show] do 
      resources :reviews, only: [:index,:create]
    end
    resources :reviews, only: [:show, :update, :destroy]

    resources :bookshelves, only: [:index, :show, :create, :update, :destroy]
    resources :searches, only: [:show, :index]
    resources :writers, only: [:show]
    resources :tags, only: [:show, :index, :create] do
      resources :taggings, only: [:create]
    end
    resource :taggings, only: :destroy
  end

  root to: 'static_pages#root'
end