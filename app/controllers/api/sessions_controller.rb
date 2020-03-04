class Api::SessionsController < ApplicationController
    
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    # debugger
    if @user
      login!(@user)
      # debugger
      # render json: @user
      redirect_to api_user_url(@user)
    else
      # debugger
      render json: ['Invalid login'], status: 404
    end
  end

  def destroy
    # debugger
     if !logged_in?
        render json: ["Not logged_in!!"], status: 404       
     else
      logout
      # debugger
      render json: '{}'
     end
  end
end
