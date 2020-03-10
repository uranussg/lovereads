class Api::BooksController < ApplicationController
    def index
        # 
        if params[:user]
            @books = User.find_by(id: user_params[:user_id] ).tagged_books.includes(:writer)
        else 
            @books = Book.includes(:writer).new_books
        #    @top_rated = Book..includes(:writer).top_rated
        end
    end

    def show
      
        @book = Book.includes(:writer, :reviews, :tags).find(params[:id])

    end

    def user_params
        params.require(:user).permit(:user_id)
    end
end
