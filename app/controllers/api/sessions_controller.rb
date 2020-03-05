class Api::SessionsController < ApplicationController
    
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    
    if @user
      login!(@user)
      
      # render json: @user
      redirect_to api_user_url(@user)
    else
      
      render json: ['Invalid login'], status: 404
    end
  end

  def destroy
    
     if !logged_in?
        render json: ["Not logged_in!!"], status: 404       
     else
      logout
      
      render json: '{}'
     end
  end
end
