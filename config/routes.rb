Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy, :new]
    resources :books, only: [:index, :show] do 
      resources :reviews, only: [:index, :create]
    end

    resources :bookshelves, only: [:index, :show, :create, :update]
  end

  root to: 'static_pages#root'
end