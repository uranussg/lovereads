class Api::BooksController < ApplicationController
    def index
        # 
        if params[:user]
            @books = User.find_by(id: user_params[:user_id] ).tagged_books.includes(:writer)
        else 
            @books = Book.top_rated(15) 
        #    @top_rated = Book..includes(:writer).top_rated
        end
    end

    def show
        
        @book = Book.includes(:writer, :reviews, :tags).find(params[:id])
        
    end


    def browse
        type = params[:type]
        if type == "new"
            @books = Book.new_books.limit(25)
        elsif type == 'rate'
            @books = Book.top_rated(25) 
        elsif type == 'recommendation' 
            
            @books = current_user.recommendation
        else
            render json: ['Invalid browse'], status: 404
        end
        render :index
    end

    def user_params
        params.require(:user).permit(:user_id)
    end
end
